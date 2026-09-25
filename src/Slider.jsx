import { useEffect, useState } from 'react'

export function AutoSlider({ slides, interval = 5200, className = '' }) {
  const [i, setI] = useState(0)
  const n = slides.length

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, interval])

  const slide = slides[i]
  return (
    <div className={`auto-slider ${className}`}>
      <div className="slide-track" key={slide.id || i}>
        <div className="slide-kicker">{slide.kicker}</div>
        <h1>{slide.title}</h1>
        <p className="lede">{slide.copy}</p>
      </div>
      <div className="slide-dots">
        {slides.map((s, idx) => (
          <button
            key={s.id || idx}
            className={idx === i ? 'on' : ''}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
      <div className="slide-progress"><span key={i} style={{ animationDuration: `${interval}ms` }} /></div>
    </div>
  )
}

export function CardSlider({ items, interval = 4000 }) {
  const [i, setI] = useState(0)
  const n = items.length

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, interval])

  function prev() { setI((v) => (v - 1 + n) % n) }
  function next() { setI((v) => (v + 1) % n) }

  const visible = [0, 1, 2].map((off) => items[(i + off) % n])

  return (
    <div className="card-slider">
      <div className="card-slider-row">
        {visible.map((item, idx) => (
          <article className={`slide-card ${idx === 0 ? 'is-lead' : ''}`} key={`${item.title}-${idx}`}>
            <div className="icon">{item.tag}</div>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
      <div className="slider-nav">
        <button className="btn btn-ghost btn-sm" onClick={prev} type="button">‹</button>
        <div className="slide-dots">
          {items.map((_, idx) => (
            <button key={idx} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} type="button" />
          ))}
        </div>
        <button className="btn btn-ghost btn-sm" onClick={next} type="button">›</button>
      </div>
    </div>
  )
}

export function QuoteSlider({ quotes, interval = 5600 }) {
  const [i, setI] = useState(0)
  const n = quotes.length

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, interval])

  const q = quotes[i]
  return (
    <div className="quote-slider">
      <blockquote key={i}>
        <p>“{q.text}”</p>
        <footer>
          <strong>{q.name}</strong>
          <span>{q.place}</span>
        </footer>
      </blockquote>
      <div className="slide-dots">
        {quotes.map((_, idx) => (
          <button key={idx} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} type="button" />
        ))}
      </div>
    </div>
  )
}

export function Marquee({ items, reverse = false }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'rev' : ''}`}>
      <div className="marquee-track">
        {row.map((item, idx) => (
          <span className="marquee-item" key={`${item}-${idx}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export function FleetSceneSlider({ scenes, interval = 4800 }) {
  const [i, setI] = useState(0)
  const n = scenes.length

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), interval)
    return () => clearInterval(t)
  }, [n, interval])

  const s = scenes[i]
  return (
    <div className="fleet-scene">
      <div className="fleet-scene-visual" key={s.id}>
        <div className={`scene-art ${s.art}`} />
        <span className="scene-plate">{s.plate}</span>
      </div>
      <div className="fleet-scene-copy" key={`${s.id}-c`}>
        <div className="kicker">{s.kicker}</div>
        <h3>{s.title}</h3>
        <p>{s.copy}</p>
      </div>
      <div className="slide-dots">
        {scenes.map((sc, idx) => (
          <button key={sc.id} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} type="button" />
        ))}
      </div>
    </div>
  )
}
