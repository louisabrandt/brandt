import { m } from 'framer-motion'
import Navbar from '../components/Navbar'
import LazyVideo from '../components/LazyVideo'
import PrimaryCTA from '../components/PrimaryCTA'
import { HERO_VIDEO_URL, HERO_POSTER_URL, TEXT_COLOR } from '../constants'
import { useContent } from '../i18n/content'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const c = useContent()
  return (
    <section className="h-hero w-full p-4 md:p-6 bg-[#2E3A33]">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <LazyVideo
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER_URL}
          className="absolute inset-0 h-full w-full"
        />

        {/* Noise + legibility gradient */}
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E3A33]/35 via-transparent to-[#2E3A33]/80 pointer-events-none" />

        <Navbar />

        {/* Hero content, bottom-aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="flex flex-col items-start gap-4 sm:gap-5 max-w-3xl">
            {/* Eyebrow — what I do */}
            <m.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
              className="uppercase tracking-[0.24em] text-xs text-primary/80"
            >
              {c.hero.eyebrow}
            </m.div>

            {/* Headline — Cormorant, one voice with the wordmark */}
            <m.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
              className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] leading-[1.03] tracking-[0]"
              style={{ color: TEXT_COLOR }}
            >
              {c.hero.headline}{' '}
              <span className="italic">{c.hero.headlineItalic}</span>
            </m.h1>

            {/* Single supporting line */}
            <m.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.52, ease: EASE }}
              className="text-primary/85 text-sm sm:text-base max-w-xl"
              style={{ lineHeight: 1.4 }}
            >
              {c.hero.sub1}
            </m.p>

            {/* CTA */}
            <m.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.64, ease: EASE }}
              className="mt-1"
            >
              <PrimaryCTA />
              <p className="mt-3 text-primary/60 text-xs">{c.hero.ctaNote}</p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
