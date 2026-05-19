import { useState } from 'react'
import { LOGO } from '../constants/images'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <img src={LOGO} alt="Linkneat logo" className="nav-logo" />
          <span>Linkneat <strong>Career & Tax</strong></span>
        </a>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Reviews</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </div>

        <div className="nav-right">
          <a href="tel:+12105186305" className="nav-phone">📞 (210) 518-6305</a>
          <a href="#contact" className="btn btn-gold nav-cta">Free Consultation</a>
        </div>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
