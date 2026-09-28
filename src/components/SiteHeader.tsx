import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Asterisk, Menu, X } from 'lucide-react'
import { NAV, BOOK_TO } from '../nav'

/** Persistent top navigation for the sub-pages (solid dark bar). */
export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 h-14 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-0.5 text-primary text-lg font-medium tracking-[-0.04em]"
        >
          Brandt
          <Asterisk className="h-2.5 w-2.5 text-primary/70" strokeWidth={1.5} />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-primary' : 'text-primary/70 hover:text-primary'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={BOOK_TO}
            className="group hidden sm:inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300 bg-[#B4552E] hover:bg-[#9E4826] rounded-full pl-4 pr-1 py-1 text-[#F3ECDE] font-medium text-xs sm:text-sm"
          >
            <span>Book a first conversation</span>
            <span className="flex items-center justify-center bg-[#7C3A1E] rounded-full w-7 h-7 transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="w-3.5 h-3.5 text-[#F3ECDE]" strokeWidth={1.5} />
            </span>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center h-9 w-9 rounded-full text-primary/80 hover:text-primary"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-primary/10 bg-[#0a0a0a] px-4 sm:px-6 py-4">
          <nav className="flex flex-col gap-1">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-[15px] ${
                    isActive ? 'text-primary' : 'text-primary/75'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to={BOOK_TO}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-2 bg-[#B4552E] rounded-full px-5 py-2.5 text-[#F3ECDE] font-medium text-sm self-start"
            >
              Book a first conversation
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
