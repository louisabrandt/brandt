import { Asterisk } from 'lucide-react'

function Pill({ label }: { label: string }) {
  return (
    <div className="liquid-glass flex h-12 md:h-14 shrink-0 items-center gap-2 rounded-full px-4 text-[13px] text-primary/85 whitespace-nowrap">
      <Asterisk className="h-3 w-3 shrink-0 text-primary/60" strokeWidth={1.5} />
      <span>{label}</span>
    </div>
  )
}

interface MarqueeProps {
  items: string[]
  direction?: 'left' | 'right'
}

/** Seamless scrolling row of liquid-glass concept pills (edge-faded). */
export default function Marquee({ items, direction = 'left' }: MarqueeProps) {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-3 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {loop.map((label, i) => (
          <Pill key={`${label}-${i}`} label={label} />
        ))}
      </div>
    </div>
  )
}
