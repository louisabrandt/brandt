import { Asterisk, Check } from 'lucide-react'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import PrimaryCTA from '../components/PrimaryCTA'
import { TEXT_COLOR } from '../constants'

const HEADER: Segment[] = [
  { text: 'Ways to work together.', className: 'text-[#23201a]' },
  {
    text: 'Online worldwide, or in person in Paphos and Vienna.',
    className: 'text-[#23201a]/45',
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
  number: '',
  title: 'A first conversation',
  tagline: 'The place to start',
  description:
    "A calm, low-pressure first meeting to understand your situation, the patterns you're noticing, and what you're hoping for. Together we see whether this work is a good fit. No obligation to continue.",
  meta: '60 min · online or in person',
}

const INCLUDED = ['60 minutes', 'Online or in person', 'No obligation to continue']

const OFFERINGS: Offering[] = [
  {
    number: '01',
    title: 'Couples Sessions',
    tagline: 'The core work, together',
    description:
      'Evidence-based sessions for couples, grounded in attachment and emotional regulation, that turn insight into concrete steps you take together.',
    meta: '60–120 min · online or in person',
  },
  {
    number: '02',
    title: 'Individual Sessions',
    tagline: 'One-to-one relational work',
    description:
      "For anyone working on their own patterns, whether single, between relationships, or while a partner isn't ready to join.",
    meta: '60–120 min · online or in person',
  },
  {
    number: '03',
    title: 'Session Packages',
    tagline: 'For change that lasts',
    description:
      'Insight alone rarely holds. A package gives the work structure, room to integrate, and the time real change actually takes.',
    meta: 'biweekly · online or in person',
  },
  {
    number: '04',
    title: 'Groups & Workshops',
    tagline: 'Guided group formats',
    description:
      'Facilitated work in small, curated groups around one relational theme. Available for groups and organizations on request.',
    meta: 'on request',
  },
]

const PRICING = ['60 min · €170', '90 min · €240', '120 min · €320']

function CardHead({ number, tone }: { number: string; tone: 'dark' | 'paper' }) {
  const aster = tone === 'paper' ? 'text-[#5e6b4a]' : 'text-primary/70'
  const num = tone === 'paper' ? 'text-[#23201a]/50' : 'text-primary/50'
  return (
    <div className="flex items-start justify-between">
      <Asterisk className={`h-4 w-4 ${aster}`} strokeWidth={1.5} />
      <span className={`text-xs sm:text-sm tabular-nums ${num}`}>{number}</span>
    </div>
  )
}

function OfferingBody({
  offering,
  tone,
}: {
  offering: Offering
  tone: 'dark' | 'paper'
}) {
  const title = tone === 'paper' ? 'text-[#23201a]' : ''
  const tagline = tone === 'paper' ? 'text-[#23201a]/60' : 'text-primary/60'
  const desc = tone === 'paper' ? 'text-[#23201a]/75' : 'text-primary/70'
  const meta = tone === 'paper' ? 'text-[#23201a]/50' : 'text-primary/50'
  return (
    <>
      <h3
        className={`mt-4 text-lg font-medium ${title}`}
        style={tone === 'dark' ? { color: TEXT_COLOR } : undefined}
      >
        {offering.title}
      </h3>
      <p className={`mt-1 text-xs sm:text-sm font-serif italic ${tagline}`}>
        {offering.tagline}
      </p>
      <p className={`mt-3 text-[13px] sm:text-sm leading-[1.6] flex-1 ${desc}`}>
        {offering.description}
      </p>
      <p className={`mt-4 text-xs tracking-wide ${meta}`}>{offering.meta}</p>
    </>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          Working with me, one to one
        </SectionLabel>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl mb-12">
          <WordsPullUpMultiStyle
            segments={HEADER}
            className="!justify-start text-left"
          />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* First conversation — featured dark accent card */}
          <Reveal
            index={0}
            className="noise-overlay relative overflow-hidden rounded-2xl bg-[#1b1b1b] ring-1 ring-[#B4552E]/40 p-6 md:p-8 flex flex-col md:col-span-2 min-h-[260px]"
          >
            <CardHead number={FEATURED.number} tone="dark" />
            <OfferingBody offering={FEATURED} tone="dark" />

            {/* What's included */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-primary/75 text-xs sm:text-[13px]"
                >
                  <Check className="h-3.5 w-3.5 text-[#5e6b4a]" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <PrimaryCTA label="Book a first conversation" />
              <span className="text-primary/45 text-[11px]">
                Confidential from the very first message.
              </span>
            </div>
          </Reveal>

          {/* Other offerings — light surface cards */}
          {OFFERINGS.map((o, i) => (
            <Reveal
              key={o.number}
              index={i + 1}
              className="rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 p-6 flex flex-col min-h-[240px]"
            >
              <CardHead number={o.number} tone="paper" />
              <OfferingBody offering={o} tone="paper" />
            </Reveal>
          ))}
        </div>

        {/* Pricing strip */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <div className="flex flex-wrap gap-3">
            {PRICING.map((p) => (
              <span
                key={p}
                className="rounded-full border border-[#23201a]/15 bg-[#f5f0e6] px-4 py-2 text-[13px] text-[#23201a]/85"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="text-[#23201a]/50 text-xs">Example pricing, adjustable.</p>
        </div>
      </div>
    </section>
  )
}
