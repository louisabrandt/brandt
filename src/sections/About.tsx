import { Fragment, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Asterisk } from 'lucide-react'
import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import AnimatedLetter from '../components/AnimatedLetter'
import SectionLabel from '../components/SectionLabel'

const HEADING_SEGMENTS: Segment[] = [
  { text: "I'm Louisa Brandt —", className: 'font-normal' },
  { text: 'M.Sc. in Psychology,', className: 'italic font-serif' },
  { text: 'a relational dynamics coach.', className: 'font-normal' },
]

const LEAD_TEXT =
  "I don't see relationships as problems to be solved, but as living paradoxes to be held. Most of what shows up between two people — distance, recurring conflict, the slow loss of closeness — is rarely a matter of communication skills alone. It's rooted in how closeness, responsibility and vulnerability were learned, long before this relationship began."

const CREDENTIALS: [string, string, string][] = [
  ['M.Sc.', 'Psychology', 'Clinical Psychology & Psychotherapy focus'],
  ['Method', 'Gottman-informed', 'Attachment & relational systems'],
  ['Practice', 'Cyprus & online', 'Couples & individuals, EN & DE'],
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function About() {
  const leadRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: leadRef,
    offset: ['start 0.8', 'end 0.3'],
  })

  const words = LEAD_TEXT.split(' ')
  const total = LEAD_TEXT.length

  return (
    <section id="about" className="bg-[#0a0a0a] px-4 py-20 sm:py-28 md:py-36">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 text-center">
        <SectionLabel className="mb-8 sm:mb-10">About</SectionLabel>

        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-[0.98] sm:leading-[0.92] text-primary">
          <WordsPullUpMultiStyle segments={HEADING_SEGMENTS} />
        </div>

        {/* Lead — scroll-linked character reveal */}
        <p
          ref={leadRef}
          className="relative text-[#DEDBC8] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-12 sm:mt-16 leading-[1.6]"
        >
          {(() => {
            let idx = 0
            return words.map((word, wi) => {
              const letters = word.split('').map((c) => {
                const i = idx++
                const pr = i / total
                return (
                  <AnimatedLetter
                    key={i}
                    char={c}
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

        {/* Supporting paragraphs */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-primary/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-6 leading-[1.6]"
        >
          My work is grounded in contemporary psychological research and clinical
          training: attachment theory, relational systems thinking, emotional
          regulation, and current relationship science, including the Gottman
          Method. It takes place in a real-life-oriented setting — without
          therapy jargon, blame narratives, or self-optimization rhetoric.
        </motion.p>

        {/* Credentials grid (folded in from the bento) */}
        <div className="mt-12 sm:mt-14 max-w-2xl mx-auto grid grid-cols-[auto_auto_1fr_auto] items-center gap-x-3 gap-y-3 text-[11px] sm:text-xs text-left">
          {CREDENTIALS.map(([marker, mid, detail]) => (
            <div key={marker} className="contents">
              <span className="text-primary font-normal">{marker}</span>
              <Asterisk className="h-3 w-3 text-primary/60" strokeWidth={1.5} />
              <span className="text-primary/70">{mid}</span>
              <span className="text-primary/60 text-right">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
