import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV } from '../nav'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'
import LangSwitch from './LangSwitch'

function NavLink({ label, to }: { label: string; to: string }) {
  const [hover, setHover] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="inline-block py-2 transition-colors duration-300 whitespace-nowrap"
      style={{ color: hover ? '#F1EFE7' : 'rgba(225, 224, 204, 0.8)' }}
    >
      {label}
    </Link>
  )
}

/** Black pill hanging from the top edge — the locked navbar component. */
export default function Navbar() {
  const { l } = useLang()
  const c = useContent()
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="flex flex-col items-center gap-1.5 bg-[#2E3A33] rounded-b-2xl md:rounded-b-3xl px-6 md:px-10 pt-2.5 pb-2">
        {/* Wordmark */}
        <Link
          to={l('/')}
          className="font-serif font-medium text-2xl md:text-3xl leading-none tracking-[0.01em] text-primary"
        >
          Brandt
        </Link>
        {/* Links */}
        <div className="flex items-center gap-5 sm:gap-6 md:gap-7">
          {NAV.map((n) => (
            <span key={n.to} className="text-[13px] sm:text-sm font-light">
              <NavLink label={c.nav[n.key]} to={l(n.to)} />
            </span>
          ))}
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
        </div>
      </div>
    </nav>
  )
}
