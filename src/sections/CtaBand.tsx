import PrimaryCTA from '../components/PrimaryCTA'
import SecondaryCTA from '../components/SecondaryCTA'
import { useContent } from '../i18n/content'

interface CtaBandProps {
  variant?: 'default' | 'about' | 'courses'
  /** 'paper' warm off-white, 'light' a brighter near-white panel, 'dark' green. */
  tone?: 'paper' | 'light' | 'dark'
  /** Optional second action pointing at another section. */
  secondary?: 'courses' | 'coaching'
}

/** A calm closing call-to-action band, reused at the foot of several pages. */
export default function CtaBand({ variant = 'default', tone = 'paper', secondary }: CtaBandProps) {
  const c = useContent()
  const isDark = tone === 'dark'
  const bg = isDark ? 'bg-[#2E3A33]' : tone === 'light' ? 'bg-[#FBFAF6]' : 'bg-[#F4F2EC]'
  const head = isDark ? 'text-primary' : 'text-[#1D211E]'
  const body = isDark ? 'text-primary/70' : 'text-[#1D211E]/70'

  const heading =
    variant === 'about' ? c.cta.aboutHeading : variant === 'courses' ? c.cta.coursesHeading : c.cta.defaultHeading
  const text =
    variant === 'about' ? c.cta.aboutText : variant === 'courses' ? c.cta.coursesText : c.cta.defaultText

  const secondaryProps =
    secondary === 'courses'
      ? { label: c.cta.exploreCourses, to: '/courses' }
      : secondary === 'coaching'
        ? { label: c.cta.exploreCoaching, to: '/coaching' }
        : null

  return (
    <section className={`${bg} px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.1] ${head}`}>
          {heading}
        </h2>
        <p className={`mt-5 max-w-xl mx-auto text-sm md:text-base leading-[1.7] ${body}`}>{text}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <PrimaryCTA />
          {secondaryProps && (
            <SecondaryCTA
              label={secondaryProps.label}
              to={secondaryProps.to}
              tone={isDark ? 'dark' : 'paper'}
            />
          )}
        </div>
      </div>
    </section>
  )
}
