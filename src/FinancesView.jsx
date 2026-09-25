import { useEffect, useMemo, useState } from 'react'
import { api } from './api.js'
import { useSite } from './SiteContext.jsx'
import { t } from './i18n.js'
import { exportJSON, exportCSV, exportExcel, exportPDF } from './exporters.js'

const CAT_COLORS = {
  insurance: '#7f6ae0', registration: '#4aa3c7', salary: '#e07b3f', leasing: '#b06ab3', financing: '#3f8f7c',
  tires: '#2f6fbd', spareParts: '#7a7a7a', accident: '#d64545', tolls: '#c79a2b', parking: '#4a90d9',
  fuel: '#1f9d61', maintenance: '#3961c9',
}

export default function FinancesView() {
  const { copy, lang: lng } = useSite()
  const fc = t[lng].finances || {}
  const [data, setData] = useState({ expenses: [], cats: [] })
  const [profit, setProfit] = useState({ vehicles: [], totals: {}, period: 'month' })
  const [period, setPeriod] = useState('month')
  const [vehicles, setVehicles] = useState([])
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(null)
  const [flash, setFlash] = useState('')
  const [expMenu, setExpMenu] = useState(false)
  const [open, setOpen] = useState(null)
  const [cname, setCname] = useState('')
  const [catMgr, setCatMgr] = useState(false)

  const load = () => {
    api.expenses().then(setData)
    api.profitability(period).then(setProfit)
    api.vehicles().then(setVehicles)
  }
  useEffect(() => { load() }, [period])

  const tell = (m) => { setFlash(m); setTimeout(() => setFlash(''), 2600) }

  const fmtB = (n) => `BD ${(Number(n) || 0).toFixed(2).replace(/\.00$/, '')}`
  const vLabel = (id) => {
    const v = vehicles?.find((x) => x.id === id)
    if (v?.name) return v.name
    const n = String(id || '').replace(/^veh-/, '')
    return `Vehicle #${n}`
  }
  const customCats = (data.customCats || [])
  const catLabel = (c) => (customCats.includes(c) ? c : fc[`cat_${c}`] || c.replace(/[A-Z]/g, (m) => ' ' + m.toLowerCase()).trim())
  const expLabel = (r) => r.name ? (customCats.includes(r.name) ? r.name : r.name) : catLabel(r.category)
  const rows = useMemo(() => data.expenses, [data])
  const doDelete = async (id) => {
    if (!window.confirm((fc.confirmDel || 'Delete this expense?'))) return
    await api.deleteExpense(id)
    tell('✓'); load()
  }
  const setNewCat = async () => {
    const nm = (cname || '').trim()
    if (!nm) return
    try {
      await api.addExpenseCat(nm)
      setCname(''); tell('✓'); load()
    } catch (err) {
      setFlash(String(err.message || err)); setTimeout(() => setFlash(''), 2600)
    }
  }
  const renameCat = async (old) => {
    const nm = (window.prompt(fc.catRename || 'New name for this category?', old) || '').trim()
    if (!nm || nm === old) return
    try { await api.renameExpenseCat(old, nm); tell('✓'); load() } catch (err) { setFlash(String(err.message || err)); setTimeout(() => setFlash(''), 2600) }
  }
  const delCat = async (c) => {
    if (!window.confirm((fc.catDelete || 'Remove this custom name? Existing entries keep their label.'))) return
    try { await api.deleteExpenseCat(c); tell('✓'); load() } catch (err) { setFlash(String(err.message || err)); setTimeout(() => setFlash(''), 2600) }
  }
  const doSave = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const body = {
      category: fd.get('category'),
      name: fd.get('name') || '',
      amount: Number(fd.get('amount')) || 0,
      vehicleId: fd.get('vehicleId') || null,
      date: fd.get('date'),
      vendor: fd.get('vendor') || '',
      notes: fd.get('notes') || '',
      recurring: fd.get('recurring') === 'on',
    }
    if (edit) await api.patchExpense(edit.id, body)
    else await api.createExpense(body)
    setModal(false); setEdit(null); tell('✓'); load()
  }

  const activeRows = profit.vehicles || []
  const totals = profit.totals || {}

  return (
    <div>
      <div className="toolbar">
        <button className="btn btn-primary btn-sm" onClick={() => { setEdit(null); setModal(true) }}>+ {fc.newExpense}</button>
        <button className="btn btn-ghost btn-sm" onClick={async () => { await api.financeSeed(); load(); tell('✓') }}>{fc.demoSeed}</button>
        <button className="btn btn-ghost btn-sm" onClick={() => setCatMgr((v) => !v)}>{fc.catManage} ▾</button>
        {catMgr && (
          <span className="drop-menu" style={{ position: 'absolute', zIndex: 20, right: 0 }}>
            {customCats.length ? customCats.map((c) => (
              <span key={c} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 8px' }}>
                <b style={{ flex: 1 }}>{c}</b>
                <button className="btn btn-ghost btn-sm" onClick={() => renameCat(c)}>✎</button>
                <button className="btn btn-ghost btn-sm" onClick={() => delCat(c)}>🗑</button>
              </span>
            )) : <span className="muted" style={{ padding: 6 }}>{fc.catNone}</span>}
          </span>
        )}
        <span className="drop" style={{ position: 'relative' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setExpMenu((v) => !v)}>{copy.actions.export || 'Export'} ▾</button>
          {expMenu && (
            <span className="drop-menu" onMouseLeave={() => setExpMenu(false)}>
              <button onClick={() => { setExpMenu(false); exportJSON({ expenses: rows, profitability: activeRows }) }}>{copy.actions.json || 'JSON'}</button>
              <button onClick={() => { setExpMenu(false); exportCSV('expenses', rows) }}>{copy.actions.csv || 'CSV'}</button>
              <button onClick={() => { setExpMenu(false); exportExcel({ expenses: rows, profitability: activeRows }) }}>{copy.actions.excel || 'Excel'}</button>
              <button onClick={() => { setExpMenu(false); exportPDF('expenses', rows, lng, 'finances') }}>{copy.actions.pdf || 'PDF'}</button>
            </span>
          )}
        </span>
      </div>
      {flash && <div className="toast">{flash}</div>}

      <div className="slides" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        {[['month', fc.periodMonth], ['30d', fc.period30d], ['all', fc.periodAll]].map(([p, lab]) => (
          <button key={p} className={`chip ${period === p ? 'chip-on' : ''}`} onClick={() => setPeriod(p)}>{lab}</button>
        ))}
        <span className="chip">💵 {fc.fleetNet}: <b style={{ color: totals.net >= 0 ? 'var(--ok, #1f9d61)' : 'var(--err, #d64545)' }}>{fmtB(totals.net)}</b></span>
        <span className="chip">📈 {fc.revenue}: {fmtB(totals.revenue)}</span>
        <span className="chip">🧾 {fc.costs}: {fmtB((totals.fuel || 0) + (totals.maintenance || 0) + (totals.driver || 0) + (totals.other || 0) + (totals.overhead || 0))}</span>
      </div>

      <h3 className="sec-title">{fc.profitability}</h3>
      <div className="table-wrap" style={{ marginBottom: 22 }}>
        <table className="tbl">
          <thead>
            <tr>
              <th>{fc.truck}</th><th>{fc.revenue}</th><th>{fc.fuel}</th><th>{fc.maintenance}</th><th>{fc.driver}</th><th>{fc.other}</th><th>{fc.net}</th>
            </tr>
          </thead>
          <tbody>
            {activeRows.filter((v) => v.revenue || v.fuel || v.maintenance || v.driver || v.other).map((v) => (
              <tr key={v.id} style={{ cursor: 'pointer' }} onClick={() => setOpen(open === v.id ? null : v.id)} title={fc.details}>
                <td>🚚 {v.label}</td>
                <td className="num">{fmtB(v.revenue)}</td>
                <td className="num">{fmtB(v.fuel)}</td>
                <td className="num">{fmtB(v.maintenance)}</td>
                <td className="num">{fmtB(v.driver)}</td>
                <td className="num">{fmtB(v.other)}</td>
                <td className="num" style={{ fontWeight: 700, color: v.net >= 0 ? '#1f9d61' : '#d64545' }}>{fmtB(v.net)}</td>
              </tr>
            ))}
            {activeRows.every((v) => !(v.revenue || v.fuel || v.maintenance || v.driver || v.other)) && (
              <tr><td colSpan={7} className="muted">{fc.noData || 'No activity in this period'}</td></tr>
            )}
          </tbody>
        </table>
        {activeRows.some((v) => open === v.id) && (() => {
          const v = activeRows.find((x) => x.id === open)
          if (!v) return null
          const splits = Object.entries(v.byCat || {}).filter(([, a]) => a)
          return (
            <div className="doc-preview" style={{ margin: '6px 0 12px' }}>
              <b>{v.label}</b> — {fc.catBreakdown}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 6 }}>
                {splits.map(([c, a]) => (
                  <span key={c} className="chip"><span style={{ color: CAT_COLORS[c] || '#666' }}>● {catLabel(c)}</span>: {fmtB(a)}</span>
                ))}
              </div>
            </div>
          )
        })()}
      </div>

      <h3 className="sec-title">{fc.ledger}</h3>
      <div className="table-wrap">
        <table className="tbl">
          <thead>
            <tr><th>{fc.category}</th><th>{fc.truck}</th><th>{fc.vendor}</th><th>{fc.date}</th><th>{fc.notes}</th><th className="num">{fc.amount}</th><th></th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td><span style={{ color: CAT_COLORS[r.category] || '#666' }}>● {expLabel(r)}</span></td>
                <td>{r.vehicleId ? vLabel(r.vehicleId) : '—'}</td>
                <td>{r.vendor || '—'}</td>
                <td>{r.date || '—'}</td>
                <td className="muted">{r.notes || ''}</td>
                <td className="num">{fmtB(r.amount)}</td>
                <td>
                  <button className="btn btn-ghost btn-sm" onClick={() => { setEdit(r); setModal(true) }}>✎</button>
                  <button className="btn btn-ghost btn-sm" onClick={() => doDelete(r.id)}>🗑</button>
                </td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={7} className="muted">{fc.noExpenses || 'No expenses yet'}</td></tr>}
          </tbody>
        </table>
      </div>

      {modal && (
        <div className="overlay" onClick={() => setModal(false)}>
          <div className="modal" style={{ maxWidth: 420 }} onClick={(e) => e.stopPropagation()}>
            <h3>{edit ? fc.editExpense : fc.addExpense}</h3>
            <form onSubmit={doSave}>
              <label>{fc.category}
                <select name="category" defaultValue={edit?.category || 'insurance'} required>
                  {(data.cats.length ? data.cats : ['insurance', 'registration', 'salary', 'leasing', 'financing', 'tires', 'spareParts', 'accident', 'tolls', 'parking']).map((c) => (
                    <option key={c} value={c}>{catLabel(c)}</option>
                  ))}
                </select>
              </label>
              <label>{fc.catName}
                <input name="name" defaultValue={edit?.name || ''} placeholder={fc.catNamePh} />
              </label>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <input value={cname} onChange={(e) => setCname(e.target.value)} placeholder={fc.catAddNew} style={{ flex: 1 }} />
                <button type="button" className="btn btn-ghost btn-sm" onClick={setNewCat}>＋</button>
              </div>
              <label>{fc.truck}
                <select name="vehicleId" defaultValue={edit?.vehicleId || ''}>
                  <option value="">—</option>
                  {(vehicles || []).map((v) => <option key={v.id} value={v.id}>{v.name || `Vehicle #${v.id.replace('veh-', '')}`}</option>)}
                </select>
              </label>
              <label>{fc.amount}
                <input name="amount" type="number" step="0.01" min="0" required defaultValue={edit?.amount ?? ''} placeholder="0.00" />
              </label>
              <label>{fc.date}
                <input name="date" type="date" required defaultValue={edit?.date || new Date().toISOString().slice(0, 10)} />
              </label>
              <label>{fc.vendor}
                <input name="vendor" defaultValue={edit?.vendor || ''} placeholder="NIC Bahrain, Bahrain Gas…" />
              </label>
              <label>{fc.notes}
                <input name="notes" defaultValue={edit?.notes || ''} placeholder={fc.notesPh || 'Optional note'} />
              </label>
              <label className="ck"><input name="recurring" type="checkbox" defaultChecked={edit?.recurring} /> {fc.recurring}</label>
              <div className="modal-actions">
                <button type="button" className="btn btn-ghost btn-sm" onClick={() => { setModal(false); setEdit(null) }}>{copy.actions.cancel || 'Cancel'}</button>
                <button type="submit" className="btn btn-primary btn-sm">{copy.actions.save || 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}