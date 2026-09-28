// Build-time prerender: render every page in both languages (German at the
// root, English under /en) to its own static HTML, with per-page and
// per-language title/description/canonical/hreflang and the right <html lang>.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'

const BASE = 'https://louisabrandt.com'
const LANGS = ['de', 'en']

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

const swap = (html, regex, replacement) => html.replace(regex, () => replacement)

/** Localize a language-neutral base path: DE at root, EN under /en. */
const localize = (base, lang) =>
  lang === 'de' ? base : base === '/' ? '/en' : `/en${base}`

/** Canonical URL (with trailing slash, except the root). */
const canonicalFor = (base, lang) => {
  const p = localize(base, lang)
  return p === '/' ? `${BASE}/` : `${BASE}${p}/`
}

// Per-language, per-page <head> text.
const META = {
  de: {
    '/': {
      title: 'Brandt — Paar- & Beziehungscoaching | online & vor Ort',
      desc: 'Beziehungscoaching für Paare und Einzelpersonen mit Louisa Brandt, M.Sc. Die Gottman-Methode verbunden mit Sexualtherapie. Weltweit online, persönlich in Paphos und Wien. Auf Deutsch und Englisch.',
    },
    '/about': {
      title: 'Über Louisa Brandt — M.Sc. Psychologie, Beziehungscoach',
      desc: 'Wie ich mit Paaren und Einzelnen arbeite: Bindung, Emotionsregulation, Gottman-Methode und Sexualtherapie, ohne Fachjargon. Weltweit online, persönlich in Paphos und Wien.',
    },
    '/coaching': {
      title: 'Coaching mit Louisa Brandt — Paare & Einzelne',
      desc: '1:1-Beziehungscoaching: Sitzungen, Pakete und was dich erwartet. Die Gottman-Methode verbunden mit Sexualtherapie. Weltweit online oder persönlich in Paphos und Wien.',
    },
    '/courses': {
      title: 'Kurse — Beziehungs-Psychoedukation | Brandt',
      desc: 'Fokussierte, evidenzbasierte Kurse zu den Mustern, die Beziehungen prägen. Mach das kurze Quiz und finde deinen Kurs. Für Einzelne oder Paare, online.',
    },
    '/contact': {
      title: 'Kontakt & Buchung — Brandt',
      desc: 'Buche ein Erstgespräch mit Louisa Brandt. Unverbindlich, vertraulich ab der ersten Nachricht. Weltweit online oder persönlich in Paphos und Wien.',
    },
    courseSuffix: (title) => `${title} — ein Brandt-Kurs`,
  },
  en: {
    '/': {
      title: 'Brandt — Couples & Relationship Coaching | Online & In-Person',
      desc: 'Relationship coaching for couples and individuals with Louisa Brandt, M.Sc. The Gottman Method integrated with sex therapy. Online worldwide, in person in Paphos and Vienna. In English and German.',
    },
    '/about': {
      title: 'About Louisa Brandt — M.Sc. Psychology, relationship coach',
      desc: 'How I work with couples and individuals: attachment, emotional regulation, the Gottman Method and sex therapy, without the jargon. Online worldwide, and in person in Paphos and Vienna.',
    },
    '/coaching': {
      title: 'Coaching with Louisa Brandt — couples & individuals',
      desc: 'One-to-one relationship coaching: sessions, packages, and what to expect. The Gottman Method integrated with sex therapy. Online worldwide, or in person in Paphos and Vienna.',
    },
    '/courses': {
      title: 'Courses — relationship psychoeducation | Brandt',
      desc: 'Focused, evidence-based courses on the patterns that shape relationships. Take the short quiz to find your fit. For individuals or couples, online.',
    },
    '/contact': {
      title: 'Contact & booking — Brandt',
      desc: 'Book a first conversation with Louisa Brandt. No obligation, confidential from the first message. Online worldwide, or in person in Paphos and Vienna.',
    },
    courseSuffix: (title) => `${title} — a Brandt course`,
  },
}

/** Apply per-page head: lang, title, description, canonical, hreflang, og/twitter. */
const withHead = (html, { base, lang, title, desc }) => {
  const canonical = canonicalFor(base, lang)
  let h = html
  h = swap(h, /<html lang="[^"]*">/, `<html lang="${lang}">`)
  h = swap(h, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  h = swap(h, /<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(desc)}" />`)
  h = swap(h, /<link\s+rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
  h = swap(h, /<meta\s+property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
  h = swap(h, /<meta\s+property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`)
  h = swap(h, /<meta\s+property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(desc)}" />`)
  h = swap(h, /<meta\s+property="og:locale"[^>]*>/, `<meta property="og:locale" content="${lang === 'de' ? 'de_DE' : 'en_US'}" />`)
  h = swap(h, /<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`)
  h = swap(h, /<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(desc)}" />`)
  // hreflang alternates (both languages + x-default = German).
  const alts =
    `<link rel="alternate" hreflang="de" href="${canonicalFor(base, 'de')}" />` +
    `<link rel="alternate" hreflang="en" href="${canonicalFor(base, 'en')}" />` +
    `<link rel="alternate" hreflang="x-default" href="${canonicalFor(base, 'de')}" />`
  h = h.replace('</head>', `${alts}</head>`)
  return h
}

const writePage = (routePath, html) => {
  if (routePath === '/') {
    writeFileSync(indexPath, html)
  } else {
    const dir = new URL(`./dist${routePath}/`, import.meta.url)
    mkdirSync(dir, { recursive: true })
    writeFileSync(new URL('index.html', dir), html)
  }
  console.log(`Prerendered ${routePath}`)
}

const PAGE_BASES = ['/', '/about', '/coaching', '/courses', '/contact']
const urls = []

for (const lang of LANGS) {
  // Top-level pages.
  for (const base of PAGE_BASES) {
    const routePath = localize(base, lang)
    const meta = META[lang][base]
    const html = inject(withHead(template, { base, lang, title: meta.title, desc: meta.desc }), render(routePath))
    writePage(routePath, html)
    urls.push({ loc: canonicalFor(base, lang), priority: base === '/' ? '1.0' : '0.9' })
  }

  // Course detail pages.
  for (const course of COURSES) {
    const base = `/courses/${course.slug}`
    const routePath = localize(base, lang)
    const t = course[lang]
    const canonical = canonicalFor(base, lang)
    const title = META[lang].courseSuffix(t.title)
    const jsonld = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: t.title,
      description: t.description,
      about: t.tag,
      url: canonical,
      inLanguage: lang,
      provider: { '@type': 'Person', name: 'Louisa Brandt', url: `${BASE}/` },
      offers: { '@type': 'Offer', category: 'Online course', availability: 'https://schema.org/PreOrder' },
    })
    let html = withHead(template, { base, lang, title, desc: t.description })
    html = swap(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${jsonld}</script>`)
    html = inject(html, render(routePath))
    writePage(routePath, html)
    urls.push({ loc: canonical, priority: '0.7' })
  }
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10)
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
