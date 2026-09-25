import { useState } from 'react'
import { useSite } from './SiteContext.jsx'

export const MAPS = [
  { id: 'umm', en: 'Umm Al Hassam HQ', ar: 'مقر أم الحصم', q: 'Umm+Al+Hassam+Manama+Bahrain', x: 48, y: 58 },
  { id: 'manama', en: 'Manama City', ar: 'وسط المنامة', q: 'Manama+Bahrain', x: 47, y: 53 },
  { id: 'juffair', en: 'Juffair', ar: 'الجفير', q: 'Juffair+Manama+Bahrain', x: 52, y: 55 },
  { id: 'seef', en: 'Seef District', ar: 'السيف', q: 'Seef+District+Manama', x: 44, y: 52 },
  { id: 'riffa', en: 'Riffa', ar: 'الرفاع', q: 'Riffa+Bahrain', x: 40, y: 64 },
  { id: 'amwaj', en: 'Amwaj Islands', ar: 'جزر أمواج', q: 'Amwaj+Islands+Bahrain', x: 62, y: 38 },
  { id: 'muharraq', en: 'Muharraq', ar: 'المحرق', q: 'Muharraq+Bahrain', x: 56, y: 40 },
  { id: 'saar', en: 'Saar', ar: 'سار', q: 'Saar+Bahrain', x: 34, y: 40 },
  { id: 'isa', en: 'Isa Town', ar: 'مدينة عيسى', q: 'Isa+Town+Bahrain', x: 42, y: 58 },
  { id: 'airport', en: 'Bahrain Airport', ar: 'مطار البحرين', q: 'Bahrain+International+Airport', x: 54, y: 42 },
  { id: 'port', en: 'Khalifa Bin Salman Port', ar: 'ميناء خليفة بن سلمان', q: 'Khalifa+Bin+Salman+Port+Bahrain', x: 58, y: 50 },
  { id: 'causeway', en: 'King Fahd Causeway', ar: 'جسر الملك فهد', q: 'King+Fahd+Causeway', x: 36, y: 48 },
  { id: 'sa', en: 'Khobar / Dammam', ar: 'الخبر / الدمام', q: 'Khobar+Saudi+Arabia', x: 22, y: 46 },
  { id: 'qa', en: 'Doha, Qatar', ar: 'الدوحة، قطر', q: 'Doha+Qatar', x: 68, y: 28 },
  { id: 'kw', en: 'Kuwait City', ar: 'مدينة الكويت', q: 'Kuwait+City', x: 40, y: 12 },
  { id: 'ae', en: 'Dubai, UAE', ar: 'دبي، الإمارات', q: 'Dubai+United+Arab+Emirates', x: 86, y: 62 },
  { id: 'om', en: 'Muscat, Oman', ar: 'مسقط، عمان', q: 'Muscat+Oman', x: 92, y: 78 },
]

const PHONE = '+97339350288'
const MAIL = 'dispatch@redsuntransport.bh'
const ADDR = 'Umm Al Hassam, Manama, Kingdom of Bahrain'

export function ContactChips({ compact }) {
  const { copy, lang } = useSite()
  const [copied, setCopied] = useState(false)
  async function copyAddr() {
    try { await navigator.clipboard.writeText(ADDR); setCopied(true); setTimeout(() => setCopied(false), 1600) } catch { /* ignore */ }
  }
  return (
    <div className={`contact-chips ${compact ? 'compact' : ''}`}>
      <a className="chip-btn" href={`tel:${PHONE}`}>{copy.callChip} +973 3935 0288</a>
      <a className="chip-btn" href={`https://wa.me/97339350288`} target="_blank" rel="noreferrer">{copy.whats}</a>
      <a className="chip-btn" href={`mailto:${MAIL}`}>{copy.mail}</a>
      <a className="chip-btn" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDR)}`} target="_blank" rel="noreferrer">{copy.directions}</a>
      <button className="chip-btn" type="button" onClick={copyAddr}>{copied ? copy.copied : copy.copyAddr}</button>
      <span className="chip-addr">{lang === 'ar' ? 'أم الحصم، المنامة، مملكة البحرين' : ADDR}</span>
    </div>
  )
}

export default function MapPage() {
  const { copy, lang, mapId, setMapId } = useSite()
  const active = MAPS.find((m) => m.id === mapId) || MAPS[0]
  const src = `https://maps.google.com/maps?q=${active.q}&z=11&output=embed&hl=${lang === 'ar' ? 'ar' : 'en'}`

  return (
    <section className="page-block" id="map">
      <div className="section-head">
        <div className="kicker">{copy.mapKicker}</div>
        <h2>{copy.mapTitle}</h2>
        <p>{copy.mapHint}</p>
      </div>
      <div className="map-grid">
        <div className="gcc-canvas" aria-hidden="false">
          <div className="gcc-sea" />
          <div className="gcc-land" />
          {MAPS.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`map-pin ${m.id === active.id ? 'on' : ''}`}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              onClick={() => setMapId(m.id)}
            >
              <i />
              <span>{lang === 'ar' ? m.ar : m.en}</span>
            </button>
          ))}
        </div>
        <div className="gmap-wrap">
          <iframe title={lang === 'ar' ? active.ar : active.en} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <p className="gmap-cap">{lang === 'ar' ? active.ar : active.en}</p>
        </div>
      </div>
      <ContactChips />
    </section>
  )
}
