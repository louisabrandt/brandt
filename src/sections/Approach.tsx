import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

const THIS_IS = [
  'Attachment patterns, and what first set them in motion',
  'Staying steady when feelings run high',
  'Repairing after a fight, not just avoiding the next one',
  'Turning toward each other instead of away',
  'Boundaries and responsibility that actually hold',
]

const THIS_IS_NOT = [
  'Quick fixes',
  'Blame, or hunting for a culprit',
  'Self-optimization',
  'Performing vulnerability',
]

const CONCEPTS = [
  'Attachment',
  'Emotional regulation',
  'Systems thinking',
  'Gottman-informed',
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Rationale */}
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel tone="ink" className="mb-6">
            How I work
          </SectionLabel>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#23201a] leading-[1.05]"
          >
            First we see the pattern clearly. Then we work with it.
          </motion.h2>

          <div className="mt-8 space-y-5 text-sm md:text-[15px] leading-[1.7] text-[#23201a]/75">
            <p>
              I don&apos;t treat a relationship as a problem to be fixed. I treat
              it as something alive, full of tensions worth understanding: closeness
              and freedom, safety and desire, strength and softness.
            </p>
            <p>
              Most of us were never shown how to hold those tensions, so under
              stress we fall back on what we learned early. We push harder, we go
              quiet, or we reach for control, usually without meaning to.
            </p>
            <p className="text-[#23201a]/90">
              The work begins by making that visible. Together we look at how each
              of you responds when it matters most, and we build the capacity to
              stay present in closeness, in conflict, and in the responsibility
              that comes with both. Steady, honest relationships turn out to be one
              of the strongest things we have for our wellbeing. They lower daily
              stress, ease isolation, and help us recover when life gets hard.
            </p>
          </div>
        </div>

        {/* This is / this is not */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal
            index={0}
            className="rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 p-6 md:p-8"
          >
            <h3 className="text-[#23201a] text-lg sm:text-xl font-medium">
              This is the <span className="font-serif italic">work.</span>
            </h3>
            <ul className="mt-5 space-y-3">
              {THIS_IS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    className="h-4 w-4 mt-0.5 shrink-0 text-[#5e6b4a]"
                    strokeWidth={1.75}
                  />
                  <span className="text-[#23201a]/80 text-sm sm:text-[15px] leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            index={1}
            className="rounded-2xl bg-[#efe4d6] border border-[#23201a]/8 p-6 md:p-8"
          >
            <h3 className="text-[#23201a]/60 text-lg sm:text-xl font-medium">
              This is not.
            </h3>
            <ul className="mt-5 space-y-3">
              {THIS_IS_NOT.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 text-[#23201a]/30 text-sm leading-none">
                    ×
                  </span>
                  <span className="text-[#23201a]/50 text-sm sm:text-[15px] leading-[1.5]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Concept pills + confidentiality */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CONCEPTS.map((concept) => (
            <span
              key={concept}
              className="rounded-full border border-[#23201a]/15 bg-[#f5f0e6] px-4 py-2 text-[13px] text-[#23201a]/85"
            >
              {concept}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-[#23201a]/55 text-xs">
          Everything stays between us. Confidentiality holds from the very first
          message.
        </p>
      </div>
    </section>
  )
}
