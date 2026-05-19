export default function LanguageBanner() {
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
