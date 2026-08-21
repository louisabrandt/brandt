import { motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

const THIS_IS = [
  'Attachment dynamics & patterns',
  'Emotional regulation',
  'Responsibility & boundaries',
  'Relational maturity',
  'Conflict without withdrawal or dominance',
]

const THIS_IS_NOT = [
  'Quick fixes',
  'Blame-based therapy',
  'Self-optimization rhetoric',
  'Performative vulnerability',
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function WhyRelationalWork() {
  return (
    <section
      id="why"
      className="relative bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Part 1 — centered rationale */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="mb-6">Why relational work?</SectionLabel>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.05]"
          >
            Patterns repeat before they are understood.
          </motion.h2>

          <div className="mt-8 space-y-5 text-sm md:text-[15px] leading-[1.6] text-primary/70">
            <p>
              Modern relationships are shaped by conflicting demands: closeness
              and autonomy, security and desire, strength and vulnerability. Most
              of us were never taught how to hold these tensions consciously — so
              we withdraw, take control, or shut down without intending to.
            </p>
            <p>
              The work starts by making these patterns visible — and building the
              inner capacity to stay present in closeness, conflict and
              responsibility at the same time.
            </p>
            <p className="text-primary/85">
              This isn&apos;t a luxury. Stable, emotionally mature relationships
              are one of the strongest protective factors for mental and physical
              health — reducing chronic stress and isolation, strengthening
              resilience and long-term wellbeing.
            </p>
          </div>
        </div>

        {/* Part 2 — contrast pair */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal
            index={0}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8"
          >
            <h3 className="text-primary text-lg sm:text-xl font-medium">
              This is the <span className="font-serif italic">work.</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {THIS_IS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Asterisk
                    className="h-3.5 w-3.5 mt-1 shrink-0 text-primary/80"
                    strokeWidth={1.5}
                  />
                  <span className="text-primary/80 text-sm sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            index={1}
            className="relative overflow-hidden rounded-2xl bg-black border border-primary/10 p-6 md:p-8"
          >
            <h3 className="text-primary/60 text-lg sm:text-xl font-medium">
              This is not.
            </h3>
            <ul className="mt-5 space-y-3">
              {THIS_IS_NOT.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-primary/30 text-sm leading-none">
                    ×
                  </span>
                  <span className="text-primary/45 text-sm sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
