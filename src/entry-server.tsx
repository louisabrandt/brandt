import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { COURSES } from './courses'

/** Render the app at a given route to a static HTML string. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

// Re-exported so the prerender script can enumerate routes and build per-page
// <head> metadata from the same source of truth.
export { COURSES }
