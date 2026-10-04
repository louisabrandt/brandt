// Lightweight GoatCounter helpers (cookieless, no personal data).
// The initial page load is counted by the <script> tag in index.html;
// client-side route changes and button clicks are counted here.

declare global {
  interface Window {
    goatcounter?: {
      count?: (opts: { path?: string; title?: string; referrer?: string; event?: boolean }) => void
    }
  }
}

/** Count a client-side page view. */
export function countPageview(path: string) {
  try {
    window.goatcounter?.count?.({ path })
  } catch {
    /* analytics must never break the app */
  }
}

/** Count a custom event (e.g. a booking-button click). */
export function trackEvent(name: string) {
  try {
    window.goatcounter?.count?.({ path: name, title: name, event: true })
  } catch {
    /* no-op */
  }
}
