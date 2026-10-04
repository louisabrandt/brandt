import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { countPageview } from '../analytics'

/**
 * Counts client-side route changes in GoatCounter. The very first load is
 * already counted by the script tag in index.html, so we skip it here.
 */
export default function Analytics() {
  const { pathname, search } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    countPageview(pathname + search)
  }, [pathname, search])

  return null
}
