
export default function Products() {
  return (
    <>
<section className="block tint" id="products">
  <div className="wrap">
    <div className="head">
      <div>
        <p className="eyebrow">Our products</p>
        <h2>Platforms we built and run ourselves.</h2>
      </div>
      <p className="lede">Beyond client work, e-Xpert builds and runs its own digital products for payments, education and healthcare, using the same methods we bring to every client.</p>
    </div>
    <div className="products">
      <article className="product p-tb">
        <div className="p-logo"><img src="/images/trustbee-logo.png" alt="TrustBee" width={260} height={70} /></div>
        <span className="p-tag">FinTech · Escrow</span>
        <h3>Safe payments between buyers and sellers</h3>
        <p>TrustBee holds a buyer's payment until the seller delivers. Sellers send a conditional payment request, funds are held through a Bangladesh Bank licensed payment gateway, and money is released once delivery is confirmed.</p>
        <ul className="p-feat">
          <li>Conditional payment requests</li>
          <li>Verified buyers and sellers</li>
          <li>Neutral dispute resolution</li>
        </ul>
        <a className="btn btn-ghost p-link" href="https://trustbee.com.bd/" target="_blank" rel="noopener">Visit trustbee.com.bd <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg></a>
      </article>
      <article className="product p-ch">
        <div className="p-logo"><img src="/images/chaatro-logo.png" alt="Chaatro.com" width={200} height={43} /></div>
        <span className="p-tag">EdTech · Mentoring marketplace</span>
        <h3>Find the right mentor for any goal</h3>
        <p>Chaatro.com is a mentoring marketplace that connects students across Bangladesh with vetted mentors for admission tests, school subjects, skills and career guidance. Students compare mentors, book live sessions and learn from home, starting with its leading cadet college admission programme.</p>
        <ul className="p-feat">
          <li>Verified mentor profiles to browse and compare</li>
          <li>One-to-one, small-group and batch sessions</li>
          <li>Live classes, bootcamps, ebooks and course bundles</li>
        </ul>
        <a className="btn btn-ghost p-link" href="https://chaatro.com/" target="_blank" rel="noopener">Visit chaatro.com <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg></a>
      </article>
      <article className="product p-db">
        <div className="db-main">
          <div className="db-logo"><span className="db-mark"><svg viewBox="0 0 40 40" aria-hidden="true"><rect width={40} height={40} rx={11} fill="#1584F7" /><path d="M11 12.5c3-1.6 6.2-1.6 9 .3 2.8-1.9 6-1.9 9-.3v15c-3-1.6-6.2-1.6-9 .3-2.8-1.9-6-1.9-9-.3z" fill="none" stroke="#fff" strokeWidth={2} strokeLinejoin="round" /><path d="M20 12.8v15.3" stroke="#fff" strokeWidth={2} /><path d="M15.5 17v5M13 19.5h5" stroke="#fff" strokeWidth={2} strokeLinecap="round" /></svg></span><span className="db-word">Doctors<b>Book</b></span></div>
          <div className="db-tags"><span className="p-tag">HealthTech · Practice management</span><span className="db-new">New</span></div>
          <h3>Everything a doctor needs to run a practice</h3>
          <p>DoctorsBook gives doctors and chambers one system for appointments, prescriptions, patient records and payments, plus a branded website on their own domain. e-Xpert sets it up and manages it end to end, so doctors can focus on patients.</p>
          <ul className="db-steps">
            <li><b>1</b>Free demo</li>
            <li><b>2</b>We set up your site, domain and payments</li>
            <li><b>3</b>We train your staff and manage it for you</li>
          </ul>
          <a className="btn btn-primary p-link" href="#contact" data-topic="DoctorsBook for doctors">Request a free demo <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg></a>
        </div>
        <ul className="db-feat"><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x={3} y={5} width={18} height={16} rx={3} /><path d="M3 10h18M8 3v4M16 3v4M8 14h3" /></svg></span><div><b>Online appointments</b><span>Patients choose a chamber, date and time, pay in advance and get a serial number.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l3 3v15H6z" /><path d="M9 9h3a2 2 0 0 1 0 4H9V9zM9 13v4M12 13l3 4" /></svg></span><div><b>Digital prescriptions</b><span>Bangla or English, with medicine and test lists. Print or send as PDF.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx={12} cy={8} r="3.5" /><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" /><path d="M17 4h4M19 2v4" /></svg></span><div><b>Patient records</b><span>Visit history, reports and past prescriptions in one profile.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V9l8-5 8 5v11" /><path d="M9 20v-5h6v5M12 8v4M10 10h4" /></svg></span><div><b>Chambers &amp; schedules</b><span>Multiple chambers, fees, serial limits and leave days.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x={3} y={4} width={18} height={16} rx={3} /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></svg></span><div><b>Doctor’s own website</b><span>A branded site on the doctor’s own domain with degrees, fees and reviews.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x={3} y={6} width={18} height={13} rx={3} /><path d="M3 10h18M7 15h4" /></svg></span><div><b>Online payments</b><span>bKash, Nagad, cards and bank, paid straight to the doctor’s account.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 10h8M8 13h5" /></svg></span><div><b>SMS &amp; reminders</b><span>Booking confirmations, visit reminders and follow-ups.</span></div></li><li><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></span><div><b>Dashboard &amp; reports</b><span>Income, patient flow and appointments at a glance.</span></div></li></ul>
      </article>
    </div>
  </div>
</section>
    </>
  );
}
