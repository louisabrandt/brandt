import { Link } from 'react-router-dom'
import { NAV } from '../nav'
import { useLang } from '../i18n/lang'
import { useContent } from '../i18n/content'

export default function Footer() {
  const { l } = useLang()
  const c = useContent()
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-medium tracking-[-0.05em]" style={{ color: '#E1E0CC' }}>
                Brandt
              </span>
            </div>
            <p className="mt-3 text-primary/60 text-sm leading-[1.6] max-w-xs">{c.footer.tagline}</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">{c.footer.navigate}</p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={l(n.to)} className="text-primary/75 hover:text-primary transition-colors text-sm">
                    {c.nav[n.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sessions */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">{c.footer.sessions}</p>
            <ul className="space-y-2.5 text-sm text-primary/75">
              {c.footer.sessionsItems.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-primary/50 text-[11px] uppercase tracking-[0.22em] mb-4">{c.footer.contact}</p>
            <a href="mailto:lb@louisabrandt.com" className="text-primary/75 hover:text-primary transition-colors text-sm">
              lb@louisabrandt.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-primary/45">
          <p>{c.footer.rights}</p>
          <div className="flex items-center gap-5">
            <a href="/impressum" className="hover:text-primary/70 transition-colors">
              {c.footer.imprint}
            </a>
            <a href="/datenschutz" className="hover:text-primary/70 transition-colors">
              {c.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
