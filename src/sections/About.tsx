import { Fragment, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'
import SectionLabel from '../components/SectionLabel'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function About() {
  const c = useContent()
  const leadRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: leadRef,
    offset: ['start 0.8', 'end 0.3'],
  })

  const headingSegments: Segment[] = [
    { text: c.about.head1, className: 'font-normal' },
    { text: c.about.headItalic, className: 'italic font-serif' },
    { text: c.about.head3, className: 'font-normal' },
  ]

  const lead = c.about.lead
  const words = lead.split(' ')
  const total = lead.length

  return (
    <section id="about" className="bg-[#efe9de] px-4 py-20 sm:py-28 md:py-36">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel tone="ink" className="mb-8 sm:mb-10">
          {c.about.eyebrow}
        </SectionLabel>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto leading-[0.98] sm:leading-[0.92] text-[#23201a]">
          <WordsPullUpMultiStyle segments={headingSegments} />
        </div>

        {/* Lead — scroll-linked character reveal */}
        <p
          ref={leadRef}
          className="relative text-[#23201a] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-12 sm:mt-16 leading-[1.6]"
        >
          {(() => {
            let idx = 0
            return words.map((word, wi) => {
              const letters = word.split('').map((ch) => {
                const i = idx++
                const pr = i / total
                return (
                  <AnimatedLetter
                    key={i}
                    char={ch}
                    progress={scrollYProgress}
                    range={[pr - 0.1, pr + 0.05]}
                  />
                )
              })
              idx++ // account for the space that follows this word
              return (
                <Fragment key={wi}>
                  <span className="inline-block">{letters}</span>
                  {wi < words.length - 1 ? ' ' : null}
                </Fragment>
              )
            })
          })()}
        </p>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[#23201a]/70 text-sm sm:text-base max-w-2xl mx-auto mt-6 leading-[1.6]"
        >
          {c.about.support}
        </motion.p>

        {/* Credentials grid */}
        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 text-[11px] sm:text-xs text-left border-t border-[#23201a]/12 pt-8">
          {c.about.credentials.map(([marker, mid, detail]) => (
            <div key={marker} className="contents">
              <span className="text-[#23201a] font-normal">{marker}</span>
              <span className="text-[#23201a]/70">{mid}</span>
              <span className="text-[#23201a]/55 text-right">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
