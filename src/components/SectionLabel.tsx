import type { ReactNode } from 'react'
import { Asterisk } from 'lucide-react'

interface SectionLabelProps {
  children: ReactNode
  align?: 'center' | 'start'
  className?: string
}

/**
 * Eyebrow label, per the locked design system: uppercase, wide tracking,
 * cream/70, flanked by the brand Asterisk motif. Used above every section.
 */
export default function SectionLabel({
  children,
  align = 'center',
  className = '',
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-primary/70 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      } ${className}`}
    >
      <Asterisk className="h-3 w-3" strokeWidth={1.5} />
      <span>{children}</span>
      <Asterisk className="h-3 w-3" strokeWidth={1.5} />
    </div>
  )
}
