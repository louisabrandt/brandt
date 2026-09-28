import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { TEXT_COLOR } from '../constants'
import { COURSES, courseByKey, type CourseKey } from '../courses'

interface Question {
  q: string
  options: { label: string; key: CourseKey }[]
}

const QUESTIONS: Question[] = [
  {
    q: "What's weighing on you most right now?",
    options: [
      { label: 'Trust has been broken — or slowly worn away.', key: 'trust' },
      { label: "I don't feel enough — in myself or the relationship.", key: 'selfworth' },
      { label: "I give too much, and can't say no.", key: 'boundaries' },
      { label: 'We keep having the same argument.', key: 'conflict' },
      { label: "We've grown distant and I don't know why.", key: 'attachment' },
      { label: 'Closeness and desire have gone quiet.', key: 'desire' },
    ],
  },
  {
    q: 'When it gets hard, you most often…',
    options: [
      { label: 'struggle to feel safe or trust again', key: 'trust' },
      { label: 'turn on yourself and feel small', key: 'selfworth' },
      { label: 'over-function, then resent it', key: 'boundaries' },
      { label: 'escalate — or shut down', key: 'conflict' },
      { label: 'pull away, or hold on too tight', key: 'attachment' },
      { label: 'lose the physical connection', key: 'desire' },
    ],
  },
  {
    q: 'What would change the most for you?',
    options: [
      { label: 'Being able to rely on someone again', key: 'trust' },
      { label: 'Feeling steady and worthy, whatever happens', key: 'selfworth' },
      { label: 'Protecting your energy without guilt', key: 'boundaries' },
      { label: 'Feeling truly heard in a disagreement', key: 'conflict' },
      { label: 'Understanding why you connect the way you do', key: 'attachment' },
      { label: 'Wanting — and being wanted — again', key: 'desire' },
    ],
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

function emptyScores(): Record<CourseKey, number> {
  return { trust: 0, selfworth: 0, boundaries: 0, conflict: 0, attachment: 0, desire: 0 }
}

export default function FitFinder() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<CourseKey, number>>(emptyScores)

  const isDone = step >= QUESTIONS.length

  // Highest-scoring course; ties broken by the canonical course order.
  const topKey: CourseKey = COURSES.reduce(
    (best, c) => (scores[c.key] > scores[best] ? c.key : best),
    COURSES[0].key,
  )
  const course = courseByKey(topKey)

  function choose(key: CourseKey) {
    setScores((s) => ({ ...s, [key]: s[key] + 1 }))
    setStep((v) => v + 1)
  }

  function restart() {
    setScores(emptyScores())
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
          Which course fits you right now?
        </h2>

        <div className="rounded-2xl bg-[#101010] p-6 md:p-10 min-h-[300px] flex flex-col">
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
                      onClick={() => choose(opt.key)}
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
                  Based on your answers, here&apos;s where I&apos;d start — though
                  every course and a 1:1 remain open to you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Recommended course */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#212121] ring-1 ring-primary/30 p-6 md:p-7 flex flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-primary/85 bg-primary/10 rounded-full px-2.5 py-1">
                        Recommended course
                      </span>
                      <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <p className="mt-5 text-primary/45 text-[10px] uppercase tracking-[0.16em]">
                      {course.tag}
                    </p>
                    <h3 className="mt-1 text-lg sm:text-xl font-medium" style={{ color: TEXT_COLOR }}>
                      {course.title}
                    </h3>
                    <p className="mt-2 text-primary/75 text-sm leading-[1.6] flex-1">
                      {course.description}
                    </p>
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group mt-5 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm self-start"
                    >
                      <span>Explore the course</span>
                      <span className="flex items-center justify-center bg-black rounded-full w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} style={{ color: TEXT_COLOR }} />
                      </span>
                    </Link>
                  </div>

                  {/* Optional 1:1 */}
                  <div className="relative overflow-hidden rounded-2xl bg-black border border-primary/10 p-6 md:p-7 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-primary/50 border border-primary/15 rounded-full px-2.5 py-1 self-start">
                      Optional
                    </span>
                    <h3 className="mt-5 text-lg sm:text-xl font-medium text-primary/70">
                      One-on-one sessions
                    </h3>
                    <p className="mt-2 text-primary/55 text-sm leading-[1.6] flex-1">
                      Prefer to work through this personally, and at your own
                      depth? Begin with a low-pressure initial consultation.
                    </p>
                    <a
                      href="#contact"
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors self-start"
                    >
                      <span>Book an Initial Consultation</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </a>
                  </div>
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
