import { IMG_CAREER } from '../constants/images'

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

export default function WhyUs() {
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
