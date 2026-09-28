import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import SecondaryCTA from '../components/SecondaryCTA'

const EASE = [0.16, 1, 0.3, 1] as const

/** A short taste of the method on the home page, linking to the About page. */
export default function ApproachTeaser() {
  return (
    <section className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-20 sm:py-24 md:py-28">
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel className="mb-6">How I work</SectionLabel>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-[1.05]"
        >
          First we see the pattern clearly. Then we work with it.
        </motion.h2>

        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-[15px] leading-[1.7] text-primary/70">
          I don&apos;t treat a relationship as a problem to be fixed. We look at
          how each of you responds when it matters most, and build the capacity to
          stay present in closeness, in conflict, and in the responsibility that
          comes with both. Grounded in attachment, emotional regulation, the
          Gottman Method and sex therapy, without the jargon.
        </p>

        <div className="mt-8 flex justify-center">
          <SecondaryCTA label="More about my approach" to="/about" tone="dark" />
        </div>
      </div>
    </section>
  )
}
