import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  align?: 'center' | 'start'
  /** 'cream' for dark sections (default), 'ink' for warm light sections. */
  tone?: 'cream' | 'ink'
  className?: string
}

/**
 * Eyebrow label: uppercase, wide tracking, quiet. No decorative marks.
 */
export default function SectionLabel({
  children,
  align = 'center',
  tone = 'cream',
  className = '',
}: SectionLabelProps) {
  const color = tone === 'ink' ? 'text-[#23201a]/65' : 'text-primary/65'
  return (
    <div
      className={`text-[10px] sm:text-[11px] uppercase tracking-[0.24em] ${color} ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {children}
    </div>
  )
}
