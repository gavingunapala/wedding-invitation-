import Reveal from './Reveal.jsx'
import Botanical from './Botanical.jsx'
import { wedding } from '../data.js'
export default function EventDetails() {
  const directions = wedding.venue.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.venue.address)}`
  return (
    <section className="section details" id="details" aria-labelledby="details-title">
      <Reveal className="section-head">
        <span className="eyebrow">A day to remember</span>
        <h2 className="script-title" id="details-title">The celebration</h2>
        <p className="section-sub">{wedding.displayDate} <span aria-hidden="true">·</span> {wedding.displayTime}</p>
      </Reveal>
      <div className="celebration-grid">
        <Reveal className="venue-card">
          <Botanical className="venue-botanical" />
          <span className="eyebrow">Ceremony &amp; reception</span>
          <h3>{wedding.venue.name}</h3>
          <p>{wedding.venue.address}</p>
          <a className="text-link" href={directions} target="_blank" rel="noreferrer">Find your way <span aria-hidden="true">↗</span></a>
        </Reveal>
        <Reveal className="timeline" delay={0.15}>
          <h3 className="timeline-title">A little plan for a lovely day</h3>
          <ol className="timeline-list">
            {wedding.schedule.map(s => (
              <li key={s.label} className="timeline-item">
                <span className="timeline-time">{s.time}</span>
                <span className="timeline-dot" aria-hidden="true" />
                <span className="timeline-body"><strong>{s.label}</strong><small>{s.note}</small></span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
