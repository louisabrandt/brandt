// Build-time prerender: render the app to static HTML and inject it into
// dist/index.html, so crawlers and AI/LLM agents get the full content without
// executing JavaScript. The client then hydrates this markup.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'

const serverEntry = new URL('./dist-server/entry-server.js', import.meta.url)
const { render } = await import(serverEntry.href)

const appHtml = render()

const indexPath = new URL('./dist/index.html', import.meta.url)
const template = readFileSync(indexPath, 'utf8')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find empty #root in dist/index.html')
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
)
writeFileSync(indexPath, html)

// Clean up the intermediate SSR bundle.
rmSync(new URL('./dist-server', import.meta.url), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${appHtml.length} chars of static markup).`)
