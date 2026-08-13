import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

export default function Rsvp() {
  const subject = encodeURIComponent(`RSVP — ${wedding.monogram} Wedding`)
  const body = encodeURIComponent(
    `Hello ${wedding.groom} & ${wedding.bride},\n\nName(s):\nWill you attend? (Yes / No)\nAny dietary requirements:\n\nThank you!`,
  )
  const mailto = `mailto:${wedding.rsvpEmail}?subject=${subject}&body=${body}`

  return (
    <section className="section rsvp">
      <Reveal className="rsvp-inner">
        <span className="eyebrow">Will you join us?</span>
        <h2 className="script-title">Kindly RSVP</h2>
        <p className="section-sub">
          We would be honoured to celebrate with you. Please reply by{' '}
          <strong>{wedding.rsvpDate}</strong>.
        </p>

        <div className="rsvp-actions">
          <a className="btn btn-solid" href={mailto}>
            With joy, we accept &#10048;
          </a>
          <a className="btn btn-ghost" href={mailto}>
            Regretfully declines
          </a>
        </div>

        <p className="rsvp-note">
          Your RSVP opens your email app with a pre-filled message — just press send.
        </p>
      </Reveal>
    </section>
  )
}
