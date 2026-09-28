import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV } from '../nav'

function NavLink({ label, to }: { label: string; to: string }) {
  const [hover, setHover] = useState(false)
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="transition-colors duration-300 whitespace-nowrap"
      style={{ color: hover ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)' }}
    >
      {label}
    </Link>
  )
}

/** Black pill hanging from the top edge — the locked navbar component. */
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 bg-black rounded-b-2xl md:rounded-b-3xl px-5 py-2 md:px-8">
        {NAV.map((item) => (
          <span
            key={item.to}
            className="text-[11px] sm:text-xs md:text-sm font-light"
          >
            <NavLink label={item.label} to={item.to} />
          </span>
        ))}
      </div>
    </nav>
  )
}
