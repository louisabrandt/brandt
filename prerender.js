// Build-time prerender: render the homepage and each course detail route to its
// own static HTML (with per-page title/meta/canonical/JSON-LD), so crawlers and
// AI/LLM agents get every page's full content without executing JavaScript.
// The client then hydrates whichever page was served.
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

// 1) Homepage — keep its rich head as built; just inject the rendered app.
writeFileSync(indexPath, inject(template, render('/')))
console.log('Prerendered /')

// 2) Course detail pages.
for (const c of COURSES) {
  const url = `/courses/${c.slug}`
  const canonical = `${BASE}${url}/`
  const title = `${c.title} — a Brandt course`
  const desc = c.description

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

  let html = template
  html = swap(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  html = swap(html, /<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`)
  html = swap(html, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
  html = swap(html, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
  html = swap(html, /<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
  html = swap(html, /<meta\s+property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`)
  html = swap(html, /<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  html = swap(html, /<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(desc)}" />`)
  html = swap(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${jsonld}</script>`)

  html = inject(html, render(url))

  const dir = new URL(`./dist/courses/${c.slug}/`, import.meta.url)
  mkdirSync(dir, { recursive: true })
  writeFileSync(new URL('index.html', dir), html)
  console.log(`Prerendered ${url}`)
}

// 3) Generate sitemap.xml from the prerendered routes (homepage + all courses).
const today = new Date().toISOString().slice(0, 10)
const urls = [
  { loc: `${BASE}/`, priority: '1.0' },
  ...COURSES.map((c) => ({ loc: `${BASE}/courses/${c.slug}/`, priority: '0.8' })),
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
