import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { NAV, BOOK_TO } from '../nav'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'
import LangSwitch from './LangSwitch'

/** Slim header that fades in once the hero is scrolled past — a persistent,
 *  calm nav + CTA anchor for the immersive home page. */
export default function StickyHeader() {
  const [show, setShow] = useState(false)
  const { l } = useLang()
  const c = useContent()

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
            <Link
              to={l('/')}
              className="text-primary text-lg font-medium tracking-[-0.04em]"
            >
              Brandt
            </Link>

            <nav className="hidden md:flex items-center gap-7 text-sm text-primary/70">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={l(n.to)}
                  end
                  className={({ isActive }) =>
                    isActive ? 'text-primary' : 'hover:text-primary transition-colors'
                  }
                >
                  {c.nav[n.key]}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LangSwitch />
              <Link
                to={l(BOOK_TO)}
                className="group inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-4 pr-1 py-1 text-[#F3ECDE] font-medium text-xs sm:text-sm"
              >
                <span>{c.nav.book}</span>
                <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-7 h-7 transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 text-[#F3ECDE]" strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
