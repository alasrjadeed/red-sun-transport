import { useEffect, useMemo, useRef, useState } from 'react'
import { api } from './api.js'
import { LogoLockup, LogoMark } from './Logo.jsx'
import HeroFleet from './HeroFleet.jsx'
import { AutoSlider, CardSlider, QuoteSlider, Marquee } from './Slider.jsx'
import { useSite } from './SiteContext.jsx'
import Seo from './Seo.jsx'
import { NewsTicker, GccStrip } from './GccBar.jsx'
import MapPage, { ContactChips } from './MapPage.jsx'
import BlogPage from './BlogPage.jsx'
import SaraChat from './SaraChat.jsx'
import FaqPage from './FaqPage.jsx'
import SettingsView, { AdminLogin } from './SettingsView.jsx'
import MovingView, { PublicEstimator } from './MovingView.jsx'
import InvoicesView from './InvoicesView.jsx'
import DocumentsView from './DocumentsView.jsx'
import FinancesView from './FinancesView.jsx'
import * as XLSX from 'xlsx'
import { exportCSV, exportExcel, exportPDF, exportJSON } from './exporters.js'

const CITIES = ['Manama', 'Juffair', 'Seef', 'Riffa', 'Muharraq', 'Sitra', 'Isa Town', 'Amwaj', 'Saar', 'Budaiya', 'Hidd', 'Riffa Views']
const LANES = ['Bahrain', 'Qatar', 'Kuwait', 'Oman', 'UAE', 'Saudi Arabia', 'King Fahd Causeway', 'Airport VIP', 'Port cargo']

