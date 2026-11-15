'use client';

import { useEffect, useMemo, useState } from 'react';

function topicsOf(category) {
  const m = /^Case study\s*·\s*(.+)$/.exec(category);
  return m ? ['Case studies', m[1].trim()] : [category];
}

function Card({ p, featured = false }) {
  return (
    <a className={`post-card${featured ? ' post-featured' : ''}`} href={`/blog/${p.slug}/`}>
      {p.cover && <img className="post-thumb" src={p.cover} alt="" loading={featured ? 'eager' : 'lazy'} width={featured ? 216 : 108} height={featured ? 384 : 192} />}
      <div className="post-body">
        <div className="post-meta"><span className="p-tag">{p.category}</span><span>{featured ? `${p.dateLabel} · ` : ''}{p.minutes} min read</span></div>
        {featured ? <h2>{p.title}</h2> : <h3>{p.title}</h3>}
        <p>{p.excerpt}</p>
        {featured ? <span className="post-more">Read article →</span> : <span className="post-date">{p.dateLabel}</span>}
      </div>
    </a>
  );
}

export default function BlogList({ posts }) {
  const [cat, setCat] = useState('All');
  const cats = useMemo(() => {
    const set = new Set();
    posts.forEach((p) => topicsOf(p.category).forEach((t) => set.add(t)));
    const list = [...set].filter((c) => c !== 'Case studies').sort();
    return ['All', 'Case studies', ...list];
  }, [posts]);
  const count = (c) => (c === 'All' ? posts.length : posts.filter((p) => topicsOf(p.category).includes(c)).length);

  useEffect(() => {
    try { const h = decodeURIComponent(window.location.hash.slice(1)); if (h && cats.includes(h)) setCat(h); } catch (e) {}
  }, [cats]);

  const shown = cat === 'All' ? posts : posts.filter((p) => topicsOf(p.category).includes(cat));
  const [first, ...rest] = shown;

  return (
    <>
      <div className="blog-bar">
        <label htmlFor="blog-cat" className="blog-bar-label">Category</label>
        <div className="blog-select">
          <select id="blog-cat" value={cat} onChange={(e) => setCat(e.target.value)}>
            {cats.map((c) => <option key={c} value={c}>{c === 'All' ? 'All articles' : c} ({count(c)})</option>)}
          </select>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10l4 4 4-4" /></svg>
        </div>
        <span className="blog-bar-count">{shown.length} {shown.length === 1 ? 'article' : 'articles'}</span>
      </div>
      {first && <Card p={first} featured />}
      <div className="post-grid">
        {rest.map((p) => <Card key={p.slug} p={p} />)}
      </div>
    </>
  );
}
