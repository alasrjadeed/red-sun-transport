import { useEffect, useState } from 'react'
import { useSite } from './SiteContext.jsx'
import { TICKER } from './i18n.js'

export const GCC = [
  { id: 'bh', name: { en: 'Bahrain', ar: 'البحرين' }, city: { en: 'Manama', ar: 'المنامة' }, tz: 'Asia/Bahrain', flag: 'BH', temp: 34, wx: { en: 'Clear', ar: 'صافِ' }, map: 'umm' },
  { id: 'sa', name: { en: 'Saudi', ar: 'السعودية' }, city: { en: 'Khobar', ar: 'الخبر' }, tz: 'Asia/Riyadh', flag: 'SA', temp: 36, wx: { en: 'Hot', ar: 'حار' }, map: 'sa' },
  { id: 'ae', name: { en: 'UAE', ar: 'الإمارات' }, city: { en: 'Dubai', ar: 'دبي' }, tz: 'Asia/Dubai', flag: 'AE', temp: 35, wx: { en: 'Humid', ar: 'رطوبة' }, map: 'ae' },
  { id: 'qa', name: { en: 'Qatar', ar: 'قطر' }, city: { en: 'Doha', ar: 'الدوحة' }, tz: 'Asia/Qatar', flag: 'QA', temp: 35, wx: { en: 'Clear', ar: 'صافِ' }, map: 'qa' },
  { id: 'kw', name: { en: 'Kuwait', ar: 'الكويت' }, city: { en: 'Kuwait', ar: 'الكويت' }, tz: 'Asia/Kuwait', flag: 'KW', temp: 38, wx: { en: 'Hot', ar: 'حار' }, map: 'kw' },
  { id: 'om', name: { en: 'Oman', ar: 'عمان' }, city: { en: 'Muscat', ar: 'مسقط' }, tz: 'Asia/Muscat', flag: 'OM', temp: 33, wx: { en: 'Breezy', ar: 'نسيم' }, map: 'om' },
]

function Flag({ code }) {
  return <span className={`gcc-flag f-${code.toLowerCase()}`} title={code} />
}

function clock(tz, locale) {
  try {
    return new Intl.DateTimeFormat(locale, { timeZone: tz, hour: '2-digit', minute: '2-digit', weekday: 'short', day: '2-digit', month: 'short' }).format(new Date())
  } catch {
    return ''
  }
}

export function NewsTicker() {
  const { lang, copy } = useSite()
  const items = TICKER[lang] || TICKER.en
  const row = [...items, ...items]
  return (
    <div className="news-ticker" role="status">
      <span className="ticker-live">{copy.breaking}</span>
      <div className="ticker-mask">
        <div className="ticker-run">
          {row.map((item, i) => <span key={`${item}-${i}`}>{item}</span>)}
        </div>
      </div>
    </div>
  )
}

export function GccStrip() {
  const { lang, copy, setPage, setMapId } = useSite()
  const locale = lang === 'ar' ? 'ar-BH' : 'en-BH'
  const [, tick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => tick((n) => n + 1), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="gcc-strip" aria-label={copy.weather}>
      <div className="gcc-track">
        {[...GCC, ...GCC].map((g, i) => (
          <button
            key={`${g.id}-${i}`}
            className="gcc-chip"
            type="button"
            onClick={() => { setMapId(g.map); setPage('map') }}
          >
            <Flag code={g.flag} />
            <strong>{g.name[lang]}</strong>
            <em>{g.city[lang]}</em>
            <span className="gcc-clock">{clock(g.tz, locale)}</span>
            <span className="gcc-temp">{g.temp}°</span>
            <span className="gcc-wx">{g.wx[lang]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
