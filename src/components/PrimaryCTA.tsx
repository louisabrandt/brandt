import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BOOK_TO } from '../nav'

interface PrimaryCTAProps {
  label?: string
  /** Route to link to. Defaults to the booking page. */
  to?: string
  className?: string
}

/**
 * The primary call-to-action: a warm terracotta pill with cream text and a
 * trailing circle. One accent, legible on both the dark base and the warm
 * paper sections. Hover widens the gap and scales the circle.
 */
export default function PrimaryCTA({
  label = 'Book a first conversation',
  to = BOOK_TO,
  className = '',
}: PrimaryCTAProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-5 pr-1.5 py-1.5 text-[#F3ECDE] font-medium text-sm sm:text-base ${className}`}
    >
      <span>{label}</span>
      <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3ECDE]" strokeWidth={1.5} />
      </span>
    </Link>
  )
}
