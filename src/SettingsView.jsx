import { useEffect, useState } from 'react'
import { api, setToken } from './api.js'
import { useSite } from './SiteContext.jsx'
import { t } from './i18n.js'

const PROVIDERS = [
  { id: 'openai', label: 'OpenAI', base: '', model: 'gpt-4o-mini' },
  { id: 'deepseek', label: 'DeepSeek', base: 'https://api.deepseek.com', model: 'deepseek-chat' },
  { id: 'openrouter', label: 'OpenRouter', base: 'https://openrouter.ai/api/v1/chat/completions', model: 'openai/gpt-4o-mini' },
  { id: 'custom', label: 'Custom (OpenAI-compatible)', base: '', model: 'gpt-4o-mini' },
]

const TABS = ['company', 'email', 'whatsapp', 'sms', 'features', 'security', 'seo']

export function AdminLogin({ onDone }) {
  const { lang } = useSite()
  const s = t[lang].settings
  const [pw, setPw] = useState('')
  const [err, setErr] = useState('')
  const [busy, setBusy] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setErr('')
    try {
      await api.login(pw)
      onDone()
    } catch (ex) {
      setErr(ex.message)
    } finally {
      setBusy(false)
    }
  }
  return (
    <div className="login-shell">
      <form className="login-card" onSubmit={submit}>
        <h3>{s.loginTitle}</h3>
        <p className="muted">{s.loginSub}</p>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••" autoFocus dir="ltr" />
        {err && <div className="form-error">{err}</div>}
        <button className="btn btn-primary" disabled={busy || !pw}>{busy ? s.loginLoading : s.login}</button>
      </form>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label>
      {label}
      {children}
    </label>
  )
}

const toggle = (v, key) => v ? 'on' : ''

