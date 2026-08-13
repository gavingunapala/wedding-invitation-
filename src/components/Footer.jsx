import { wedding } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="monogram-ring">&#10047;</span>
        <p className="footer-names">{wedding.monogram}</p>
        <p className="footer-line">With love, we can't wait to celebrate with you.</p>
        <p className="footer-meta">
          {wedding.displayDate} · {wedding.venue.name}
        </p>
      </div>
    </footer>
  )
}
