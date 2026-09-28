import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Asterisk } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import Waitlist from '../components/Waitlist'
import { TEXT_COLOR } from '../constants'
import { COURSES, courseIllustration } from '../courses'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          Courses &amp; psychoeducation
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          Learn the inner structure, <span className="font-serif italic">together.</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          Focused, evidence-based courses on the dynamics that shape
          relationships — so you can understand your patterns and practise
          responding differently. Every course is bookable for individuals or
          couples, online.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {COURSES.map((course, i) => (
            <Reveal key={course.key} index={i}>
              <Link
                to={`/courses/${course.slug}`}
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
                  <div className="flex items-center justify-between gap-2">
                    <Asterisk className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
                    <span className="text-primary/45 text-[10px] uppercase tracking-[0.16em] text-right">
                      {course.tag}
                    </span>
                  </div>
                  <h3
                    className="mt-4 text-lg font-medium"
                    style={{ color: TEXT_COLOR }}
                  >
                    {course.title}
                  </h3>
                  <p className="mt-2 text-primary/70 text-[13px] sm:text-sm leading-[1.55] flex-1">
                    {course.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary/60 group-hover:text-primary transition-colors">
                    Explore the course
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Waitlist */}
        <Reveal
          index={0}
          className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8 mt-4 md:mt-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
                Join the waitlist
              </h3>
              <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] max-w-md">
                Add your email to hear when the next course opens — no spam,
                just the date and how to start, for individuals or couples.
              </p>
            </div>
            <Waitlist />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
