import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { useContent } from '../i18n/content'

export default function ForWhom() {
  const c = useContent()
  const heading: Segment[] = [
    { text: c.forWhom.head1, className: 'font-normal' },
    { text: c.forWhom.headItalic, className: 'italic font-serif' },
  ]

  return (
    <section
      id="for-whom"
      className="bg-[#efe9de] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left — intro */}
          <div className="lg:col-span-5">
            <SectionLabel tone="ink" align="start" className="mb-5 sm:mb-6">
              {c.forWhom.eyebrow}
            </SectionLabel>
            <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#23201a] leading-[1.05]">
              <WordsPullUpMultiStyle segments={heading} className="!justify-start text-left" />
            </div>
            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-[1.65] text-[#23201a]/75">
              {c.forWhom.intro}
            </p>
          </div>

          {/* Right — common themes list */}
          <div className="lg:col-span-7">
            <p className="text-[#23201a]/65 text-[11px] uppercase tracking-[0.22em] mb-2">
              {c.forWhom.themesLabel}
            </p>
            <ul className="border-t border-[#23201a]/12">
              {c.forWhom.themes.map((theme, i) => (
                <li
                  key={theme}
                  className="flex items-baseline gap-4 sm:gap-5 py-4 border-b border-[#23201a]/12"
                >
                  <span className="text-[#23201a]/35 text-xs tabular-nums shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[#23201a]/85 text-base sm:text-lg leading-[1.45]">
                    {theme}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expat highlight — dark accent card on the warm page */}
        <Reveal
          index={0}
          className="noise-overlay relative overflow-hidden rounded-2xl bg-[#1b1b1b] p-6 md:p-8 mt-10 lg:mt-12"
        >
          <p className="text-primary/60 text-[11px] sm:text-xs uppercase tracking-[0.22em] mb-5">
            {c.forWhom.expatEyebrow}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-10 items-center">
            <div
              className="relative overflow-hidden rounded-xl aspect-[16/10]"
              style={{ backgroundColor: '#fef3c1' }}
            >
              <img
                src="/illustrations/forwhom-distance.webp"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
                {c.forWhom.expatHeading}
              </h3>
              <p className="mt-4 text-primary/70 text-sm sm:text-[15px] leading-[1.65]">
                {c.forWhom.expatText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
