import { motion } from 'framer-motion'
import { wedding } from '../data.js'
import Botanical from './Botanical.jsx'
const dateParts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Colombo', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
}).formatToParts(new Date(wedding.date)).map(({ type, value }) => [type, value]))

export default function Hero({ opened = false }) {
  return (
    <header className="hero" id="home">
      <nav className="invitation-nav" aria-label="Invitation">
        <a className="nav-monogram" href="#home" aria-label="Back to top">{wedding.monogram}</a>
        <div className="nav-links"><a href="#story">Our story</a><a href="#details">The celebration</a><a href="#rsvp">RSVP <span aria-hidden="true">↗</span></a></div>
      </nav>
      <div className="hero-composition">
        <Botanical className="hero-botanical hero-botanical-left" />
        <Botanical className="hero-botanical hero-botanical-right" />
        <motion.div className="hero-inner" initial={false} animate={{ opacity: opened ? 1 : 0, y: opened ? 0 : 18 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Together with our families</p>
          <span className="hero-flower" aria-hidden="true">✳</span>
          <h1 className="hero-names"><span>{wedding.groom}</span><span className="hero-amp">&amp;</span><span>{wedding.bride}</span></h1>
          <p className="hero-invitation">Joyfully invite you to celebrate<br />the beginning of our forever.</p>
          <div className="hero-date"><span>{dateParts.weekday}</span><strong>{dateParts.day}</strong><span>{dateParts.month}<br />{dateParts.year}</span></div>
          <p className="hero-venue">{wedding.venue.name} <span>·</span> 2:00 PM</p>
        </motion.div>
        <span className="hero-side-note">A love to last a lifetime</span>
      </div>
      <a className="scroll-hint" href="#story"><span>Our forever starts here</span><span className="scroll-line" aria-hidden="true" /></a>
    </header>
  )
}
