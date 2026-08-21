import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Asterisk } from 'lucide-react'
import { TEXT_COLOR } from '../constants'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
]

/** Slim header that fades in once the hero is scrolled past — a persistent,
 *  calm CTA anchor. */
export default function StickyHeader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 inset-x-0 z-50 bg-[#0a0a0a]/85 backdrop-blur-md border-b border-primary/10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 h-14 flex items-center justify-between gap-4">
            <a
              href="#"
              className="flex items-center gap-0.5 text-primary text-lg font-medium tracking-[-0.04em]"
            >
              Brandt
              <Asterisk className="h-2.5 w-2.5 text-primary/70" strokeWidth={1.5} />
            </a>

            <nav className="hidden md:flex items-center gap-7 text-sm text-primary/70">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 bg-primary rounded-full pl-4 pr-1 py-1 text-black font-medium text-xs sm:text-sm"
            >
              <span>Book a consultation</span>
              <span className="flex items-center justify-center bg-black rounded-full w-7 h-7 transition-transform duration-300 group-hover:scale-110">
                <ArrowRight
                  className="w-3.5 h-3.5"
                  strokeWidth={1.5}
                  style={{ color: TEXT_COLOR }}
                />
              </span>
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