const minutesAgo = (iso) => {
  if (!iso) return ''
  const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000))
  return m < 60 ? `${m}m` : `${Math.round(m / 60)}h`
}
const mapsNavLink = (destination) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`
const driverTrackUrl = (code) => `${location.origin}/?track=${encodeURIComponent(code)}`
const haversineKm = (a, b) => {
  if (!a || !b || !Number.isFinite(a.lat) || !Number.isFinite(b.lat)) return null
  const R = 6371
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const s = (Math.sin(dLat / 2) ** 2) + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * (Math.sin(dLng / 2) ** 2)
  return Math.round(R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)) * 10) / 10
}
const fmtTime = (iso) => (iso ? new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')
const STAGES = ['pickup', 'loading', 'transit', 'delivery', 'completed']
const stageNext = (cur) => { const i = STAGES.indexOf(cur); return i < 0 ? 'pickup' : STAGES[Math.min(i + 1, STAGES.length - 1)] }
const StageDots = ({ stage, labels }) => (
  <span className="stage-dots">
    {STAGES.map((s) => (
      <i key={s} className={STAGES.indexOf(stage) >= STAGES.indexOf(s) ? 'on' : ''} title={(labels && labels[STAGES.indexOf(s) + 1]) || s} />
    ))}
  </span>
)

const ALERT_TIERS = { urgent: ['🔴', 'Urgent'], attention: ['🟠', 'Attention'], upcoming: ['🟡', 'Upcoming'] }
const NAV = [
  { id: 'dashboard', label: 'Command Center' },
  { id: 'gprs', label: 'GPRS · Location' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'drivers', label: 'Drivers' },
  { id: 'trips', label: 'Trips & Dispatch' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'fuel', label: 'Fuel & Costs' },
  { id: 'incidents', label: 'Incidents' },
  { id: 'quotes', label: 'Quotes / CRM' },
  { id: 'moving', label: 'Movers & Packers' },
  { id: 'invoices', label: 'Invoices' },
  { id: 'documents', label: 'Documents' },
  { id: 'finances', label: 'Finance' },
  { id: 'settings', label: 'Settings' },
]

function Badge({ value }) {
  const key = String(value || '').toLowerCase().replace(/\s+/g, '-')
  return <span className={`badge st-${key}`}>{value}</span>
}

function Modal({ title, onClose, children }) {
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>{title}</h3>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </div>
  )
}

function ThemeLangBar() {
  const { theme, toggleTheme, lang, toggleLang, copy } = useSite()
  return (
    <div className="util-bar">
      <button type="button" className="btn btn-ghost btn-sm" onClick={toggleTheme}>{theme === 'light' ? copy.dark : copy.light}</button>
      <button type="button" className="btn btn-ghost btn-sm lang-btn" onClick={toggleLang}>{lang === 'en' ? 'AR' : 'EN'}</button>
    </div>
  )
}

function Marketing({ onOpenFleet }) {
  const { copy, lang, page, setPage } = useSite()
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', moveType: copy.types[0], from: '', to: '', date: '', notes: '',
  })

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    try {
      await api.createQuote(form)
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">
          <LogoMark className="brand-mark" />
          <div>
            {copy.brand}
            <small>{copy.brandSub}</small>
          </div>
        </a>
        <nav className="nav-links">
          <button type="button" onClick={() => setPage('home')}>{copy.nav.home}</button>
          <a href="#services" onClick={() => setPage('home')}>{copy.nav.services}</a>
          <button type="button" onClick={() => setPage('blog')}>{copy.nav.blog}</button>
          <button type="button" onClick={() => setPage('faq')}>{copy.nav.faq}</button>
          <button type="button" onClick={() => setPage('map')}>{copy.nav.map}</button>
          <a href="#quote" onClick={() => setPage('home')}>{copy.nav.quote}</a>
        </nav>
        <div className="nav-tools">
          <ThemeLangBar />
          <button className="btn btn-ghost btn-sm" onClick={onOpenFleet}>{copy.nav.ops}</button>
          <a className="btn btn-primary btn-sm" href="tel:+97339350288">{copy.nav.call}</a>
        </div>
      </header>
      <NewsTicker />
      <GccStrip />

      {page === 'blog' && <BlogPage />}
      {page === 'faq' && <FaqPage />}
      {page === 'map' && <MapPage />}

      {page === 'home' && <>
      <section className="hero-wrap" id="top">
        <HeroFleet />
        <div className="hero hero-overlay">
          <div className="hero-copy rise">
            <LogoLockup className="hero-lockup" />
            <AutoSlider slides={copy.heroSlides} />
            <div className="hero-actions">
              <a className="btn btn-primary" href="#quote">{copy.book}</a>
              <a className="btn btn-dark" href="https://wa.me/97339350288" target="_blank" rel="noreferrer">{copy.whatsapp}</a>
            </div>
            <div className="stats">
              {copy.stats.map(([n, l]) => (
                <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>
              ))}
            </div>
          </div>
          <div className="hero-card rise delay">
            <div className="kicker" style={{ color: '#ffba08' }}>{copy.onRoad}</div>
            <h2 style={{ fontSize: 28, marginBottom: 8 }}>{copy.convoyTitle}</h2>
            <p style={{ opacity: 0.85 }}>{copy.convoyCopy}</p>
            <div className="hero-meta">
              <div>{copy.hq}<br /><strong>Umm Al Hassam</strong></div>
              <div>{copy.phone}<br /><strong>+973 3935 0288</strong></div>
              <div>{copy.gccLanes}<br /><strong>QA · KW · OM · AE · SA</strong></div>
              <div>{copy.hire}<br /><strong>{copy.hireVal}</strong></div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker-band">
        <Marquee items={CITIES} />
        <Marquee items={LANES} reverse />
      </div>

      <section id="services">
        <div className="section-head">
          <div className="kicker">{copy.servicesKicker}</div>
          <h2>{copy.servicesTitle}</h2>
        </div>
        <CardSlider items={copy.services} />
      </section>

      <section className="kw-grid" id="keywords">
        <div className="section-head">
          <div className="kicker">{copy.kw.kicker}</div>
          <h2>{copy.kw.title}</h2>
          <p className="kw-line">{copy.kw.line}</p>
        </div>
        <div className="kw-groups">
          <div className="chip-group kw-areas">
            {copy.kw.areas.map((a) => <span className="chip pulse-chip" key={a}>{a}</span>)}
          </div>
          <div className="chip-group kw-services">
            {copy.kw.services.map((s) => <span className="chip" key={s}>{s}</span>)}
          </div>
        </div>
      </section>

      <section id="coverage">
        <div className="section-head">
          <div className="kicker">{copy.coverageKicker}</div>
          <h2>{copy.coverageTitle}</h2>
        </div>
        <div className="card float-card">
          <p>{copy.coverageCopy}</p>
          <div className="coverage">
            {LANES.map((c) => (
              <span className="chip pulse-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="section-head">
          <div className="kicker">{copy.whyKicker}</div>
          <h2>{copy.whyTitle}</h2>
        </div>
        <div className="grid-4">
          {copy.why.map(([t, c]) => (
            <article className="card" key={t}>
              <h3>{t}</h3>
              <p>{c}</p>
            </article>
          ))}
        </div>
      </section>

      <PublicEstimator section="estimator-sec" />

      <section id="stories">
        <div className="section-head">
          <div className="kicker">{copy.storiesKicker}</div>
          <h2>{copy.storiesTitle}</h2>
        </div>
        <QuoteSlider quotes={copy.testimonials} />
      </section>

      <section id="quote" className="contact-grid">
        <div className="contact-panel">
          <LogoMark className="panel-mark" />
          <div className="kicker" style={{ color: '#ffba08' }}>{copy.quoteKicker}</div>
          <h2>{copy.quoteTitle}</h2>
          <p style={{ margin: '12px 0 20px', opacity: 0.85 }}>{copy.quoteLead}</p>
          <p><strong>{copy.phone}</strong><br /><a href="tel:+97339350288">+973 3935 0288</a></p>
          <p style={{ marginTop: 12 }}><strong>{copy.hq}</strong><br />Umm Al Hassam, Bahrain</p>
          <p style={{ marginTop: 12 }}><strong>{copy.hours}</strong><br />{copy.hoursVal}</p>
        </div>
        <div className="card">
          {sent ? (
            <p className="success">{copy.sent}</p>
          ) : (
            <form className="quote-form" onSubmit={submit}>
              <div className="form-row">
                <label>{copy.name}<input required value={form.name} onChange={(e) => set('name', e.target.value)} /></label>
                <label>{copy.phone}<input required value={form.phone} onChange={(e) => set('phone', e.target.value)} /></label>
              </div>
              <label>{copy.email}<input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} /></label>
              <div className="form-row">
                <label>{copy.moveType}
                  <select value={form.moveType} onChange={(e) => set('moveType', e.target.value)}>
                    {copy.types.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </label>
                <label>{copy.date}<input type="date" value={form.date} onChange={(e) => set('date', e.target.value)} /></label>
              </div>
              <div className="form-row">
                <label>{copy.from}<input value={form.from} onChange={(e) => set('from', e.target.value)} /></label>
                <label>{copy.to}<input value={form.to} onChange={(e) => set('to', e.target.value)} /></label>
              </div>
              <label>{copy.notes}<textarea value={form.notes} onChange={(e) => set('notes', e.target.value)} placeholder={copy.notesPh} /></label>
              <button className="btn btn-primary" disabled={busy}>{busy ? copy.sending : copy.send}</button>
            </form>
          )}
        </div>
      </section>

      <section id="contact">
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <h2>{copy.readyTitle}</h2>
            <p>{copy.readyCopy}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="tel:+97339350288">{copy.callNow}</a>
            <button className="btn btn-dark" onClick={onOpenFleet}>{copy.openFleet}</button>
          </div>
        </div>
        <ContactChips />
      </section>
      </>}

      <footer>
        <span className="footer-powered">
          © Red Sun Transport & Movers Packers 2026 | Powered By <a href="https://alasarjadeed.com" target="_blank" rel="noopener noreferrer">AL ALASAR JADEED</a>
        </span>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/97339350288?text=Hi%20Red%20Sun%2C%20I%20need%20a%20move%20quote"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.01 3C9.4 3 4 8.38 4 14.97c0 2.6.9 5.02 2.4 6.96L4.05 29l7.4-2.3c1.4.54 2.9.86 4.56.86 6.6 0 12.01-5.39 12.01-11.98C28.02 8.38 22.62 3 16.01 3zm0 21.86c-1.5 0-2.9-.38-4.13-1.06l-.3-.17-4.4 1.37 1.37-4.27-.2-.31a9.9 9.9 0 0 1-1.58-5.45c0-5.47 4.46-9.92 9.92-9.92s9.92 4.45 9.92 9.92-4.46 9.89-9.6 9.89zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.09 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/>
        </svg>
        <span>{copy.whatsapp}</span>
      </a>
    </div>
  )
}

function ToolbarActions({ kind, all, lang, copy, onImported }) {
  const [importing, setImporting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const fileRef = useRef(null)
  const dropRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    function onDoc(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [menuOpen])

  async function handleFile(ev) {
    const file = ev.target.files && ev.target.files[0]
    ev.target.value = ''
    if (!file) return
    setImporting(true)
    try {
      let payload
      if (file.name.endsWith('.json')) {
        payload = JSON.parse(await file.text())
      } else if (file.name.endsWith('.csv')) {
        const text = await file.text()
        const rows = await new Promise((resolve, reject) => {
          import('xlsx').then((X) => {
            const wb = X.read(text, { type: 'string' })
            resolve(X.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]] || {}))
          }).catch(reject)
        })
        payload = { [kind]: rows }
      } else if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
        const buf = await file.arrayBuffer()
        const wb = await new Promise((resolve, reject) => {
          import('xlsx').then((X) => { try { resolve(X.read(buf, { type: 'array' })) } catch (e) { reject(e) } }).catch(reject)
        })
        payload = {}
        for (const name of wb.SheetNames) {
          const key = name.toLowerCase().replace(/[^a-z]/g, '')
          if (['vehicles', 'drivers', 'trips', 'maintenance', 'fuellogs', 'incidents', 'quotes', 'geoalerts', 'posts', 'movingjobs', 'invoices', 'moving', 'documents', 'expenses'].includes(key)) {
            payload[key === 'fuellogs' ? 'fuelLogs' : (key === 'geoalerts' ? 'geoAlerts' : (key === 'moving' || key === 'movingjobs' ? 'movingJobs' : key))] = XLSX.utils.sheet_to_json(wb.Sheets[name])
          }
        }
      } else {
        throw new Error('Unsupported file type')
      }
      const res = await api.importData(payload)
      alert((lang === 'ar' ? 'تم الاستيراد — ' : 'Import complete — ') + JSON.stringify(res.imported || {}))
      onImported && onImported()
    } catch (e) {
      alert('Import failed: ' + e.message)
    } finally {
      setImporting(false)
    }
  }

  return (
    <span style={{ display: 'inline-flex', gap: 8 }}>
      <input ref={fileRef} type="file" accept=".json,.csv,.xlsx,.xls" hidden onChange={handleFile} />
      <button className="btn btn-ghost btn-sm" onClick={() => fileRef.current && fileRef.current.click()} disabled={importing}>
        {copy.actions.import || 'Import'}
      </button>
      <span className="drop" ref={dropRef}>
        <button className="btn btn-ghost btn-sm" onClick={() => setMenuOpen((v) => !v)}>{copy.actions.export || 'Export'} ▾</button>
        {menuOpen && (
          <span className="drop-menu">
            <button onClick={() => { setMenuOpen(false); exportJSON(all, lang) }}>{copy.actions.json || 'JSON'}</button>
            <button onClick={() => { setMenuOpen(false); exportCSV(kind, all[kind] || []) }}>{copy.actions.csv || 'CSV'}</button>
            <button onClick={() => { setMenuOpen(false); exportExcel(all, lang) }}>{copy.actions.excel || 'Excel'}</button>
            <button onClick={() => { setMenuOpen(false); exportPDF(kind, all[kind] || [], lang, kind) }}>{copy.actions.pdf || 'PDF'}</button>
          </span>
        )}
      </span>
    </span>
  )
}

function RowActions({ kind, id, label, phone, patch, reload, extra, copy, lang }) {
  const [busy, setBusy] = useState(false)
  async function del() {
    if (!window.confirm(copy.actions.confirmDelete)) return
    setBusy(true)
    try { await api.remove(kind, id); reload() } catch (e) { alert(e.message) } finally { setBusy(false) }
  }
  async function cpy() {
    await navigator.clipboard.writeText(label)
    alert(copy.actions.copied)
  }
  function send() {
    const n = (phone || '').replace(/[^\d+]/g, '')
    if (!n) return
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(label), '_blank')
  }
  const has = phone && /[\d]/.test(phone)
  return (
    <span className="row-actions">
      {has && <button className="btn" title="WhatsApp" onClick={send}>{copy.actions.send}</button>}
      <button className="btn" title="Copy" onClick={cpy}>{copy.actions.copy}</button>
      {extra}
      <button className="btn" disabled={busy} onClick={del}>{copy.actions.delete}</button>
    </span>
  )
}

function ViewShell({ kind, all, lang, copy, onImported, children, title, toolbarExtra }) {
  return (
    <div>
      <div className="toolbar">
        <strong>{title}</strong>
        {toolbarExtra}
        <ToolbarActions kind={kind} all={all} lang={lang} copy={copy} onImported={onImported} />
      </div>
      {children}
    </div>
  )
}

function CommandCenter({ data, onRefresh }) {
  if (!data) return <p>Loading operations…</p>
  const { lang, copy } = useSite()
  const { kpis, alerts, liveMap, recentTrips, blogAutopilot, geoAlerts, hq, stageCounts } = data
  const [parkOpen, setParkOpen] = useState(false)
  const [parkForm, setParkForm] = useState({ link: '', location: '' })
  const [insight, setInsight] = useState(null)
  const [insightBusy, setInsightBusy] = useState(false)
  const [alertsOpen, setAlertsOpen] = useState(() => localStorage.getItem('rs:ccalerts') !== '0')
  const en = lang === 'en'
  const postList = blogAutopilot?.posts || []
  const unacked = (geoAlerts || []).filter((a) => !a.acked).length
  const toggleAlerts = () => setAlertsOpen((v) => { localStorage.setItem('rs:ccalerts', v ? '0' : '1'); return !v })
  const pipeline = stageCounts
    ? [['pickup', copy.track.stagePickup], ['loading', copy.track.stageLoading], ['transit', copy.track.stageTransit], ['delivery', copy.track.stageDelivery]].map(([k, l]) => ({ k, l, n: stageCounts[k] || 0 }))
    : []
  const runInsight = async () => { setInsightBusy(true); try { const r = await api.aiInsight({ lang }); setInsight(r.text) } finally { setInsightBusy(false) } }
  return (
    <div>
      <div className="kpis">
        {[
          [kpis.vehicles, 'Vehicles'],
          [kpis.drivers, 'Drivers'],
          [kpis.activeTrips, 'Live trips'],
          [`${kpis.utilization}%`, 'Utilization'],
          [`BHD ${kpis.revenueBhd}`, 'Completed revenue'],
          [(kpis.activeMoves ?? '–'), 'Moves active'],
          [kpis.movesCompleted ?? '–', 'Moves done'],
          [`BHD ${kpis.invoiceOutstanding ?? '–'}`, 'Invoices open'],
          [kpis.docsExpired ?? 0, 'Docs expired'],
          [kpis.docsExpiring30 ?? 0, 'Docs in 30d'],
          [kpis.docsExpiring90 ?? 0, 'Docs in 90d'],
          [`BHD ${kpis.monthNet ?? '–'}`, 'Net (month)'],
          [`BHD ${kpis.monthExpense ?? '–'}`, 'Expenses (month)'],
        ].map(([n, l]) => (
          <div className="kpi" key={l}><div className="n">{n}</div><div className="l">{l}</div></div>
        ))}
      </div>
      {pipeline.length > 0 && (
        <div className="pipeline board">
          {pipeline.map((p) => (
            <div className="pipeline-slot" key={p.k}>
              <span className="badge st-on-trip">{p.n}</span>
              <span>{p.l}</span>
            </div>
          ))}
          <div className="pipeline-slot"><span className="badge st-completed">{kpis.completedToday || 0}</span><span>{copy.track.stageToday}</span></div>
        </div>
      )}
      <div className="card-grid autopilot-grid">
        <article className="card outpost-card">
          <div className="card-head">
            <span className="badge">{copy.autopilot.badge}</span>
            <button className="btn btn-ghost btn-sm" onClick={onRefresh}>{copy.autopilot.chip}</button>
          </div>
          {postList.length === 0 ? (
            <p className="muted">{copy.autopilot.empty}</p>
          ) : (
            <ul className="outpost-list">
              {postList.slice(0, 3).map((p) => {
                const v = en ? p.en : p.ar
                const label = v == null ? '' : (typeof v === 'string' ? v : (v.title || v.body || ''))
                return (
                  <li key={p.id} dir={en ? 'ltr' : 'rtl'}>
                    <strong>{label}</strong>
                    <span className="chips">{p.status}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </article>
        <article className="card outpost-card">
          <div className="card-head">
            <span className="badge">{copy.geoAlertsCard.badge} {unacked > 0 ? `· ${unacked}` : ''}</span>
            <button className="btn btn-ghost btn-sm" onClick={onRefresh}>{copy.geoAlertsCard.run}</button>
          </div>
          {!geoAlerts || geoAlerts.length === 0 ? (
            <p className="muted">{copy.geoAlertsCard.empty}</p>
          ) : (
            <ul className="outpost-list">
              {geoAlerts.slice(0, 3).map((a) => (
                <li key={a.id} dir={en ? 'ltr' : 'rtl'}>
                  <strong>{en ? a.en : a.ar}</strong>
                  <span className="chips">{a.acked ? copy.geoAlertsCard.ack : copy.geoAlertsCard.run}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      <article className="card outpost-card">
          <div className="card-head">
            <span className="badge">Fleet AI</span>
            <button className="btn btn-ghost btn-sm" onClick={runInsight} disabled={insightBusy}>{insightBusy ? '…' : copy.track.aiInsight}</button>
          </div>
          {!insight ? (
            <p className="muted">{copy.track.aiInsightEmpty}</p>
          ) : (
            <p dir={en ? 'ltr' : 'rtl'} style={{ whiteSpace: 'pre-wrap' }}>{insight}</p>
          )}
        </article>
      </div>
      <div className="two-col">
        <div>
          <div className="toolbar">
            <strong>Live map · Bahrain</strong>
            <button className="btn btn-ghost btn-sm" onClick={() => { setParkForm({ link: '', location: hq?.location || '' }); setParkOpen(true) }}>🏠 {copy.track.setParking}</button>
            <button className="btn btn-ghost btn-sm" onClick={onRefresh}>Refresh</button>
          </div>
          <div className="map">
            {hq && (
              <span className="pin hq" style={{ left: `${12 + ((hq.lng - 50.52) / 0.16) * 76}%`, top: `${78 - ((hq.lat - 26.12) / 0.16) * 70}%` }}>
                <a href={mapsNavLink(hq.location)} target="_blank" rel="noreferrer" title={hq.location}>🏠 {copy.track.parking}</a>
              </span>
            )}
            {liveMap.map((v, i) => {
              const left = 12 + ((v.gps.lng - 50.52) / 0.16) * 76
              const top = 78 - ((v.gps.lat - 26.12) / 0.16) * 70
              const gLink = `https://www.google.com/maps?q=${v.gps.lat.toFixed(5)},${v.gps.lng.toFixed(5)}`
              return (
                <a
                  key={v.id}
                  className={`pin ${v.status}`}
                  href={gLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ left: `${Math.min(92, Math.max(8, left))}%`, top: `${Math.min(88, Math.max(10, top + i))}%` }}
                  title={`${v.plate} · ${v.gps.location} · ${copy.openInMaps}`}
                >
                  {v.plate} · {v.status}
                </a>
              )
            })}
          </div>
          <div className="table-wrap" style={{ marginTop: 12 }}>
            <table>
              <thead>
                <tr><th>Code</th><th>Customer</th><th>Lane</th><th>Asset</th><th>Status</th></tr>
              </thead>
              <tbody>
                {recentTrips.map((t) => (
                  <tr key={t.id}>
                    <td>{t.code}</td>
                    <td>{t.customer}</td>
                    <td>{t.origin} → {t.destination}</td>
                    <td>{t.vehicle?.plate || '—'} / {t.driver?.name || '—'}</td>
                    <td><StageDots stage={t.stage} labels={[copy.track.stagePickup, copy.track.stageLoading, copy.track.stageTransit, copy.track.stageDelivery, copy.track.stageCompleted]} /> <Badge value={t.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm" title={alertsOpen ? 'Hide panel' : 'Show panel'} style={{ width: '100%', justifyContent: 'space-between' }} onClick={toggleAlerts}>
            <strong>Compliance & alerts</strong> <span>{alertsOpen ? '▾' : '▸'}</span>
          </button>
          {!alertsOpen && (
            <div className="alert" style={{ marginTop: 10, cursor: 'pointer' }} onClick={toggleAlerts}>
              {alerts.length > 0 ? `${alerts.filter((a) => a.severity === 'urgent').length} urgent · ${alerts.length} total` : 'All clear'} · Maint {kpis.openMaintenance} · Inc {kpis.openIncidents}
            </div>
          )}
          {alertsOpen && (<>
          <button className="btn btn-ghost btn-sm" title="Load demo alerts" onClick={async () => { await api.alertsSeed(); onRefresh && onRefresh() }}>🧪</button>
          <div className="alert-list" style={{ marginTop: 10 }}>
            {alerts.length === 0 && <div className="alert">All clear.</div>}
            {alerts.map((a) => {
              const tl = ALERT_TIERS[a.severity] || ['', a.severity]
              return (
                <div key={a.id} className={`alert ${a.severity}`}><b>{tl[0]} {tl[1]}</b> · {a.message}</div>
              )
            })}
          </div>
          <div className="card" style={{ marginTop: 12 }}>
            <p><strong>Open maintenance</strong> {kpis.openMaintenance}</p>
            <p><strong>Open incidents</strong> {kpis.openIncidents}</p>
            <p><strong>New quotes</strong> {kpis.pendingQuotes}</p>
            <p><strong>Fuel spend</strong> BHD {kpis.fuelCostBhd}</p>
            <p><strong>Move jobs</strong> {kpis.openInquiries ?? '–'} open</p>
          </div>
          </>)}
        </div>
      </div>

      {parkOpen && (
        <Modal title={copy.track.parkingTitle} onClose={() => setParkOpen(false)}>
          <form className="form" onSubmit={async (e) => {
            e.preventDefault()
            await api.setParking(parkForm)
            setParkOpen(false)
            onRefresh()
          }}>
            <label>{copy.track.parkingName}
              <input value={parkForm.location} onChange={(e) => setParkForm({ ...parkForm, location: e.target.value })} />
            </label>
            <label>{copy.openInMaps}
              <input dir="ltr" placeholder={copy.track.parkingLinkPh} value={parkForm.link} onChange={(e) => setParkForm({ ...parkForm, link: e.target.value })} />
            </label>
            <button className="btn btn-primary">{copy.track.save}</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

function MediaModal({ entity, record, onClose, onChanged }) {
  const { copy } = useSite()
  const md = copy.media || {}
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [title, setTitle] = useState('')
  const [upPhoto, setUpPhoto] = useState(null)
  const [upDoc, setUpDoc] = useState(null)
  const isDriver = entity === 'driver'
  const upl = isDriver ? api.uplDriverMedia : api.uplVehicleMedia
  const del = isDriver ? api.delDriverMedia : api.delVehicleMedia
  const fileUrl = (mid) => (isDriver ? api.driverMediaFile(record.id, mid) : api.vehicleMediaFile(record.id, mid))

  const pick = (setter) => (f) => {
    if (!f) return
    setter(null)
    const rd = new FileReader()
    rd.onload = () => setter({ name: f.name, dataUrl: rd.result })
    rd.readAsDataURL(f)
  }
  const savePhoto = async () => {
    if (!upPhoto) return
    setBusy(true); setMsg('')
    try { await upl(record.id, { kind: 'photo', file: upPhoto }); setUpPhoto(null); onChanged() } catch (e) { setMsg(String(e.message || e)) }
    setBusy(false)
  }
  const saveDoc = async () => {
    if (!upDoc) return
    setBusy(true); setMsg('')
    try { await upl(record.id, { kind: 'document', title: title.trim() || upDoc.name, file: upDoc }); setTitle(''); setUpDoc(null); onChanged() } catch (e) { setMsg(String(e.message || e)) }
    setBusy(false)
  }
  const removeDoc = async (mid) => {
    if (!window.confirm(md.confirmDel)) return
    await del(record.id, mid); onChanged()
  }

  return (
    <Modal title={md.title} onClose={onClose}>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 180px' }}>
          <img src={record.photo ? fileUrl(record.photo.id) : ''} alt="" style={{ width: 160, height: 120, objectFit: 'cover', borderRadius: 8, background: 'var(--bg-2, #eee)' }} />
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            <label className="btn btn-ghost btn-sm" style={{ cursor: 'pointer' }}>{md.changePhoto}
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(setUpPhoto)(e.target.files?.[0])} />
            </label>
            {record.photo && (
              <button className="btn btn-ghost btn-sm" onClick={async () => { await del(record.id, record.photo.id); onChanged() }}>🗑</button>
            )}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 230 }}>
          <strong>{md.documents} ({record.documents?.length || 0})</strong>
          <ul className="minilist" style={{ marginTop: 6 }}>
            {(record.documents || []).map((doc) => (
              <li key={doc.id} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <a href={fileUrl(doc.id)} target="_blank" rel="noreferrer" style={{ flex: 1 }}>{doc.title || doc.name}</a>
                <button className="btn btn-ghost btn-sm" onClick={() => removeDoc(doc.id)}>🗑</button>
              </li>
            ))}
            {!record.documents?.length && <li className="muted">{md.noDocs}</li>}
          </ul>
          <form onSubmit={(e) => { e.preventDefault(); saveDoc() }} style={{ marginTop: 8 }}>
            <input placeholder={md.docTitlePh} value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: '100%' }} />
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <label className="btn btn-ghost btn-sm" style={{ cursor: 'pointer' }}>{upDoc?.name || md.chooseFile}
                <input type="file" style={{ display: 'none' }} onChange={(e) => pick(setUpDoc)(e.target.files?.[0])} />
              </label>
              <button className="btn btn-primary btn-sm" type="submit" disabled={busy || !upDoc}>{copy.track.save}</button>
            </div>
          </form>
          {upPhoto && (
            <div style={{ display: 'flex', gap: 6, marginTop: 8, alignItems: 'center' }}>
              <span className="muted" style={{ fontSize: 12 }}>{upPhoto.name}</span>
              <button className="btn btn-primary btn-sm" onClick={savePhoto} disabled={busy}>{copy.track.save}</button>
            </div>
          )}
          {msg && <div className="err" style={{ marginTop: 6 }}>{msg}</div>}
        </div>
      </div>
    </Modal>
  )
}

function VehiclesView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [mediaFor, setMediaFor] = useState(null)
  const [form, setForm] = useState({ plate: '', name: '', type: 'Box Truck', make: '', model: '', capacity: '', status: 'idle' })

  const load = () => api.vehicles().then(setRows)
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    await api.createVehicle(form)
    setOpen(false)
    load()
  }

  async function setStatus(id, status) {
    await api.patchVehicle(id, { status })
    load()
  }

  const all = useMemo(() => ({ vehicles: rows }), [rows])
  const labelOf = (v) => `Red Sun vehicle — ${v.name} (${v.plate}), ${v.type}, fuel ${v.fuelLevel}%, ${v.gps?.location || ''}`

  return (
    <div>
      <div className="toolbar">
        <input placeholder="Search plate, type…" onChange={(e) => {
          const q = e.target.value.toLowerCase()
          api.vehicles().then((all) => setRows(all.filter((v) => `${v.plate} ${v.name} ${v.type}`.toLowerCase().includes(q))))
        }} style={{ maxWidth: 240 }} />
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>{copy.actions.add} vehicle</button>
        <ToolbarActions kind="vehicles" all={all} lang={lang} copy={copy} onImported={() => api.vehicles().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Plate</th><th>Unit</th><th>Type</th><th>Status</th><th>Fuel</th><th>Driver</th>
              <th>Location</th><th>Insurance</th><th>Insp.</th><th>Permit</th><th>Own</th><th>Service</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id}>
                <td><strong>{v.plate}</strong></td>
                <td>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {v.photo && <a href={api.vehicleMediaFile(v.id, v.photo.id)} target="_blank" rel="noreferrer"><img src={api.vehicleMediaFile(v.id, v.photo.id)} alt="" style={{ width: 40, height: 30, objectFit: 'cover', borderRadius: 4 }} /></a>}
                    <div>{v.name}<br /><span style={{ color: 'var(--ink-2)' }}>{v.make} {v.model}</span></div>
                  </div>
                </td>
                <td>{v.type}</td>
                <td><Badge value={v.status} /></td>
                <td>{v.fuelLevel}%</td>
                <td>{v.driver?.name || 'Unassigned'}</td>
                <td>{v.gps?.location}</td>
                <td>{v.insuranceDays}d</td>
                <td>{v.inspectionDays != null ? `${v.inspectionDays}d` : '—'}</td>
                <td>{v.permitDays != null ? `${v.permitDays}d` : '—'}</td>
                <td>{v.ownership || 'owned'} {v.ownership === 'lease' ? `· ${v.leaseDays != null ? v.leaseDays + 'd' : ''}` : ''}</td>
                <td>{v.serviceDays}d</td>
                <td>
                  <select value={v.status} onChange={(e) => setStatus(v.id, e.target.value)}>
                    {['active', 'on-trip', 'idle', 'maintenance'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td><RowActions kind="vehicles" id={v.id} label={labelOf(v)} phone={v.driver?.phone} reload={load} copy={copy} lang={lang} /><button className="btn btn-sm btn-ghost" title="Photo & documents" onClick={() => setMediaFor(v)}>📷</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Add vehicle" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <div className="form-row">
              <label>Plate<input required value={form.plate} onChange={(e) => setForm({ ...form, plate: e.target.value })} /></label>
              <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Type
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {['Car', 'Box Truck', 'Flatbed', 'Cargo Van', 'Trailer', 'Bus', 'Pickup', 'Reefer'].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>Status
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                  {['idle', 'active', 'on-trip', 'maintenance'].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>Make<input value={form.make} onChange={(e) => setForm({ ...form, make: e.target.value })} /></label>
              <label>Model<input value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} /></label>
            </div>
            <label>Capacity<input value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} /></label>
            <details style={{ marginTop: 8 }}>
              <summary style={{ cursor: 'pointer', color: 'var(--ink-2)' }}>📋 Compliance — insurance, inspection, permit</summary>
              <div className="form-row" style={{ marginTop: 8 }}>
                <label>Insurance expiry<input type="date" value={form.insuranceExpiry || ''} onChange={(e) => setForm({ ...form, insuranceExpiry: e.target.value })} /></label>
                <label>Registration expiry<input type="date" value={form.registrationExpiry || ''} onChange={(e) => setForm({ ...form, registrationExpiry: e.target.value })} /></label>
              </div>
              <div className="form-row" style={{ marginTop: 8 }}>
                <label>Inspection expiry<input type="date" value={form.inspectionExpiry || ''} onChange={(e) => setForm({ ...form, inspectionExpiry: e.target.value })} /></label>
                <label>Permit expiry<input type="date" value={form.permitExpiry || ''} onChange={(e) => setForm({ ...form, permitExpiry: e.target.value })} /></label>
              </div>
              <div className="form-row" style={{ marginTop: 8 }}>
                <label>Ownership
                  <select value={form.ownership || 'owned'} onChange={(e) => setForm({ ...form, ownership: e.target.value })}>
                    <option value="owned">Owned</option>
                    <option value="lease">Lease</option>
                  </select>
                </label>
                {form.ownership === 'lease' && <label>Lease expiry<input type="date" value={form.leaseExpiry || ''} onChange={(e) => setForm({ ...form, leaseExpiry: e.target.value })} /></label>}
              </div>
            </details>
            <button className="btn btn-primary">Save unit</button>
          </form>
        </Modal>
      )}
      {mediaFor && (
        <MediaModal entity="vehicle" record={mediaFor} onClose={() => setMediaFor(null)} onChanged={() => { load(); if (mediaFor) api.vehicles().then((list) => { const r = list.find((x) => x.id === mediaFor.id); if (r) setMediaFor(r) }) }} />
      )}
    </div>
  )
}

