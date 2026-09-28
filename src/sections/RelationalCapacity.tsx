import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import Reveal from '../components/Reveal'
import { TEXT_COLOR } from '../constants'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function RelationalCapacity() {
  const c = useContent()
  return (
    <section
      id="relational-capacity"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <SectionLabel align="start" className="mb-5 sm:mb-6">
          {c.relCap.eyebrow}
        </SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary max-w-3xl leading-[1.05]"
        >
          {c.relCap.heading} <span className="font-serif italic">{c.relCap.headingItalic}</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-sm md:text-[15px] leading-[1.6] text-primary/70">
          {c.relCap.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {c.relCap.items.map((cap, i) => (
            <Reveal
              key={cap.title}
              index={i}
              className="rounded-2xl bg-[#101010] p-6 flex flex-col min-h-[180px]"
            >
              <h3 className="text-base sm:text-lg font-medium" style={{ color: TEXT_COLOR }}>
                {cap.title}
              </h3>
              <p className="mt-2 text-primary/70 text-[13px] sm:text-sm leading-[1.55]">
                {cap.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
