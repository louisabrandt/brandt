import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import { TEXT_COLOR } from '../constants'
import { COURSES, courseBySlug } from '../courses'

/** How much an answer points toward each course (by slug). */
type Weights = Record<string, number>

interface Option {
  label: string
  weights: Weights
}

interface Question {
  q: string
  hint: string
  options: Option[]
}

/**
 * A four-step recommender. Each question probes a different facet — the
 * presenting theme, the dynamic under stress, where it traces back to, and the
 * shift you most want — and every option nudges one to three specific courses.
 * The highest total wins, so all twelve courses are reachable, not just six.
 */
const QUESTIONS: Question[] = [
  {
    q: "What's pulling at you most right now?",
    hint: 'The thing that brought you here.',
    options: [
      { label: 'Trust has been shaken, by betrayal or slow erosion', weights: { 'rebuilding-trust': 3 } },
      { label: 'The same argument, on repeat', weights: { 'beneath-the-argument': 3 } },
      { label: 'A quiet distance has crept in between us', weights: { 'your-patterns-decoded': 2, 'desire-reconnected': 2 } },
      { label: 'Desire or intimacy has gone quiet', weights: { 'desire-reconnected': 3, 'lets-talk-about-sex': 2 } },
      { label: 'I lose myself, or give too much', weights: { 'boundaries-without-walls': 3, 'the-ground-you-stand-on': 2 } },
      { label: 'I feel unseen, or misunderstood', weights: { 'say-what-you-need': 3, 'into-their-world': 2 } },
    ],
  },
  {
    q: 'When it gets hard between you, what tends to happen?',
    hint: 'Your usual move under stress.',
    options: [
      { label: 'It flares up into a fight', weights: { 'beneath-the-argument': 2, 'power-and-powerlessness': 1 } },
      { label: 'One of us pushes closer, the other pulls away', weights: { 'your-patterns-decoded': 3 } },
      { label: 'I give in, and resentment quietly builds', weights: { 'boundaries-without-walls': 2, 'power-and-powerlessness': 2 } },
      { label: 'I try to be enough, and feel small', weights: { 'the-ground-you-stand-on': 3 } },
      { label: 'We go silent and avoid the subject', weights: { 'say-what-you-need': 2, 'lets-talk-about-sex': 1, 'into-their-world': 1 } },
      { label: 'One of us ends up calling the shots', weights: { 'power-and-powerlessness': 3 } },
    ],
  },
  {
    q: 'Being honest, a lot of it traces back to…',
    hint: 'The deeper root, underneath the surface.',
    options: [
      { label: 'Something that happened between us', weights: { 'rebuilding-trust': 2 } },
      { label: "Patterns I've carried since long before this", weights: { 'your-patterns-decoded': 2, 'where-it-began': 3 } },
      { label: 'How I feel about myself', weights: { 'the-ground-you-stand-on': 2, 'finding-your-purpose': 2 } },
      { label: 'Never really learning to name what I need', weights: { 'say-what-you-need': 2, 'boundaries-without-walls': 1 } },
      { label: 'Us wanting different things now', weights: { 'finding-your-purpose': 3, 'desire-reconnected': 1 } },
      { label: 'How hard it is to truly understand each other', weights: { 'into-their-world': 3 } },
    ],
  },
  {
    q: 'What would be the biggest shift for you?',
    hint: 'Where you most want to get to.',
    options: [
      { label: 'Trusting, and feeling safe, again', weights: { 'rebuilding-trust': 3 } },
      { label: 'Feeling steady and worthy on my own', weights: { 'the-ground-you-stand-on': 2, 'finding-your-purpose': 1 } },
      { label: 'Saying what I need, and being heard', weights: { 'say-what-you-need': 3, 'beneath-the-argument': 1 } },
      { label: 'Understanding our pattern, and changing it', weights: { 'your-patterns-decoded': 2, 'where-it-began': 2, 'into-their-world': 1 } },
      { label: 'Desire and closeness, back again', weights: { 'desire-reconnected': 3, 'lets-talk-about-sex': 2 } },
      { label: 'A fairer, more balanced partnership', weights: { 'power-and-powerlessness': 2, 'boundaries-without-walls': 1, 'finding-your-purpose': 1 } },
    ],
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function FitFinder() {
  const [step, setStep] = useState(0)
  // One picked option (its weights) per answered question. Scores derive from
  // this, so going Back and re-answering never double-counts.
  const [picks, setPicks] = useState<Weights[]>([])

  const isDone = step >= QUESTIONS.length

  const scores: Weights = {}
  for (const pick of picks) {
    for (const [slug, w] of Object.entries(pick)) scores[slug] = (scores[slug] ?? 0) + w
  }

  // Rank all courses by score; ties fall back to the canonical course order.
  const ranked = COURSES.map((c) => c.slug).sort(
    (a, b) =>
      (scores[b] ?? 0) - (scores[a] ?? 0) ||
      COURSES.findIndex((c) => c.slug === a) - COURSES.findIndex((c) => c.slug === b),
  )
  const course = courseBySlug(ranked[0])!
  const alternates = ranked
    .slice(1)
    .filter((s) => (scores[s] ?? 0) > 0)
    .slice(0, 2)
    .map((s) => courseBySlug(s)!)

  function choose(weights: Weights) {
    setPicks((prev) => [...prev.slice(0, step), weights])
    setStep((v) => v + 1)
  }

  function back() {
    setStep((v) => Math.max(0, v - 1))
  }

  function restart() {
    setPicks([])
    setStep(0)
  }

  return (
    <section
      id="fit"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel className="mb-6">Find your fit</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary text-center leading-[1.1] mb-3">
          Which course fits you right now?
        </h2>
        <p className="text-primary/55 text-sm text-center max-w-md mx-auto mb-10">
          Four quick questions. No right answers, just a starting point that fits
          where you are.
        </p>

        <div className="rounded-2xl bg-[#101010] p-6 md:p-10 min-h-[320px] flex flex-col">
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
                    {String(step + 1).padStart(2, '0')} / {String(QUESTIONS.length).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-white/10 relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary/50 transition-all duration-500"
                      style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                  {step > 0 && (
                    <button
                      onClick={back}
                      className="text-primary/40 hover:text-primary/70 text-xs transition-colors"
                    >
                      Back
                    </button>
                  )}
                </div>

                <h3 className="text-primary text-lg sm:text-xl font-normal">
                  {QUESTIONS[step].q}
                </h3>
                <p className="text-primary/45 text-[13px] mt-1.5 mb-5">
                  {QUESTIONS[step].hint}
                </p>

                <div className="flex flex-col gap-3">
                  {QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => choose(opt.weights)}
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
                  From your answers, this is where I&apos;d start. Every course, and
                  working one to one, stays open to you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Recommended course */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#212121] ring-1 ring-[#B4552E]/40 p-6 md:p-7 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-primary/85 bg-[#B4552E]/25 rounded-full px-2.5 py-1 self-start">
                      Your best fit
                    </span>
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
                      className="group mt-5 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-5 pr-1.5 py-1.5 text-[#F3ECDE] font-medium text-sm self-start"
                    >
                      <span>Explore the course</span>
                      <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 text-[#F3ECDE]" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </div>

                  {/* Optional 1:1 */}
                  <div className="relative overflow-hidden rounded-2xl bg-black border border-primary/10 p-6 md:p-7 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-primary/50 border border-primary/15 rounded-full px-2.5 py-1 self-start">
                      Or, one to one
                    </span>
                    <h3 className="mt-5 text-lg sm:text-xl font-medium text-primary/70">
                      Work on it together
                    </h3>
                    <p className="mt-2 text-primary/55 text-sm leading-[1.6] flex-1">
                      Prefer to work through this personally, at your own depth?
                      Start with a calm, low-pressure first conversation.
                    </p>
                    <Link
                      to="/contact"
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors self-start"
                    >
                      <span>Book a first conversation</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </div>
                </div>

                {/* Also a good fit */}
                {alternates.length > 0 && (
                  <div className="mt-5">
                    <p className="text-primary/45 text-[11px] uppercase tracking-[0.18em] mb-3">
                      Also worth a look
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {alternates.map((alt) => (
                        <Link
                          key={alt.slug}
                          to={`/courses/${alt.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-primary/12 px-4 py-3 hover:border-primary/30 transition-colors"
                        >
                          <span className="min-w-0">
                            <span className="block text-primary/45 text-[10px] uppercase tracking-[0.16em]">
                              {alt.tag}
                            </span>
                            <span className="block text-primary/85 text-sm truncate">
                              {alt.title}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 shrink-0 text-primary/40 group-hover:text-primary/80 transition-colors"
                            strokeWidth={1.5}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

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
