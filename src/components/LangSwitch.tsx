import { Link } from 'react-router-dom'
import { useLang, localize, langFromPath } from '../i18n/lang'
import { useLocation } from 'react-router-dom'

/** Compact DE / EN toggle that links to the same page in the other language. */
export default function LangSwitch({ tone = 'dark' }: { tone?: 'dark' | 'ink' }) {
  const { lang } = useLang()
  const { pathname } = useLocation()
  // Language-neutral base path (strip any /en prefix).
  const base =
    langFromPath(pathname) === 'en'
      ? pathname === '/en'
        ? '/'
        : pathname.slice(3)
      : pathname

  const activeCls = tone === 'ink' ? 'text-[#23201a]' : 'text-primary'
  const idleCls =
    tone === 'ink'
      ? 'text-[#23201a]/65 hover:text-[#23201a]/70'
      : 'text-primary/55 hover:text-primary/80'

  const item = (code: 'de' | 'en', label: string) =>
    code === lang ? (
      <span key={code} className={`${activeCls} font-medium`}>
        {label}
      </span>
    ) : (
      <Link key={code} to={localize(base, code)} className={idleCls}>
        {label}
      </Link>
    )

  return (
    <div className="flex items-center gap-1.5 text-xs tracking-wide">
      {item('de', 'DE')}
      <span className={tone === 'ink' ? 'text-[#23201a]/25' : 'text-primary/25'}>/</span>
      {item('en', 'EN')}
    </div>
  )
}
