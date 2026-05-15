import { useState, useEffect, useRef } from 'react'
import './App.css'

const LOGO = '/images/logoForLinkneat.jpeg'
const IMG_HANDSHAKE_TECH = '/images/WhatsApp%20Image%202026-05-14%20at%207.14.43%20PM.jpeg'
const IMG_HANDSHAKE_CITY = '/images/WhatsApp%20Image%202026-05-14%20at%207.14.48%20PM.jpeg'
const IMG_DEVELOPER     = '/images/WhatsApp%20Image%202026-05-14%20at%207.14.55%20PM.jpeg'
const IMG_CONSULTANT    = '/images/WhatsApp%20Image%202026-05-14%20at%207.15.19%20PM.jpeg'
const IMG_CAREER        = '/images/WhatsApp%20Image%202026-05-14%20at%207.15.36%20PM.jpeg'

function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function Navbar() {
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

const LANG_CONTENT = [
  {
    label: '🗣 دری — Dari',
    tagline: 'خدمات مالیاتی به زبان شما',
    ind_title: 'برای اشخاص انفرادی — For Individuals',
    ind: [
      'مالیات سالانه — Annual Tax Filing',
      'مشاوره های مالیاتی — Tax Consultations',
      'خدمات ترتیب و تکمیل فورم های مهم — Important Form Preparation',
    ],
    bus_title: 'برای شرکت ها — For Businesses',
    bus: [
      'مالیات کلی شرکت — Full Business Tax Return',
      'مشاور مالی — Financial Consulting',
      'خدمات اداری برای مهاجرین — Administrative Services for Immigrants',
    ],
    contact: 'تماس با ما — Contact Us',
    cta: 'رایگان مشاوره بگیرید',
  },
  {
    label: '🗣 پښتو — Pashto',
    tagline: 'ستاسې ژبه کې د مالیاتو خدمتونه',
    ind_title: 'د انفرادي کسانو لپاره — For Individuals',
    ind: [
      'کلنۍ مالیه — Annual Tax Filing',
      'د مالیاتو مشورې — Tax Consultations',
      'د مهمو فورمونو ډکول — Important Form Preparation',
    ],
    bus_title: 'د شرکتونو لپاره — For Businesses',
    bus: [
      'د شرکت بشپړه مالیه — Full Business Tax Return',
      'مالي مشاور — Financial Consulting',
      'د مهاجرینو اداري خدمتونه — Admin Services for Immigrants',
    ],
    contact: 'زموږ سره اړیکه ونیسئ — Contact Us',
    cta: 'وړیا مشوره ترلاسه کړئ',
  },
]

function LangCard() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % 2), 10000)
    return () => clearInterval(t)
  }, [])

  const c = LANG_CONTENT[idx]

  return (
    <div className="lang-card">
      <div className="lang-card-header">
        <span className="lang-card-label">{c.label}</span>
        <div className="lang-progress-wrap">
          <div className="lang-progress-bar" key={idx} />
        </div>
      </div>

      <p className="lang-card-tagline">{c.tagline}</p>

      <div className="lang-card-block">
        <div className="lcb-title">{c.ind_title} <em>(TAX RETURN)</em></div>
        {c.ind.map((item, i) => (
          <div className="lcb-item" key={i}>
            <span className="lcb-num">۰{i + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="lang-card-block">
        <div className="lcb-title">{c.bus_title} <em>(TAX RETURN)</em></div>
        {c.bus.map((item, i) => (
          <div className="lcb-item" key={i}>
            <span className="lcb-num">۰{i + 1}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="lang-card-contact">
        <div className="lcb-title">{c.contact}</div>
        <a href="tel:+12105186305">📞 (210) 518-6305</a>
        <a href="tel:+19163644543">📞 (916) 364-4543</a>
        <span>📍 3400 Watt Ave, STE 102, Sacramento, CA 95821</span>
      </div>

      <a href="#contact" className="btn btn-gold btn-full lc-cta">{c.cta}</a>
    </div>
  )
}

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const timers = []
    const items = heroRef.current?.querySelectorAll('.hero-animate') ?? []
    items.forEach((el, i) => {
      timers.push(setTimeout(() => el.classList.add('visible'), 80 + i * 170))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-decor">
        <img src={IMG_HANDSHAKE_CITY} alt="" aria-hidden="true" className="hero-bg-img" />
        <div className="decor-circle c1" />
        <div className="decor-circle c2" />
        <div className="decor-circle c3" />
        <div className="decor-dollar">$</div>
      </div>
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-badge hero-animate"><span className="badge-dot" />🏆 Serving Sacramento Since 2021</div>
          <h1 className="hero-animate">Professional Services<br /><span className="gold">You Can Trust</span></h1>
          <p className="hero-sub hero-animate">
            Tax, Immigration, Business &amp; Translation services for individuals, families, and small businesses.
            Served in <strong style={{ color: '#e8c06a' }}>English, Dari &amp; Pashto</strong>.
          </p>
          <div className="hero-btns hero-animate">
            <a href="#contact" className="btn btn-gold btn-lg">Book Free Consultation</a>
            <a href="#services" className="btn btn-outline btn-lg">View Services</a>
          </div>
          <div className="hero-trust hero-animate">
            <div className="trust-item"><span className="check">✓</span> Trusted Since 2021</div>
            <div className="trust-item"><span className="check">✓</span> 100% Confidential</div>
            <div className="trust-item"><span className="check">✓</span> Dari &amp; Pashto Support</div>
            <div className="trust-item"><span className="check">✓</span> Personalized Service</div>
          </div>
        </div>

        <div className="hero-right hero-animate">
          <LangCard />
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

function StatsBar() {
  const stats = [
    { num: '2,000+', label: 'Clients Served' },
    { num: '100%', label: 'Client Satisfaction' },
    { num: '5+', label: 'Years in Business' },
  ]
  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="stat-item" key={i}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function LanguageBanner() {
  return (
    <section className="lang-banner">
      <div className="lang-banner-top">
        <span className="lang-tag-item">🗣 دری — Dari</span>
        <h2>خدمات مالیاتی به زبان شما</h2>
        <span className="lang-tag-item">🗣 پښتو — Pashto</span>
      </div>
      <div className="lang-inner">
        <div className="lang-col">
          <div className="lang-col-title">برای اشخاص انفرادی — For Individuals</div>
          <div className="lang-subtitle">(TAX RETURN)</div>
          <ul className="lang-list">
            <li><span>۱</span> مالیات سالانه — Annual Tax Filing</li>
            <li><span>۲</span> مشاوره های مالیاتی — Tax Consultations</li>
            <li><span>۳</span> خدمات ترتیب و تکمیل فورم های مهم — Important Form Preparation</li>
          </ul>
        </div>
        <div className="lang-divider" />
        <div className="lang-col">
          <div className="lang-col-title">برای شرکت ها — For Businesses</div>
          <div className="lang-subtitle">(TAX RETURN)</div>
          <ul className="lang-list">
            <li><span>۱</span> مالیات کلی شرکت — Full Business Tax Return</li>
            <li><span>۲</span> مشاور مالی — Financial Consulting</li>
            <li><span>۳</span> خدمات اداری برای مهاجرین — Administrative Services for Immigrants</li>
          </ul>
        </div>
        <div className="lang-divider" />
        <div className="lang-col lang-col-contact">
          <div className="lang-col-title">تماس با ما — Contact Us</div>
          <div className="lang-contact-items">
            <a href="tel:+12105186305" className="lang-phone">📞 (210) 518-6305</a>
            <a href="tel:+19163644543" className="lang-phone">📞 (916) 364-4543</a>
            <span className="lang-addr">📍 3400 Watt Ave, STE 102<br />Sacramento, CA 95821</span>
          </div>
          <a href="#contact" className="btn btn-gold" style={{ marginTop: '16px' }}>رایگان مشاوره بگیرید</a>
        </div>
      </div>
    </section>
  )
}

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

function Services() {
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
          <img src={IMG_CONSULTANT} alt="Professional career and business consulting services" />
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

const WHY_US = [
  {
    icon: '🏆',
    title: 'Trusted Since 2021',
    desc: 'Serving individuals, families, and businesses throughout Sacramento and surrounding communities with dedication and care.',
  },
  {
    icon: '📚',
    title: 'Experienced & Knowledgeable Team',
    desc: 'Our professionals stay updated with current tax laws, business requirements, immigration documentation processes, and translation standards.',
  },
  {
    icon: '🤝',
    title: 'Personalized Client Support',
    desc: 'Every client receives professional attention and customized service based on their unique needs, situation, and goals.',
  },
  {
    icon: '🛡️',
    title: 'Reliable & Professional Service',
    desc: 'We are committed to honesty, accuracy, confidentiality, and client satisfaction in everything we do.',
  },
]

function WhyUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Why Choose Us</span>
          <h2>Why Choose Linkneat?</h2>
          <p>We're more than a tax office. We're your community partner for professional services in your language.</p>
        </div>
        <div className="why-layout">
          <div className="why-img-panel">
            <img src={IMG_CAREER} alt="Career development and leadership" className="why-panel-img" />
            <div className="why-panel-badge">
              <div className="wpb-num">2,000+</div>
              <div className="wpb-label">Clients Served Since 2021</div>
            </div>
          </div>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <div className="why-card reveal" key={i}>
                <span className="why-icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBand() {
  return (
    <section className="cta-band">
      <img src={IMG_HANDSHAKE_TECH} alt="" aria-hidden="true" className="cta-band-bg-img" />
      <div className="cta-band-inner">
        <div className="cta-band-text">
          <h2>Professional Service. Trusted Support. Community Focused.</h2>
          <p>Whether you need tax preparation, immigration documentation, business consulting, or translation, we're here to help in English, Dari, and Pashto.</p>
        </div>
        <div className="cta-band-actions">
          <a href="#contact" className="btn btn-gold btn-lg cta-pulse">Book Free Consultation</a>
          <a href="tel:+12105186305" className="btn btn-outline btn-lg">📞 Call Now</a>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  { step: '01', title: 'Book a Free Consultation', desc: 'Schedule a call or visit our office. We\'ll review your situation and recommend the best approach at no cost.' },
  { step: '02', title: 'Share Your Documents', desc: 'Bring or upload your documents. We\'ll guide you on exactly what\'s needed and keep everything confidential.' },
  { step: '03', title: 'We Prepare & Process', desc: 'Our experienced team handles your case accurately and professionally, maximizing every benefit you\'re entitled to.' },
  { step: '04', title: 'Review & Complete', desc: 'We walk you through the results, answer every question, and ensure you\'re fully satisfied before we finalize.' },
]

function Process() {
  return (
    <section className="section process bg-light" id="process">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">How It Works</span>
          <h2>Simple. Fast. Done Right.</h2>
          <p>Our straightforward process makes professional services easy and stress-free from start to finish.</p>
        </div>
        <div className="process-visual">
          <div className="process-visual-img">
            <img src={IMG_DEVELOPER} alt="Our team working diligently for clients" />
          </div>
          <div className="process-visual-text">
            <h3>Dedicated to Your Success</h3>
            <p>Our experienced team handles every detail of your case with accuracy and care, so you can focus on what matters most.</p>
            <a href="#contact" className="btn btn-gold">Start Today →</a>
          </div>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" key={i}>
              <div className="step-num">{s.step}</div>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Sarah Martinez',
    role: 'Small Business Owner',
    text: 'Linkneat helped me with both my business taxes and my LLC formation. They explained everything clearly and found deductions I never knew about. Outstanding service!',
    rating: 5,
    result: 'Tax + Business Setup',
  },
  {
    name: 'Ahmad Karimi',
    role: 'New Resident',
    text: 'They helped my family with immigration documentation and tax filing, all in Dari. No language barrier at all. Very professional and trustworthy team.',
    rating: 5,
    result: 'Immigration + Tax',
  },
  {
    name: 'Maria Gonzalez',
    role: 'Freelance Professional',
    text: 'I needed document translation and tax help at the same time. Linkneat handled both quickly and accurately. I\'ll be coming back every year.',
    rating: 5,
    result: 'Translation + Tax',
  },
]

function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head light">
          <span className="section-tag light">Client Reviews</span>
          <h2>Real Results. Real People.</h2>
          <p>Trusted by families and businesses across Sacramento since 2021.</p>
        </div>
        <div className="t-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="t-card reveal" key={i}>
              <div className="t-stars">{'★'.repeat(t.rating)}</div>
              <p className="t-text">"{t.text}"</p>
              <div className="t-bottom">
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
                <div className="t-result">{t.result}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="t-summary">
          <span>⭐ 5.0/5 average rating</span>
          <span className="dot">•</span>
          <span>Trusted by 2,000+ clients</span>
          <span className="dot">•</span>
          <span>Sacramento, CA</span>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'What services does Linkneat Career & Tax Services offer?',
    a: 'We offer four main service areas: Tax Preparation & Consulting, Immigration Consulting & Documentation, Business Consulting, and Translation & Interpretation services. All services are available in English, Dari, and Pashto.',
  },
  {
    q: 'Can you help me if I haven\'t filed taxes in several years?',
    a: 'Yes. We specialize in back-tax filings and can help reduce or eliminate penalties through IRS programs. The sooner you reach out, the better your options.',
  },
  {
    q: 'Do you assist with immigration documentation?',
    a: 'We provide professional assistance with immigration form preparation, family petitions, adjustment of status, green card renewals, naturalization documents, and more. We help you organize your case professionally.',
  },
  {
    q: 'Can you help me start a business?',
    a: 'Absolutely. We assist with LLC and corporation formation, EIN registration, business registration, startup consulting, business planning, and compliance guidance from day one.',
  },
  {
    q: 'Do you offer certified translation services?',
    a: 'Yes. We provide translation for immigration documents, personal documents, and business documents, including certified translation support and interpretation assistance.',
  },
  {
    q: 'Do you serve clients who speak Dari or Pashto?',
    a: 'Yes, this is one of our key strengths. Our team provides full services in English, Dari, and Pashto so there is no language barrier. We are proud to serve the Afghan community in Sacramento.',
  },
  {
    q: 'What are your office hours?',
    a: 'We are open Monday through Friday from 9:00 AM to 6:00 PM. Saturday appointments are available by request. We are closed on Sundays.',
  },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">FAQ</span>
          <h2>Common Questions</h2>
          <p>Everything you need to know about working with Linkneat Career &amp; Tax Services.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item reveal ${openIdx === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIdx === i ? '−' : '+'}</span>
              </button>
              {openIdx === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY' // ← replace after step below

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function set(field) {
    return e => setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Consultation Request: ${form.service || 'General'}`,
          from_name: 'Linkneat Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || 'Not specified',
          message: form.message || 'No message provided.',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <section className="section contact bg-light" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-tag">Get In Touch</span>
          <h2>Contact Us Today</h2>
          <p>Whether you need tax preparation, immigration documentation, business consulting, or translation, Linkneat Career &amp; Tax Services is here to help.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span>📍</span>
              <div>
                <strong>Office</strong>
                <span>3400 Watt Ave, Suite 102<br />Sacramento, CA 95821</span>
              </div>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+12105186305">(210) 518-6305</a>
                <a href="tel:+19163644543" style={{ marginTop: '4px', display: 'block' }}>(916) 364-4543</a>
              </div>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:folad@linkneat.com">folad@linkneat.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span>🌐</span>
              <div>
                <strong>Website</strong>
                <a href="https://linkneat.com" target="_blank" rel="noopener noreferrer">linkneat.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span>🕐</span>
              <div>
                <strong>Office Hours</strong>
                <span>Mon – Fri: 9:00 AM – 6:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</span>
              </div>
            </div>
            <div className="contact-item">
              <span>🌐</span>
              <div>
                <strong>Follow Us</strong>
                <div className="contact-socials">
                  <a href="https://www.facebook.com/profile.php?id=100082974500760" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                  <a href="https://x.com/Linkneat1" target="_blank" rel="noopener noreferrer" className="social-link">X / Twitter</a>
                  <a href="https://www.linkedin.com/in/linkneat-career-development-27bb7b235/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-guarantee">
            <div className="cg-icon">🛡️</div>
            <div>
              <strong>Our Promise</strong>
              <p>Professional Service. Trusted Support. Community Focused.</p>
            </div>
          </div>
        </div>

        <div className="form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. We'll contact you within 1 business day to confirm your free consultation.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Schedule Your Free Consultation</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input required type="text" placeholder="John Smith" value={form.name} onChange={set('name')} />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input required type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input required type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select value={form.service} onChange={set('service')}>
                  <option value="">Select a service...</option>
                  <option>Tax Preparation & Filing</option>
                  <option>Tax Consulting & Planning</option>
                  <option>ITIN Application</option>
                  <option>IRS Letter Assistance</option>
                  <option>Immigration Documentation</option>
                  <option>Business Formation & Consulting</option>
                  <option>Translation & Interpretation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Brief Description (optional)</label>
                <textarea rows={3} placeholder="Tell us about your situation..." value={form.message} onChange={set('message')} />
              </div>
              <button type="submit" className="btn btn-gold btn-full" disabled={loading}>
                {loading ? 'Sending…' : 'Book Free Consultation →'}
              </button>
              {error && <p className="form-error">Something went wrong. Please call us directly at (210) 518-6305.</p>}
              <p className="form-note">Free consultation. No obligation. Served in English, Dari &amp; Pashto.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
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

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <LanguageBanner />
        <Services />
        <WhyUs />
        <CtaBand />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
