import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductLogo from '../../../components/ProductLogo';
import ProductPopup from '../../../components/ProductPopup';
import { PRODUCTS, getProduct } from '../../../lib/products';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return { title: `${p.name} | e-Xpert Products`, description: p.short };
}

const arrow = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" /></svg>;

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  if (p.page) {
    return (
      <main style={{ padding: '120px 24px', textAlign: 'center' }}>
        <meta httpEquiv="refresh" content={`0;url=${p.page}`} />
        <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(p.page)})` }} />
        <p>Opening <a href={p.page}>{p.name}</a>…</p>
      </main>
    );
  }
  const others = PRODUCTS.filter((x) => x.slug !== p.slug);
  return (
    <>
      <Header />
      <main id="top">
        <section className={`block page-hero prod-hero pc-${p.slug}`}>
          <div className="wrap prod-hero-grid">
            <div>
              <a className="back" href="/products/">← All products</a>
              <div className="prod-hero-logo"><ProductLogo product={p} big /></div>
              <div className="db-tags"><span className="p-tag">{p.tag}</span>{p.isNew && <span className="db-new">New</span>}</div>
              <h1 className="page-title">{p.tagline}</h1>
              <p className="lede">{p.description}</p>
              <div className="actions">
                {p.url
                  ? <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener">{p.cta} {arrow}</a>
                  : <a className="btn btn-primary" href={p.ctaHref}>{p.cta} {arrow}</a>}
                <ProductPopup product={p} />
              </div>
            </div>
            <ol className="prod-steps">
              {p.steps.map((s, i) => <li key={s}><b>{i + 1}</b><span>{s}</span></li>)}
            </ol>
          </div>
        </section>
        <section className="block page-body">
          <div className="wrap">
            <p className="eyebrow">Features</p>
            <ul className="db-feat prod-feat">
              {p.features.map(([h, d]) => <li key={h}><span className="db-i"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span><div><b>{h}</b><span>{d}</span></div></li>)}
            </ul>
          </div>
        </section>
        <section className="block tint">
          <div className="wrap">
            <p className="eyebrow">More products</p>
            <div className="prod-grid two" style={{ marginTop: 20 }}>
              {others.map((o) => (
                <a key={o.slug} className={`prod-card pc-${o.slug}`} href={o.page || `/products/${o.slug}/`}>
                  <div className="prod-thumb"><span className="prod-chip"><ProductLogo product={o} /></span></div>
                  <div className="prod-info"><span className="p-tag">{o.tag}</span><h2>{o.tagline}</h2><span className="post-more">View {o.name} →</span></div>
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
