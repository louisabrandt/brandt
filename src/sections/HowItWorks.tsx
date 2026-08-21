import { Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Book an initial consultation',
    description:
      'A low-pressure first conversation to understand your situation and see whether this work fits — with no obligation to continue.',
  },
  {
    number: '02',
    title: 'We make the patterns visible',
    description:
      'Together we map how you each respond in closeness, conflict and intimacy — building one honest, shared picture of what is really happening.',
  },
  {
    number: '03',
    title: 'Structured, ongoing work',
    description:
      'Concrete tools and steps, at a pace that works for both of you — turning insight into choice, and repetition into lasting change.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          How it works
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]">
          Getting started is simple.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              index={i}
              className="rounded-2xl bg-[#101010] p-6 md:p-8 flex flex-col min-h-[220px]"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-4xl sm:text-5xl font-light tracking-tight text-primary/25 tabular-nums"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <Asterisk
                  className="h-4 w-4 text-primary/60"
                  strokeWidth={1.5}
                />
              </div>

              <h3
                className="mt-6 text-lg font-medium leading-snug"
                style={{ color: TEXT_COLOR }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-primary/70 text-sm leading-[1.6] flex-1">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
