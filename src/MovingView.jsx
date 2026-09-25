import { useEffect, useMemo, useState } from 'react'
import { api } from './api.js'
import { useSite } from './SiteContext.jsx'
import { t } from './i18n.js'
import { exportCSV, exportExcel, exportJSON, exportPDF } from './exporters.js'

const MV_STAGES = ['inquiry', 'survey', 'quotation', 'booking', 'packing', 'pickup', 'loading', 'transit', 'delivery', 'unloading', 'completed']
const BUCKETS = [
  { id: 'leads', labelKey: 'bucketLeads', stages: ['inquiry', 'survey', 'quotation'] },
  { id: 'book', labelKey: 'bucketBooking', stages: ['booking'] },
  { id: 'ops', labelKey: 'bucketOperation', stages: ['packing', 'pickup', 'loading', 'transit', 'delivery', 'unloading'] },
  { id: 'done', labelKey: 'bucketDone', stages: ['completed'] },
]
const STAGE_STATUS = {
  inquiry: ['new', 'follow-up'],
  survey: ['pending', 'scheduled', 'done'],
  quotation: ['draft', 'sent', 'accepted', 'declined'],
  booking: ['pending', 'confirmed', 'deposit-paid'],
  packing: ['pending', 'in-progress', 'done'],
  pickup: ['pending', 'in-progress', 'done'],
  loading: ['pending', 'in-progress', 'done'],
  transit: ['pending', 'in-progress', 'arrived'],
  delivery: ['pending', 'in-progress', 'done'],
  unloading: ['pending', 'in-progress', 'done'],
  completed: ['done'],
}
const CATALOG = ['Sofa', 'Bed', 'Wardrobe', 'TV', 'Refrigerator', 'Washing machine', 'Dining table', 'Boxes', 'Office equipment', 'Fragile items']
const L = (mv, s) => mv[`stage_${s}`] || s
const stLabel = (mv, s) => {
  const map = { 'deposit-paid': 'st_depositpaid', 'in-progress': 'st_inprogress', 'follow-up': 'st_followup' }
  return mv[map[s] || `st_${s}`] || s
}
const estMini = (e) => (e ? `${e.truckSize} · ${e.workers}👷 · ${e.boxes}📦 · ${e.estHours}h · ${e.fare} BHD` : '')

