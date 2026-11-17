import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { wedding } from '../data.js'
import Botanical from './Botanical.jsx'

export default function EnvelopeIntro({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const reducedMotion = useReducedMotion()
  const dialog = useRef(null)
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current?.focus({ preventScroll: true })
    return () => { document.body.style.overflow = previous }
  }, [])
  useEffect(() => {
    if (!opening) return
    const timeout = window.setTimeout(onOpen, reducedMotion ? 180 : 1700)
    return () => window.clearTimeout(timeout)
  }, [opening, onOpen, reducedMotion])
  return (
    <motion.div ref={dialog} tabIndex={-1} className={`envelope-overlay${opening ? ' is-opening' : ''}`}
      role="dialog" aria-modal="true" aria-labelledby="invitation-title"
      onKeyDown={event => {
        if (event.key !== 'Tab') return
        const buttons = [...dialog.current.querySelectorAll('button:not(:disabled)')]
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog.current)) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: reducedMotion ? 0.15 : 0.5, delay: opening && !reducedMotion ? 1.2 : 0 }}>
      <div className="intro-border" aria-hidden="true" />
      <div className="intro-decoration" aria-hidden="true">
        <Botanical className="intro-botanical intro-botanical-left" />
        <Botanical className="intro-botanical intro-botanical-right" />
      </div>
      <div className="intro-content">
        <p className="eyebrow">A little envelope, a lifetime of love</p>
        <h1 className="intro-title" id="invitation-title">You’re invited</h1>
        <p className="intro-subtitle">Something beautiful is about to begin.</p>
        <button className="envelope-button" type="button" onClick={() => setOpening(true)}
          disabled={opening} aria-label={`Open ${wedding.groom} and ${wedding.bride}’s wedding invitation`}>
          <span className="env" aria-hidden="true">
            <span className="env-back" />
            <span className="env-letter">
              <span className="env-letter-kicker">The wedding of</span>
              <span className="env-letter-names">{wedding.groom} &amp; {wedding.bride}</span>
              <span className="env-letter-date">{wedding.displayDate}</span>
            </span>
            <span className="env-pocket" />
            <span className="env-fold env-fold-left" />
            <span className="env-fold env-fold-right" />
            <span className="env-flap" />
            <span className="env-seal-position"><span className="env-seal"><span>{wedding.monogram}</span></span></span>
          </span>
        </button>
        <div className="intro-bottom">
          <button className="open-invitation" onClick={() => setOpening(true)} disabled={opening}>
            {opening ? 'With love, for you' : 'Open the invitation'} <span aria-hidden="true">↗</span>
          </button>
          <p>{wedding.groom} &amp; {wedding.bride}<span>·</span>{wedding.displayDate}</p>
        </div>
      </div>
      <span className="intro-footnote">A celebration of love &amp; togetherness</span>
    </motion.div>
  )
}
