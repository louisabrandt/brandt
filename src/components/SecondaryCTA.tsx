import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface SecondaryCTAProps {
  label: string
  to?: string
  /** 'dark' for the black sections, 'paper' for the warm light ones. */
  tone?: 'dark' | 'paper'
  className?: string
}

/**
 * Secondary, lower-emphasis action: a quiet outline button that adapts to the
 * section it sits in. Pairs with the terracotta PrimaryCTA.
 */
export default function SecondaryCTA({
  label,
  to = '/contact',
  tone = 'dark',
  className = '',
}: SecondaryCTAProps) {
  const styles =
    tone === 'paper'
      ? 'border-[#23201a]/25 text-[#23201a] hover:bg-[#23201a]/[0.06]'
      : 'border-primary/25 text-primary hover:bg-primary/[0.08]'
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 rounded-full border px-5 py-[0.65rem] font-medium text-sm sm:text-base ${styles} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
        strokeWidth={1.5}
      />
    </Link>
  )
}
