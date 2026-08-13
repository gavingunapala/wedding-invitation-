import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

const tilts = [-3, 2, -1.5]

export default function Gallery() {
  return (
    <section className="section gallery">
      <Reveal className="section-head">
        <span className="eyebrow">Moments</span>
        <h2 className="script-title">A few of our favourite frames</h2>
        <p className="section-sub">More photos coming soon — add your own in <code>src/data.js</code></p>
      </Reveal>

      <div className="gallery-grid">
        {wedding.photos.map((src, i) => (
          <Reveal key={src} delay={i * 0.12} className="gallery-item" y={60}>
            <div className="gallery-frame" style={{ transform: `rotate(${tilts[i]}deg)` }}>
              <img src={src} alt={`Photo ${i + 1}`} loading="lazy" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