export function PublicEstimator({ section }) {
  const { lang } = useSite()
  const est = t[lang].estimator
  const [list, setList] = useState([])
  const [custom, setCustom] = useState('')
  const [data, setData] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', from: '', to: '', date: '' })
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  const add = (name, fragile = false) => {
    setList((l) => [...l, { name, fragile, qty: 1, room: 'Various' }])
  }
  const bump = (i, d) => {
    setList((l) => l.map((it, k) => (k === i ? { ...it, qty: Math.max(1, (it.qty || 1) + d) } : it)))
  }
  const calc = async () => {
    if (!list.length) return
    setBusy(true)
    try {
      const r = await api.staticEstimate({ items: list })
      setData(r)
    } finally {
      setBusy(false)
    }
  }
  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    try {
      await api.createMove({
        customer: { name: form.name, phone: form.phone },
        from: { address: form.from, rooms: 2 },
        to: { address: form.to, rooms: 2 },
        moveDate: form.date || new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10),
        items: list,
      })
      setSent(true)
    } finally {
      setBusy(false)
    }
  }
  return (
    <section className={section || ''} style={{ padding: '30px 0' }}>
      <div className="wrap">
        <div className="kicker">{est.steps}</div>
        <h2>{est.title}</h2>
        <p className="muted" style={{ maxWidth: 620 }}>{est.lead}</p>
        <div className="pub-est">
          <div className="card">
            <h4>{est.your}</h4>
            <div className="catalog">
              {CATALOG.map((c) => (
                <button key={c} type="button" className="chip" onClick={() => add(c, c === 'TV' || c === 'Office equipment' || c === 'Fragile items' || c === 'Boxes')}>
                  + {c}
                </button>
              ))}
            </div>
            <div className="est-list">
              {list.map((it, i) => (
                <div key={i} className="est-row">
                  <span>{it.name}</span>
                  <span className="qty-ctl">
                    <button type="button" onClick={() => bump(i, -1)}>−</button>
                    <b>{it.qty}</b>
                    <button type="button" onClick={() => bump(i, 1)}>+</button>
                  </span>
                  <button type="button" className="btn btn-ghost btn-sm" onClick={() => setList((l) => l.filter((_, k) => k !== i))}>✕</button>
                </div>
              ))}
              {!list.length && <p className="muted small">{est.addItem}</p>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input value={custom} onChange={(e) => setCustom(e.target.value)} placeholder={est.catalogCustom} />
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => { if (custom.trim()) { add(custom.trim()); setCustom('') } }}>+</button>
            </div>
            <button className="btn btn-primary" onClick={calc} disabled={busy || !list.length}>{est.getEst}</button>
          </div>
          <div className="card">
            <h4>{est.estTitle}</h4>
            {data ? (
              <>
                <div className="est-big">{estMini(data)}</div>
                <p className="muted small">{data.ai ? 'AI' : 'Rule'} · {data.m3} m³ · {data.rooms} rooms {data.carpenter ? '· 🪚 carpenter' : ''}</p>
                <form onSubmit={submit} className="quote-form">
                  <div className="form-row">
                    <label>{est.name}<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
                    <label>{est.phonePh}<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
                  </div>
                  <div className="form-row">
                    <label>{est.fromPh}<input required value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} /></label>
                    <label>{est.toPh}<input required value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} /></label>
                  </div>
                  <label>{est.date}<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
                  <button className="btn btn-primary" disabled={busy}>{est.submit}</button>
                </form>
              </>
            ) : (
              <p className="muted">{String(est.estTitle) + ' …'}</p>
            )}
            {sent && <p className="success">{est.sent}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MovingView() {
  const { lang, copy } = useSite()
  const mv = t[lang].moving
  const [rows, setRows] = useState([])
  const [selected, setSelected] = useState(null)
  const [flash, setFlash] = useState('')
  const [veh, setVeh] = useState([])
  const [drv, setDrv] = useState([])
  const [expMenu, setExpMenu] = useState(false)

  const load = () => api.moving().then((d) => { setRows(d.jobs || []); setSelected((s) => (s ? d.jobs.find((j) => j.id === s.id) || null : null)) })
  useEffect(() => { load(); api.vehicles().then(setVeh).catch(() => {}); api.drivers().then(setDrv).catch(() => {}) }, [])

  const all = useMemo(() => ({ movingJobs: rows }), [rows])
  const tell = (m) => { setFlash(m); setTimeout(() => setFlash(''), 2500) }

  const openDetail = (j) => setSelected(j)
  const advance = async (id) => { await api.advanceMove(id); tell(mv.advanced); load() }
  const dispatch = async (j) => {
    const r = await api.dispatchMove(j.id)
    tell(`${mv.dispatched} — ${r.code}`)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => openDetail({ id: 'new', number: '—', stage: 'inquiry', status: 'open', stageStatus: {}, stages: [], customer: { name: '', phone: '', email: '' }, move: { from: { address: '', floor: 0, rooms: 0, elevator: false, access: '' }, to: { address: '', floor: 0, rooms: 0, elevator: false, access: '' } }, moveDate: new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10), window: '08:00 – 12:00', items: [], estimate: null, team: { vehicleId: '', driverId: '', packers: 0, carpenter: false }, notes: [] }) }>+ {mv.addMove}</button>
        <span className="drop" style={{ position: 'relative' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setExpMenu((v) => !v)}>{copy.actions.export || 'Export'} ▾</button>
          {expMenu && (
            <span className="drop-menu" onMouseLeave={() => setExpMenu(false)}>
              <button onClick={() => { setExpMenu(false); exportJSON(all, lang) }}>{copy.actions.json || 'JSON'}</button>
              <button onClick={() => { setExpMenu(false); exportCSV('movingJobs', all.movingJobs || []) }}>{copy.actions.csv || 'CSV'}</button>
              <button onClick={() => { setExpMenu(false); exportExcel(all, lang) }}>{copy.actions.excel || 'Excel'}</button>
              <button onClick={() => { setExpMenu(false); exportPDF('movingJobs', all.movingJobs || [], lang, 'movingJobs') }}>{copy.actions.pdf || 'PDF'}</button>
            </span>
          )}
        </span>
      </div>
      {flash && <div className="toast">{flash}</div>}
      {selected && <MoveDetail key={selected.id} job={selected} isNew={selected.id === 'new'} onClose={() => setSelected(null)} onSaved={load} tell={tell} onDispatch={dispatch} mv={mv} copy={copy} lang={lang} veh={veh} drv={drv} />}
      <div className="board" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {BUCKETS.map((b) => (
          <div key={b.id} className="board-col">
            <div className="board-head">{mv[b.labelKey]} <span className="badge">{rows.filter((j) => b.stages.includes(j.stage)).length}</span></div>
            {b.stages.map((s) => {
              const jobs = rows.filter((j) => j.stage === s && j.status !== 'cancelled')
              return jobs.map((j) => (
                <div key={j.id} className="job-card" onClick={() => openDetail(j)}>
                  <div className="job-top">
                    <b>{j.number}</b>
                    <span className={`badge stage-${s}`}>{L(mv, s)}</span>
                  </div>
                  <div className="job-name">{j.customer?.name || '—'}</div>
                  <div className="muted small">{(j.move?.from?.address || '').split(',')[0]} → {(j.move?.to?.address || '').split(',')[0]}</div>
                  <div className="muted small">{j.moveDate} · {j.window}</div>
                  {j.estimate && <div className="est-chip">{j.estimate.truckSize} · {j.estimate.fare} {mv.bhd}</div>}
                  <div className="job-actions">
                    <div className="stage-dots">{MV_STAGES.map((st) => <i key={st} className={MV_STAGES.indexOf(j.stage) >= MV_STAGES.indexOf(st) ? 'on' : ''} />)}</div>
                    {j.stage !== 'completed' && (
                      <button className="btn btn-sm" onClick={(e) => { e.stopPropagation(); advance(j.id) }}>{mv.next} ›</button>
                    )}
                  </div>
                </div>
              ))
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function MoveDetail({ job, isNew, onClose, onSaved, tell, onDispatch, mv, veh = [], drv = [] }) {
  const { lang } = useSite()
  const [j, setJ] = useState(() => JSON.parse(JSON.stringify(job)))
  const [busy, setBusy] = useState(false)
  const set = (p, v) => setJ((x) => ({ ...x, [p]: v }))
  const setCust = (p, v) => setJ((x) => ({ ...x, customer: { ...x.customer, [p]: v } }))
  const setMove = (side, p, v) => setJ((x) => ({ ...x, move: { ...x.move, [side]: { ...x.move[side], [p]: v } } }))
  const setItem = (i, p, v) => setJ((x) => ({ ...x, items: (x.items || []).map((it, k) => (k === i ? { ...it, [p]: v } : it)) }))
  const addItem = (name, fragile = false) => setJ((x) => ({ ...x, items: [...(x.items || []), { id: `it-${Date.now()}`, name, qty: 1, room: 'Various', fragile }] }))
  const rmItem = (i) => setJ((x) => ({ ...x, items: (x.items || []).filter((_, k) => k !== i) }))

  const save = async () => {
    setBusy(true)
    try {
      if (isNew) { await api.createMove(j); tell(mv.saved) }
      else { await api.patchMove(j.id, j); tell(mv.saved) }
      onSaved()
    } finally { setBusy(false) }
  }
  const recalc = async () => {
    const r = await api.estimateMove(j.id)
    setJ((x) => ({ ...x, estimate: r }))
  }
  const next = async () => {
    await api.advanceMove(j.id)
    onSaved()
  }
  const invoice = async () => {
    await api.invoiceFromMove(j.id)
    tell(j.number)
  }

  const stOpts = STAGE_STATUS[j.stage] || ['pending']

  return (
    <div className="move-detail overlay-panel">
      <div className="panel-head">
        <div>
          <h3>{j.number}</h3>
          <div className="side-by-side track-flow mv-flow">
            {MV_STAGES.map((s, i) => (
              <div key={s} className={`tf ${MV_STAGES.indexOf(j.stage) >= i ? 'on' : ''}`}>
                <b>{i + 1}</b><span>{L(mv, s)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel-actions">
          {!isNew && j.stage !== 'completed' && <button className="btn btn-primary btn-sm" onClick={next}>{mv.next} ›</button>}
          {!isNew && j.stage !== 'completed' && (
            <select value={j.stageStatus?.[j.stage] || stOpts[0]} onChange={(e) => setJ((x) => ({ ...x, stageStatus: { ...(x.stageStatus || {}), [j.stage]: e.target.value } }))}>
              {stOpts.map((s) => <option key={s} value={s}>{stLabel(mv, s)}</option>)}
            </select>
          )}
          <button className="btn btn-ghost btn-sm" onClick={onClose}>✕</button>
        </div>
      </div>

      <div className="form-grid">
        <section className="card col2">
          <h4>{mv.customer}</h4>
          <div className="form-row">
            <label>{mv.name}<input value={j.customer?.name || ''} onChange={(e) => setCust('name', e.target.value)} /></label>
            <label>{mv.phone}<input value={j.customer?.phone || ''} onChange={(e) => setCust('phone', e.target.value)} /></label>
          </div>
          <label>{mv.email}<input type="email" value={j.customer?.email || ''} onChange={(e) => setCust('email', e.target.value)} /></label>
          <div className="form-row">
            <div>
              <h5>{mv.propFrom}</h5>
              <label>{mv.fromAdd}<input value={j.move?.from?.address || ''} onChange={(e) => setMove('from', 'address', e.target.value)} /></label>
              <div className="form-row">
                <label>{mv.floor}<input type="number" value={j.move?.from?.floor || 0} onChange={(e) => setMove('from', 'floor', Number(e.target.value))} /></label>
                <label>{mv.rooms}<input type="number" value={j.move?.from?.rooms || 0} onChange={(e) => setMove('from', 'rooms', Number(e.target.value))} /></label>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={!!j.move?.from?.elevator} onChange={(e) => setMove('from', 'elevator', e.target.checked)} /> {mv.elevator}</label>
            </div>
            <div>
              <h5>{mv.propTo}</h5>
              <label>{mv.toAdd}<input value={j.move?.to?.address || ''} onChange={(e) => setMove('to', 'address', e.target.value)} /></label>
              <div className="form-row">
                <label>{mv.floor}<input type="number" value={j.move?.to?.floor || 0} onChange={(e) => setMove('to', 'floor', Number(e.target.value))} /></label>
                <label>{mv.rooms}<input type="number" value={j.move?.to?.rooms || 0} onChange={(e) => setMove('to', 'rooms', Number(e.target.value))} /></label>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={!!j.move?.to?.elevator} onChange={(e) => setMove('to', 'elevator', e.target.checked)} /> {mv.elevator}</label>
            </div>
          </div>
          <div className="form-row">
            <label>{mv.moveDate}<input type="date" value={j.moveDate || ''} onChange={(e) => set('moveDate', e.target.value)} /></label>
            <label>{mv.window}<input value={j.window || ''} onChange={(e) => set('window', e.target.value)} /></label>
          </div>
        </section>

        <section className="card">
          <h4>{mv.items}</h4>
          <div className="catalog" style={{ marginBottom: 8 }}>
            {CATALOG.map((c) => (
              <button key={c} type="button" className="chip" onClick={() => addItem(c, ['TV', 'Office equipment', 'Fragile items', 'Boxes'].includes(c))}>+ {c}</button>
            ))}
          </div>
          <div className="items-table">
            {(j.items || []).map((it, i) => (
              <div key={it.id || i} className="item-row">
                <input className="grow" value={it.name} onChange={(e) => setItem(i, 'name', e.target.value)} />
                <input type="number" min="1" style={{ width: 56 }} value={it.qty} onChange={(e) => setItem(i, 'qty', Number(e.target.value))} />
                <input style={{ width: 90 }} value={it.room} onChange={(e) => setItem(i, 'room', e.target.value)} />
                <label title={mv.fragile}><input type="checkbox" checked={!!it.fragile} onChange={(e) => setItem(i, 'fragile', e.target.checked)} /> 💎</label>
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => rmItem(i)}>✕</button>
              </div>
            ))}
            {!(j.items || []).length && <p className="muted small">{mv.addItem}</p>}
          </div>
        </section>

        <section className="card">
          <h4>{mv.estimate} <span className={`badge ${j.estimate?.ai ? 'ai-live' : ''}`}>{j.estimate?.ai ? mv.aiSized : mv.aiFallback}</span></h4>
          {(j.estimate || {}).truckSize ? (
            <>
              <div className="est-big">{estMini(j.estimate)}</div>
              <div className="breakdown">
                {(j.estimate.breakdown || []).map((b, i) => (
                  <div key={i}><span>{b.label}</span><b>{b.bhd} {mv.bhd}</b></div>
                ))}
                <div className="bd-total"><span>{mv.fare}</span><b>{j.estimate.fare} {mv.bhd}</b></div>
              </div>
              <div className="muted small">{j.estimate.m3} m³ · {j.estimate.rooms} {mv.rooms} {j.estimate.carpenter ? '· 🪚' : ''}</div>
            </>
          ) : (
            <p className="muted small">{mv.noEst}</p>
          )}
          {!isNew && <button className="btn btn-ghost btn-sm" onClick={recalc}>{mv.recalc} ↻</button>}
          <div className="settings-actions" style={{ marginTop: 10 }}>
            {!isNew && j.stage !== 'completed' && <button className="btn btn-primary btn-sm" onClick={() => onDispatch(j)}>📦 {mv.dispatch}</button>}
            {!isNew && <button className="btn btn-ghost btn-sm" onClick={invoice}>{mv.invoiceIt}</button>}
          </div>
        </section>

        <section className="card">
          <h4>{mv.team}</h4>
          <div className="form-row">
            <label>{mv.vehicle}<select value={j.team?.vehicleId || ''} onChange={(e) => set('team', { ...(j.team || {}), vehicleId: e.target.value })}>
              <option value="">{mv.selectVeh}</option>
              {(veh || []).map((v) => <option key={v.id} value={v.id}>{v.plate} · {v.name}</option>)}
            </select></label>
            <label>{mv.driver}<select value={j.team?.driverId || ''} onChange={(e) => set('team', { ...(j.team || {}), driverId: e.target.value })}>
              <option value="">{mv.selectVeh}</option>
              {(drv || []).map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select></label>
          </div>
          <div className="form-row">
            <label>{mv.packers}<input type="number" value={j.team?.packers || 0} onChange={(e) => set('team', { ...(j.team || {}), packers: Number(e.target.value) })} /></label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}><input type="checkbox" checked={!!j.team?.carpenter} onChange={(e) => set('team', { ...(j.team || {}), carpenter: e.target.checked })} /> {mv.carpenter}</label>
          </div>
          {j.quoteId && <p className="muted small">{mv.fromQuote} ✓</p>}
        </section>
      </div>

      <div className="panel-foot">
        <button className="btn btn-primary" onClick={save} disabled={busy}>{busy ? '…' : mv.save}</button>
        <button className="btn btn-ghost" onClick={onClose}>✕</button>
      </div>
    </div>
  )
}