function DriversView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', licenseNo: '', licenseClass: 'Heavy', status: 'standby' })
  const [manageFor, setManageFor] = useState(null)
  const [mediaFor, setMediaFor] = useState(null)
  const [manForm, setManForm] = useState({ commissionPct: '5', baseSalary: '0' })
  const [att, setAtt] = useState({ date: new Date().toISOString().slice(0, 10), status: 'present' })
  const [viol, setViol] = useState({ date: new Date().toISOString().slice(0, 10), type: '', points: 0 })
  const load = () => api.drivers().then(setRows)
  useEffect(() => { load() }, [])

  const all = useMemo(() => ({ drivers: rows }), [rows])

  async function create(e) {
    e.preventDefault()
    await api.createDriver(form)
    setOpen(false)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>{copy.actions.add} driver</button>
        <ToolbarActions kind="drivers" all={all} lang={lang} copy={copy} onImported={() => api.drivers().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Driver</th><th>Status</th><th>License</th><th>Expires</th><th>Vehicle</th>
              <th>Rating</th><th>Trips</th><th>Hours / wk</th><th>Com%</th><th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id}>
                <td>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {d.photo && <a href={api.driverMediaFile(d.id, d.photo.id)} target="_blank" rel="noreferrer"><img src={api.driverMediaFile(d.id, d.photo.id)} alt="" style={{ width: 40, height: 30, objectFit: 'cover', borderRadius: 4 }} /></a>}
                    <div><strong>{d.name}</strong><br />{d.phone}</div>
                  </div>
                </td>
                <td><Badge value={d.status} /></td>
                <td>{d.licenseClass}<br />{d.licenseNo}</td>
                <td>{d.licenseDays}d</td>
                <td>{d.vehicle?.plate || '—'}</td>
                <td>{d.rating}</td>
                <td>{d.tripsCompleted}</td>
                <td>{d.hoursThisWeek}</td>
                <td>{d.commissionPct != null ? `${d.commissionPct}%` : '—'}</td>
                <td>
                  <span className="status-actions">
                    {['on-duty', 'standby', 'off-duty', 'leave'].map((s) => (
                      <button key={s} title={s}
                        className={`btn btn-sm ${d.status === s ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={async () => { await api.patchDriver(d.id, { status: s }); load() }}>{s}</button>
                    ))}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm" onClick={() => { setManageFor(d); setManForm({ commissionPct: `${d.commissionPct ?? 5}`, baseSalary: `${d.baseSalary ?? 0}` }) }}>⚙ {copy.track.manageDriver}</button>
                  <button className="btn btn-sm btn-ghost" title="Photo & documents" onClick={() => setMediaFor(d)}>📷</button>
                </td>
                <td><RowActions kind="drivers" id={d.id} label={`Red Sun driver — ${d.name} (${d.phone}), ${d.licenseClass} ${d.licenseNo}`} phone={d.phone} reload={load} copy={copy} lang={lang} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Add driver" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label>Phone<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
            <div className="form-row">
              <label>License no<input value={form.licenseNo} onChange={(e) => setForm({ ...form, licenseNo: e.target.value })} /></label>
              <label>Class<input value={form.licenseClass} onChange={(e) => setForm({ ...form, licenseClass: e.target.value })} /></label>
            </div>
            <button className="btn btn-primary">Save driver</button>
          </form>
        </Modal>
      )}
      {manageFor && (
        <Modal title={`⚙ ${copy.track.manageDriver} · ${manageFor.name}`} onClose={() => setManageFor(null)}>
          <form className="form" onSubmit={async (e) => {
            e.preventDefault()
            await api.patchDriver(manageFor.id, { commissionPct: Number(manForm.commissionPct), baseSalary: Number(manForm.baseSalary) })
            load()
          }}>
            <div className="form-row">
              <label>{copy.track.commission} %<input type="number" step="0.5" value={manForm.commissionPct} onChange={(e) => setManForm({ ...manForm, commissionPct: e.target.value })} /></label>
              <label>{copy.track.baseSalary} BHD<input type="number" step="10" value={manForm.baseSalary} onChange={(e) => setManForm({ ...manForm, baseSalary: e.target.value })} /></label>
            </div>
            <button className="btn btn-primary">{copy.track.save}</button>
          </form>
          <div style={{ marginTop: 12 }}>
            <strong>{copy.track.attendance} ({manageFor.attendance?.length || 0})</strong>
            <form className="form form-row" onSubmit={async (e) => {
              e.preventDefault()
              await api.patchDriver(manageFor.id, { attendance: [...(manageFor.attendance || []), { ...att }] })
              api.drivers().then(setRows).then(() => setManageFor((m) => ({ ...m, attendance: [...(m.attendance || []), { ...att }] })))
            }}>
              <input type="date" value={att.date} onChange={(e) => setAtt({ ...att, date: e.target.value })} />
              <select value={att.status} onChange={(e) => setAtt({ ...att, status: e.target.value })}>
                {['present', 'leave', 'absent', 'overtime'].map((s) => <option key={s}>{s}</option>)}
              </select>
              <button className="btn btn-sm btn-primary">{copy.track.add}</button>
            </form>
            <ul className="minilist">{(manageFor.attendance || []).slice(-5).reverse().map((a, i) => <li key={i}>{a.date} · <Badge value={a.status} /></li>)}</ul>
          </div>
          <div style={{ marginTop: 12 }}>
            <strong>{copy.track.violations} ({manageFor.violations?.length || 0})</strong>
            <form className="form form-row" onSubmit={async (e) => {
              e.preventDefault()
              await api.patchDriver(manageFor.id, { violations: [...(manageFor.violations || []), { ...viol }] })
              api.drivers().then(setRows).then(() => setManageFor((m) => ({ ...m, violations: [...(m.violations || []), { ...viol }] })))
            }}>
              <input type="date" value={viol.date} onChange={(e) => setViol({ ...viol, date: e.target.value })} />
              <input placeholder={copy.track.violType} value={viol.type} onChange={(e) => setViol({ ...viol, type: e.target.value })} />
              <input type="number" min="0" max="14" placeholder="pts" value={viol.points} onChange={(e) => setViol({ ...viol, points: e.target.value })} />
              <button className="btn btn-sm btn-primary">{copy.track.add}</button>
            </form>
            <ul className="minilist">{(manageFor.violations || []).slice(-5).reverse().map((v, i) => <li key={i}>{v.date} · {v.type || '—'} · {v.points}pts</li>)}</ul>
          </div>
        </Modal>
      )}
      {mediaFor && (
        <MediaModal entity="driver" record={mediaFor} onClose={() => setMediaFor(null)} onChanged={() => { load(); if (mediaFor) api.drivers().then((list) => { const r = list.find((x) => x.id === mediaFor.id); if (r) setMediaFor(r) }) }} />
      )}
    </div>
  )
}

function TripsView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [drivers, setDrivers] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ customer: '', type: 'Residential', origin: '', destination: '', vehicleId: '', driverId: '', fare: '', cargo: '' })
  const load = () => Promise.all([api.trips(), api.vehicles(), api.drivers()]).then(([t, v, d]) => { setRows(t); setVehicles(v); setDrivers(d) })
  useEffect(() => { load() }, [])

  const all = useMemo(() => ({ trips: rows, vehicles, drivers }), [rows, vehicles, drivers])

  async function create(e) {
    e.preventDefault()
    await api.createTrip({ ...form, fare: Number(form.fare) || 0, status: 'scheduled' })
    setOpen(false)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>{copy.actions.add} trip</button>
        <ToolbarActions kind="trips" all={all} lang={lang} copy={copy} onImported={() => api.trips().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Code</th><th>Type</th><th>Customer</th><th>Lane</th><th>Vehicle</th><th>Driver</th><th>Fare</th><th>Stage</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((t) => {
              const labels = [copy.track.stagePickup, copy.track.stageLoading, copy.track.stageTransit, copy.track.stageDelivery, copy.track.stageCompleted]
              const ns = stageNext(t.stage)
              const done = t.stage === 'completed' || t.status === 'completed' || t.status === 'cancelled'
              return (
              <tr key={t.id}>
                <td>{t.code}</td>
                <td>{t.type}</td>
                <td>{t.customer}</td>
                <td>{t.origin} → {t.destination}</td>
                <td>{t.vehicle?.plate || '—'}</td>
                <td>{t.driver?.name || '—'}</td>
                <td>BHD {t.fare}</td>
                <td>
                  <div className="stage-cell">
                    <StageDots stage={t.stage === 'cancelled' ? null : t.stage} labels={labels} />
                    <span className="muted">{labels[STAGES.indexOf(ns)]}</span>
                    {done && t.invoiceId === undefined && (
                      <button className="btn btn-sm"
                        onClick={async () => { await api.invoiceFromTrip(t.id); load() }}>
                        🧾 {copy.invoiceTitle || 'Invoice'}
                      </button>
                    )}
                    {!done && t.status !== 'cancelled' && (
                      <button className="btn btn-sm btn-primary"
                        onClick={async () => { await api.patchTrip(t.id, { stage: ns }); load() }}>
                        {ns === 'completed' ? copy.track.stageComplete : copy.track.stageNext}
                      </button>
                    )}
                  </div>
                </td>
                <td>
                  <select value={t.status} onChange={async (e) => { await api.patchTrip(t.id, { status: e.target.value }); load() }}>
                    {['scheduled', 'in-progress', 'completed', 'cancelled'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td><RowActions kind="trips" id={t.id} label={`Red Sun trip ${t.code} — ${t.customer}, ${t.origin} → ${t.destination}, fare BHD ${t.fare}`} phone={t.driver?.phone} extra={t.received ? <button className="btn" disabled>✓ {copy.actions.receive}</button> : <button className="btn" onClick={async () => { await api.patchTrip(t.id, { received: true }); load() }}>{copy.actions.receive}</button>} reload={load} copy={copy} lang={lang} /></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Dispatch trip" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <div className="form-row">
              <label>Customer<input required value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} /></label>
              <label>Type
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {['Residential', 'Commercial', 'International', 'Special', 'Passenger'].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>Origin<input required value={form.origin} onChange={(e) => setForm({ ...form, origin: e.target.value })} /></label>
              <label>Destination<input required value={form.destination} onChange={(e) => setForm({ ...form, destination: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Vehicle
                <select value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}>
                  <option value="">Unassigned</option>
                  {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate} · {v.name}</option>)}
                </select>
              </label>
              <label>Driver
                <select value={form.driverId} onChange={(e) => setForm({ ...form, driverId: e.target.value })}>
                  <option value="">Unassigned</option>
                  {drivers.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>Fare BHD<input type="number" value={form.fare} onChange={(e) => setForm({ ...form, fare: e.target.value })} /></label>
              <label>Cargo<input value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} /></label>
            </div>
            <button className="btn btn-primary">Create job</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

function MaintenanceView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ vehicleId: '', type: 'Preventive', title: '', cost: '', technician: '' })
  const load = () => Promise.all([api.maintenance(), api.vehicles()]).then(([m, v]) => { setRows(m); setVehicles(v) })
  useEffect(() => { load() }, [])

  const all = useMemo(() => ({ maintenance: rows, vehicles }), [rows, vehicles])

  async function create(e) {
    e.preventDefault()
    await api.createMaintenance({ ...form, cost: Number(form.cost) || 0 })
    setOpen(false)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>New work order</button>
        <ToolbarActions kind="maintenance" all={all} lang={lang} copy={copy} onImported={() => api.maintenance().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Vehicle</th><th>Type</th><th>Job</th><th>Workshop</th><th>Tech</th><th>Cost</th><th>Due</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((m) => (
              <tr key={m.id}>
                <td>{m.vehicle?.plate || m.vehicleId}</td>
                <td>{m.type}</td>
                <td>{m.title}</td>
                <td>{m.workshop}</td>
                <td>{m.technician}</td>
                <td>BHD {m.cost}</td>
                <td>{m.dueAt}</td>
                <td>
                  <select value={m.status} onChange={async (e) => { await api.patchMaintenance(m.id, { status: e.target.value }); load() }}>
                    {['open', 'scheduled', 'in-progress', 'completed'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td><RowActions kind="maintenance" id={m.id} label={`Red Sun work order — ${m.title} (${m.type}) on ${m.vehicle?.plate || m.vehicleId}, BHD ${m.cost}, due ${m.dueAt}`} reload={load} copy={copy} lang={lang} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Work order" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <label>Vehicle
              <select required value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}>
                <option value="">Select</option>
                {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate}</option>)}
              </select>
            </label>
            <label>Title<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
            <div className="form-row">
              <label>Type
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  {['Preventive', 'Corrective', 'Inspection'].map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>Cost<input type="number" value={form.cost} onChange={(e) => setForm({ ...form, cost: e.target.value })} /></label>
            </div>
            <label>Technician<input value={form.technician} onChange={(e) => setForm({ ...form, technician: e.target.value })} /></label>
            <button className="btn btn-primary">Save</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

function FuelView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ vehicleId: '', liters: '', cost: '', station: '', odometer: '' })
  const load = () => Promise.all([api.fuel(), api.vehicles()]).then(([f, v]) => { setRows(f); setVehicles(v) })
  useEffect(() => { load() }, [])
  const total = useMemo(() => rows.reduce((s, r) => s + (r.cost || 0), 0), [rows])
  const all = useMemo(() => ({ fuelLogs: rows, vehicles }), [rows, vehicles])

  async function create(e) {
    e.preventDefault()
    await api.createFuel({ ...form, liters: Number(form.liters), cost: Number(form.cost), odometer: Number(form.odometer) })
    setOpen(false)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <strong>Fuel spend BHD {total}</strong>
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>Log fill</button>
        <ToolbarActions kind="fuelLogs" all={all} lang={lang} copy={copy} onImported={() => api.fuel().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>When</th><th>Vehicle</th><th>Station</th><th>Liters</th><th>Cost</th><th>Odo</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f.id}>
                <td>{new Date(f.filledAt).toLocaleString()}</td>
                <td>{f.vehicle?.plate || f.vehicleId}</td>
                <td>{f.station}</td>
                <td>{f.liters}</td>
                <td>BHD {f.cost}</td>
                <td>{f.odometer}</td>
                <td><RowActions kind="fuelLogs" id={f.id} label={`Red Sun fuel — ${f.station}, ${f.liters}L, BHD ${f.cost}, ${f.vehicle?.plate || f.vehicleId}`} reload={load} copy={copy} lang={lang} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Fuel log" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <label>Vehicle
              <select required value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}>
                <option value="">Select</option>
                {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate}</option>)}
              </select>
            </label>
            <div className="form-row">
              <label>Liters<input type="number" required value={form.liters} onChange={(e) => setForm({ ...form, liters: e.target.value })} /></label>
              <label>Cost BHD<input type="number" required value={form.cost} onChange={(e) => setForm({ ...form, cost: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Station<input value={form.station} onChange={(e) => setForm({ ...form, station: e.target.value })} /></label>
              <label>Odometer<input type="number" value={form.odometer} onChange={(e) => setForm({ ...form, odometer: e.target.value })} /></label>
            </div>
            <button className="btn btn-primary">Save fill</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

function IncidentsView() {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [drivers, setDrivers] = useState([])
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ title: '', type: 'Mechanical', severity: 'low', vehicleId: '', driverId: '', notes: '' })
  const load = () => Promise.all([api.incidents(), api.vehicles(), api.drivers()]).then(([i, v, d]) => { setRows(i); setVehicles(v); setDrivers(d) })
  useEffect(() => { load() }, [])

  const all = useMemo(() => ({ incidents: rows, vehicles, drivers }), [rows, vehicles, drivers])

  async function create(e) {
    e.preventDefault()
    await api.createIncident(form)
    setOpen(false)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>Report incident</button>
        <ToolbarActions kind="incidents" all={all} lang={lang} copy={copy} onImported={() => api.incidents().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Title</th><th>Type</th><th>Severity</th><th>Asset</th><th>Driver</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((i) => (
              <tr key={i.id}>
                <td>{i.title}</td>
                <td>{i.type}</td>
                <td><Badge value={i.severity} /></td>
                <td>{i.vehicle?.plate || '—'}</td>
                <td>{i.driver?.name || '—'}</td>
                <td>
                  <select value={i.status} onChange={async (e) => { await api.patchIncident(i.id, { status: e.target.value }); load() }}>
                    {['open', 'closed'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td><RowActions kind="incidents" id={i.id} label={`Red Sun incident — ${i.title} (${i.type}, ${i.severity}) on ${i.vehicle?.plate || '—'} · driver ${i.driver?.name || '—'}`} phone={i.driver?.phone} reload={load} copy={copy} lang={lang} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <Modal title="Incident" onClose={() => setOpen(false)}>
          <form className="form" onSubmit={create}>
            <label>Title<input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></label>
            <div className="form-row">
              <label>Type<input value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} /></label>
              <label>Severity
                <select value={form.severity} onChange={(e) => setForm({ ...form, severity: e.target.value })}>
                  {['low', 'medium', 'high'].map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>Vehicle
                <select value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}>
                  <option value="">None</option>
                  {vehicles.map((v) => <option key={v.id} value={v.id}>{v.plate}</option>)}
                </select>
              </label>
              <label>Driver
                <select value={form.driverId} onChange={(e) => setForm({ ...form, driverId: e.target.value })}>
                  <option value="">None</option>
                  {drivers.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </label>
            </div>
            <label>Notes<textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} /></label>
            <button className="btn btn-primary">File report</button>
          </form>
        </Modal>
      )}
    </div>
  )
}

function QuotesView({ onGoto }) {
  const { lang, copy } = useSite()
  const [rows, setRows] = useState([])
  const [flash, setFlash] = useState('')
  const load = () => api.quotes().then(setRows)
  useEffect(() => { load() }, [])
  const all = useMemo(() => ({ quotes: rows }), [rows])
  const tell = (m) => { setFlash(m); setTimeout(() => setFlash(''), 2500) }
  return (
    <div>
      {flash && <div className="toast">{flash}</div>}
      <div className="toolbar">
        <ToolbarActions kind="quotes" all={all} lang={lang} copy={copy} onImported={() => api.quotes().then(setRows)} />
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>When</th><th>Name</th><th>Phone</th><th>Type</th><th>Lane</th><th>Date</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((q) => (
              <tr key={q.id}>
                <td>{new Date(q.createdAt).toLocaleString()}</td>
                <td>{q.name}<br />{q.email}</td>
                <td>{q.phone}</td>
                <td>{q.moveType}</td>
                <td>{q.from} → {q.to}</td>
                <td>{q.date}</td>
                <td>
                  <select value={q.status} onChange={async (e) => { await api.patchQuote(q.id, { status: e.target.value }); load() }}>
                    {['new', 'quoted', 'booked', 'closed'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <button className="btn btn-sm" onClick={async () => {
                      const r = await api.aiQuote({ from: q.from, to: q.to, moveType: q.moveType, notes: q.notes })
                      const ask = window.prompt(`${copy.track.aiQuote}: BHD ${r.fare} (${r.note || ''})`, r.fare)
                      if (ask != null && Number(ask) > 0) { await api.patchQuote(q.id, { status: 'quoted', fare: Number(ask) }); load() }
                    }}>🤖 {copy.track.aiQuote}</button>
                    <button className="btn btn-sm" onClick={async () => {
                      await api.convertQuote(q.id)
                      tell('⇢ ' + (q.moveType || 'Move'))
                      onGoto && onGoto('moving')
                      load()
                    }}>⇢ {copy.movingTitle || 'Movers'}</button>
                    <button className="btn btn-sm" onClick={async () => {
                      try { await api.invoiceFromQuote(q.id); tell('✓ ' + (q.name || '')) } catch (e) { tell(e.message) }
                      load()
                    }}>🧾 {copy.invoiceTitle || 'Invoice'}</button>
                    <RowActions kind="quotes" id={q.id} label={`Red Sun quote — ${q.name} (${q.phone}), ${q.moveType} ${q.from} → ${q.to} on ${q.date}`} phone={q.phone} extra={q.received ? <button className="btn" disabled>✓ {copy.actions.receive}</button> : <button className="btn" onClick={async () => { await api.patchQuote(q.id, { received: true }); load() }}>{copy.actions.receive}</button>} reload={load} copy={copy} lang={lang} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GprsView() {
  const { lang, copy } = useSite()
  const [veh, setVeh] = useState([])
  const [drv, setDrv] = useState([])
  const [trp, setTrp] = useState([])
  const [hq, setHq] = useState(null)
  const [linkFor, setLinkFor] = useState(null)
  const [link, setLink] = useState('')
  const [destLink, setDestLink] = useState('')
  const [flash, setFlash] = useState('')
  const [addVeh, setAddVeh] = useState(false)
  const [vehForm, setVehForm] = useState({ plate: '', name: '', type: 'Box Truck', location: '', lat: '', lng: '', parkName: '', parkLat: '', parkLng: '' })
  const [homeFor, setHomeFor] = useState(null)
  const [homeForm, setHomeForm] = useState({ link: '', location: '' })
  const [fences, setFences] = useState([])
  const [fenceOpen, setFenceOpen] = useState(false)
  const [fenceForm, setFenceForm] = useState({ name: '', link: '', radiusKm: '1', type: 'job' })
  const [replayFor, setReplayFor] = useState(null)
  const [replayPts, setReplayPts] = useState([])
  const [repIdx, setRepIdx] = useState(0)
  const repTimer = useRef(null)

  const load = () => Promise.all([api.vehicles(), api.drivers(), api.trips(), api.dashboard(), api.geofences()]).then(([v, d, t, dash, f]) => { setVeh(v); setDrv(d); setTrp(t); setHq(dash.hq || null); setFences(f || []) })
  useEffect(() => { load() }, [])

  useEffect(() => () => { if (repTimer.current) clearInterval(repTimer.current) }, [])
  function openReplay(v) {
    api.gpsHistory(v.id, 200).then((pts) => {
      const ordered = [...[...pts].reverse()]
      setReplayFor(v)
      setReplayPts(ordered)
      setRepIdx(0)
      if (repTimer.current) clearInterval(repTimer.current)
      if (ordered.length > 1) {
        repTimer.current = setInterval(() => setRepIdx((i) => (i + 1 < ordered.length ? i + 1 : (clearInterval(repTimer.current), repTimer.current = null, i))), 700)
      }
    })
  }

  const rows = useMemo(() => veh.map((v) => {
    const t = trp.find((x) => x.vehicleId === v.id && x.status !== 'completed' && x.status !== 'cancelled')
    return { ...v, trip: t || null, fromParking: haversineKm(v.gps, hq), toDest: haversineKm(v.gps, t?.dest), toHome: haversineKm(v.gps, v.home) }
  }), [veh, trp, hq])

  const liveRows = rows.filter((r) => r.trip && r.trip.live && r.trip.live.link)

  async function saveLink(e) {
    e.preventDefault()
    if (!linkFor || !linkFor.trip) return
    await api.patchTrip(linkFor.trip.id, { live: { link: link.trim() } })
    setLinkFor(null)
    setLink('')
    setDestLink('')
    load()
  }
  async function saveDest(e) {
    e.preventDefault()
    if (!linkFor || !linkFor.trip) return
    await api.patchTrip(linkFor.trip.id, { dest: { link: destLink.trim() } })
    setLinkFor(null)
    setLink('')
    setDestLink('')
    load()
  }
  async function clearLink(v) {
    if (v.trip && v.trip.live) await api.patchTrip(v.trip.id, { live: null })
    load()
  }
  async function park(v) {
    await api.parkVehicle(v.id)
    setFlash(copy.track.parked)
    setTimeout(() => setFlash(''), 3000)
    load()
  }
  function sendLink(v) {
    if (!v.trip) return
    const url = driverTrackUrl(v.trip.code)
    const n = (v.driver?.phone || '').replace(/[^\d+]/g, '')
    const msg = `Red Sun ${v.trip.code} — ${v.trip.customer}, ${v.trip.origin} → ${v.trip.destination}.\nShare your live location here: ${url}\nضغط OPEN GOOGLE MAPS ثم شارك المسار واتساب.`
    if (n) window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
    else { navigator.clipboard.writeText(url); alert(copy.track.linkCopied) }
  }
  function sendClient(v) {
    if (!v.trip) { alert(copy.track.noTrip); return }
    const link0 = (v.trip.live && v.trip.live.link) || (v.trip.dest && v.trip.dest.link) || mapsNavLink(v.trip.destination)
    const msg = `Red Sun — ${v.trip.code}: our vehicle ${v.plate} is on the way to ${v.trip.destination}.\nFollow the live location here: ${link0}`
    const phone = v.trip.customerPhone
    if (phone) {
      window.open('https://wa.me/' + phone.replace(/[^\d+]/g, '') + '?text=' + encodeURIComponent(msg), '_blank')
      return
    }
    const n = window.prompt(copy.track.clientPhone, '')
    if (!n) return
    api.patchTrip(v.trip.id, { customerPhone: n.replace(/[^\d+]/g, '') }).then(() => {
      window.open('https://wa.me/' + n.replace(/[^\d+]/g, '') + '?text=' + encodeURIComponent(msg), '_blank')
    })
  }
  async function createVeh(e) {
    e.preventDefault()
    await api.createVehicle({
      plate: vehForm.plate,
      name: vehForm.name,
      type: vehForm.type,
      gps: { lat: Number(vehForm.lat) || Number(vehForm.parkLat) || 26.2075, lng: Number(vehForm.lng) || Number(vehForm.parkLng) || 50.5906, location: vehForm.location || vehForm.parkName || 'Umm Al Hassam Depot' },
      home: vehForm.parkName || vehForm.parkLat || vehForm.parkLng ? { lat: Number(vehForm.parkLat), lng: Number(vehForm.parkLng), location: vehForm.parkName || 'Vehicle parking' } : undefined,
    })
    setAddVeh(false)
    setVehForm({ plate: '', name: '', type: 'Box Truck', location: '', lat: '', lng: '', parkName: '', parkLat: '', parkLng: '' })
    load()
  }
  function openHome(v) {
    setHomeFor(v)
    setHomeForm({ link: '', location: v.home?.location || v.gps?.location || '' })
  }
  async function saveHome(e) {
    e.preventDefault()
    if (!homeFor) return
    await api.patchVehicle(homeFor.id, { home: { link: homeForm.link.trim(), location: homeForm.location.trim() } })
    setHomeFor(null)
    setHomeForm({ link: '', location: '' })
    load()
  }
  async function clearHome(v) {
    await api.patchVehicle(v.id, { home: null })
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <strong>{copy.track.liveJobs} · {liveRows.length}</strong>
        <button className="btn btn-ghost btn-sm" onClick={load}>Refresh</button>
        <button className="btn btn-ghost btn-sm" onClick={() => setFenceOpen(true)}>◎ {copy.track.geofences} ({fences.length})</button>
        <button className="btn btn-primary btn-sm" onClick={() => setAddVeh(true)}>＋ {copy.track.addVehicle}</button>
        {flash && <span className="badge live">{flash}</span>}
      </div>

      <div className="map gprs-map">
        {hq && (
          <span className="pin hq" style={{ left: `${12 + ((hq.lng - 50.52) / 0.16) * 76}%`, top: `${78 - ((hq.lat - 26.12) / 0.16) * 70}%` }}>
            <a href={mapsNavLink(hq.location)} target="_blank" rel="noreferrer" title={hq.location}>{copy.track.parking} · HQ</a>
            <small className="pin-dest">0 km</small>
          </span>
        )}
        {fences.map((f) => {
          const diam = Math.max(2, (f.radiusKm || 1) * 4.4) * 2
          return (
            <span key={f.id} className={`geofence ${f.type}`} title={`${f.name} · r${f.radiusKm}km`}
              style={{ left: `calc(${12 + ((f.lng - 50.52) / 0.16) * 76}% - ${diam / 2}%)`, top: `calc(${78 - ((f.lat - 26.12) / 0.16) * 70}% - ${diam / 2}%)`, width: `${diam}%`, height: `${diam * 0.85}%` }}>
              {f.radiusKm && <small>{f.radiusKm}km</small>}
            </span>
          )
        })}
        {rows.filter((r) => r.trip && r.trip.dest).map((v) => {
          const d = v.trip.dest
          const left = 12 + ((d.lng - 50.52) / 0.16) * 76
          const top = 78 - ((d.lat - 26.12) / 0.16) * 70
          return (
            <span key={'d' + v.id} className="pin dest" style={{ left: `${Math.min(92, Math.max(8, left))}%`, top: `${Math.min(88, Math.max(10, top))}%` }}>
              <a href={d.link} target="_blank" rel="noreferrer" title={v.trip.destination}>◎ {v.trip.destination}</a>
              <small className="pin-dest">{v.toDest} {copy.track.km}</small>
            </span>
          )
        })}
        {rows.map((v, i) => {
          const left = 12 + ((v.gps.lng - 50.52) / 0.16) * 76
          const top = 78 - ((v.gps.lat - 26.12) / 0.16) * 70
          const gLink = `https://www.google.com/maps?q=${v.gps.lat.toFixed(5)},${v.gps.lng.toFixed(5)}`
          const isLive = !!(v.trip && v.trip.live && v.trip.live.link)
          return (
            <span key={v.id} className={`pin ${v.status}`} style={{ left: `${Math.min(92, Math.max(8, left))}%`, top: `${Math.min(88, Math.max(10, top + i))}%` }}>
              <a href={gLink} target="_blank" rel="noreferrer" title={`${v.plate} · ${v.gps.location} · last ${fmtTime(v.trip?.live?.updatedAt)}`}>{v.plate}</a>
              {v.trip && v.trip.destination && <small className="pin-dest">{isLive ? '●' : ''} {v.trip.destination}</small>}
            </span>
          )
        })}
      </div>

      {liveRows.length > 0 && (
        <div className="card" style={{ marginTop: 12 }}>
          <strong>{copy.track.liveNow}</strong>
          {liveRows.map((v) => (
            <div key={v.id} className="live-job">
              <span className="badge live">{copy.track.liveBadge}</span>
              <span>{v.plate} · {v.trip.destination}</span>
              <span className="muted">{fmtTime(v.trip.live.updatedAt)} · {minutesAgo(v.trip.live.updatedAt)}</span>
              <a className="btn btn-sm" href={v.trip.live.link} target="_blank" rel="noreferrer">{copy.track.follow}</a>
            </div>
          ))}
        </div>
      )}

      <div className="table-wrap" style={{ marginTop: 12 }}>
        <table>
          <thead>
            <tr><th>Unit</th><th>Driver</th><th>{copy.track.vehParking} / {copy.track.parking}</th><th>{copy.track.fromParking}</th><th>{copy.track.toDest}</th><th>Stage</th><th>Status</th><th>Job</th><th>Live · last</th><th>Location actions</th></tr>
          </thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id}>
                <td><strong>{v.plate}</strong><br /><span className="muted">{v.name}</span></td>
                <td>{v.driver?.name || '—'}</td>
                <td>{v.home?.location || '—'}<br /><span className="muted">{v.gps?.location || ''}</span></td>
                <td>{v.fromParking !== null ? `${v.fromParking} ${copy.track.km}` : '—'}</td>
                <td>{v.toDest !== null ? `~${v.toDest} ${copy.track.km}` : '—'}</td>
                <td>
                  <div className="stage-cell">
                    <StageDots stage={v.trip?.stage} labels={[copy.track.stagePickup, copy.track.stageLoading, copy.track.stageTransit, copy.track.stageDelivery, copy.track.stageCompleted]} />
                    {(v.trip?.etaMin != null && v.trip?.live?.link) && <span className="badge live">{copy.track.eta} ~{v.trip.etaMin}m</span>}
                    {(v.idleMins || 0) >= 15 && <span className="badge idle">{copy.track.idle} {Math.round(v.idleMins)}m</span>}
                  </div>
                </td>
                <td><Badge value={v.status} /></td>
                <td>{v.trip ? `${v.trip.destination}` : '—'}</td>
                <td>
                  {v.trip && v.trip.live && v.trip.live.link ? (
                    <span className="live-slot">
                      <span className="badge live">{copy.track.liveBadge}</span>
                      <span className="muted">{fmtTime(v.trip.live.updatedAt)} · {minutesAgo(v.trip.live.updatedAt)}</span>
                    </span>
                  ) : <span className="muted">{copy.track.noLive}</span>}
                </td>
                <td>
                  <span className="row-actions">
                    <a className="btn btn-sm" href={`https://www.google.com/maps?q=${v.gps.lat.toFixed(5)},${v.gps.lng.toFixed(5)}`} target="_blank" rel="noreferrer">{copy.openInMaps}</a>
                    <button className="btn btn-sm" title={copy.track.replay} onClick={() => openReplay(v)}>📍 {copy.track.replay}</button>
                    {v.trip && <button className="btn btn-sm" onClick={() => sendClient(v)}>{copy.track.sendClient}</button>}
                    {v.trip && v.trip.live && v.trip.live.link && <a className="btn btn-sm" href={v.trip.live.link} target="_blank" rel="noreferrer">{copy.track.follow}</a>}
                    {v.trip && <button className="btn btn-sm" onClick={() => sendLink(v)}>{copy.track.sendDriver}</button>}
                    <button className="btn btn-sm" onClick={() => { setLinkFor(v); setLink(v.trip?.live?.link || ''); setDestLink(v.trip?.dest?.link || '') }}>{copy.track.update}</button>
                    <button className="btn btn-sm" onClick={() => openHome(v)} title={copy.track.vehParking}>🏠 {copy.track.vehParking}</button>
                    {v.home && v.home.lat && <button className="btn btn-sm" onClick={() => clearHome(v)} title={copy.track.clearParking}>{copy.track.clearParking}</button>}
                    {v.trip && v.trip.live && v.trip.live.link && <button className="btn btn-sm" onClick={() => clearLink(v)}>{copy.track.clear}</button>}
                    <button className="btn btn-sm" onClick={() => park(v)} title={copy.track.park}>{copy.track.park}</button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {linkFor && (
        <Modal title={`${linkFor.plate} · ${linkFor.trip ? linkFor.trip.code : copy.track.noLive}`} onClose={() => setLinkFor(null)}>
          <p><strong>{copy.track.dest}:</strong> {linkFor.trip ? linkFor.trip.destination : '—'}</p>
          {linkFor.trip && (
            <div className="form">
              <label>{copy.track.sendDriver}
                <input dir="ltr" readOnly value={driverTrackUrl(linkFor.trip.code)} />
              </label>
              <button className="btn" onClick={() => { navigator.clipboard.writeText(driverTrackUrl(linkFor.trip.code)); alert(copy.track.linkCopied) }}>{copy.track.copyLink}</button>
            </div>
          )}
          <p className="muted">{copy.track.noLinkHint}</p>
          <form className="form" onSubmit={saveLink}>
            <label>{copy.track.liveBadge} · {copy.track.pastePh}
              <input dir="ltr" placeholder="https://maps.app.goo.gl/…" value={link} onChange={(e) => setLink(e.target.value)} />
            </label>
            <button className="btn btn-primary" disabled={!link.trim()}>{copy.track.save}</button>
          </form>
          {linkFor.trip && (
            <form className="form" style={{ marginTop: 10 }} onSubmit={saveDest}>
              <label>◎ {copy.track.destPoint}
                <input dir="ltr" placeholder="https://www.google.com/maps/place/…/@26.1,50.5,15z" value={destLink} onChange={(e) => setDestLink(e.target.value)} />
              </label>
              <button className="btn" disabled={!destLink.trim()}>{copy.track.saveDest}</button>
            </form>
          )}
        </Modal>
      )}

      {addVeh && (
        <Modal title={copy.track.addVehicle} onClose={() => setAddVeh(false)}>
          <form className="form" onSubmit={createVeh}>
            <div className="form-row">
              <label>Plate<input required value={vehForm.plate} onChange={(e) => setVehForm({ ...vehForm, plate: e.target.value })} /></label>
              <label>Name<input required value={vehForm.name} onChange={(e) => setVehForm({ ...vehForm, name: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Type
                <select value={vehForm.type} onChange={(e) => setVehForm({ ...vehForm, type: e.target.value })}>
                  {['Car', 'Box Truck', 'Flatbed', 'Cargo Van', 'Trailer', 'Bus', 'Pickup', 'Reefer'].map((x) => <option key={x}>{x}</option>)}
                </select>
              </label>
              <label>Location<input value={vehForm.location} placeholder="e.g. Sitra Workshop" onChange={(e) => setVehForm({ ...vehForm, location: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>Lat<input type="number" step="any" value={vehForm.lat} onChange={(e) => setVehForm({ ...vehForm, lat: e.target.value })} /></label>
              <label>Lng<input type="number" step="any" value={vehForm.lng} onChange={(e) => setVehForm({ ...vehForm, lng: e.target.value })} /></label>
            </div>
            <details style={{ marginTop: 8 }}>
              <summary style={{ cursor: 'pointer', color: 'var(--ink-2)' }}>🏠 {copy.track.vehParking}</summary>
              <div className="form-row" style={{ marginTop: 8 }}>
                <label>{copy.track.parkingName}<input value={vehForm.parkName} placeholder="e.g. Sitra Depot" onChange={(e) => setVehForm({ ...vehForm, parkName: e.target.value })} /></label>
                <label>Lat<input type="number" step="any" value={vehForm.parkLat} onChange={(e) => setVehForm({ ...vehForm, parkLat: e.target.value })} /></label>
              </div>
              <div className="form-row" style={{ marginTop: 8 }}>
                <label>Lng<input type="number" step="any" value={vehForm.parkLng} onChange={(e) => setVehForm({ ...vehForm, parkLng: e.target.value })} /></label>
              </div>
            </details>
            <button className="btn btn-primary">{copy.track.save}</button>
          </form>
        </Modal>
      )}

      {fenceOpen && (
        <Modal title={`◎ ${copy.track.geofences}`} onClose={() => setFenceOpen(false)}>
          <form className="form" onSubmit={async (e) => {
            e.preventDefault()
            await api.createGeofence(fenceForm)
            setFenceForm({ name: '', link: '', radiusKm: '1', type: 'job' })
            api.geofences().then(setFences)
          }}>
            <div className="form-row">
              <label>{copy.track.fenceName}<input required value={fenceForm.name} onChange={(e) => setFenceForm({ ...fenceForm, name: e.target.value })} /></label>
              <label>{copy.track.fenceRadius}<input type="number" step="0.1" min="0.1" value={fenceForm.radiusKm} onChange={(e) => setFenceForm({ ...fenceForm, radiusKm: e.target.value })} /></label>
            </div>
            <div className="form-row">
              <label>{copy.track.fenceType}
                <select value={fenceForm.type} onChange={(e) => setFenceForm({ ...fenceForm, type: e.target.value })}>
                  {['job', 'parking', 'restricted', 'zone'].map((x) => <option key={x}>{x}</option>)}
                </select>
              </label>
              <label>{copy.openInMaps}
                <input dir="ltr" placeholder={copy.track.parkingLinkPh} value={fenceForm.link} onChange={(e) => setFenceForm({ ...fenceForm, link: e.target.value })} />
              </label>
            </div>
            <button className="btn btn-primary">{copy.track.addFence}</button>
          </form>
          <div className="fence-list" style={{ marginTop: 10 }}>
            {fences.map((f) => (
              <div key={f.id} className="fence-row">
                <span><strong>{f.name}</strong> · {f.type} · r{f.radiusKm}km</span>
                <button className="btn btn-sm" onClick={async () => { await api.deleteGeofence(f.id); api.geofences().then(setFences) }}>{copy.actions.delete}</button>
              </div>
            ))}
            {fences.length === 0 && <p className="muted">{copy.track.noFences}</p>}
          </div>
        </Modal>
      )}

      {replayFor && (
        <Modal title={`📍 ${copy.track.replay} · ${replayFor.plate} · ${replayPts.length} pts`} onClose={() => { if (repTimer.current) clearInterval(repTimer.current); repTimer.current = null; setReplayFor(null); setRepIdx(0) }}>
          <p className="muted">{copy.track.replayHint}</p>
          {replayPts.length === 0 ? <p className="muted">{copy.track.noHistory}</p>
            : (
              <>
                <div className="map gprs-map">
                  <span className="pin active" style={{ left: `${12 + ((replayPts[repIdx].lng - 50.52) / 0.16) * 76}%`, top: `${78 - ((replayPts[repIdx].lat - 26.12) / 0.16) * 70}%` }}>
                    <a href={`https://www.google.com/maps?q=${replayPts[repIdx].lat.toFixed(5)},${replayPts[repIdx].lng.toFixed(5)}`} target="_blank" rel="noreferrer">{replayPts[repIdx].plate}</a>
                  </span>
                  <div className="replay-track">
                    {replayPts.map((p, i) => (
                      <i key={i} className={i <= repIdx ? 'on' : ''} style={{ left: `${12 + ((p.lng - 50.52) / 0.16) * 76}%`, top: `${78 - ((p.lat - 26.12) / 0.16) * 70}%` }} />
                    ))}
                  </div>
                </div>
                <div className="replay-meta">
                  <span>{fmtTime(replayPts[repIdx].ts)}</span>
                  <span>{replayPts[repIdx].speed} {copy.track.kmh}</span>
                  <span>{replayPts[repIdx].lat.toFixed(4)}, {replayPts[repIdx].lng.toFixed(4)}</span>
                  <span>{replayPts.length} pts · {replayPts[0].ts && new Date(replayPts[0].ts).toLocaleDateString()}</span>
                </div>
              </>
            )}
        </Modal>
      )}

      {homeFor && (
        <Modal title={`🏠 ${copy.track.vehParking} · ${homeFor.plate}`} onClose={() => setHomeFor(null)}>
          <form className="form" onSubmit={saveHome}>
            <label>{copy.track.parkingName}
              <input value={homeForm.location} onChange={(e) => setHomeForm({ ...homeForm, location: e.target.value })} />
            </label>
            <label>{copy.openInMaps}
              <input dir="ltr" placeholder={copy.track.parkingLinkPh} value={homeForm.link} onChange={(e) => setHomeForm({ ...homeForm, link: e.target.value })} />
            </label>
            <button className="btn btn-primary" disabled={!homeForm.link.trim() && !homeForm.location.trim()}>{copy.track.save}</button>
          </form>
          {homeFor.home && <button className="btn" style={{ marginTop: 8 }} onClick={() => { clearHome(homeFor); setHomeFor(null) }}>{copy.track.clearParking}</button>}
        </Modal>
      )}
    </div>
  )
}

function TrackPage({ code }) {
  const { copy } = useSite()
  const [info, setInfo] = useState(null)
  const [err, setErr] = useState('')
  const [link, setLink] = useState('')
  const [saved, setSaved] = useState(false)
  const [busy, setBusy] = useState(false)
  useEffect(() => { api.trackInfo(code).then(setInfo).catch((e) => setErr(e.message)) }, [code])
  async function saveLink(e) {
    e.preventDefault()
    setBusy(true)
    try { await api.trackUpdate(code, { link: link.trim() }); setSaved(true); api.trackInfo(code).then(setInfo) } catch (ex) { alert(ex.message) } finally { setBusy(false) }
  }
  if (err) return <div className="track-shell"><div className="track-card"><p><strong>{copy.track.notFound}</strong></p></div></div>
  if (!info) return <div className="track-shell"><div className="track-card"><p>Loading…</p></div></div>
  return (
    <div className="track-shell">
      <div className="track-card">
        <div className="kicker">Red Sun · {info.code}</div>
        <h1>{info.destination}</h1>
        <p className="muted">{info.plate} · {info.customer} · {info.status}</p>
        {(info.stage || info.status === 'in-progress' || info.status === 'completed') && (
          <div className="track-flow">
            {STAGES.map((s, i) => {
              const done = STAGES.indexOf(info.stage) >= i || (info.status === 'completed' && s === 'completed')
              const nowStage = info.stage === s
              return (
                <div key={s} className={`tf ${done ? 'on' : ''} ${nowStage ? 'now' : ''}`}>
                  <i>{done ? (s === 'completed' ? '✓' : '✔') : i + 1}</i>
                  <span>{[copy.track.stagePickup, copy.track.stageLoading, copy.track.stageTransit, copy.track.stageDelivery, copy.track.stageCompleted][i]}</span>
                </div>
              )
            })}
          </div>
        )}
        {info.status === 'completed'
          ? <p className="ok">✓ {copy.track.stageComplete}</p>
          : (
            <>
              <a className="btn btn-primary track-cta" href={mapsNavLink(info.destination)} target="_blank" rel="noreferrer">⬢ {copy.track.waitMap}</a>
              {info.live?.link ? (
                <p className="ok">✓ {copy.track.liveNow} — <a href={info.live.link} target="_blank" rel="noreferrer">{copy.track.follow}</a>
                  {info.etaMin != null ? ` · ${copy.track.eta} ~${info.etaMin} ${info.etaMin === 1 ? copy.track.minute : copy.track.minutes}` : ''}
                  {info.kmToGo != null ? ` · ${info.kmToGo} ${copy.track.km}` : ''}
                </p>
              ) : (
                <p className="ok">✓ {saved ? copy.track.saved : '—'}</p>
              )}
            </>
          )}
        <hr />
        <p className="muted">{copy.track.noLinkHint}</p>
        <form className="form" onSubmit={saveLink}>
          <input dir="ltr" placeholder={copy.track.pastePh} value={link} onChange={(e) => setLink(e.target.value)} />
          <button className="btn" disabled={busy || !link.trim()}>{copy.track.save}</button>
        </form>
      </div>
    </div>
  )
}

function FleetApp({ onBack }) {
  const [tab, setTab] = useState('dashboard')
  const [dash, setDash] = useState(null)
  const [auth, setAuth] = useState({ loading: true, protected: false, ok: true })

  const checkAuth = () =>
    api.authStatus().then((s) => setAuth({ loading: false, protected: s.protected, ok: !!s.authenticated })).catch(() => setAuth({ loading: false, protected: false, ok: true }))

  useEffect(() => {
    checkAuth()
    const h = () => setAuth((a) => ({ ...a, ok: false }))
    window.addEventListener('rs:unauthorized', h)
    return () => window.removeEventListener('rs:unauthorized', h)
  }, [])

  const loadDash = () => api.dashboard().then(setDash).catch(() => null)
  useEffect(() => { if (auth.ok) loadDash() }, [auth.ok])

  if (auth.loading) return <div className="app-shell"><div className="main muted">Loading…</div></div>
  if (auth.protected && !auth.ok) {
    return (
      <div className="app-shell">
        <aside className="side"><div className="brand side-brand"><LogoMark className="brand-mark" /><div>Red Sun Ops<small>Fleet management</small></div></div></aside>
        <main className="main"><AdminLogin onDone={checkAuth} /></main>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <aside className="side">
        <div className="brand side-brand">
          <LogoMark className="brand-mark" />
          <div>Red Sun Ops<small>Fleet management</small></div>
        </div>
        {NAV.map((n) => (
          <button key={n.id} className={tab === n.id ? 'active' : ''} onClick={() => setTab(n.id)}>{n.label}</button>
        ))}
        <button onClick={onBack} style={{ marginTop: 'auto' }}>← Marketing site</button>
      </aside>
      <main className="main">
        <div className="topbar">
          <div>
            <div className="kicker">Bahrain operations</div>
            <h2>{NAV.find((n) => n.id === tab)?.label}</h2>
          </div>
          <a className="btn btn-primary btn-sm" href="tel:+97339350288">Call Now +973 3935 0288</a>
        </div>
        {tab === 'dashboard' && <CommandCenter data={dash} onRefresh={loadDash} />}
        {tab === 'gprs' && <GprsView />}
        {tab === 'vehicles' && <VehiclesView />}
        {tab === 'drivers' && <DriversView />}
        {tab === 'trips' && <TripsView />}
        {tab === 'maintenance' && <MaintenanceView />}
        {tab === 'fuel' && <FuelView />}
        {tab === 'incidents' && <IncidentsView />}
        {tab === 'quotes' && <QuotesView onGoto={setTab} />}
        {tab === 'moving' && <MovingView />}
        {tab === 'invoices' && <InvoicesView />}
        {tab === 'documents' && <DocumentsView />}
        {tab === 'finances' && <FinancesView />}
        {tab === 'settings' && <SettingsView onAuthChange={checkAuth} />}
      </main>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState(() => { const c = new URLSearchParams(window.location.search).get('track'); return c ? 'track' : 'site' })
  const [trackCode, setTrackCode] = useState(() => { const c = new URLSearchParams(window.location.search).get('track'); return c ? c.trim().toUpperCase() : null })
  return (
    <>
      <Seo />
      {view === 'track' && trackCode
        ? <TrackPage code={trackCode} />
        : view === 'site'
          ? <Marketing onOpenFleet={() => setView('fleet')} />
          : <FleetApp onBack={() => setView('site')} />}
      <SaraChat />
    </>
  )
}