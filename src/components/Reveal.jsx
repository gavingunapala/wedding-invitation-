import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className, y = 40 }) {
  const reducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
