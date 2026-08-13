import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.6, 0, 0.2, 1]

const SPARKS = [
  { left: '12%', top: '22%', delay: 0 },
  { left: '86%', top: '28%', delay: 0.6 },
  { left: '16%', top: '72%', delay: 1.1 },
  { left: '82%', top: '70%', delay: 0.3 },
  { left: '50%', top: '14%', delay: 1.6 },
]

export default function EnvelopeIntro({ onOpen }) {
  const [stage, setStage] = useState('idle')
  const [gone, setGone] = useState(false)

  const opened = stage !== 'idle'
  const closing = stage === 'closing'

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleClick = () => {
    if (stage !== 'idle') return
    setStage('opening')
    window.setTimeout(() => setStage('closing'), 1150)
  }

  const handleOverlayComplete = () => {
    if (stage !== 'closing') return
    setGone(true)
    document.body.style.overflow = ''
    onOpen?.()
  }

  if (gone) return null

  return (
    <motion.div
      className="envelope-overlay"
      onClick={handleClick}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      onAnimationComplete={handleOverlayComplete}
    >
      <div className="env-glow" />

      {SPARKS.map((sp, i) => (
        <motion.span
          key={i}
          className="env-dot"
          style={{ left: sp.left, top: sp.top }}
          animate={{ y: [0, -16, 0], opacity: [0.12, 0.8, 0.12] }}
          transition={{ duration: 4 + i * 0.8, delay: sp.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.p
        className="tagline"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: EASE }}
      >
        You&rsquo;re invited
      </motion.p>

      <motion.div
        className="env-stage"
        animate={
          closing
            ? { scale: 1.25, opacity: 0 }
            : opened
            ? { y: [0, -6, 0] }
            : { y: [0, -10, 0], rotate: [-1, 1.3, -1] }
        }
        transition={
          closing
            ? { duration: 0.9, ease: 'easeIn' }
            : opened
            ? { duration: 0.7, times: [0, 0.5, 1], ease: 'easeInOut' }
            : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <div className="env-halo" />

        <div className="env">
          <div className="env-back" />

          <motion.div
            className="env-letter"
            animate={opened ? { y: [0, -34, -14] } : { y: 0 }}
            transition={opened ? { duration: 0.9, times: [0, 0.55, 1], ease: EASE } : { duration: 0.1 }}
          >
            <span className="env-letter-line env-letter-line--w" />
            <span className="env-letter-line" />
            <span className="env-letter-line env-letter-line--s" />
          </motion.div>

          <motion.div
            className="env-flap"
            animate={opened ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
          >
            <div className="env-flap-inner" />
          </motion.div>

          <motion.div
            className="env-seal"
            animate={opened ? { opacity: 0, scale: 0.4 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      <motion.div
        className="tap-btn"
        animate={stage === 'idle' ? { scale: [1, 1.06, 1] } : { opacity: 0, scale: 0.85 }}
        transition={
          stage === 'idle'
            ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.3 }
        }
      >
        <span className="tap-btn-ring" />
        <span className="tap-btn-label">
          OPEN
          <em>the invitation</em>
        </span>
      </motion.div>
    </motion.div>
  )
}