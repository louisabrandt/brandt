import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BOOK_TO } from '../nav'
import { BOOKING, hasUrl } from '../booking'
import { trackEvent } from '../analytics'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'

interface PrimaryCTAProps {
  label?: string
  /** Route to link to (localized). Ignored when a Cal.com intro URL is set. */
  to?: string
  className?: string
}

/**
 * The primary call-to-action: a warm terracotta pill for booking the free
 * intro. If a Cal.com intro URL is configured it opens that; otherwise it
 * falls back to the contact form.
 */
export default function PrimaryCTA({ label, to = BOOK_TO, className = '' }: PrimaryCTAProps) {
  const { l } = useLang()
  const c = useContent()
  const external = hasUrl(BOOKING.intro)
  const cls = `group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-5 pr-1.5 py-1.5 text-[#F3ECDE] font-medium text-sm sm:text-base ${className}`
  const inner = (
    <>
      <span>{label ?? c.nav.book}</span>
      <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3ECDE]" strokeWidth={1.5} />
      </span>
    </>
  )
  return external ? (
    <a
      href={BOOKING.intro}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      onClick={() => trackEvent('book: intro call')}
    >
      {inner}
    </a>
  ) : (
    <Link to={l(to)} className={cls} onClick={() => trackEvent('cta: contact')}>
      {inner}
    </Link>
  )
}
