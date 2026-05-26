import { useState } from 'react'
import { IMG_TAX_FORMS } from '../constants/images'

const SERVICES = [
  {
    icon: '📋',
    title: 'Tax Preparation & Consulting',
    desc: 'Accurate and dependable tax services for individuals, families, self-employed professionals, and businesses.',
    items: [
      'Individual & Business Tax Returns',
      'Self-Employment & 1099 Taxes',
      'Tax Amendments',
      'IRS Letter Assistance',
      'Tax Planning & Consultation',
      'ITIN Applications',
      'Earned Income & Child Tax Credit',
      'Small Business Tax Solutions',
    ],
  },
  {
    icon: '🏛️',
    title: 'Immigration Consulting & Documentation',
    desc: 'Professional assistance with immigration-related forms, document preparation, and case support services.',
    items: [
      'Immigration Form Preparation',
      'Family Petition Documentation',
      'Adjustment of Status Documentation',
      'Asylum Documentation Assistance',
      'Green Card Renewal Assistance',
      'Citizenship & Naturalization Docs',
      'USCIS Correspondence Assistance',
      'Translation of Immigration Documents',
    ],
  },
  {
    icon: '💼',
    title: 'Business Consulting Services',
    desc: 'Helping entrepreneurs and small businesses build, organize, and grow successfully.',
    items: [
      'Business Formation (LLC, Corp, Sole Prop)',
      'Business Registration Assistance',
      'EIN Registration',
      'Startup Consulting',
      'Business Planning Guidance',
      'Financial Organization Guidance',
      'Business Compliance Assistance',
      'Professional Documentation Assistance',
    ],
  },
  {
    icon: '🌐',
    title: 'Translation & Interpretation',
    desc: 'Reliable and accurate translation for personal, business, and immigration-related documents.',
    items: [
      'Immigration Document Translation',
      'Personal Document Translation',
      'Business Document Translation',
      'Certified Translation Support',
      'Interpretation Assistance',
      'Multilingual Communication Support',
    ],
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState(null)
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">What We Offer</span>
          <h2>Our Services</h2>
          <p>Professional, reliable, and affordable services for individuals, families, entrepreneurs, and small businesses.</p>
        </div>
        <div className="svc-banner">
          <img src={IMG_TAX_FORMS} alt="Professional tax preparation and consulting services" />
          <div className="svc-banner-overlay">
            <span className="svc-banner-tag">Tax · Immigration · Business · Translation</span>
            <p>Expert guidance tailored to your unique situation, in English, Dari &amp; Pashto</p>
          </div>
        </div>
        <div className="services-grid services-grid-4">
          {SERVICES.map((s, i) => (
            <div className="service-card reveal" key={i}>
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="svc-list">
                {s.items.slice(0, expanded === i ? s.items.length : 4).map((item, j) => (
                  <li key={j}>✓ {item}</li>
                ))}
              </ul>
              <div className="svc-footer">
                <button
                  className="svc-toggle"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  {expanded === i ? 'Show Less ↑' : `+${s.items.length - 4} More Services`}
                </button>
                <a href="#contact" className="svc-link">Get Started →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
