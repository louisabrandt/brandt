import { motion } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { FEATURE_VIDEO_URL, TEXT_COLOR } from '../constants'

const EASE = [0.16, 1, 0.3, 1] as const

const PRACTICAL = [
  'Break the “devil’s cycle” of blame and withdrawal',
  'Turn conflict into connecting conversation',
  'Rebuild respect, affection, and emotional availability',
]

const SEX_THERAPY = [
  'Bridge differences in desire — without pressure or blame',
  'Sensate Focus: rebuilding presence, easing performance anxiety',
  'Open, shame-free communication about needs and boundaries',
  'Reconnect emotional closeness with physical intimacy',
]

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <Asterisk className="h-4 w-4 mt-1 shrink-0 text-primary/70" strokeWidth={1.5} />
      <h3 className="text-lg sm:text-xl font-medium" style={{ color: TEXT_COLOR }}>
        {children}
      </h3>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Asterisk
            className="h-3 w-3 mt-1.5 shrink-0 text-primary/55"
            strokeWidth={1.5}
          />
          <span className="text-primary/75 text-[13px] sm:text-sm leading-[1.5]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function WhatToExpect() {
  return (
    <section
      id="what-to-expect"
      className="relative bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          What you can expect
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          Emotional and physical connection, held together.
        </motion.h2>

        <p className="mt-6 max-w-3xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          We integrate the evidence-based Gottman Method with key insights and
          practical tools from sex therapy — a holistic approach that addresses
          both the emotional foundation of your relationship and the physical,
          intimate connection between you.
        </p>

        {/* Themed bento */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <Reveal
            index={0}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8"
          >
            <CardTitle>Clarity about your relationship</CardTitle>
            <p className="mt-4 text-primary/75 text-sm sm:text-[15px] leading-[1.6]">
              An honest, compassionate and non-judgmental look at what is really
              happening between you — your strengths, recurring patterns, and the
              hidden dynamics beneath them, including how emotional safety and
              attachment shape your connection. You leave with a clear, shared
              understanding to build on.
            </p>
          </Reveal>

          <Reveal
            index={1}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8"
          >
            <CardTitle>Support during difficult times</CardTitle>
            <p className="mt-4 text-primary/75 text-sm sm:text-[15px] leading-[1.6]">
              A safe space for painful challenges — infidelity, broken trust, old
              wounds, trauma, or major life stress. We address them respectfully
              and constructively, including how they affect closeness and
              intimacy, and begin healing both the emotional and physical bond
              gently, step by step.
            </p>
          </Reveal>

          <Reveal
            index={2}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8"
          >
            <CardTitle>Practical tools for everyday life</CardTitle>
            <Bullets items={PRACTICAL} />
          </Reveal>

          <Reveal
            index={3}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8"
          >
            <CardTitle>Insights from sex therapy</CardTitle>
            <p className="mt-4 text-primary/70 text-[13px] sm:text-sm leading-[1.55]">
              Sexual intimacy is deeply tied to emotional safety. Gently, and at a
              pace that works for both of you:
            </p>
            <Bullets items={SEX_THERAPY} />
          </Reveal>
        </div>

        {/* Cinematic summary banner */}
        <Reveal
          index={4}
          className="noise-overlay relative overflow-hidden rounded-2xl mt-4 md:mt-5 min-h-[260px] flex items-end"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={FEATURE_VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <p
            className="relative p-6 md:p-10 text-xl sm:text-2xl md:text-3xl font-normal leading-[1.3] max-w-3xl"
            style={{ color: TEXT_COLOR }}
          >
            A relationship that feels more stable, alive, and{' '}
            <span className="font-serif italic">deeply chosen</span> — even during
            challenging periods.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
