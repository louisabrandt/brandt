import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import Footer from '../sections/Footer'
import Waitlist from '../components/Waitlist'
import LangSwitch from '../components/LangSwitch'
import { COURSES, courseBySlug, courseIllustration, courseText } from '../courses'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'

export default function CourseDetail() {
  const { slug } = useParams()
  const { lang, l } = useLang()
  const c = useContent()
  const course = slug ? courseBySlug(slug) : undefined

  if (!course) {
    return (
      <div className="min-h-screen bg-[#efe9de] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[#23201a] text-2xl font-normal">{c.courseDetail.notFound}</h1>
        <Link to={l('/courses')} className="mt-4 text-[#23201a]/60 hover:text-[#23201a] text-sm">
          {c.courseDetail.backAll}
        </Link>
      </div>
    )
  }

  const t = courseText(course, lang)
  const others = COURSES.filter((o) => o.slug !== course.slug).slice(0, 3)

  return (
    <div className="bg-[#efe9de] min-h-screen">
      {/* Top bar */}
      <header className="border-b border-[#23201a]/12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 h-14 flex items-center justify-between gap-4">
          <Link to={l('/')} className="text-[#23201a] text-lg font-medium tracking-[-0.04em]">
            Brandt
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link to={l('/courses')} className="hidden sm:inline text-[#23201a]/65 hover:text-[#23201a] transition-colors">
              {c.courseDetail.allCourses}
            </Link>
            <Link to={l('/contact')} className="text-[#23201a]/65 hover:text-[#23201a] transition-colors">
              {c.courseDetail.contact}
            </Link>
            <LangSwitch tone="ink" />
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">
        <Link
          to={l('/courses')}
          className="inline-flex items-center gap-1.5 text-[#23201a]/50 hover:text-[#23201a]/80 transition-colors text-sm"
        >
          <ArrowUpRight className="h-3.5 w-3.5 -rotate-[135deg]" strokeWidth={1.5} />
          {c.courseDetail.courses}
        </Link>

        <p className="mt-8 text-[#23201a]/50 text-[11px] uppercase tracking-[0.22em]">{t.tag}</p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-normal text-[#23201a] leading-[1.05] tracking-tight">
          {t.title}
        </h1>
        <p className="mt-6 text-[#23201a]/80 text-base md:text-lg leading-[1.65]">{t.intro}</p>

        {/* Illustration */}
        <div
          className="mt-10 relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-[2/1] ring-1 ring-[#23201a]/8"
          style={{ backgroundColor: course.accent }}
        >
          <img
            src={courseIllustration(course.slug)}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {/* Meta */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-sm border-y border-[#23201a]/12 py-6">
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">{c.courseDetail.format}</p>
            <p className="text-[#23201a]/80">{t.format}</p>
          </div>
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">{c.courseDetail.bookable}</p>
            <p className="text-[#23201a]/80">{t.audience}</p>
          </div>
          <div>
            <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-1">{c.courseDetail.whoFor}</p>
            <p className="text-[#23201a]/80">{t.forWhom}</p>
          </div>
        </div>

        {/* What you'll explore */}
        <h2 className="mt-14 text-xl sm:text-2xl font-normal text-[#23201a]">{c.courseDetail.explore}</h2>
        <ul className="mt-6 space-y-3.5">
          {t.learn.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="w-4 h-4 mt-1 shrink-0 text-[#5e6b4a]" strokeWidth={1.75} />
              <span className="text-[#23201a]/85 text-sm sm:text-base leading-[1.55]">{item}</span>
            </li>
          ))}
        </ul>

        {/* Waitlist — dark accent card on the light page */}
        <div className="noise-overlay relative overflow-hidden rounded-2xl bg-[#141414] p-6 md:p-8 mt-14">
          <h2 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
            {c.courseDetail.waitlistHeading}
          </h2>
          <p className="mt-3 text-primary/70 text-sm sm:text-[15px] leading-[1.6] max-w-md">
            {c.courseDetail.waitlistText1}{' '}
            <span className="font-serif italic">{t.title}</span> {c.courseDetail.waitlistText2}
          </p>
          <div className="mt-6 max-w-xl">
            <Waitlist course={course.slug} />
          </div>
        </div>

        {/* Or 1:1 */}
        <p className="mt-8 text-[#23201a]/65 text-sm leading-[1.6]">
          {c.courseDetail.or1}{' '}
          <Link
            to={l('/contact')}
            className="text-[#23201a] underline decoration-[#23201a]/30 underline-offset-2 hover:decoration-[#23201a] transition inline-flex items-center gap-1"
          >
            {c.courseDetail.book1to1}
            <ArrowRight className="h-3.5 w-3.5 -rotate-45" strokeWidth={1.5} />
          </Link>
        </p>

        {/* Other courses */}
        <div className="mt-16 pt-10 border-t border-[#23201a]/12">
          <p className="text-[#23201a]/45 text-[11px] uppercase tracking-[0.22em] mb-6">
            {c.courseDetail.otherCourses}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((o) => {
              const ot = courseText(o, lang)
              return (
                <Link
                  key={o.slug}
                  to={l(`/courses/${o.slug}`)}
                  className="group rounded-2xl bg-[#f5f0e6] border border-[#23201a]/8 overflow-hidden hover:border-[#23201a]/15 transition-colors flex flex-col"
                >
                  <div className="relative aspect-[5/4] overflow-hidden" style={{ backgroundColor: o.accent }}>
                    <img
                      src={courseIllustration(o.slug)}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-[#23201a]/45 text-[10px] uppercase tracking-[0.16em]">{ot.tag}</span>
                    <h3 className="mt-2 text-base font-medium text-[#23201a]">{ot.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-[#23201a]/55 group-hover:text-[#23201a] transition-colors">
                      {c.courseDetail.exploreShort}
                      <ArrowUpRight
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
