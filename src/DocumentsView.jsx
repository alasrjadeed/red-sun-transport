import { useEffect, useMemo, useRef, useState } from 'react'
import { api } from './api.js'
import { useSite } from './SiteContext.jsx'
import { t } from './i18n.js'
import { exportJSON, exportCSV, exportExcel, exportPDF } from './exporters.js'

const BUCKETS = ['expired', 'exp30', 'exp90', 'ok']
const KINDS = ['registration', 'insurance', 'license', 'id', 'invoice', 'fuelReceipt', 'maintenanceInvoice', 'other']

const bucketBadge = (b) => {
  if (b === 'expired') return 'badge badge-red'
  if (b === 'exp30') return 'badge badge-orange'
  if (b === 'exp90') return 'badge badge-yellow'
  return 'badge'
}

export default function DocumentsView() {
  const { lang, copy } = useSite()
  const dc = t[lang].docs
  const [data, setData] = useState({ documents: [], counts: { expired: 0, exp30: 0, exp90: 0, ok: 0, total: 0 } })
  const [kindF, setKindF] = useState('all')
  const [bucketF, setBucketF] = useState('all')
  const [scan, setScan] = useState(false)
  const [edit, setEdit] = useState(null)
  const [flash, setFlash] = useState('')
  const [expMenu, setExpMenu] = useState(false)

  const load = () => api.documents().then(setData)
  useEffect(() => { load() }, [])

  const tell = (m) => { setFlash(m); setTimeout(() => setFlash(''), 2600) }

  const rows = useMemo(() => data.documents.filter((r) => {
    const kb = (r.kind || 'other') === kindF || kindF === 'all'
    const bb = (r.bucket || 'ok') === bucketF || bucketF === 'all'
    return kb && bb
  }), [data, kindF, bucketF])

  const kLabel = (k) => dc[`kind_${k}`] || (k[0].toUpperCase() + k.slice(1))

  const doNotify = async (r) => {
    const to = r.linked?.kind === 'driver' ? 'driver' : 'office'
    const res = await api.notifyDoc(r.id, { to, lang })
    try { await navigator.clipboard.writeText(res.message) } catch {}
    if (res.waLink) window.open(res.waLink, '_blank')
    tell(dc.copied)
    load()
  }

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => setScan(true)}>+ {dc.new}</button>
        <button className="btn btn-ghost btn-sm" onClick={async () => { await api.seedDocuments(); load(); tell('✓') }}>{dc.demoSeed}</button>
        <span className="drop" style={{ position: 'relative' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setExpMenu((v) => !v)}>{copy.actions.export || 'Export'} ▾</button>
          {expMenu && (
            <span className="drop-menu" onMouseLeave={() => setExpMenu(false)}>
              <button onClick={() => { setExpMenu(false); exportJSON({ documents: rows }) }}>{copy.actions.json || 'JSON'}</button>
              <button onClick={() => { setExpMenu(false); exportCSV('documents', rows) }}>{copy.actions.csv || 'CSV'}</button>
              <button onClick={() => { setExpMenu(false); exportExcel({ documents: rows }) }}>{copy.actions.excel || 'Excel'}</button>
              <button onClick={() => { setExpMenu(false); exportPDF('documents', rows, lang, 'documents') }}>{copy.actions.pdf || 'PDF'}</button>
            </span>
          )}
        </span>
      </div>
      {flash && <div className="toast">{flash}</div>}

      <div className="slides" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
        {[['expired', dc.bucket_expired], ['exp30', dc.bucket_exp30], ['exp90', dc.bucket_exp90], ['ok', dc.bucket_ok]].map(([b, l]) => (
          <button key={b} className={`chip ${bucketF === b ? 'chip-on' : ''}`} onClick={() => setBucketF(bucketF === b ? 'all' : b)}>
            {l}: {data.counts[b] || 0}
          </button>
        ))}
        <span className="chip">📄 {data.counts.total || 0}</span>
      </div>

      <div className="slides" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        {['all', ...KINDS].map((k) => (
          <button key={k} className={`chip ${kindF === k ? 'chip-on' : ''}`} onClick={() => setKindF(k)}>
            {k === 'all' ? dc.all.replace('(X)', `(${data.counts.total || 0})`) : kLabel(k)}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Status</th><th>Document</th><th>Kind</th><th>Linked</th><th>Expiry</th><th>Details</th><th>Source</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const exp = r.expiry?.date
              const dL = r.daysLeft
              const who = r.linkedRecord?.plate || r.linkedRecord?.name || ''
              const fin = r.finances || {}
              return (
                <tr key={r.id} className={r.bucket === 'expired' ? 'row-warn' : ''}>
                  <td><span className={bucketBadge(r.bucket)}>{dc[`bucket_${r.bucket}`] || r.bucket}</span><br />
                    <span className="muted small">{dL != null ? (dL < 0 ? dc.expiredAgo.replace('X', Math.abs(dL)) : dc.daysLeft.replace('X', dL)) : dc.none}</span></td>
                  <td><b>{r.title || kLabel(r.kind)}</b><br />
                    <span className="muted small">{r.file ? `${dc.attached} · ${r.file.name || ''}` : dc.noAttach} · {r.createdAt ? new Date(r.createdAt).toLocaleDateString() : ''}</span></td>
                  <td className="muted small">{kLabel(r.kind)}</td>
                  <td className="muted small">{who || (r.linked ? dc.linked : dc.none)}</td>
                  <td>{exp ? new Date(exp).toLocaleDateString() : dc.none}<br />
                    {r.extracted?.plate && <span className="muted small">{r.extracted.plate}</span>}</td>
                  <td className="muted small">
                    {fin.amount != null && <span>💰 {fin.amount}{fin.liters ? ` · ${fin.liters} L` : ''}</span>}
                    {fin.vendor}</td>
                  <td className="muted small">{dc[r.source] || r.source}<br />
                    {r.extracted?.confidence ? `${dc.confidence} ${r.extracted.confidence}` : ''}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {r.file && <a className="btn btn-sm" href={api.documentFile(r.id)} target="_blank" rel="noreferrer">{dc.view}</a>}
                      <button className="btn btn-sm" onClick={() => doNotify(r)}>✉ {dc.notify}</button>
                      <button className="btn btn-sm" onClick={() => setEdit(r)}>{dc.edit}</button>
                      <button className="btn btn-ghost btn-sm" onClick={async () => { await api.reExtractDoc(r.id); load() }}>{dc.reExtract}</button>
                      <button className="btn btn-ghost btn-sm" onClick={async () => { if (confirm('?')) { await api.remove('documents', r.id); load() } }}>🗑</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {scan && <ScanDocument onClose={() => setScan(false)} onSaved={() => { setScan(false); load() }} />}
      {edit && <DocEditor doc={edit} onClose={() => setEdit(null)} onSaved={() => { setEdit(null); load() }} />}
    </div>
  )
}

function ScanDocument({ onClose, onSaved }) {
  const { lang, copy } = useSite()
  const dc = t[lang].docs
  const fileRef = useRef(null)
  const [tab, setTab] = useState('text')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [kind, setKind] = useState('')
  const [extra, setExtra] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  const pick = (f) => {
    if (!f) return
    setFile(f)
    setTab('ai')
    const rd = new FileReader()
    rd.onload = () => setPreview(rd.result)
    rd.readAsDataURL(f)
  }

  const submit = async () => {
    setBusy(true)
    setMsg('')
    try {
      let body = { title: title.trim() || file?.name || (kind ? kind : 'Document') }
      if (file) body.file = { name: file.name, dataUrl: preview }
      if (kind) body.kind = kind
      if (text.trim()) body.extractionText = text
      if (extra.trim()) body.extractionText = (body.extractionText ? body.extractionText + '\n' : '') + extra
      await api.createDocument(body)
      onSaved()
    } catch (e) {
      setMsg(String(e.message || e))
      setBusy(false)
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-panel" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-head">
          <b>📷 {dc.new}</b>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>✕</button>
        </div>
        <div className="slide-tabs">
          {[['text', dc.textTab], ['ai', dc.aiTab], ['manual', dc.manualTab]].map(([k, l]) => (
            <button key={k} className={`sl ${tab === k ? 'on' : ''}`} onClick={() => setTab(k)}>{l}</button>
          ))}
        </div>

        <div style={{ margin: '10px 0' }}>
          <input style={{ width: '100%', padding: 8 }} placeholder={dc.manualTab + ' — ' + (dc.kind_other + '/') + KINDS.slice(0, 3).map((k) => dc[`kind_${k}`] || k).join(', ')} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        {tab === 'ai' && (
          <div style={{ margin: '10px 0' }}>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(e.target.files?.[0])} />
            {preview
              ? <div className="doc-preview"><img src={preview} alt="" /><button className="btn btn-ghost btn-sm" onClick={() => { setFile(null); setPreview('') }}>✕</button></div>
              : <button className="btn btn-ghost" onClick={() => fileRef.current?.click()}>📄 {dc.browse}</button>}
            {file && <p className="muted small">{dc.sub}</p>}
          </div>
        )}

        {tab === 'text' && (
          <div style={{ margin: '10px 0' }}>
            <label className="muted small">{dc.orPaste}</label>
            <textarea rows={5} style={{ width: '100%' }} value={text} onChange={(e) => setText(e.target.value)} placeholder={'Plate: BH-\u2026\nExpiry: 10/11/2026\nTotal: 26 BHD'} />
          </div>
        )}

        {tab === 'manual' && (
          <div style={{ margin: '10px 0' }}>
            <select value={kind} onChange={(e) => setKind(e.target.value)}>
              <option value="">{dc.manualTab} — {dc.kind_other}</option>
              {KINDS.map((k) => <option key={k} value={k}>{dc[`kind_${k}`] || k}</option>)}
            </select>
            <input style={{ width: '100%', marginTop: 8, padding: 8 }} placeholder={dc.plate + ' / ' + dc.licenseNo + ' / ' + dc.expiryDate + ' / ' + dc.amount} value={extra} onChange={(e) => setExtra(e.target.value)} />
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="btn btn-primary" disabled={busy} onClick={submit}>{busy ? '…' : dc.save}</button>
          <button className="btn btn-ghost" onClick={onClose}>{copy.actions.cancel || 'Cancel'}</button>
        </div>
        {msg && <p className="muted" style={{ marginTop: 8 }}>⚠ {msg}</p>}
      </div>
    </div>
  )
}

function DocEditor({ doc, onClose, onSaved }) {
  const { lang, copy } = useSite()
  const dc = t[lang].docs
  const [f, setF] = useState(() => ({
    title: doc.title || '',
    kind: doc.kind || 'other',
    notes: doc.notes || '',
    expiryDate: doc.extracted?.expiryDate || doc.expiry?.date || '',
    plate: doc.extracted?.plate || '',
    licenseNo: doc.extracted?.licenseNo || '',
    driverName: doc.extracted?.driverName || '',
    invoiceNo: doc.extracted?.invoiceNo || '',
    owner: doc.extracted?.owner || '',
    amount: doc.finances?.amount ?? '',
    liters: doc.finances?.liters ?? '',
    vendor: doc.finances?.vendor || '',
  }))
  const [busy, setBusy] = useState(false)
  const set = (k, v) => setF((x) => ({ ...x, [k]: v }))

  const save = async () => {
    setBusy(true)
    try {
      await api.patchDocument(doc.id, {
        title: f.title, kind: f.kind, notes: f.notes,
        extracted: {
          ...(doc.extracted || {}),
          expiryDate: f.expiryDate || null, plate: f.plate, licenseNo: f.licenseNo,
          driverName: f.driverName, invoiceNo: f.invoiceNo, owner: f.owner,
        },
        finances: { amount: f.amount === '' ? null : Number(f.amount), liters: f.liters === '' ? null : Number(f.liters), vendor: f.vendor, invoiceNo: f.invoiceNo },
      })
      onSaved()
    } catch (e) {
      alert(String(e.message || e)); setBusy(false)
    }
  }

  const E = ({ l, k, ph }) => <label className="muted small" style={{ display: 'block', margin: '8px 0 2px' }}>{l}<input className="i" value={f[k] ?? ''} placeholder={ph || ''} onChange={(e) => set(k, e.target.value)} /></label>

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-panel" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-head">
          <b>✏ {dc.edit} — {doc.title || ''}</b>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>✕</button>
        </div>
        <E l={dc.manualTab} k="title" />
        <E l={dc.status} k="kind" />
        <div className="form-grid">
          <E l={dc.expiryDate} k="expiryDate" ph="2026-11-10" />
          <E l={dc.plate} k="plate" />
          <E l={dc.licenseNo} k="licenseNo" />
          <E l={dc.driverName} k="driverName" />
          <E l={dc.owner} k="owner" />
          <E l={dc.invoiceNo} k="invoiceNo" />
          <E l={dc.amount} k="amount" />
          <E l={dc.liters} k="liters" />
        </div>
        <E l={dc.vendor} k="vendor" />
        <label className="muted small" style={{ display: 'block', margin: '8px 0 2px' }}>{dc.notes}<textarea rows={2} style={{ width: '100%' }} value={f.notes} onChange={(e) => set('notes', e.target.value)} /></label>
        <div className="form-grid" style={{ marginTop: 10 }}>
          <button className="btn btn-primary" disabled={busy} onClick={save}>{busy ? '…' : dc.save}</button>
          <button className="btn btn-ghost" onClick={onClose}>{copy?.actions?.cancel || 'Cancel'}</button>
        </div>
        {(doc.flows || []).length > 0 && (
          <div className="muted small" style={{ marginTop: 10 }}>
            <b>{dc.flows}:</b>
            <ul style={{ margin: '4px 0 0 16px' }}>{doc.flows.map((fl, i) => <li key={i}>{fl.label}{fl.message ? ' — ' + fl.message : ''}</li>)}</ul>
          </div>
        )}
      </div>
    </div>
  )
}