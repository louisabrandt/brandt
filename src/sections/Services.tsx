import { Asterisk } from 'lucide-react'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import PrimaryCTA from '../components/PrimaryCTA'
import { TEXT_COLOR } from '../constants'

const HEADER: Segment[] = [
  { text: 'The work, structured.', className: 'text-primary' },
  {
    text: 'Online worldwide, or in person on Cyprus.',
    className: 'text-primary/50',
  },
]

interface Offering {
  number: string
  title: string
  tagline: string
  description: string
  meta: string
}

const FEATURED: Offering = {
  number: '—',
  title: 'Initial Consultation',
  tagline: 'A first conversation for clarity',
  description:
    'A structured, low-pressure first meeting to understand your situation, the patterns you notice, and your goals — and to see whether this work fits. No obligation to continue.',
  meta: '60 min · online or in person',
}

const OFFERINGS: Offering[] = [
  {
    number: '01',
    title: 'Couples Sessions',
    tagline: 'The core work, together',
    description:
      'Evidence-based sessions for couples, grounded in attachment dynamics and emotional regulation — turning insight into concrete, shared next steps.',
    meta: '60–120 min · online or in person',
  },
  {
    number: '02',
    title: 'Individual Sessions',
    tagline: 'One-to-one relational work',
    description:
      "For individuals working on their own patterns — whether single, between relationships, or while a partner isn't ready to join.",
    meta: '60–120 min · online or in person',
  },
  {
    number: '03',
    title: 'Session Packages',
    tagline: 'For sustainable change',
    description:
      'Lasting change isn’t reached through insight alone. Packages provide structure, integration, and the time real development needs.',
    meta: 'biweekly · online or in person',
  },
  {
    number: '04',
    title: 'Groups & Workshops',
    tagline: 'Guided group formats',
    description:
      'Facilitated work in small, curated groups around a specific relational theme. Available for groups and organizations.',
    meta: 'on request',
  },
]

const PRICING = ['60 min · €170', '90 min · €240', '120 min · €320']

function CardHead({ number }: { number: string }) {
  return (
    <div className="flex items-start justify-between">
      <Asterisk className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
      <span className="text-primary/50 text-xs sm:text-sm tabular-nums">
        {number}
      </span>
    </div>
  )
}

function OfferingBody({ offering }: { offering: Offering }) {
  return (
    <>
      <h3 className="mt-4 text-lg font-medium" style={{ color: TEXT_COLOR }}>
        {offering.title}
      </h3>
      <p className="mt-1 text-primary/60 text-xs sm:text-sm font-serif italic">
        {offering.tagline}
      </p>
      <p className="mt-3 text-primary/70 text-[13px] sm:text-sm leading-[1.55] flex-1">
        {offering.description}
      </p>
      <p className="mt-4 text-primary/50 text-xs tracking-wide">{offering.meta}</p>
    </>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Services
        </SectionLabel>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mb-12">
          <WordsPullUpMultiStyle
            segments={HEADER}
            className="!justify-start text-left"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Initial Consultation — featured, wider */}
          <Reveal
            index={0}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] ring-1 ring-primary/25 p-6 md:p-8 flex flex-col md:col-span-2 min-h-[260px]"
          >
            <CardHead number={FEATURED.number} />
            <OfferingBody offering={FEATURED} />
            <div className="mt-6">
              <PrimaryCTA />
            </div>
          </Reveal>

          {/* Other offerings */}
          {OFFERINGS.map((o, i) => (
            <Reveal
              key={o.number}
              index={i + 1}
              className="relative overflow-hidden rounded-2xl bg-black border border-primary/10 p-6 flex flex-col min-h-[240px]"
            >
              <CardHead number={o.number} />
              <OfferingBody offering={o} />
            </Reveal>
          ))}
        </div>

        {/* Pricing strip */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex flex-wrap gap-3">
            {PRICING.map((p) => (
              <span
                key={p}
                className="liquid-glass rounded-full px-4 py-2 text-[13px] text-primary/85"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-primary/50 text-xs">Example pricing · adjustable</p>
        </div>
      </div>
    </section>
  )
}
