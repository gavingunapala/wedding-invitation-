import { motion } from 'framer-motion'
import { wedding } from '../data.js'

const petals = [
  { top: '8%', left: '6%', s: 26, r: 24 },
  { top: '16%', right: '8%', s: 20, r: -18 },
  { bottom: '12%', left: '12%', s: 22, r: 34 },
  { bottom: '20%', right: '10%', s: 28, r: -30 },
]

export default function Hero({ opened = false }) {
  return (
    <header className="hero">
      {petals.map((p, i) => (
        <motion.span
          key={i}
          className="petal"
          style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom, width: p.s, height: p.s, transform: `rotate(${p.r}deg)` }}
          animate={{ y: [0, -18, 0], rotate: [p.r, p.r + 14, p.r] }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        key={opened ? 'open' : 'closed'}
        className="hero-inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.42em' }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <div className="hero-monogram">
          <span className="monogram-ring">&#10047;</span>
          {wedding.monogram}
          <span className="monogram-ring">&#10047;</span>
        </div>

        <h1 className="hero-names">
          <span className="hero-name">{wedding.groom}</span>
          <span className="hero-amp">&amp;</span>
          <span className="hero-name">{wedding.bride}</span>
        </h1>

        <p className="hero-date">request the honour of your presence</p>
        <p className="hero-dateline">{wedding.displayDate}</p>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>scroll</span>
        <motion.span
          className="scroll-line"
          animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </header>
  )
}
