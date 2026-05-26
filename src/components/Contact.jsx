// import { useState } from 'react'

// const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY'

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
//   const [sent, setSent] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(false)

//   function set(field) {
//     return e => setForm(prev => ({ ...prev, [field]: e.target.value }))
//   }

//   async function handleSubmit(e) {
//     e.preventDefault()
//     setLoading(true)
//     setError(false)
//     try {
//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//         body: JSON.stringify({
//           access_key: WEB3FORMS_KEY,
//           subject: `New Consultation Request: ${form.service || 'General'}`,
//           from_name: 'Linkneat Website',
//           name: form.name,
//           email: form.email,
//           phone: form.phone,
//           service: form.service || 'Not specified',
//           message: form.message || 'No message provided.',
//         }),
//       })
//       const data = await res.json()
//       if (data.success) {
//         setSent(true)
//       } else {
//         setError(true)
//       }
//     } catch {
//       setError(true)
//     }
//     setLoading(false)
//   }

//   return (
//     <section className="section contact bg-light" id="contact">
//       <div className="container contact-inner">
//         <div className="contact-info">
//           <span className="section-tag">Get In Touch</span>
//           <h2>Contact Us Today</h2>
//           <p>Whether you need tax preparation, immigration documentation, business consulting, or translation, Linkneat Career &amp; Tax Services is here to help.</p>
//           <div className="contact-details">
//             <div className="contact-item">
//               <span>📍</span>
//               <div>
//                 <strong>Office</strong>
//                 <span>3400 Watt Ave, Suite 102<br />Sacramento, CA 95821</span>
//               </div>
//             </div>
//             <div className="contact-item">
//               <span>📞</span>
//               <div>
//                 <strong>Phone</strong>
//                 <a href="tel:+12105186305">(210) 518-6305</a>
//                 <a href="tel:+19163644543" style={{ marginTop: '4px', display: 'block' }}>(916) 364-4543</a>
//               </div>
//             </div>
//             <div className="contact-item">
//               <span>✉️</span>
//               <div>
//                 <strong>Email</strong>
//                 <a href="mailto:folad@linkneat.com">folad@linkneat.com</a>
//               </div>
//             </div>
//             <div className="contact-item">
//               <span>🌐</span>
//               <div>
//                 <strong>Website</strong>
//                 <a href="https://linkneat.com" target="_blank" rel="noopener noreferrer">linkneat.com</a>
//               </div>
//             </div>
//             <div className="contact-item">
//               <span>🕐</span>
//               <div>
//                 <strong>Office Hours</strong>
//                 <span>Mon – Fri: 9:00 AM – 6:00 PM<br />Saturday: By Appointment<br />Sunday: Closed</span>
//               </div>
//             </div>
//             <div className="contact-item">
//               <span>🌐</span>
//               <div>
//                 <strong>Follow Us</strong>
//                 <div className="contact-socials">
//                   <a href="https://www.facebook.com/profile.php?id=100082974500760" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
//                   <a href="https://x.com/Linkneat1" target="_blank" rel="noopener noreferrer" className="social-link">X / Twitter</a>
//                   <a href="https://www.linkedin.com/in/linkneat-career-development-27bb7b235/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="contact-guarantee">
//             <div className="cg-icon">🛡️</div>
//             <div>
//               <strong>Our Promise</strong>
//               <p>Professional Service. Trusted Support. Community Focused.</p>
//             </div>
//           </div>
//         </div>

//         <div className="form-wrap">
//           {sent ? (
//             <div className="form-success">
//               <div className="success-icon">✓</div>
//               <h3>Message Received!</h3>
//               <p>Thank you for reaching out. We'll contact you within 1 business day to confirm your free consultation.</p>
//             </div>
//           ) : (
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <h3>Schedule Your Free Consultation</h3>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Full Name *</label>
//                   <input required type="text" placeholder="John Smith" value={form.name} onChange={set('name')} />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone Number *</label>
//                   <input required type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')} />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label>Email Address *</label>
//                 <input required type="email" placeholder="john@example.com" value={form.email} onChange={set('email')} />
//               </div>
//               <div className="form-group">
//                 <label>Service Needed</label>
//                 <select value={form.service} onChange={set('service')}>
//                   <option value="">Select a service...</option>
//                   <option>Tax Preparation & Filing</option>
//                   <option>Tax Consulting & Planning</option>
//                   <option>ITIN Application</option>
//                   <option>IRS Letter Assistance</option>
//                   <option>Immigration Documentation</option>
//                   <option>Business Formation & Consulting</option>
//                   <option>Translation & Interpretation</option>
//                   <option>Other</option>
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label>Brief Description (optional)</label>
//                 <textarea rows={3} placeholder="Tell us about your situation..." value={form.message} onChange={set('message')} />
//               </div>
//               <button type="submit" className="btn btn-gold btn-full" disabled={loading}>
//                 {loading ? 'Sending…' : 'Book Free Consultation →'}
//               </button>
//               {error && <p className="form-error">Something went wrong. Please call us directly at (210) 518-6305.</p>}
//               <p className="form-note">Free consultation. No obligation. Served in English, Dari &amp; Pashto.</p>
//             </form>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }












import { useState } from 'react'

const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY

async function saveToBrevo(form) {
  // 1. Save contact to list
  await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      email: form.email,
      attributes: {
        FIRSTNAME: form.name.split(' ')[0],
        LASTNAME: form.name.split(' ').slice(1).join(' ') || '',
        SMS: form.phone,
        SERVICE: form.service || 'Not specified',
      },
      listIds: [3],
      updateEnabled: true,
    }),
  })

  // 2. Send notification email to owner
  await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: 'Linkneat Website', email: 'folad@linkneat.com' },
      to: [{ email: 'folad@linkneat.com', name: 'Folad' }],
      subject: `New Consultation Request: ${form.service || 'General'}`,
      htmlContent: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.phone}</p>
        <p><strong>Service:</strong> ${form.service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${form.message || 'No message provided.'}</p>
        <hr/>
        <p style="color:#888;font-size:12px">Sent from linkneat.com contact form</p>
      `,
    }),
  })
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
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
      await saveToBrevo(form)
      setSent(true)
    } catch (err) {
      console.error(err)
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

              {/* SMS/Email consent — legally required */}
              <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#666' }}>
                <input type="checkbox" id="consent" required style={{ marginTop: '3px', flexShrink: 0 }} />
                <label htmlFor="consent">
                  I agree to receive occasional emails and text messages from Linkneat Career & Tax Services. Reply STOP to unsubscribe anytime.
                </label>
              </div>

              <button type="submit" className="btn btn-gold btn-full" disabled={loading}>
                {loading ? 'Sending…' : 'Book Free Consultation →'}
              </button>
              {error && (
                <p className="form-error">
                  Something went wrong. Please call us directly at (210) 518-6305.
                </p>
              )}
              <p className="form-note">Free consultation. No obligation. Served in English, Dari &amp; Pashto.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}