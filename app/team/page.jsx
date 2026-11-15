import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Leadership from '../../components/Leadership';

export const metadata = {
  title: 'Team | e-Xpert Consultants',
  description: 'Meet the leadership team of E-Xpert Consultants Limited.',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main id="top" className="team-page">
        <Leadership />
        <section className="block tint">
          <div className="wrap article-cta team-cta">
            <div>
              <h3>Work with our team</h3>
              <p>Tell us which process slows you down. The first consultation is free.</p>
            </div>
            <a className="btn btn-primary" href="/#contact">Get in touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