export default function SettingsView({ onAuthChange }) {
  const { lang } = useSite()
  const s = t[lang].settings
  const [busy, setBusy] = useState(true)
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState({ type: '', text: '' })
  const [tab, setTab] = useState('company')

  const [provider, setProvider] = useState('openai')
  const [model, setModel] = useState('gpt-4o-mini')
  const [key, setKey] = useState('')
  const [base, setBase] = useState('')
  const [keySet, setKeySet] = useState(false)
  const [pwCur, setPwCur] = useState('')
  const [pwNew, setPwNew] = useState('')
  const [pwConf, setPwConf] = useState('')

  const [cmp, setCmp] = useState({})
  const [smtp, setSmtp] = useState({})
  const [wa, setWa] = useState({})
  const [sms, setSms] = useState({})
  const [features, setFeatures] = useState({})
  const [seo, setSeo] = useState({})
  const [seoScore, setSeoScore] = useState(null)
  const [seoUrls, setSeoUrls] = useState([])

  const tell = (type, text) => setMsg({ type, text })
  const flash = (text) => tell('ok', text)

  const load = () =>
    api
      .getConfig()
      .then((c) => {
        setStatus(c)
        const s2 = c.settings || {}
        setCmp({ ...(s2.company || {}) })
        setSmtp({ ...(s2.smtp || {}) })
        setWa({ ...(s2.whatsapp || {}) })
        setSms({ ...(s2.sms || {}) })
        setFeatures({ ...(s2.features || {}) })
        setSeo({ ...(s2.seo || {}) })
        setKeySet(!!c.ai.keySet)
        setProvider(c.ai.provider || 'openai')
        setModel(c.ai.model || 'gpt-4o-mini')
        setBase(c.ai.base || '')
      })
      .catch(() => setStatus(null))
      .finally(() => setBusy(false))

  useEffect(() => {
    load()
  }, [])

  const applyProvider = (id) => {
    const p = PROVIDERS.find((x) => x.id === id)
    setProvider(id)
    if (p) {
      setBase(p.base)
      if (id !== 'custom' && !keySet) setModel(p.model)
    }
  }

  const saveSection = async (section, values, done) => {
    try {
      const r = await api.patchSettings(section, values)
      if (r.ok) {
        flash(s.settingsSaved)
        const s2 = r[section]
        if (section === 'company') setCmp(s2)
        if (section === 'smtp') setSmtp(s2)
        if (section === 'whatsapp') setWa(s2)
        if (section === 'sms') setSms(s2)
        if (section === 'seo') setSeo(s2)
      }
      done && done()
    } catch (ex) {
      tell('err', ex.message)
      done && done()
    }
  }

  const saveAi = async (e) => {
    e.preventDefault()
    setBusy(true)
    try {
      const r = await api.saveConfig({ provider, aiKey: key, aiModel: model, aiBase: base.trim() || 'https://api.openai.com/v1/chat/completions' })
      setKeySet(r.keySet)
      setKey('')
      setStatus((st) => ({ ...st, ai: { enabled: r.enabled, keySet: r.keySet, provider: r.provider, model: r.model, base: r.base } }))
      tell('ok', s.saved)
    } catch (ex) {
      tell('err', ex.message)
    } finally {
      setBusy(false)
    }
  }

  const savePw = async (e) => {
    e.preventDefault()
    if (pwNew.length < 4 || pwNew !== pwConf) return
    setBusy(true)
    try {
      const r = await api.savePassword({ current: pwCur, password: pwNew })
      if (r.token) setToken(r.token)
      setPwCur(''); setPwNew(''); setPwConf('')
      setStatus((st) => ({ ...st, officePasswordSet: true }))
      tell('ok', s.pwSaved)
      onAuthChange && onAuthChange(true)
    } catch (ex) {
      tell('err', ex.message)
    } finally {
      setBusy(false)
    }
  }

  const runSeo = () => {
    run(async () => {
      const r = await api.geoScore({ url: `${window.location.origin}/` })
      setSeoScore(r)
      return r
    }, '', '')
  }

  const loadBlogUrls = () => {
    run(async () => {
      const r = await api.blogPublishedSlugs()
      setSeoUrls((r && r.urls) || [])
      return r
    }, '', '')
  }

  const run = async (fn, okTxt, errTxt) => {
    setBusy(true)
    try {
      const r = await fn()
      r.ok ? tell('ok', okTxt + (r.message ? ` — ${r.message}` : '')) : tell('err', errTxt + (r.error ? `: ${r.error}` : ''))
    } catch (ex) {
      tell('err', ex.message)
    } finally {
      setBusy(false)
    }
  }

  if (busy && !status) return <div className="muted">{s.loginLoading}</div>

  const loginOn = !!(status && status.officePasswordSet)
  const num = (v) => String(v ?? '')

  return (
    <div>
      {msg.type && <div className={`toast ${msg.type === 'err' ? 'toast-err' : ''}`}>{msg.text}</div>}
      <div className="slide-tabs" style={{ marginBottom: 14 }}>
        {TABS.map((id) => (
          <button key={id} className={`sl ${tab === id ? 'on' : ''}`} onClick={() => setTab(id)}>{s.tabs[id]}</button>
        ))}
      </div>

      <div className="settings-grid">
        {tab === 'company' && (
          <section className="card">
            <h4>{s.company}</h4>
            <p className="muted">{s.companyHint}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Field label={s.co_name}><input value={cmp.name || ''} onChange={(e) => setCmp({ ...cmp, name: e.target.value })} /></Field>
              <Field label={s.co_nameAr}><input value={cmp.nameAr || ''} onChange={(e) => setCmp({ ...cmp, nameAr: e.target.value })} /></Field>
              <Field label={s.co_tagline}><input value={cmp.tagline || ''} onChange={(e) => setCmp({ ...cmp, tagline: e.target.value })} /></Field>
              <Field label={s.co_crn}><input value={cmp.crn || ''} onChange={(e) => setCmp({ ...cmp, crn: e.target.value })} /></Field>
              <Field label={s.co_vat}><input value={cmp.vat || ''} onChange={(e) => setCmp({ ...cmp, vat: e.target.value })} /></Field>
              <Field label={s.co_phone}><input dir="ltr" value={cmp.phone || ''} onChange={(e) => setCmp({ ...cmp, phone: e.target.value })} /></Field>
              <Field label={s.co_email}><input dir="ltr" value={cmp.email || ''} onChange={(e) => setCmp({ ...cmp, email: e.target.value })} /></Field>
              <Field label={s.co_website}><input dir="ltr" value={cmp.website || ''} onChange={(e) => setCmp({ ...cmp, website: e.target.value })} /></Field>
              <Field label={s.co_address}><input value={cmp.address || ''} onChange={(e) => setCmp({ ...cmp, address: e.target.value })} /></Field>
              <Field label={s.co_addressAr}><input value={cmp.addressAr || ''} onChange={(e) => setCmp({ ...cmp, addressAr: e.target.value })} /></Field>
              <Field label={s.co_hours}><input value={cmp.hours || ''} onChange={(e) => setCmp({ ...cmp, hours: e.target.value })} /></Field>
              <Field label={s.co_currency}><input value={cmp.currency || ''} onChange={(e) => setCmp({ ...cmp, currency: e.target.value })} /></Field>
              <Field label={s.co_managerName}><input value={cmp.managerName || ''} onChange={(e) => setCmp({ ...cmp, managerName: e.target.value })} /></Field>
              <Field label={s.co_managerPhone}><input dir="ltr" value={cmp.managerPhone || ''} onChange={(e) => setCmp({ ...cmp, managerPhone: e.target.value })} /></Field>
            </div>
            <Field label={s.co_coverage}><input value={(cmp.coverage || []).join(', ')} onChange={(e) => setCmp({ ...cmp, coverage: e.target.value.split(',').map((x) => x.trim()).filter(Boolean) })} /></Field>
            <div className="settings-actions"><button className="btn btn-primary" disabled={busy} onClick={() => saveSection('company', cmp)}>{s.save}</button></div>
          </section>
        )}

        {tab === 'email' && (
          <section className="card">
            <h4>{s.email}</h4>
            <p className="muted">{s.emailHint}</p>
            <label className="ck"><input type="checkbox" checked={!!smtp.enabled} onChange={(e) => setSmtp({ ...smtp, enabled: e.target.checked })} /> {s.smtp_enabled}</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px', gap: 10 }}>
              <Field label={s.smtp_host}><input dir="ltr" value={smtp.host || ''} onChange={(e) => setSmtp({ ...smtp, host: e.target.value })} placeholder="smtp.gmail.com" /></Field>
              <Field label={s.smtp_port}><input dir="ltr" type="number" value={smtp.port || 587} onChange={(e) => setSmtp({ ...smtp, port: Number(e.target.value) || 587 })} /></Field>
            </div>
            <label className="ck"><input type="checkbox" checked={!!smtp.secure} onChange={(e) => setSmtp({ ...smtp, secure: e.target.checked })} /> {s.smtp_secure}</label>
            <Field label={s.smtp_user}><input dir="ltr" value={smtp.user || ''} onChange={(e) => setSmtp({ ...smtp, user: e.target.value })} /></Field>
            <Field label={s.smtp_pass}><input dir="ltr" type="password" value={smtp.pass || ''} onChange={(e) => setSmtp({ ...smtp, pass: e.target.value })} placeholder={smtp.passSet ? s.smtpSet : ''} /></Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Field label={s.smtp_fromName}><input value={smtp.fromName || ''} onChange={(e) => setSmtp({ ...smtp, fromName: e.target.value })} /></Field>
              <Field label={s.smtp_fromEmail}><input dir="ltr" value={smtp.fromEmail || ''} onChange={(e) => setSmtp({ ...smtp, fromEmail: e.target.value })} /></Field>
            </div>
            <div className="settings-actions">
              <button className="btn btn-primary" disabled={busy} onClick={() => saveSection('smtp', smtp)}>{s.save}</button>
              <button className="btn btn-ghost" disabled={busy || !smtp.host} onClick={() => run(() => api.testSmtp(smtp), s.testOk, s.testErr)}>{s.testEmail}</button>
              <button className="btn btn-ghost" disabled={busy || !smtp.host} onClick={() => run(() => api.sendTestEmail({ to: smtp.fromEmail || cmp.email }), s.sendOk, s.testErr)}>{s.testSend}</button>
            </div>
          </section>
        )}

        {tab === 'whatsapp' && (
          <section className="card">
            <h4>{s.whatsapp}</h4>
            <p className="muted">{s.whatsappHint}</p>
            <label className="ck"><input type="checkbox" checked={!!wa.enabled} onChange={(e) => setWa({ ...wa, enabled: e.target.checked })} /> {s.wa_enabled}</label>
            <Field label={s.wa_number}><input dir="ltr" value={wa.number || ''} onChange={(e) => setWa({ ...wa, number: e.target.value })} placeholder="+97339350288" /></Field>
            <Field label={s.wa_provider}>
              <select value={wa.provider || 'wa.me'} onChange={(e) => setWa({ ...wa, provider: e.target.value })}>
                <option value="wa.me">{s.wa_provider_wame}</option>
                <option value="api">{s.wa_provider_api}</option>
              </select>
            </Field>
            {wa.provider === 'api' && (
              <>
                <Field label={s.wa_phoneNumberId}><input dir="ltr" value={wa.phoneNumberId || ''} onChange={(e) => setWa({ ...wa, phoneNumberId: e.target.value })} /></Field>
                <Field label={s.wa_apiToken}><input dir="ltr" type="password" value={wa.apiToken || ''} onChange={(e) => setWa({ ...wa, apiToken: e.target.value })} placeholder={wa.apiTokenSet ? s.waSet : ''} /></Field>
              </>
            )}
            <Field label={s.wa_defaultMessage}><input value={wa.defaultMessage || ''} onChange={(e) => setWa({ ...wa, defaultMessage: e.target.value })} /></Field>
            <Field label={s.wa_orderMessage}><input value={wa.orderMessage || ''} onChange={(e) => setWa({ ...wa, orderMessage: e.target.value })} /></Field>
            <div className="settings-actions">
              <button className="btn btn-primary" disabled={busy} onClick={() => saveSection('whatsapp', wa)}>{s.save}</button>
              <button className="btn btn-ghost" disabled={busy} onClick={() => run(() => api.sendTestWhatsapp({ to: wa.number || cmp.phone, body: wa.defaultMessage || 'Hello from Red Sun!' }), s.waTest + ' ✓', s.testErr)}>{s.waTest}</button>
            </div>
          </section>
        )}

        {tab === 'sms' && (
          <section className="card">
            <h4>{s.sms}</h4>
            <p className="muted">{s.smsHint}</p>
            <label className="ck"><input type="checkbox" checked={!!sms.enabled} onChange={(e) => setSms({ ...sms, enabled: e.target.checked })} /> {s.sms_enabled}</label>
            <Field label={s.sms_provider}>
              <select value={sms.provider || 'twilio'} onChange={(e) => setSms({ ...sms, provider: e.target.value })}>
                <option value="twilio">{s.sms_provider_twilio}</option>
              </select>
            </Field>
            <Field label={s.sms_sid}><input dir="ltr" value={sms.sid || ''} onChange={(e) => setSms({ ...sms, sid: e.target.value })} placeholder={sms.sidSet ? s.smsSet : ''} /></Field>
            <Field label={s.sms_apiKey}><input dir="ltr" type="password" value={sms.apiKey || ''} onChange={(e) => setSms({ ...sms, apiKey: e.target.value })} placeholder={sms.apiKeySet ? s.smsSet : ''} /></Field>
            <Field label={s.sms_sender}><input dir="ltr" value={sms.sender || ''} onChange={(e) => setSms({ ...sms, sender: e.target.value })} /></Field>
            <div className="settings-actions">
              <button className="btn btn-primary" disabled={busy} onClick={() => saveSection('sms', sms)}>{s.save}</button>
              <button className="btn btn-ghost" disabled={busy || !sms.enabled} onClick={() => run(() => api.sendTestSms({ to: cmp.phone, body: 'Red Sun: test message' }), 'SMS ✓', s.testErr)}>{s.waTest}</button>
            </div>
          </section>
        )}

        {tab === 'features' && (
          <section className="card">
            <h4>{s.features}</h4>
            <p className="muted">{s.featuresHint}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {Object.keys(features).map((k) => (
                <label key={k} className={`ck feat-toggle ${toggle(features[k], k)}`}>
                  <input type="checkbox" checked={!!features[k]} onChange={(e) => setFeatures({ ...features, [k]: e.target.checked })} />
                  {s[`feat_${k}`] || k}
                </label>
              ))}
            </div>
            <div className="settings-actions"><button className="btn btn-primary" disabled={busy} onClick={async () => { try { await api.saveFeatures(features); flash(s.settingsSaved) } catch (ex) { tell('err', ex.message) } }}>{s.save}</button></div>
          </section>
        )}

        {tab === 'security' && (
          <>
            <section className="card">
              <h4>{s.aiCard}</h4>
              <p className="muted">{s.aiCardHint}</p>
              <div className={`ai-badge ${status && status.ai.enabled ? 'live' : ''}`}>
                {status && status.ai.enabled ? `✦ ${s.aiLive}` : `○ ${s.aiFallback}`}
                {status && <small>{s.statusLine}: {status.ai.provider || '—'} · {status.ai.model || '—'} · {(status.ai.base || '').replace('https://', '')}</small>}
              </div>
              <form onSubmit={saveAi}>
                <Field label={s.provider}>
                  <select value={provider} onChange={(e) => applyProvider(e.target.value)}>
                    {PROVIDERS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
                  </select>
                </Field>
                <Field label={s.model}><input value={model} onChange={(e) => setModel(e.target.value)} placeholder="gpt-4o-mini" dir="ltr" /></Field>
                <Field label={s.key}><input type="password" value={key} onChange={(e) => setKey(e.target.value)} placeholder={keySet ? s.keyHidden : 'sk-…'} dir="ltr" /></Field>
                <Field label={s.base}><input value={base} onChange={(e) => setBase(e.target.value)} placeholder="https://api.openai.com/v1/chat/completions" dir="ltr" /></Field>
                <p className="muted small">{s.baseHint}</p>
                <button className="btn btn-primary" disabled={busy}>{s.save}</button>
              </form>
            </section>

            <section className="card">
              <h4>{s.pwCard}</h4>
              <p className="muted">{s.pwCardHint}</p>
              <div className={`ai-badge ${loginOn ? 'live' : ''}`}>{loginOn ? `✦ ${s.pwOn}` : `○ ${s.pwOff}`}</div>
              <form onSubmit={savePw}>
                {loginOn && (<Field label={s.pwCurrent}><input type="password" value={pwCur} onChange={(e) => setPwCur(e.target.value)} dir="ltr" /></Field>)}
                <Field label={s.pwNew}><input type="password" value={pwNew} onChange={(e) => setPwNew(e.target.value)} dir="ltr" /></Field>
                <Field label={s.pwConfirm}><input type="password" value={pwConf} onChange={(e) => setPwConf(e.target.value)} dir="ltr" /></Field>
                {!loginOn && pwNew.length > 0 && pwNew.length < 4 && <div className="form-error">4+ chars</div>}
                {pwNew && pwConf && pwNew !== pwConf && <div className="form-error">✕</div>}
                <div className="settings-actions">
                  <button className="btn btn-primary" disabled={busy || pwNew.length < 4 || pwNew !== pwConf}>{loginOn ? s.pwChange : s.pwSet}</button>
                  {loginOn && <button type="button" className="btn btn-ghost" onClick={() => api.logout().then(() => onAuthChange && onAuthChange(false))}>{s.logout}</button>}
                </div>
              </form>
            </section>
          </>
        )}

        {tab === 'seo' && (
          <>
            <section className="card">
              <h4>{s.seo.googleToken}</h4>
              <p className="muted">{s.seo.googleTokenHint}</p>
              <Field label={s.seo.verifyUrl}>
                <input dir="ltr" value={seo.googleVerification || ''} onChange={(e) => setSeo({ ...seo, googleVerification: e.target.value })} placeholder="3f4a" />
              </Field>
              <p className="muted small" dir="ltr">{window.location.origin}/google{seo.googleVerification || '&lt;token&gt;'}.html</p>
              <div className="settings-actions"><button className="btn btn-primary" disabled={busy} onClick={() => saveSection('seo', seo)}>{s.save}</button></div>
            </section>

            <section className="card">
              <h4>{s.seo.sitemapCard}</h4>
              <p className="muted">{s.seo.sitemapHint}</p>
              <a className="chip-btn" href={`${window.location.origin}/sitemap.xml`} target="_blank" rel="noreferrer" dir="ltr">{window.location.origin}/sitemap.xml</a>
              <h4 style={{ marginTop: 16 }}>{s.seo.llmsCard}</h4>
              <p className="muted">{s.seo.llmsHint}</p>
              <div className="chip-group">
                <a className="chip-btn" href={`${window.location.origin}/llms.txt`} target="_blank" rel="noreferrer" dir="ltr">llms.txt</a>
                <a className="chip-btn" href={`${window.location.origin}/llms-full.txt`} target="_blank" rel="noreferrer" dir="ltr">llms-full.txt</a>
                <a className="chip-btn" href={`${window.location.origin}/robots.txt`} target="_blank" rel="noreferrer" dir="ltr">robots.txt</a>
              </div>
              <h4 style={{ marginTop: 16 }}>{s.seo.blogUrls}</h4>
              <p className="muted small">{s.seo.caught}</p>
              <div className="settings-actions">
                <button className="btn btn-ghost" disabled={busy} onClick={loadBlogUrls}>{s.seo.scoreRun}</button>
              </div>
              {seoUrls.length > 0 && (
                <ul className="muted small" dir="ltr" style={{ listStyle: 'none', padding: 0 }}>
                  {seoUrls.map((u) => <li key={u}>· {u}</li>)}
                </ul>
              )}
            </section>

            <section className="card">
              <h4>{s.seo.scoreCard}</h4>
              {seoScore?.score != null && (
                <div className={`ai-badge ${seoScore.score >= 78 ? 'live' : ''}`}>
                  ✦ {s.seo.scoreOk}: {seoScore.score}{s.seo.scoreMax} · {seoScore.status || ''}
                </div>
              )}
              <div className="settings-actions"><button className="btn btn-primary" disabled={busy} onClick={runSeo}>{s.seo.scoreRun}</button></div>
              {seoScore?.checks?.length > 0 && (
                <div className="score-grid">
                  {seoScore.checks.map((c) => (
                    <div className={`score-row ${c.ok ? 'on' : ''}`} key={c.id}>
                      <span>{c.ok ? '✓' : '✕'}</span><b>{c.label}</b><small>{c.pts}</small>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  )
}