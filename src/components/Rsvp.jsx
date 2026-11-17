import Reveal from './Reveal.jsx'
import Botanical from './Botanical.jsx'
import { wedding } from '../data.js'
export default function Rsvp() {
  const mailto = (attending) => {
    const subject = encodeURIComponent(`RSVP — ${wedding.monogram} Wedding`)
    const body = encodeURIComponent(`Hello ${wedding.groom} & ${wedding.bride},\n\n${attending ? 'With joy, I accept your invitation!' : 'Regretfully, I am unable to attend.'}\n\nName(s):\n${attending ? 'Number of guests:\nDietary requirements:\n' : ''}\nWith love,`)
    return `mailto:${wedding.rsvpEmail}?subject=${subject}&body=${body}`
  }
  return (
    <section className="section rsvp" id="rsvp" aria-labelledby="rsvp-title">
      <Reveal className="rsvp-inner">
        <Botanical className="rsvp-botanical" />
        <span className="eyebrow">A seat saved just for you</span>
        <h2 className="script-title" id="rsvp-title">Be part of our <em>forever.</em></h2>
        <p className="section-sub">Your presence would mean the world to us.<br />Kindly reply by <strong>{wedding.rsvpDate}</strong>.</p>
        <div className="rsvp-actions">
          <a className="btn btn-solid" href={mailto(true)}>Joyfully accept <span aria-hidden="true">↗</span></a>
          <a className="btn btn-ghost" href={mailto(false)}>Regretfully decline</a>
        </div>
        <p className="rsvp-note">Reply by email, with love.</p>
      </Reveal>
    </section>
  )
}
