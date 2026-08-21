import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'For Whom', href: '#for-whom' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function NavLink({ label, href }: { label: string; href: string }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="transition-colors duration-300 whitespace-nowrap"
      style={{ color: hover ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)' }}
    >
      {label}
    </a>
  )
}

/** Black pill hanging from the top edge — the locked navbar component. */
export default function Navbar() {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
        {NAV_ITEMS.map((item) => (
          <span
            key={item.label}
            className="text-[10px] sm:text-xs md:text-sm font-light"
          >
            <NavLink label={item.label} href={item.href} />
          </span>
        ))}
      </div>
    </nav>
  )
}
