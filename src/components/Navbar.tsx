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
      style={{ color: hover ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)' }}
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
      <div className="flex items-center gap-5 sm:gap-6 md:gap-8 bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-1 md:px-8">
        {NAV.map((n) => (
          <span key={n.to} className="text-[13px] sm:text-sm font-light">
            <NavLink label={c.nav[n.key]} to={l(n.to)} />
          </span>
        ))}
        <span className="hidden sm:block h-3 w-px bg-white/20" />
        <div className="hidden sm:block">
          <LangSwitch />
        </div>
      </div>
    </nav>
  )
}
