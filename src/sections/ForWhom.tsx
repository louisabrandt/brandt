import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

const HEADING: Segment[] = [
  { text: 'You can feel it:', className: 'font-normal' },
  { text: 'something keeps repeating.', className: 'italic font-serif' },
]

const THEMES = [
  'The same argument on repeat, whether it ends in raised voices or silence',
  'A quiet distance, even when you both want it to work',
  'Trust that got shaken, and the slow work of earning it back',
  'Closeness and desire that have gone quiet',
  'Big transitions: moving in together, marriage, a baby, a move abroad',
]

export default function ForWhom() {
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
              Does this sound familiar?
            </SectionLabel>
            <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#23201a] leading-[1.05]">
              <WordsPullUpMultiStyle
                segments={HEADING}
                className="!justify-start text-left"
              />
            </div>
            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-[1.65] text-[#23201a]/75">
              For couples and individuals who want to understand what keeps
              happening between them, instead of just working around it.
            </p>
          </div>

          {/* Right — common themes list */}
          <div className="lg:col-span-7">
            <p className="text-[#23201a]/50 text-[11px] uppercase tracking-[0.22em] mb-2">
              Common themes
            </p>
            <ul>
              {THEMES.map((theme) => (
                <li
                  key={theme}
                  className="py-4 border-b border-[#23201a]/12"
                >
                  <span className="text-[#23201a]/85 text-sm sm:text-base leading-[1.5]">
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
            For internationals &amp; expats
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-10 items-center">
            <div
              className="relative overflow-hidden rounded-xl aspect-[16/10]"
              style={{ backgroundColor: '#fef3c1' }}
            >
              <img
                src="/illustrations/forwhom-distance.webp"
                alt="Two people connected by a thread across a distance"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
                Love across borders carries its own weight.
              </h3>
              <p className="mt-4 text-primary/70 text-sm sm:text-[15px] leading-[1.65]">
                Binational and international couples move between different
                languages, cultures and unspoken expectations. Relocation can cut
                you off from the friends, family and routines that once held you,
                and place all of that weight on the relationship itself. It&apos;s a
                frequent focus of the work, and a big reason many international
                couples reach out.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
