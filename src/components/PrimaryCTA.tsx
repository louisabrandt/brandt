import { ArrowRight } from 'lucide-react'
import { TEXT_COLOR } from '../constants'

interface PrimaryCTAProps {
  label?: string
  href?: string
  className?: string
}

/**
 * The locked Primary CTA: cream pill, black text, trailing black circle with a
 * cream ArrowRight. Hover widens the gap and scales the circle.
 */
export default function PrimaryCTA({
  label = 'Book an Initial Consultation',
  href = '#contact',
  className = '',
}: PrimaryCTAProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base ${className}`}
    >
      <span>{label}</span>
      <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
        <ArrowRight
          className="w-4 h-4 sm:w-5 sm:h-5"
          strokeWidth={1.5}
          style={{ color: TEXT_COLOR }}
        />
      </span>
    </a>
  )
}
