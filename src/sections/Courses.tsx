import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Waitlist from '../components/Waitlist'
import { TEXT_COLOR } from '../constants'
import { COURSES, courseIllustration, courseText } from '../courses'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Courses() {
  const { lang, l } = useLang()
  const c = useContent()

  return (
    <section
      id="courses"
      className="relative bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          {c.coursesSection.eyebrow}
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          {c.coursesSection.heading}{' '}
          <span className="font-serif italic">{c.coursesSection.headingItalic}</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          {c.coursesSection.intro}
        </p>
        <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/60">
          {c.coursesSection.topicIntro}
          <Link
            to={l('/contact')}
            className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition"
          >
            {c.coursesSection.topicLink}
          </Link>
          {c.coursesSection.topicOutro}
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {COURSES.map((course, i) => {
            const t = courseText(course, lang)
            return (
              <Reveal key={course.slug} index={i}>
                <Link
                  to={l(`/courses/${course.slug}`)}
                  className="group h-full rounded-2xl bg-[#101010] flex flex-col overflow-hidden hover:bg-[#141414] transition-colors"
                >
                  <div
                    className="relative aspect-[5/4] overflow-hidden"
                    style={{ backgroundColor: course.accent }}
                  >
                    <img
                      src={courseIllustration(course.slug)}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-primary/45 text-[10px] uppercase tracking-[0.16em]">{t.tag}</span>
                    <h3 className="mt-3 text-lg font-medium" style={{ color: TEXT_COLOR }}>
                      {t.title}
                    </h3>
                    <p className="mt-2 text-primary/70 text-[13px] sm:text-sm leading-[1.55] flex-1">
                      {t.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary/60 group-hover:text-primary transition-colors">
                      {c.coursesSection.explore}
                      <ArrowUpRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        {/* Waitlist */}
        <Reveal
          index={0}
          className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8 mt-4 md:mt-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
                {c.coursesSection.waitlistHeading}
              </h3>
              <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] max-w-md">
                {c.coursesSection.waitlistText}
              </p>
            </div>
            <Waitlist />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
