import { motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'

interface Capacity {
  title: string
  description: string
}

const CAPACITIES: Capacity[] = [
  {
    title: 'Self-awareness',
    description:
      'Recognising the patterns you learned long before this relationship — and how they surface under pressure.',
  },
  {
    title: 'Emotional regulation',
    description:
      'Staying steady in charged moments, instead of flooding, escalating, or shutting down.',
  },
  {
    title: 'Honest conversation',
    description:
      'Speaking so you can be heard — and listening for what lives beneath the words.',
  },
  {
    title: 'Roles & power',
    description:
      'Seeing the dynamics you fall into together: who pursues, who withdraws, who holds control.',
  },
  {
    title: 'Boundaries & repair',
    description:
      'Knowing where you end and the other begins — and how to find your way back after rupture.',
  },
  {
    title: 'Intimacy & desire',
    description:
      'Reconnecting emotional safety with physical closeness, at a pace that works for both of you.',
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function RelationalCapacity() {
  return (
    <section
      id="relational-capacity"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Relational capacity
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          The inner structure, <span className="font-serif italic">in practice.</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          Becoming relationship-capable isn&apos;t one skill but a set of
          capacities — the inner structure that lets you stay present in
          closeness, conflict and desire at the same time. This is what we
          develop, together.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CAPACITIES.map((cap, i) => (
            <Reveal
              key={cap.title}
              index={i}
              className="rounded-2xl bg-[#101010] p-6 flex flex-col min-h-[180px]"
            >
              <Asterisk className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
              <h3
                className="mt-5 text-base sm:text-lg font-medium"
                style={{ color: TEXT_COLOR }}
              >
                {cap.title}
              </h3>
              <p className="mt-2 text-primary/70 text-[13px] sm:text-sm leading-[1.55]">
                {cap.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
