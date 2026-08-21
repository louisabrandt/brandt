import { motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

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
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel className="mb-6">My approach</SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.05]"
        >
          Structured and calm. We make the patterns visible.
        </motion.h2>

        <div className="mt-8 space-y-5 text-sm md:text-[15px] leading-[1.6] text-primary/70">
          <p>
            My approach is evidence-based and integrative. I work with attachment
            dynamics, emotional regulation, and relational systems thinking,
            informed by the Gottman Method and current relationship research.
          </p>
          <p>
            We make the patterns visible — how each of you responds under
            pressure, in closeness, in conflict — and translate that insight into
            concrete, workable steps. The goal is not to{' '}
            <span className="font-serif italic">fix</span> anyone or optimize
            behavior, but to create choice where repetition once was — so the
            relationship is driven by awareness and agency rather than unconscious
            scripts.
          </p>
        </div>

        {/* Concept pills */}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {CONCEPTS.map((concept) => (
            <span
              key={concept}
              className="liquid-glass flex items-center gap-2 rounded-full px-4 py-2 text-[13px] text-primary/85"
            >
              <Asterisk
                className="h-3 w-3 shrink-0 text-primary/60"
                strokeWidth={1.5}
              />
              {concept}
            </span>
          ))}
        </div>

        <p className="mt-9 text-primary/50 text-xs">
          Everything is held with discretion. Confidentiality applies from the
          first contact.
        </p>
      </div>
    </section>
  )
}
