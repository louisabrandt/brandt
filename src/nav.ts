/** Site-wide primary navigation — the multi-page map. */
export const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Coaching', to: '/coaching' },
  { label: 'Courses', to: '/courses' },
  { label: 'Contact', to: '/contact' },
] as const

/** Where every primary "book" call-to-action leads. */
export const BOOK_TO = '/contact'
