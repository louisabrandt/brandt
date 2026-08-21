import { Asterisk } from 'lucide-react'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'

const HEADING: Segment[] = [
  { text: 'For those who sense', className: 'font-normal' },
  { text: 'something keeps repeating.', className: 'italic font-serif' },
]

const THEMES = [
  'Recurring conflict cycles — escalation, or silence',
  'Emotional distance, even when both people want it to work',
  'Eroded trust, and the slow work of repair',
  'Intimacy and desire that have gone quiet',
  'Major transitions: moving in, marriage, children, relocation',
]

export default function ForWhom() {
  return (
    <section
      id="for-whom"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left — intro */}
          <div className="lg:col-span-5">
            <SectionLabel align="start" className="mb-5 sm:mb-6">
              For whom
            </SectionLabel>
            <div className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary leading-[1.05]">
              <WordsPullUpMultiStyle
                segments={HEADING}
                className="!justify-start text-left"
              />
            </div>
            <p className="mt-6 max-w-md text-sm md:text-[15px] leading-[1.6] text-primary/70">
              Couples and individuals who want to understand what keeps happening
              between them — rather than manage around it.
            </p>
          </div>

          {/* Right — common themes list */}
          <div className="lg:col-span-7">
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-2">
              Common themes
            </p>
            <ul>
              {THEMES.map((theme) => (
                <li
                  key={theme}
                  className="flex items-start gap-3 py-4 border-b border-primary/10"
                >
                  <Asterisk
                    className="h-4 w-4 mt-0.5 shrink-0 text-primary/60"
                    strokeWidth={1.5}
                  />
                  <span className="text-primary/80 text-sm sm:text-base leading-[1.5]">
                    {theme}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expat highlight — full width */}
        <Reveal
          index={0}
          className="noise-overlay relative overflow-hidden rounded-2xl bg-[#212121] p-6 md:p-8 mt-10 lg:mt-12"
        >
          <p className="text-primary/60 text-[11px] sm:text-xs uppercase tracking-[0.22em] mb-5">
            For internationals &amp; expats
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-10 items-start">
            <h3 className="text-primary text-xl sm:text-2xl font-normal leading-snug">
              Relationships abroad carry their own weight.
            </h3>
            <p className="text-primary/70 text-sm sm:text-[15px] leading-[1.6]">
              Binational and international couples navigate different relational
              cultures, languages, and expectations. Relocation can isolate a
              couple from the friends, family and routines that once held them —
              and place all that weight on the relationship itself. This is a
              frequent focus of the work, and a reason many international couples
              reach out.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
