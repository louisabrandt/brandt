import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { useContent } from '../i18n/content'

export default function Testimonials() {
  const c = useContent()
  return (
    <section
      id="testimonials"
      className="bg-[#F4F2EC] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
          {c.testimonials.eyebrow}
        </SectionLabel>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1D211E] max-w-2xl mb-10 leading-[1.05]">
          {c.testimonials.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {c.testimonials.items.map((t, i) => (
            <Reveal
              key={t.author}
              index={i}
              className="rounded-2xl bg-[#ECEAE2] border border-[#1D211E]/8 p-6 md:p-7 flex flex-col"
            >
              <p className="text-[15px] leading-[1.65] text-[#1D211E]/85 flex-1">
                {t.before}
                <span className="font-serif italic">{t.emphasis}</span>
                {t.after}
              </p>
              <p className="mt-5 text-xs text-[#1D211E]/65">{t.author}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
