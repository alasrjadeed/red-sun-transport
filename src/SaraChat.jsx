import { useEffect, useRef, useState } from 'react'
import { useSite } from './SiteContext.jsx'

const WA_PHONE = '97339350288'
const WA_WA = `https://wa.me/${WA_PHONE}`
const WA_WEB = `https://web.whatsapp.com/send?phone=${WA_PHONE}`

/**
 * Sara — Red Sun's floating AI fleet-manager chat widget (bilingual EN/AR,
 * RTL-aware). Talks to POST /api/sara (fleet-aware, intent-based NLU) and ends
 * every answer in quick-reply chips plus deep links to WhatsApp.
 *
 * WhatsApp entry points → all three in one widget, per user ask ("web WhatsApp"):
 *   1. wa.me — native WhatsApp deep link (opens the phone's WhatsApp app).
 *   2. Web WhatsApp — web.whatsapp.com/send?phone=… (desktop browser chat,
 *      no QR pairing needed to message a number that didn't start the chat).
 *   3. WhatsApp Web quick chat — wa.me prefilled greeting.
 */
export default function SaraChat() {
  const { copy, lang } = useSite()
  const isAr = lang === 'ar'
  const sc = copy.saraChat || {}
  const quark = isAr
    ? ['fleett', 'price', 'maintenance', 'book'].reduce((a, k) => ((a[k] = sc[k] || ''), a), {})
    : null
  const wa = () =>
    isAr ? (copy.waDiscord || 'Web WhatsApp') : (copy.waDiscord || 'Web WhatsApp')

  const [open, setOpen] = useState(false)
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([{ from: 'sara', text: sc.hello }])
  const [chips, setChips] = useState((sc.quick && sc.quick.slice()) || [])
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    setMsgs([{ from: 'sara', text: sc.hello }])
    setChips((sc.quick && sc.quick.slice()) || [])
  }, [lang])

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [msgs, chips, busy])

  function send(text, fromChip) {
    const q = fromChip ? text : input.trim()
    if (!q || busy) return
    setMsgs((m) => [...m, { from: 'you', text: q }])
    setInput('')
    setBusy(true)
    setChips([])
    fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q, lang: isAr ? 'ar' : 'en' }),
    })
      .then((r) => r.json())
      .then((data) => {
        setMsgs((m) => [...m, { from: 'sara', text: data.text }])
        setChips((data.chips && data.chips.slice()) || [])
      })
      .catch(() => {
        setMsgs((m) => [...m, { from: 'sara', text: sc.offline || sc.hello }])
      })
      .finally(() => setBusy(false))
  }

  return (
    <>
      {/* Floating FAB */}
      <button
        type="button"
        className="sara-fab"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={sc.open}
      >
        {open ? '✕' : '✦'}
      </button>

      {open && (
        <section className="sara-panel" role="dialog" aria-label={sc.open} aria-live="polite" dir={isAr ? 'rtl' : 'ltr'}>
          <header className="sara-head">
            <span className="sara-avatar" aria-hidden="true">S</span>
            <div className="sara-head-text">
              <strong>{sc.name}</strong>
              <small>{sc.status}</small>
            </div>
            <button className="sara-back" type="button" onClick={() => setOpen(false)} aria-label={sc.close}>
              ✕
            </button>
          </header>

          <div className="sara-list" ref={listRef}>
            {msgs.map((m, i) => (
              <p key={i} className={`sara-msg ${m.from === 'you' ? 'is-you' : 'is-sara'}`}>
                {m.text}
              </p>
            ))}
            {busy && <p className="sara-msg is-sara sara-typing">{sc.typing}</p>}

            {chips.length > 0 && (
              <div className="sara-chips" dir={isAr ? 'rtl' : 'ltr'}>
                {chips.map((c, i) => (
                  <button key={i} type="button" onClick={() => send(c, true)}>
                    {c}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="sara-wa">
            <a href={WA_WA} target="_blank" rel="noreferrer" className="sara-wa-btn">
              {sc.wa} <small>{sc.waNote}</small>
            </a>
            <a href={WA_WEB} target="_blank" rel="noreferrer" className="sara-wa-btn sara-wa-web">
              {copy.waWeb || 'Web WhatsApp'}
            </a>
          </div>

          <form
            className="sara-form"
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={sc.placeholder}
              aria-label={sc.placeholder}
            />
            <button type="submit" disabled={busy || !input.trim()}>
              {sc.send}
            </button>
          </form>
          <footer className="sara-foot">{sc.powered}</footer>
        </section>
      )}
    </>
  )
}
