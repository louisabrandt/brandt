import { createContext, useContext, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export type Lang = 'de' | 'en'

interface LangCtx {
  lang: Lang
  /** Localize an internal path for the current language ('/en' prefix for EN). */
  l: (path: string) => string
  /** The same page path in the other language. */
  other: { lang: Lang; path: string }
}

const Ctx = createContext<LangCtx>({ lang: 'de', l: (p) => p, other: { lang: 'en', path: '/en' } })

/** Strip a leading '/en' from a pathname, returning the language-neutral base. */
function basePath(pathname: string): string {
  if (pathname === '/en') return '/'
  if (pathname.startsWith('/en/')) return pathname.slice(3)
  return pathname
}

export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'de'
}

/** Build a localized path: DE stays at the root, EN gets an '/en' prefix. */
export function localize(path: string, lang: Lang): string {
  if (lang === 'de') return path
  if (path === '/') return '/en'
  return `/en${path}`
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)
  const base = basePath(pathname)
  const otherLang: Lang = lang === 'de' ? 'en' : 'de'

  const value: LangCtx = {
    lang,
    l: (path) => localize(path, lang),
    other: { lang: otherLang, path: localize(base, otherLang) },
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useLang(): LangCtx {
  return useContext(Ctx)
}
