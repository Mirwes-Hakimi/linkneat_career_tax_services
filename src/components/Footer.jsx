import { LOGO } from '../constants/images'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="nav-brand">
            <img src={LOGO} alt="Linkneat logo" className="nav-logo" />
            <span>Linkneat <strong>Career & Tax</strong></span>
          </a>
          <p>Professional Tax, Immigration, Business & Translation Services. Proudly serving Sacramento and surrounding communities since 2021.</p>
          <div className="footer-badges">
            <span>Tax Services</span>
            <span>Immigration Docs</span>
            <span>Business Consulting</span>
            <span>Translation</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <strong>Services</strong>
            <a href="#services">Tax Preparation</a>
            <a href="#services">Immigration Docs</a>
            <a href="#services">Business Consulting</a>
            <a href="#services">Translation</a>
            <a href="#services">ITIN Applications</a>
          </div>
          <div className="footer-col">
            <strong>Company</strong>
            <a href="#why-us">About Us</a>
            <a href="#testimonials">Client Reviews</a>
            <a href="#process">Our Process</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <strong>Contact</strong>
            <a href="tel:+12105186305">(210) 518-6305</a>
            <a href="tel:+19163644543">(916) 364-4543</a>
            <a href="mailto:folad@linkneat.com">folad@linkneat.com</a>
            <a href="https://linkneat.com" target="_blank" rel="noopener noreferrer">linkneat.com</a>
            <span>3400 Watt Ave, STE 102</span>
            <span>Sacramento, CA 95821</span>
            <span>Mon–Fri: 9AM–6PM</span>
            <span>Sat: By Appointment</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Linkneat Career & Tax Services. All rights reserved. &nbsp;|&nbsp; Built by <a href="https://www.kblwebsolutions.com/" target="_blank" rel="noopener noreferrer" className="built-by">KBL Web Solutions</a></span>
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=100082974500760" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </a>
          <a href="https://x.com/Linkneat1" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/linkneat-career-development-27bb7b235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
