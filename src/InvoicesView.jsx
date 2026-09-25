import { useEffect, useMemo, useState } from 'react'
import { api } from './api.js'
import { useSite } from './SiteContext.jsx'
import { t } from './i18n.js'
import { exportCSV, exportExcel, exportInvoicePDF, exportJSON, exportPDF } from './exporters.js'

const STATUSES = ['draft', 'issued', 'paid', 'void']
const waLink = (inv) => {
  const ph = (inv.customer?.phone || '').replace(/\D/g, '')
  const text = `Invoice ${inv.number} · Red Sun Movers & Packers\nTotal: ${inv.total} BHD (VAT incl.)\nDue: ${inv.dueAt || 'on issue'}\nTo pay or questions: +973 3935 0288`
  return `https://wa.me/${ph || '97339350288'}?text=${encodeURIComponent(text)}`
}

export default function InvoicesView() {
  const { lang, copy } = useSite()
  const inv = t[lang].invoices
  const [data, setData] = useState({ invoices: [], statusCounts: {}, outstandingBhd: 0 })
  const [edit, setEdit] = useState(null)
  const [flash, setFlash] = useState('')
  const [expMenu, setExpMenu] = useState(false)

  const load = () => api.invoices().then(setData)
  useEffect(() => { load() }, [])

  const tell = (m) => { setFlash(m); setTimeout(() => setFlash(''), 2600) }
  const all = useMemo(() => ({ invoices: data.invoices }), [data])

  const status = (r) => (r.status === 'issued' && r.dueAt && new Date(r.dueAt) < new Date() && !r.paidAt ? 'overdue' : r.status)
  const count = (k) => data.statusCounts[k] || 0

  const doPatch = async (id, body) => { await api.patchInvoice(id, body); load() }
  const markPaid = async (r) => {
    const method = window.prompt(`${inv.method}:`, 'Cash')
    if (method == null) return
    await doPatch(r.id, { status: 'paid', method })
    tell(`${r.number} ✓`)
  }
  const copyInv = async (r) => {
    await navigator.clipboard.writeText(waLink(r).replace('https://wa.me/?text=', ''))
    tell(r.number)
  }
  const newInv = () => setEdit({ id: 'new', number: '—', customer: { name: '', phone: '', email: '' }, items: [{ desc: 'Moving service', qty: 1, unit: 'job', price: 0, amount: 0 }], subtotal: 0, vatPct: 10, vatBhd: 0, total: 0, status: 'draft', notes: '', method: '', dueAt: null })

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={newInv}>+ {inv.newInv}</button>
        <span className="drop" style={{ position: 'relative' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setExpMenu((v) => !v)}>{copy.actions.export || 'Export'} ▾</button>
          {expMenu && (
            <span className="drop-menu" onMouseLeave={() => setExpMenu(false)}>
              <button onClick={() => { setExpMenu(false); exportJSON(all, lang) }}>{copy.actions.json || 'JSON'}</button>
              <button onClick={() => { setExpMenu(false); exportCSV('invoices', all.invoices || []) }}>{copy.actions.csv || 'CSV'}</button>
              <button onClick={() => { setExpMenu(false); exportExcel(all, lang) }}>{copy.actions.excel || 'Excel'}</button>
              <button onClick={() => { setExpMenu(false); exportPDF('invoices', all.invoices || [], lang, 'invoices') }}>{copy.actions.pdf || 'PDF'}</button>
            </span>
          )}
        </span>
      </div>
      {flash && <div className="toast">{flash}</div>}

      <div className="slides" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
        <span className="chip">💰 {inv.outstanding}: {data.outstandingBhd} BHD</span>
        {STATUSES.concat('overdue').map((s) => (count(s) > 0 || s === 'issued') && (
          <span key={s} className="chip">{inv[`st_${s}`] || s}: {count(s)}</span>
        ))}
        <span className="chip">🧾 {all.invoices.length}</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>{inv.number}</th><th>{inv.customer}</th><th>{inv.source}</th><th>{inv.total}</th><th>{inv.due}</th><th>{inv.method}</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {data.invoices.map((r) => {
              const st = status(r)
              const src = r.linked ? `${inv.fromKind[r.source.kind] || ''} ${r.linked.number || r.linked.code || ''}` : (inv.fromKind[r.source.kind] || '')
              return (
                <tr key={r.id} className={st === 'overdue' ? 'row-warn' : ''}>
                  <td><b>{r.number}</b>{r.source.kind !== 'manual' && <span className="badge">⚡ {inv.auto}</span>}</td>
                  <td>{r.customer?.name}<br /><span className="muted">{r.customer?.phone}</span></td>
                  <td className="muted small">{src}</td>
                  <td><b>{r.total}</b> BHD<br /><span className="muted">+ {r.vatBhd} VAT</span></td>
                  <td>{r.dueAt ? new Date(r.dueAt).toLocaleDateString() : '—'}</td>
                  <td>{r.method || '—'}</td>
                  <td>
                    <select value={st === 'overdue' ? 'issued' : st} onChange={(e) => doPatch(r.id, { status: e.target.value })}>
                      {STATUSES.map((s) => <option key={s} value={s}>{inv[`st_${s}`]}</option>)}
                    </select>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      <a className="btn btn-sm" href={waLink(r)} target="_blank" rel="noreferrer">{inv.sendWa}</a>
                      <button className="btn btn-sm" onClick={() => copyInv(r)}>{inv.copy}</button>
                      <button className="btn btn-sm" onClick={() => exportInvoicePDF(r, lang)}>{inv.pdf}</button>
                      <button className="btn btn-sm" onClick={() => setEdit(r)}>{inv.edit}</button>
                      {st !== 'paid' && <button className="btn btn-sm" onClick={() => markPaid(r)}>{inv.markPaid}</button>}
                      <button className="btn btn-ghost btn-sm" onClick={async () => { if (confirm('?')) { await api.remove('invoices', r.id); load() } }}>🗑</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {edit && <InvoiceEditor key={edit.id} inv={edit} onClose={() => setEdit(null)} onSaved={() => { load(); setEdit(null) }} />}
    </div>
  )
}

function InvoiceEditor({ inv, onClose, onSaved }) {
  const { lang } = useSite()
  const iv = t[lang].invoices
  const [f, setF] = useState(() => JSON.parse(JSON.stringify(inv)))
  const [busy, setBusy] = useState(false)
  const setItem = (i, p, v) => setF((x) => ({ ...x, items: x.items.map((it, k) => (k === i ? { ...it, [p]: v } : it)) }))
  const addLine = () => setF((x) => ({ ...x, items: [...x.items, { desc: 'Line item', qty: 1, unit: 'unit', price: 0, amount: 0 }] }))
  const rmLine = (i) => setF((x) => ({ ...x, items: x.items.filter((_, k) => k !== i) }))
  const recompute = () => {
    const sub = f.items.reduce((s, l) => s + ((Number(l.qty) || 1) * (Number(l.price) || 0)), 0)
    const vat = sub * ((Number(f.vatPct) || 0) / 100)
    setF((x) => ({ ...x, items: x.items.map((l) => ({ ...l, amount: Math.round(((Number(l.qty) || 1) * (Number(l.price) || 0)) * 100) / 100 })), subtotal: Math.round(sub * 100) / 100, vatBhd: Math.round(vat * 100) / 100, total: Math.round((sub + vat) * 100) / 100 }))
  }
  const save = async () => {
    setBusy(true)
    try {
      if (f.id === 'new') await api.createInvoice(f)
      else await api.patchInvoice(f.id, f)
      onSaved()
    } finally { setBusy(false) }
  }
  return (
    <div className="overlay-mask" onClick={onClose}>
      <div className="overlay-panel invoice-edit" onClick={(e) => e.stopPropagation()}>
        <div className="panel-head">
          <h3>{f.id === 'new' ? iv.newInv : f.number}</h3>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>✕</button>
        </div>
        <div className="form-grid">
          <div className="card">
            <h4>{iv.customer}</h4>
            <div className="form-row">
              <label>{iv.customer}: <input value={f.customer?.name || ''} onChange={(e) => setF((x) => ({ ...x, customer: { ...x.customer, name: e.target.value } }))} /></label>
              <label>{t[lang].moving.phone}: <input value={f.customer?.phone || ''} onChange={(e) => setF((x) => ({ ...x, customer: { ...x.customer, phone: e.target.value } }))} /></label>
            </div>
          </div>
          <div className="card">
            <h4>{iv.total}</h4>
            <div className="form-row">
              <label>{iv.vat} %<input type="number" value={f.vatPct} onChange={(e) => setF((x) => ({ ...x, vatPct: Number(e.target.value) }))} /></label>
              <label>{iv.status}
                <select value={f.status} onChange={(e) => setF((x) => ({ ...x, status: e.target.value }))}>
                  {STATUSES.map((s) => <option key={s} value={s}>{iv[`st_${s}`]}</option>)}
                </select>
              </label>
            </div>
            {f.status === 'paid' && <label>{iv.method}<input value={f.method || ''} onChange={(e) => setF((x) => ({ ...x, method: e.target.value }))} /></label>}
          </div>
          <div className="card col2">
            <h4>{iv.desc}</h4>
            <table className="items-table">
              <thead><tr><th>{iv.desc}</th><th>{iv.qty}</th><th>{iv.unit}</th><th>{iv.price}</th><th>{iv.total}</th><th></th></tr></thead>
              <tbody>
                {f.items.map((l, i) => (
                  <tr key={i}>
                    <td><input value={l.desc} onChange={(e) => setItem(i, 'desc', e.target.value)} /></td>
                    <td><input type="number" style={{ width: 60 }} value={l.qty} onChange={(e) => setItem(i, 'qty', Number(e.target.value))} /></td>
                    <td><input style={{ width: 60 }} value={l.unit} onChange={(e) => setItem(i, 'unit', e.target.value)} /></td>
                    <td><input type="number" style={{ width: 80 }} value={l.price} onChange={(e) => setItem(i, 'price', Number(e.target.value))} /></td>
                    <td>{Math.round(((Number(l.qty) || 1) * (Number(l.price) || 0)) * 100) / 100}</td>
                    <td><button className="btn btn-ghost btn-sm" onClick={() => rmLine(i)}>✕</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-ghost btn-sm" onClick={addLine}>+ {iv.desc}</button>
            <div className="bd-total"><span>{iv.subtotal} / {iv.vat}% → {iv.total} BHD</span><b>{f.total} BHD</b></div>
          </div>
        </div>
        <div className="panel-foot">
          <button className="btn btn-primary" onClick={save} disabled={busy}>{busy ? '…' : iv.create}</button>
          <button className="btn btn-ghost" onClick={onClose}>✕</button>
        </div>
      </div>
    </div>
  )
}