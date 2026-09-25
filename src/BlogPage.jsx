import { useEffect, useMemo, useState } from 'react'
import { NEWS } from './i18n.js'
import { useSite } from './SiteContext.jsx'
import { api } from './api.js'

export default function BlogPage() {
  const { copy, lang, postSlug } = useSite()
  const [open, setOpen] = useState(NEWS[0].id)
  const [live, setLive] = useState(null)
  const post = useMemo(() => NEWS.find((n) => n.id === open) || NEWS[0], [open])

  useEffect(() => {
    if (postSlug) {
      api.blogLive().then((d) => setLive(d && d.posts ? d.posts : null)).catch(() => setLive(null))
    } else {
      setLive(null)
    }
  }, [postSlug])

  const shown = live ? live.find((p) => p.slug === postSlug) : null

  const labelOf = (v) => (v == null ? '' : (typeof v === 'string' ? v : (v.title || v.body || v.text || '')))
  const bodyOf = (v) => (v == null ? '' : (typeof v === 'string' ? v : (v.body || v.text || '')))
  const shownTitle = shown ? (shown.title || labelOf(lang === 'ar' ? shown.ar : shown.en) || '') : ''
  const shownBody = shown ? (shown.body || bodyOf(lang === 'ar' ? shown.ar : shown.en) || '') : ''

  return (
    <section className="page-block" id="blog">
      <div className="section-head">
        <div className="kicker">{copy.newsKicker}</div>
        <h1>{copy.newsTitle}</h1>
      </div>
      {shown ? (
        <div className="blog-grid">
          <article className="blog-feature card">
            <span className="chip">{shownTitle}</span>
            <h2>{shownTitle}</h2>
            {shownBody.split(/\n+/).filter(Boolean).map((graf, i) => <p key={i}>{graf}</p>)}
          </article>
        </div>
      ) : (
        <div className="blog-grid">
          <article className="blog-feature card">
            <span className="chip">{post.cat[lang]} · {post.date}</span>
            <h2>{post.title[lang]}</h2>
            <p>{post.body[lang]}</p>
          </article>
          <div className="blog-list">
            {NEWS.map((n) => (
              <button key={n.id} type="button" className={`blog-row ${n.id === open ? 'on' : ''}`} onClick={() => setOpen(n.id)}>
                <small>{n.date} · {n.cat[lang]}</small>
                <strong>{n.title[lang]}</strong>
                <span>{n.excerpt[lang]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}