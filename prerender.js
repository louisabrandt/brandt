// Build-time prerender: render the home page, each top-level page, and each
// course detail route to its own static HTML (with per-page title/meta/
// canonical), so crawlers and AI/LLM agents get every page's full content
// without executing JavaScript. The client then hydrates whichever page was
// served.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'

const BASE = 'https://louisabrandt.com'

const serverEntry = new URL('./dist-server/entry-server.js', import.meta.url)
const { render, COURSES } = await import(serverEntry.href)

const indexPath = new URL('./dist/index.html', import.meta.url)
const template = readFileSync(indexPath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find empty #root in dist/index.html')
}

const inject = (html, app) =>
  html.replace('<div id="root"></div>', () => `<div id="root">${app}</div>`)

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Replace a whole tag (whitespace/format tolerant, no `>` inside the tag).
const swap = (html, regex, replacement) => html.replace(regex, () => replacement)

// Apply per-page <head> metadata (title, description, canonical, og, twitter).
const withHead = (html, { title, desc, canonical }) => {
  let h = html
  h = swap(h, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  h = swap(h, /<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`)
  h = swap(h, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
  h = swap(h, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
  h = swap(h, /<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
  h = swap(h, /<meta\s+property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`)
  h = swap(h, /<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  h = swap(h, /<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(desc)}" />`)
  return h
}

const writePage = (path, html) => {
  if (path === '/') {
    writeFileSync(indexPath, html)
  } else {
    const dir = new URL(`./dist${path}/`, import.meta.url)
    mkdirSync(dir, { recursive: true })
    writeFileSync(new URL('index.html', dir), html)
  }
  console.log(`Prerendered ${path}`)
}

// 1) Home — keep the template's rich head; just inject the rendered app.
writePage('/', inject(template, render('/')))

// 2) Top-level pages.
const PAGES = [
  {
    path: '/about',
    title: 'About Louisa Brandt — M.Sc. Psychology, relationship coach',
    desc: 'How I work with couples and individuals: attachment, emotional regulation, the Gottman Method and sex therapy, without the jargon. Online worldwide, and in person in Paphos and Vienna.',
  },
  {
    path: '/coaching',
    title: 'Coaching with Louisa Brandt — couples & individuals',
    desc: 'One-to-one relationship coaching: sessions, packages, and what to expect. The Gottman Method integrated with sex therapy. Online worldwide, or in person in Paphos and Vienna.',
  },
  {
    path: '/courses',
    title: 'Courses — relationship psychoeducation | Brandt',
    desc: 'Focused, evidence-based courses on the patterns that shape relationships. Take the short quiz to find your fit. For individuals or couples, online.',
  },
  {
    path: '/contact',
    title: 'Contact & booking — Brandt',
    desc: 'Book a first conversation with Louisa Brandt. No obligation, confidential from the first message. Online worldwide, or in person in Paphos and Vienna.',
  },
]

for (const p of PAGES) {
  const canonical = `${BASE}${p.path}/`
  const html = inject(withHead(template, { title: p.title, desc: p.desc, canonical }), render(p.path))
  writePage(p.path, html)
}

// 3) Course detail pages.
for (const c of COURSES) {
  const url = `/courses/${c.slug}`
  const canonical = `${BASE}${url}/`
  const title = `${c.title} — a Brandt course`

  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.title,
    description: c.description,
    about: c.tag,
    url: canonical,
    inLanguage: ['en', 'de'],
    provider: { '@type': 'Person', name: 'Louisa Brandt', url: `${BASE}/` },
    offers: {
      '@type': 'Offer',
      category: 'Online course',
      availability: 'https://schema.org/PreOrder',
    },
  })

  let html = withHead(template, { title, desc: c.description, canonical })
  html = swap(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${jsonld}</script>`)
  html = inject(html, render(url))
  writePage(url, html)
}

// 4) Generate sitemap.xml from every prerendered route.
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: `${BASE}/`, priority: '1.0' },
  ...PAGES.map((p) => ({ loc: `${BASE}${p.path}/`, priority: '0.9' })),
  ...COURSES.map((c) => ({ loc: `${BASE}/courses/${c.slug}/`, priority: '0.7' })),
]
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n') +
  '\n</urlset>\n'
writeFileSync(new URL('./dist/sitemap.xml', import.meta.url), sitemap)
console.log(`Wrote sitemap.xml with ${urls.length} URLs`)

rmSync(new URL('./dist-server', import.meta.url), { recursive: true, force: true })
console.log('Prerender complete.')
