import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

export default function Story() {
  return (
    <section className="section story">
      <Reveal className="section-head">
        <span className="eyebrow">Our Story</span>
        <h2 className="script-title">How it all began</h2>
      </Reveal>

      <div className="story-grid">
        {wedding.story.map((item, i) => (
          <Reveal key={item.heading} delay={i * 0.15} className="story-card">
            <span className="story-num">0{i + 1}</span>
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
