import { useState } from 'react'
import { FAQ } from './i18n.js'
import { useSite } from './SiteContext.jsx'
import { ContactChips } from './MapPage.jsx'

export default function FaqPage() {
  const { copy, lang } = useSite()
  const [open, setOpen] = useState(0)
  return (
    <section className="page-block" id="faq">
      <div className="section-head">
        <div className="kicker">{copy.faqKicker}</div>
        <h1>{copy.faqTitle}</h1>
      </div>
      <div className="faq-list">
        {FAQ.map((item, i) => (
          <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
            <button type="button" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{item.q[lang]}</span>
              <b>{open === i ? '–' : '+'}</b>
            </button>
            {open === i && <p>{item.a[lang]}</p>}
          </div>
        ))}
      </div>
      <ContactChips />
    </section>
  )
}
