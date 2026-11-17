import Reveal from './Reveal.jsx'
import { wedding } from '../data.js'
const captions = ['The beginning of us', 'All the little moments', 'Our next chapter']
export default function Gallery() {
  return (
    <section className="section gallery" id="moments" aria-labelledby="gallery-title">
      <Reveal className="section-head">
        <span className="eyebrow">Better, together</span>
        <h2 className="script-title" id="gallery-title">A lifetime of little moments</h2>
        <p className="section-sub">Here’s to the memories we’ve made, and all the beautiful ones to come.</p>
      </Reveal>
      <div className="gallery-grid">
        {wedding.photos.map((src, i) => (
          <Reveal key={src} delay={i * 0.1} className="gallery-item">
            <figure className="gallery-frame">
              <img src={src} alt={`${wedding.groom} and ${wedding.bride} — ${captions[i] || 'Together'}`} loading="lazy" width="380" height="460" />
              <figcaption><span>0{i + 1}</span>{captions[i] || 'Together, always'}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
