import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

const OUTCOMES = [
  'Less chronic stress and emotional overload',
  'More stability in both conflict and closeness',
  'Greater emotional availability',
  'Stronger resilience and long-term wellbeing',
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function WhatChanges() {
  return (
    <section
      id="what-changes"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          What changes
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          What changes when relational capacity develops.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {OUTCOMES.map((outcome, i) => (
            <Reveal
              key={outcome}
              index={i}
              className="rounded-2xl bg-[#101010] p-6 flex flex-col gap-4 min-h-[160px]"
            >
              <Check className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <p className="text-primary/80 text-sm sm:text-[15px] leading-[1.5]">
                {outcome}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl font-normal text-primary/85 leading-[1.4]">
            Relationships stop running on old, automatic scripts — and start being
            shaped by{' '}
            <span className="font-serif italic">
              awareness, choice, and shared responsibility.
            </span>
          </p>
          <div
            className="relative overflow-hidden rounded-2xl aspect-[16/9] ring-1 ring-primary/10"
            style={{ backgroundColor: '#f2b79e' }}
          >
            <img
              src="/illustrations/whatchanges-resolve.webp"
              alt="A tangled thread resolving into a smooth, ordered line"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
