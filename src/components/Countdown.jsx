import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

function getRemaining() {
  const diff = new Date(wedding.date).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  }
}

function Tile({ value, label }) {
  return (
    <div className="count-tile">
      <span className="count-value">{String(value).padStart(2, '0')}</span>
      <span className="count-label">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [t, setT] = useState(getRemaining)

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown">
      <Reveal className="countdown-inner">
        <span className="eyebrow">Counting down to</span>
        <h2 className="script-title">{wedding.displayDate}</h2>
        <div className="count-grid">
          <Tile value={t.days} label="Days" />
          <Tile value={t.hours} label="Hours" />
          <Tile value={t.minutes} label="Minutes" />
          <Tile value={t.seconds} label="Seconds" />
        </div>
        {t.done && <p className="section-sub">Today is the day!</p>}
      </Reveal>
    </section>
  )
}
