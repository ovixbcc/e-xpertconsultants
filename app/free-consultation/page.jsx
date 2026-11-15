import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ConsultForm from '../../components/ConsultForm';

export const metadata = {
  title: 'Free consultation | e-Xpert Consultants',
  description: 'Book a free consultation with e-Xpert. We review your current workflow and show where automation would pay back fastest.',
};

export default function FreeConsultationPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="block page-hero consult-hero">
          <div className="wrap consult-grid">
            <div className="consult-side">
              <p className="eyebrow">Free consultation</p>
              <h1 className="page-title">Let&rsquo;s find what&rsquo;s slowing your business down.</h1>
              <p className="lede">Tell us a little about your business. A consultant will contact you to book a free session, review your current workflow and show where automation would pay back fastest.</p>
              <ul className="consult-points">
                <li><b>1</b><span><strong>Share your challenge</strong>Fill in the form. It takes about two minutes.</span></li>
                <li><b>2</b><span><strong>Talk to a consultant</strong>We call you to understand how your team works today.</span></li>
                <li><b>3</b><span><strong>Get clear next steps</strong>You receive practical recommendations, with no obligation.</span></li>
              </ul>
              <p className="consult-contact">Prefer to talk now? Call <strong>+880 1332-092905</strong> or email <strong>care@e-xpertconsultants.com</strong></p>
            </div>
            <ConsultForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
