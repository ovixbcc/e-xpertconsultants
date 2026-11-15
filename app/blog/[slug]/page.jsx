import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getAllPosts, getPost, formatDate } from '../../../lib/posts';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | e-Xpert Blog`,
    description: post.excerpt,
    openGraph: { type: 'article', title: post.title, description: post.excerpt, images: [post.cover || '/og-image.png'] },
  };
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const more = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <>
      <Header />
      <main id="top">
        <article className="block article">
          <div className="wrap article-wrap">
            <a className="back" href="/blog/">← All articles</a>
            <header className="article-head">
              <div className="article-head-text">
                <div className="post-meta"><span className="p-tag">{post.category}</span><span>{formatDate(post.date)} · {post.minutes} min read</span></div>
                <h1 className="article-title">{post.title}</h1>
                <p className="article-lede">{post.excerpt}</p>
                <p className="article-by">By {post.author}</p>
              </div>
              {post.cover && <img className="article-cover" src={post.cover} alt={post.title} width="1080" height="1920" />}
            </header>
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="article-cta">
              <div>
                <h3>Want help with this in your business?</h3>
                <p>Tell us which process slows you down. The first consultation is free.</p>
              </div>
              <a className="btn btn-primary" href="/#contact">Talk to e-Xpert</a>
            </div>
          </div>
        </article>
        {more.length > 0 && (
          <section className="block tint">
            <div className="wrap">
              <p className="eyebrow">Keep reading</p>
              <div className="post-grid" style={{ marginTop: 20 }}>
                {more.map((p) => (
                  <a className="post-card" key={p.slug} href={`/blog/${p.slug}/`}>
                    {p.cover && <img className="post-thumb" src={p.cover} alt="" loading="lazy" width="108" height="192" />}
                    <div className="post-body">
                    <div className="post-meta"><span className="p-tag">{p.category}</span><span>{p.minutes} min read</span></div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="post-date">{formatDate(p.date)}</span>

                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
