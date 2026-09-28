import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import SecondaryCTA from '../components/SecondaryCTA'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

/** A short taste of the method on the home page, linking to the About page. */
export default function ApproachTeaser() {
  const c = useContent()
  return (
    <section className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel className="mb-6">{c.approachTeaser.eyebrow}</SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.05]"
        >
          {c.approachTeaser.heading}
        </motion.h2>

        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-[15px] leading-[1.7] text-primary/70">
          {c.approachTeaser.para}
        </p>

        <div className="mt-8 flex justify-center">
          <SecondaryCTA label={c.approachTeaser.cta} to="/about" tone="dark" />
        </div>
      </div>
    </section>
  )
}
