import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ServiceVisual from '../../../components/ServiceVisual';
import { SERVICES, getService } from '../../../lib/services';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: `${s.name} | e-Xpert Consultants`, description: `${s.tagline} ${s.intro}`.slice(0, 160) };
}

const check = <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug);
  return (
    <>
      <Header />
      <main id="top">
        <section className="block page-hero svc-hero">
          <div className="wrap svc-hero-grid">
            <div>
              <a className="back" href="/#services">← All services</a>
              <p className="eyebrow">Service</p>
              <h1 className="page-title">{s.name}</h1>
              <p className="svc-tagline">{s.tagline}</p>
              <p className="lede">{s.intro}</p>
              <div className="actions">
                <a className="btn btn-primary" href="/free-consultation/">Get a free consultation</a>
                <a className="btn btn-ghost" href={`/?topic=${encodeURIComponent(s.name)}#contact`}>Send an enquiry</a>
              </div>
            </div>
            <div className="sv-card"><ServiceVisual slug={s.slug} /></div>
          </div>
        </section>

        <section className="block page-body">
          <div className="wrap">
            <p className="eyebrow">What we deliver</p>
            <ul className="db-feat prod-feat">
              {s.deliverables.map(([h, d]) => (
                <li key={h}><span className="db-i">{check}</span><div><b>{h}</b><span>{d}</span></div></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="block">
          <div className="wrap svc-two">
            <div>
              <p className="eyebrow">How it works</p>
              <ol className="svc-steps">
                {s.steps.map((st, i) => <li key={st} style={{ '--i': i }}><b>{String(i + 1).padStart(2, '0')}</b><span>{st}</span></li>)}
              </ol>
            </div>
            <div>
              <p className="eyebrow">Right for you if</p>
              <ul className="svc-for">
                {s.forWho.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="block tint">
          <div className="wrap">
            <p className="eyebrow">Other services</p>
            <div className="svc-others">
              {others.map((o) => (
                <a key={o.slug} className="svc-other" href={`/services/${o.slug}/`}>
                  <span>{o.name}</span>
                  <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
