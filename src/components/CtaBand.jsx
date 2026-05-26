import { IMG_TAX_CONSULT } from '../constants/images'

export default function CtaBand() {
  return (
    <section className="cta-band">
      <img src={IMG_TAX_CONSULT} alt="" aria-hidden="true" className="cta-band-bg-img" />
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
