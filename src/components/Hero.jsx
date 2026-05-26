import { useState, useEffect, useRef } from 'react'
import { IMG_IMMIGRATION, IMG_TAX_FORMS } from '../constants/images'

const AURORA_BLOBS = [
  { fx:0.18, fy:0.40, fr:0.52, ox:0.22, oy:0.16, ratio:0.70, spd:0.0032, col:[212,168,83],  a:0.55 },
  { fx:0.80, fy:0.55, fr:0.55, ox:0.18, oy:0.20, ratio:0.88, spd:0.0025, col:[228,186,100], a:0.48 },
  { fx:0.50, fy:0.08, fr:0.46, ox:0.26, oy:0.10, ratio:1.15, spd:0.0042, col:[255,235,160], a:0.38 },
  { fx:0.90, fy:0.30, fr:0.40, ox:0.08, oy:0.24, ratio:0.95, spd:0.0050, col:[80,130,240],  a:0.42 },
  { fx:0.10, fy:0.72, fr:0.44, ox:0.16, oy:0.18, ratio:1.25, spd:0.0028, col:[160,90,255],  a:0.38 },
  { fx:0.60, fy:0.85, fr:0.36, ox:0.20, oy:0.12, ratio:0.78, spd:0.0038, col:[60,180,220],  a:0.32 },
]

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

function HeroBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let blobs = []

    function resize() {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const W = canvas.width, H = canvas.height
      const scale = Math.min(W, H)
      blobs = AURORA_BLOBS.map((b, i) => ({
        ...b,
        cx:    b.fx * W,
        cy:    b.fy * H,
        r:     b.fr * scale,
        ox:    b.ox * W,
        oy:    b.oy * H,
        phase: (i / AURORA_BLOBS.length) * Math.PI * 2,
      }))
    }

    function draw() {
      const W = canvas.width, H = canvas.height
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, W, H)
      ctx.globalCompositeOperation = 'screen'

      blobs.forEach(b => {
        b.phase += b.spd
        const x = b.cx + Math.cos(b.phase) * b.ox
        const y = b.cy + Math.sin(b.phase * b.ratio) * b.oy
        const [r, g, bl] = b.col

        const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r)
        grad.addColorStop(0,    `rgba(${r},${g},${bl},${b.a})`)
        grad.addColorStop(0.30, `rgba(${r},${g},${bl},${(b.a * 0.55).toFixed(2)})`)
        grad.addColorStop(0.65, `rgba(${r},${g},${bl},${(b.a * 0.18).toFixed(2)})`)
        grad.addColorStop(1,    `rgba(${r},${g},${bl},0)`)

        ctx.beginPath()
        ctx.arc(x, y, b.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
}

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

export default function Hero() {
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
        <HeroBg />
        <img src={IMG_IMMIGRATION} alt="" aria-hidden="true" className="hero-bg-img hero-bg-desktop" />
        <img src={IMG_TAX_FORMS}  alt="" aria-hidden="true" className="hero-bg-img hero-bg-mobile" />
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
