import { IMG_DEVELOPER } from '../constants/images'

const STEPS = [
  { step: '01', title: 'Book a Free Consultation', desc: 'Schedule a call or visit our office. We\'ll review your situation and recommend the best approach at no cost.' },
  { step: '02', title: 'Share Your Documents', desc: 'Bring or upload your documents. We\'ll guide you on exactly what\'s needed and keep everything confidential.' },
  { step: '03', title: 'We Prepare & Process', desc: 'Our experienced team handles your case accurately and professionally, maximizing every benefit you\'re entitled to.' },
  { step: '04', title: 'Review & Complete', desc: 'We walk you through the results, answer every question, and ensure you\'re fully satisfied before we finalize.' },
]

export default function Process() {
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
