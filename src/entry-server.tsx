import { renderToString } from 'react-dom/server'
import App from './App'

/** Render the full app to a static HTML string for build-time prerendering. */
export function render(): string {
  return renderToString(<App />)
}
