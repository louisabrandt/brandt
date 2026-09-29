import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import BookLink from '../components/BookLink'
import { TEXT_COLOR } from '../constants'
import { COURSES, courseBySlug, courseText } from '../courses'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'

/** How much each option points toward each course (by slug). Language-neutral;
 *  indices line up with content.fit.questions[q].options[o]. */
type Weights = Record<string, number>

const WEIGHTS: Weights[][] = [
  [
    { 'rebuilding-trust': 3 },
    { 'beneath-the-argument': 3 },
    { 'your-patterns-decoded': 2, 'desire-reconnected': 2 },
    { 'desire-reconnected': 3, 'lets-talk-about-sex': 2 },
    { 'boundaries-without-walls': 3, 'the-ground-you-stand-on': 2 },
    { 'say-what-you-need': 3, 'into-their-world': 2 },
  ],
  [
    { 'beneath-the-argument': 2, 'power-and-powerlessness': 1 },
    { 'your-patterns-decoded': 3 },
    { 'boundaries-without-walls': 2, 'power-and-powerlessness': 2 },
    { 'the-ground-you-stand-on': 3 },
    { 'say-what-you-need': 2, 'lets-talk-about-sex': 1, 'into-their-world': 1 },
    { 'power-and-powerlessness': 3 },
  ],
  [
    { 'rebuilding-trust': 2 },
    { 'your-patterns-decoded': 2, 'where-it-began': 3 },
    { 'the-ground-you-stand-on': 2, 'finding-your-purpose': 2 },
    { 'say-what-you-need': 2, 'boundaries-without-walls': 1 },
    { 'finding-your-purpose': 3, 'desire-reconnected': 1 },
    { 'into-their-world': 3 },
  ],
  [
    { 'rebuilding-trust': 3 },
    { 'the-ground-you-stand-on': 2, 'finding-your-purpose': 1 },
    { 'say-what-you-need': 3, 'beneath-the-argument': 1 },
    { 'your-patterns-decoded': 2, 'where-it-began': 2, 'into-their-world': 1 },
    { 'desire-reconnected': 3, 'lets-talk-about-sex': 2 },
    { 'power-and-powerlessness': 2, 'boundaries-without-walls': 1, 'finding-your-purpose': 1 },
  ],
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function FitFinder() {
  const { lang, l } = useLang()
  const c = useContent()
  const questions = c.fit.questions

  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Weights[]>([])

  const isDone = step >= questions.length

  const scores: Weights = {}
  for (const pick of picks) {
    for (const [slug, w] of Object.entries(pick)) scores[slug] = (scores[slug] ?? 0) + w
  }

  const ranked = COURSES.map((c2) => c2.slug).sort(
    (a, b) =>
      (scores[b] ?? 0) - (scores[a] ?? 0) ||
      COURSES.findIndex((c2) => c2.slug === a) - COURSES.findIndex((c2) => c2.slug === b),
  )
  const course = courseBySlug(ranked[0])!
  const alternates = ranked
    .slice(1)
    .filter((s) => (scores[s] ?? 0) > 0)
    .slice(0, 2)
    .map((s) => courseBySlug(s)!)

  function choose(qIndex: number, oIndex: number) {
    setPicks((prev) => [...prev.slice(0, qIndex), WEIGHTS[qIndex][oIndex]])
    setStep((v) => v + 1)
  }

  const t = courseText(course, lang)

  return (
    <section id="fit" className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28">
      <div className="max-w-3xl mx-auto">
        <SectionLabel className="mb-6">{c.fit.eyebrow}</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary text-center leading-[1.1] mb-3">
          {c.fit.heading}
        </h2>
        <p className="text-primary/55 text-sm text-center max-w-md mx-auto mb-10">{c.fit.subtext}</p>

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
                    {String(step + 1).padStart(2, '0')} {c.fit.progressOf} {String(questions.length).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-white/10 relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-primary/50 transition-all duration-500"
                      style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                  {step > 0 && (
                    <button
                      onClick={() => setStep((v) => Math.max(0, v - 1))}
                      className="text-primary/40 hover:text-primary/70 text-xs transition-colors"
                    >
                      {c.fit.back}
                    </button>
                  )}
                </div>

                <h3 className="text-primary text-lg sm:text-xl font-normal">{questions[step].q}</h3>
                <p className="text-primary/45 text-[13px] mt-1.5 mb-5">{questions[step].hint}</p>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((label, oIndex) => (
                    <button
                      key={label}
                      onClick={() => choose(step, oIndex)}
                      className="text-left rounded-xl border border-primary/15 px-5 py-4 text-sm text-primary/85 hover:border-primary/40 hover:bg-white/[0.02] transition-colors"
                    >
                      {label}
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
                <p className="text-primary/60 text-sm mb-5">{c.fit.resultIntro}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Recommended course */}
                  <div className="relative overflow-hidden rounded-2xl bg-[#212121] ring-1 ring-[#B4552E]/40 p-6 md:p-7 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-primary/85 bg-[#B4552E]/25 rounded-full px-2.5 py-1 self-start">
                      {c.fit.bestFit}
                    </span>
                    <p className="mt-5 text-primary/45 text-[10px] uppercase tracking-[0.16em]">{t.tag}</p>
                    <h3 className="mt-1 text-lg sm:text-xl font-medium" style={{ color: TEXT_COLOR }}>
                      {t.title}
                    </h3>
                    <p className="mt-2 text-primary/75 text-sm leading-[1.6] flex-1">{t.description}</p>
                    <Link
                      to={l(`/courses/${course.slug}`)}
                      className="group mt-5 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-5 pr-1.5 py-1.5 text-[#F3ECDE] font-medium text-sm self-start"
                    >
                      <span>{c.fit.courseCta}</span>
                      <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-9 h-9 transition-transform duration-300 group-hover:scale-110">
                        <ArrowRight className="w-4 h-4 text-[#F3ECDE]" strokeWidth={1.5} />
                      </span>
                    </Link>
                  </div>

                  {/* Optional 1:1 */}
                  <div className="relative overflow-hidden rounded-2xl bg-black border border-primary/10 p-6 md:p-7 flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-primary/50 border border-primary/15 rounded-full px-2.5 py-1 self-start">
                      {c.fit.orOneToOne}
                    </span>
                    <h3 className="mt-5 text-lg sm:text-xl font-medium text-primary/70">{c.fit.oneToOneTitle}</h3>
                    <p className="mt-2 text-primary/55 text-sm leading-[1.6] flex-1">{c.fit.oneToOneText}</p>
                    <BookLink className="group mt-5 inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors self-start">
                      <span>{c.fit.oneToOneCta}</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                      />
                    </BookLink>
                  </div>
                </div>

                {alternates.length > 0 && (
                  <div className="mt-5">
                    <p className="text-primary/45 text-[11px] uppercase tracking-[0.18em] mb-3">{c.fit.alsoWorth}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {alternates.map((alt) => {
                        const at = courseText(alt, lang)
                        return (
                          <Link
                            key={alt.slug}
                            to={l(`/courses/${alt.slug}`)}
                            className="group flex items-center justify-between gap-3 rounded-xl border border-primary/12 px-4 py-3 hover:border-primary/30 transition-colors"
                          >
                            <span className="min-w-0">
                              <span className="block text-primary/45 text-[10px] uppercase tracking-[0.16em]">{at.tag}</span>
                              <span className="block text-primary/85 text-sm truncate">{at.title}</span>
                            </span>
                            <ArrowUpRight
                              className="w-4 h-4 shrink-0 text-primary/40 group-hover:text-primary/80 transition-colors"
                              strokeWidth={1.5}
                            />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setPicks([])
                    setStep(0)
                  }}
                  className="mt-6 self-center text-primary/50 text-xs hover:text-primary/80 transition-colors"
                >
                  {c.fit.startOver}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
