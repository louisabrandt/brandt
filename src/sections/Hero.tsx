import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import LazyVideo from '../components/LazyVideo'
import PrimaryCTA from '../components/PrimaryCTA'
import WordsPullUp from '../components/WordsPullUp'
import { HERO_VIDEO_URL, TEXT_COLOR } from '../constants'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const c = useContent()
  return (
    <section className="h-screen w-full p-4 md:p-6 bg-[#2E3A33]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <LazyVideo src={HERO_VIDEO_URL} className="absolute inset-0 h-full w-full" />

        {/* Noise + legibility gradient */}
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <Navbar />

        {/* Hero content, bottom-aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-3xl">
            {/* Brand mark */}
            <WordsPullUp
              text="Brandt"
              color={TEXT_COLOR}
              className="text-[22vw] sm:text-[16vw] md:text-[12vw] lg:text-[8rem] font-serif font-medium leading-[0.9] tracking-[0.01em]"
            />

            {/* Headline — Cormorant, one voice with the wordmark */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] leading-[1.03] tracking-[0]"
              style={{ color: TEXT_COLOR }}
            >
              {c.hero.headline}{' '}
              <span className="italic">{c.hero.headlineItalic}</span>
            </motion.h1>

            {/* Single supporting line */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
              className="text-primary/85 text-sm sm:text-base max-w-xl"
              style={{ lineHeight: 1.4 }}
            >
              {c.hero.sub1}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.64, ease: EASE }}
              className="mt-1"
            >
              <PrimaryCTA />
              <p className="mt-3 text-primary/60 text-xs">{c.hero.ctaNote}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
