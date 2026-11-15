import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductLogo from '../../components/ProductLogo';
import { PRODUCTS } from '../../lib/products';

export const metadata = {
  title: 'Products | e-Xpert Consultants',
  description: 'TrustBee, Chaatro.com and DoctorsBook: platforms e-Xpert builds and runs for payments, education and healthcare.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="block page-hero">
          <div className="wrap">
            <p className="eyebrow">Our products</p>
            <h1 className="page-title">Platforms we built and run ourselves.</h1>
            <p className="lede">Beyond client work, e-Xpert builds and runs its own digital products for payments, education and healthcare, using the same methods we bring to every client.</p>
          </div>
        </section>
        <section className="block page-body">
          <div className="wrap">
            <div className="prod-grid">
              {PRODUCTS.map((p) => (
                <a key={p.slug} className={`prod-card pc-${p.slug}`} href={`/products/${p.slug}/`}>
                  <div className="prod-thumb">
                    <span className="prod-chip"><ProductLogo product={p} /></span>
                    {p.isNew && <span className="db-new">New</span>}
                  </div>
                  <div className="prod-info">
                    <span className="p-tag">{p.tag}</span>
                    <h2>{p.tagline}</h2>
                    <p>{p.short}</p>
                    <span className="post-more">View {p.name} →</span>
                  </div>
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
