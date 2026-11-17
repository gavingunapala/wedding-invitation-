import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'

export default function Story() {
  return (
    <section className="section story" id="story" aria-labelledby="story-title">
      <Reveal className="section-head">
        <span className="eyebrow">Our Story</span>
        <h2 className="script-title" id="story-title">Every love has a story.<br /><em>This is ours.</em></h2>
        <p className="section-sub">A chance meeting. A thousand little moments. A forever together.</p>
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
