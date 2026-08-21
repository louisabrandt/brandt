import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import PrimaryCTA from '../components/PrimaryCTA'
import WordsPullUp from '../components/WordsPullUp'
import { HERO_VIDEO_URL, TEXT_COLOR } from '../constants'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6 bg-[#0a0a0a]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise + legibility gradient */}
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <Navbar />

        {/* Hero content, bottom-aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-12 items-end gap-4 md:gap-6">
            {/* Brand mark */}
            <div className="col-span-12 lg:col-span-7">
              <WordsPullUp
                text="Brandt"
                showAsterisk
                color={TEXT_COLOR}
                className="text-[26vw] sm:text-[24vw] md:text-[20vw] lg:text-[17vw] xl:text-[16vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>

            {/* Right column: headline + copy + CTA */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 sm:gap-5 pb-1 sm:pb-3">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
                className="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.05] tracking-[-0.01em]"
                style={{ color: TEXT_COLOR }}
              >
                Stronger relationships,{' '}
                <span className="font-serif italic">built together.</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
                className="text-primary/85 text-sm sm:text-base"
                style={{ lineHeight: 1.35 }}
              >
                Becoming relationship-capable isn&apos;t luck — it&apos;s an inner
                structure.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
                className="text-primary/70 text-xs sm:text-sm"
                style={{ lineHeight: 1.5 }}
              >
                Relational coaching for couples and individuals who want deeper
                connection, better communication, and lasting stability. Online
                worldwide — and in person in Paphos, Vienna, Berlin &amp;
                Miami. In English &amp; German.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.74, ease: EASE }}
                className="mt-1"
              >
                <PrimaryCTA />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
