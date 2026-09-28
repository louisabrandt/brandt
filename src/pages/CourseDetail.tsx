import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Asterisk, Check } from 'lucide-react'
import Footer from '../sections/Footer'
import Waitlist from '../components/Waitlist'
import { COURSES, courseBySlug } from '../courses'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = slug ? courseBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!course) {
    return (
      <div className="min-h-screen bg-[#efe9de] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[#23201a] text-2xl font-normal">Course not found</h1>
        <Link to="/#courses" className="mt-4 text-[#23201a]/60 hover:text-[#23201a] text-sm">
          ← Back to all courses
        </Link>
      </div>
    )
  }

  const others = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3)

  return (
    <div className="bg-[#efe9de] min-h-screen">
      {/* Top bar */}
      <header className="border-b border-[#23201a]/12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-0.5 text-[#23201a] text-lg font-medium tracking-[-0.04em]"
          >
            Brandt
            <Asterisk className="h-2.5 w-2.5 text-[#23201a]/60" strokeWidth={1.5} />
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <a
              href="/#courses"
              className="hidden sm:inline text-[#23201a]/65 hover:text-[#23201a] transition-colors"
            >
              All courses
            </a>
            <a
              href="/#contact"
              className="text-[#23201a]/65 hover:text-[#23201a] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
        <a
          href="/#courses"
          className="inline-flex items-center gap-1.5 text-[#23201a]/50 hover:text-[#23201a]/80 transition-colors text-sm"
        >
          <ArrowUpRight className="h-3.5 w-3.5 -rotate-[135deg]" strokeWidth={1.5} />
          Courses
        </a>

        <p className="mt-8 text-[#23201a]/50 text-[11px] uppercase tracking-[0.22em]">
          {course.tag}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-normal text-[#23201a] leading-[1.05] tracking-tight">
          {course.title}
        </h1>
        <p className="mt-6 text-[#23201a]/80 text-base md:text-lg leading-[1.65]">
          {course.intro}
        </p>

        {/* Meta */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-sm border-y border-[#23201a]/12 py-6">
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">
              Format
            </p>
            <p className="text-[#23201a]/80">{course.format}</p>
          </div>
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">
              Bookable
            </p>
            <p className="text-[#23201a]/80">{course.audience}</p>
          </div>
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">
              Who it&apos;s for
            </p>
            <p className="text-[#23201a]/80">{course.forWhom}</p>
          </div>
        </div>

        {/* What you'll explore */}
        <h2 className="mt-14 text-xl sm:text-2xl font-normal text-[#23201a]">
          What you&apos;ll explore
        </h2>
        <ul className="mt-6 space-y-3.5">
          {course.learn.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-1 shrink-0 text-[#5e6b4a]" strokeWidth={1.75} />
              <span className="text-[#23201a]/85 text-sm sm:text-base leading-[1.55]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Waitlist — dark accent card on the light page */}
        <div className="noise-overlay relative overflow-hidden rounded-2xl bg-[#141414] p-6 md:p-8 mt-14">
          <h2 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
            Join the waitlist
          </h2>
          <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] max-w-md">
            Add your email to hear when{' '}
            <span className="font-serif italic">{course.title}</span> next opens —
            no spam, just the date and how to start, for individuals or couples.
          </p>
          <div className="mt-6 max-w-xl">
            <Waitlist course={course.title} />
          </div>
        </div>

        {/* Or 1:1 */}
        <p className="mt-8 text-[#23201a]/65 text-sm leading-[1.6]">
          Prefer to work through this personally, and at your own depth?{' '}
          <a
            href="/#contact"
            className="text-[#23201a] underline decoration-[#23201a]/30 underline-offset-2 hover:decoration-[#23201a] transition inline-flex items-center gap-1"
          >
            Book a one-on-one initial consultation
            <ArrowRight className="h-3.5 w-3.5 -rotate-45" strokeWidth={1.5} />
          </a>
        </p>

        {/* Other courses */}
        <div className="mt-16 pt-10 border-t border-[#23201a]/12">
          <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-6">
            Other courses
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className="group rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 p-5 hover:bg-[#efe7d8] hover:border-[#23201a]/15 transition-colors flex flex-col"
              >
                <span className="text-[#23201a]/45 text-[10px] uppercase tracking-[0.16em]">
                  {c.tag}
                </span>
                <h3 className="mt-2 text-base font-medium text-[#23201a]">
                  {c.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-[#23201a]/55 group-hover:text-[#23201a] transition-colors">
                  Explore
                  <ArrowUpRight
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
