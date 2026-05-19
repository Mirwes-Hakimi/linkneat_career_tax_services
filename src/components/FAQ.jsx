import { useState } from 'react'

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

export default function FAQ() {
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
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
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
