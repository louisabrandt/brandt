import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { BOOKING, hasUrl } from '../booking'
import { useLang } from '../i18n/lang'
import { BOOK_TO } from '../nav'

/** Links to the free-intro booking: the Cal.com event if configured, else the
 *  contact form. Renders an external anchor or an internal Link accordingly. */
export default function BookLink({
  className = '',
  children,
  onClick,
}: {
  className?: string
  children: ReactNode
  onClick?: () => void
}) {
  const { l } = useLang()
  if (hasUrl(BOOKING.intro)) {
    return (
      <a href={BOOKING.intro} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link to={l(BOOK_TO)} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
