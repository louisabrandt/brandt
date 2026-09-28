import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'
import { useContent } from '../i18n/content'

const VISUALS = [
  { image: '/illustrations/how-01-consultation.webp', accent: '#807e4d' },
  { image: '/illustrations/how-02-patterns.webp', accent: '#e4a031' },
  { image: '/illustrations/how-03-work.webp', accent: '#d16535' },
]

export default function HowItWorks() {
  const c = useContent()
  return (
    <section
      id="how-it-works"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          {c.howItWorks.eyebrow}
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]">
          {c.howItWorks.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {c.howItWorks.steps.map((step, i) => (
            <Reveal
              key={step.title}
              index={i}
              className="rounded-2xl bg-[#101010] overflow-hidden flex flex-col"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{ backgroundColor: VISUALS[i].accent }}
              >
                <img
                  src={VISUALS[i].image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain"
                />
                <span
                  className="absolute top-4 left-5 text-4xl sm:text-5xl font-light tracking-tight text-[#0a0a0a]/35 tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-lg font-medium leading-snug" style={{ color: TEXT_COLOR }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-primary/70 text-sm leading-[1.6] flex-1">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
