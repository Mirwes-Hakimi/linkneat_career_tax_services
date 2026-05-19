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

export default function Testimonials() {
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
