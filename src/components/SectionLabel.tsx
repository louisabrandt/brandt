import type { ReactNode } from 'react'
import { Asterisk } from 'lucide-react'

interface SectionLabelProps {
  children: ReactNode
  align?: 'center' | 'start'
  /** 'cream' for dark sections (default), 'ink' for warm light sections. */
  tone?: 'cream' | 'ink'
  className?: string
}

/**
 * Eyebrow label, per the locked design system: uppercase, wide tracking,
 * flanked by the brand Asterisk motif. Used above every section.
 */
export default function SectionLabel({
  children,
  align = 'center',
  tone = 'cream',
  className = '',
}: SectionLabelProps) {
  const color = tone === 'ink' ? 'text-[#23201a]/60' : 'text-primary/70'
  return (
    <div
      className={`flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] ${color} ${
        align === 'center' ? 'justify-center' : 'justify-start'
      } ${className}`}
    >
      <Asterisk className="h-3 w-3" strokeWidth={1.5} />
      <span>{children}</span>
      <Asterisk className="h-3 w-3" strokeWidth={1.5} />
    </div>
  )
}
