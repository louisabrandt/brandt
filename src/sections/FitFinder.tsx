import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { TEXT_COLOR } from '../constants'

type Weight = 'session' | 'course' | 'neutral'

interface Question {
  q: string
  options: { label: string; weight: Weight }[]
}

const QUESTIONS: Question[] = [
  {
    q: "What's bringing you here?",
    options: [
      { label: "We're navigating something painful or stuck right now.", weight: 'session' },
      { label: 'I want to understand the patterns beneath our dynamic.', weight: 'course' },
      { label: 'I want to work on how I show up in relationships.', weight: 'course' },
    ],
  },
  {
    q: 'Who is this for?',
    options: [
      { label: 'The two of us, together.', weight: 'session' },
      { label: 'Just me, for now.', weight: 'neutral' },
      { label: "I'm not sure yet.", weight: 'neutral' },
    ],
  },
  {
    q: 'How would you like to work?',
    options: [
      { label: 'Personal guidance, tailored to our situation.', weight: 'session' },
      { label: 'Structured learning, at my own pace.', weight: 'course' },
      { label: 'In a small group, alongside others.', weight: 'course' },
    ],
  },
  {
    q: 'What matters most right now?',
    options: [
      { label: 'Talking something through — soon.', weight: 'session' },
      { label: 'Building understanding and tools over time.', weight: 'course' },
    ],
  },
]

interface Outcome {
  key: 'session' | 'course'
  title: string
  why: string
  cta: string
  href: string
}

const OUTCOMES: Record<'session' | 'course', Outcome> = {
  session: {
    key: 'session',
    title: 'One-on-one sessions',
    why: 'Personal, tailored work will help most here — we begin with a low-pressure initial consultation to see what fits.',
    cta: 'Book an Initial Consultation',
    href: '#contact',
  },
  course: {
    key: 'course',
    title: 'An online course',
    why: "You'll get the most from structured learning you can absorb at your own pace, in a small cohort.",
    cta: 'Join the waitlist',
    href: '#courses',
  },
}

const EASE = [0.16, 1, 0.3, 1] as const

function OutcomeCard({
  outcome,
  recommended,
}: {
  outcome: Outcome
  recommended: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 md:p-7 flex flex-col ${
        recommended
          ? 'bg-[#212121] ring-1 ring-primary/30'
          : 'bg-black border border-primary/10'
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[10px] uppercase tracking-[0.18em] rounded-full px-2.5 py-1 ${
            recommended
              ? 'text-primary/85 bg-primary/10'
              : 'text-primary/50 border border-primary/15'
          }`}
        >
          {recommended ? 'Recommended' : 'Optional'}
        </span>
        {recommended && (
          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
        )}
      </div>

      <h3
        className="mt-5 text-lg sm:text-xl font-medium"
        style={{ color: recommended ? TEXT_COLOR : undefined }}
      >
        <span className={recommended ? '' : 'text-primary/70'}>
          {outcome.title}
        </span>
      </h3>
      <p
        className={`mt-2 text-sm leading-[1.6] flex-1 ${
          recommended ? 'text-primary/75' : 'text-primary/55'
        }`}
      >
        {outcome.why}
      </p>

      <a
        href={outcome.href}
        className={
          recommended
            ? 'group mt-5 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm self-start'
            : 'group mt-5 inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors self-start'
        }
      >
        <span>{outcome.cta}</span>
        {recommended ? (
          <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 transition-transform duration-300 group-hover:scale-110">
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} style={{ color: TEXT_COLOR }} />
          </span>
        ) : (
          <ArrowRight
            className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        )}
      </a>
    </div>
  )
}

export default function FitFinder() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({ session: 0, course: 0 })

  const isDone = step >= QUESTIONS.length
  const recommended: 'session' | 'course' =
    scores.session >= scores.course ? 'session' : 'course'
  const other: 'session' | 'course' =
    recommended === 'session' ? 'course' : 'session'

  function choose(weight: Weight) {
    setScores((s) =>
      weight === 'neutral' ? s : { ...s, [weight]: s[weight] + 1 },
    )
    setStep((v) => v + 1)
  }

  function restart() {
    setScores({ session: 0, course: 0 })
    setStep(0)
  }

  return (
    <section
      id="fit"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel className="mb-6">Find your fit</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary text-center leading-[1.1] mb-10">
          Not sure where to start?
        </h2>

        <div className="rounded-2xl bg-[#101010] p-6 md:p-10 min-h-[280px] flex flex-col">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="flex flex-col flex-1"
              >
                {/* Progress */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary/50 text-xs tabular-nums">
                    {String(step + 1).padStart(2, '0')} — {String(QUESTIONS.length).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-white/10 relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary/50 transition-all duration-500"
                      style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-primary text-lg sm:text-xl font-normal mb-5">
                  {QUESTIONS[step].q}
                </h3>

                <div className="flex flex-col gap-3">
                  {QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => choose(opt.weight)}
                      className="text-left rounded-xl border border-primary/15 px-5 py-4 text-sm text-primary/85 hover:border-primary/40 hover:bg-white/[0.02] transition-colors"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex flex-col flex-1"
              >
                <p className="text-primary/60 text-sm mb-5">
                  Based on your answers, here&apos;s where I&apos;d start —
                  though both are open to you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <OutcomeCard outcome={OUTCOMES[recommended]} recommended />
                  <OutcomeCard outcome={OUTCOMES[other]} recommended={false} />
                </div>
                <button
                  onClick={restart}
                  className="mt-6 self-center text-primary/50 text-xs hover:text-primary/80 transition-colors"
                >
                  Start over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
