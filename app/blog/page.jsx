import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllPosts, formatDate } from '../../lib/posts';

export const metadata = {
  title: 'Blog | e-Xpert Consultants',
  description: 'Practical articles on process automation, growth, payments and technology for businesses in Bangladesh.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  return (
    <>
      <Header />
      <main id="top">
        <section className="block blog-hero">
          <div className="wrap">
            <p className="eyebrow">Blog</p>
            <h1 className="blog-title">Ideas for running a business that grows.</h1>
            <p className="lede">Practical articles on automation, operations, payments and growth, written by the e-Xpert team.</p>
          </div>
        </section>
        <section className="block blog-list-wrap">
          <div className="wrap">
            {featured && (
              <a className="post-card post-featured" href={`/blog/${featured.slug}/`}>
                <div className="post-meta"><span className="p-tag">{featured.category}</span><span>{formatDate(featured.date)} · {featured.minutes} min read</span></div>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <span className="post-more">Read article →</span>
              </a>
            )}
            <div className="post-grid">
              {rest.map((p) => (
                <a className="post-card" key={p.slug} href={`/blog/${p.slug}/`}>
                  <div className="post-meta"><span className="p-tag">{p.category}</span><span>{p.minutes} min read</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="post-date">{formatDate(p.date)}</span>
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
