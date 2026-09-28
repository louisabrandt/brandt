/** Site-wide primary navigation — the multi-page map. Labels come from the
 *  content dictionary via `key`; paths are language-neutral (localized at use). */
export const NAV = [
  { key: 'about', to: '/about' },
  { key: 'coaching', to: '/coaching' },
  { key: 'courses', to: '/courses' },
  { key: 'contact', to: '/contact' },
] as const

/** Where every primary "book" call-to-action leads. */
export const BOOK_TO = '/contact'
