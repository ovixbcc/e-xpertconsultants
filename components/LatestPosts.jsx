import { getAllPosts, formatDate } from '../lib/posts';

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section className="block" id="blog">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2>Ideas for running a business that grows.</h2>
          </div>
          <p className="lede">Practical articles on automation, operations, payments and growth. <a className="inline-link" href="/blog/">See all articles →</a></p>
        </div>
        <div className="post-grid three">
          {posts.map((p) => (
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
  );
}
