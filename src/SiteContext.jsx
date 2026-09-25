import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { LANGS, t } from './i18n.js'

const Site = createContext(null)

export function SiteProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('rs-lang') || 'en')
  const [theme, setTheme] = useState(() => localStorage.getItem('rs-theme') || 'light')
  const params = useMemo(() => new URLSearchParams(location.search), [])
  const [page, setPage] = useState(() => {
    const q = params.get('p')
    return ['blog', 'faq', 'map'].includes(q) ? q : 'home'
  })
  const [postSlug, setPostSlug] = useState(params.get('post') || '')
  const [mapId, setMapId] = useState('umm')

  useEffect(() => {
    const meta = LANGS.find((l) => l.id === lang) || LANGS[0]
    document.documentElement.lang = meta.locale
    document.documentElement.dir = meta.dir
    document.documentElement.dataset.theme = theme
    localStorage.setItem('rs-lang', lang)
    localStorage.setItem('rs-theme', theme)
  }, [lang, theme])

  useEffect(() => {
    const onHash = () => {
      const h = (location.hash || '#home').replace('#', '')
      if (['home', 'blog', 'faq', 'map', 'fleet'].includes(h) || h.startsWith('blog/')) setPage(h.startsWith('blog/') ? 'blog' : h === 'fleet' ? 'home' : h)
    }
    onHash()
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const value = useMemo(() => ({
    lang,
    setLang,
    theme,
    setTheme,
    dir: (LANGS.find((l) => l.id === lang) || LANGS[0]).dir,
    copy: t[lang],
    page,
    setPage: (p) => {
      setPage(p)
      setPostSlug('')
      if (location.search) {
        const u = new URL(location.href)
        u.searchParams.delete('p')
        u.searchParams.delete('post')
        history.replaceState(null, '', u.pathname + u.search + '#' + p)
      }
      if (p === 'home') location.hash = 'home'
      else location.hash = p
    },
    postSlug,
    setPostSlug,
    mapId,
    setMapId,
    toggleTheme: () => setTheme((v) => (v === 'light' ? 'dark' : 'light')),
    toggleLang: () => setLang((v) => (v === 'en' ? 'ar' : 'en')),
  }), [lang, theme, page, mapId, postSlug])

  return <Site.Provider value={value}>{children}</Site.Provider>
}

export function useSite() {
  return useContext(Site)
}
