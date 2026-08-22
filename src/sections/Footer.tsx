import { Asterisk } from 'lucide-react'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'For Whom', href: '#for-whom' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1">
              <span
                className="text-2xl font-medium tracking-[-0.05em]"
                style={{ color: '#E1E0CC' }}
              >
                Brandt
              </span>
              <Asterisk className="h-3 w-3 text-primary/70" strokeWidth={1.5} />
            </div>
            <p className="mt-3 text-primary/60 text-sm leading-[1.6] max-w-xs">
              Relational coaching for couples and individuals. Online worldwide
              and in person across Europe &amp; Miami.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-primary/75 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sessions */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">
              Sessions
            </p>
            <ul className="space-y-2.5 text-sm text-primary/75">
              <li>Online worldwide</li>
              <li>Paphos · Vienna</li>
              <li>Berlin · Miami</li>
              <li>English &amp; German</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">
              Contact
            </p>
            <a
              href="mailto:lb@louisabrandt.com"
              className="text-primary/75 hover:text-primary transition-colors text-sm"
            >
              lb@louisabrandt.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-primary/45">
          <p>© 2026 Louisa Brandt. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="hover:text-primary/70 transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-primary/70 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
