import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

function VenueCard({ icon, kicker, title, address }) {
  return (
    <Reveal className="venue-card">
      <span className="venue-icon">{icon}</span>
      <span className="eyebrow">{kicker}</span>
      <h3>{title}</h3>
      <p>{address}</p>
    </Reveal>
  )
}

export default function EventDetails() {
  return (
    <section className="section details">
      <Reveal className="section-head">
        <span className="eyebrow">Save the Date</span>
        <h2 className="script-title">Ceremony &amp; Reception</h2>
        <p className="section-sub">{wedding.displayDate} · {wedding.displayTime}</p>
      </Reveal>

      <div className="venue-grid venue-single">
        <VenueCard
          icon="&#10047;"
          kicker="Ceremony &amp; Reception"
          title={wedding.venue.name}
          address={wedding.venue.address}
        />
      </div>

      <Reveal className="timeline" delay={0.15}>
        <h3 className="timeline-title">The Order of the Day</h3>
        <ul className="timeline-list">
          {wedding.schedule.map((s, i) => (
            <li key={s.label} className="timeline-item">
              <span className="timeline-time">{s.time}</span>
              <span className="timeline-dot" />
              <span className="timeline-body">
                <strong>{s.label}</strong>
                <small>{s.note}</small>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
