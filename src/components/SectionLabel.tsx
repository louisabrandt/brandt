import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  align?: 'center' | 'start'
  /** 'cream' for dark sections (default), 'ink' for warm light sections. */
  tone?: 'cream' | 'ink'
  className?: string
}

/** A small hand-drawn thread mark — the brand's signature, in place of a
 *  generic bullet. Inherits the label's colour via currentColor. */
function ThreadMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 8"
      className={`h-2 w-[30px] ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M1 4 Q 4.5 0.5, 8 4 T 15 4 T 22 4 T 29 4" />
    </svg>
  )
}

/**
 * Eyebrow label: uppercase, wide tracking, flanked by the brand thread mark.
 * Used above every section.
 */
export default function SectionLabel({
  children,
  align = 'center',
  tone = 'cream',
  className = '',
}: SectionLabelProps) {
  const color = tone === 'ink' ? 'text-[#23201a]/55' : 'text-primary/65'
  return (
    <div
      className={`flex items-center gap-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] ${color} ${
        align === 'center' ? 'justify-center' : 'justify-start'
      } ${className}`}
    >
      <ThreadMark className="opacity-80" />
      <span>{children}</span>
      <ThreadMark className="opacity-80 -scale-x-100" />
    </div>
  )
}
