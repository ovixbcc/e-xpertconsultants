'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';
import ProductLogo from './ProductLogo';

export default function ProductPopup({ product: p }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 350);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={() => setOpen(true)}>Quick view</button>
      <Modal open={open} onClose={() => setOpen(false)} label={`${p.name} overview`} wide>
        <div className={`prod-pop pc-${p.slug}`}>
          <div className="prod-pop-top"><ProductLogo product={p} big /></div>
          <span className="p-tag">{p.tag}</span>
          <h3>{p.tagline}</h3>
          <p>{p.short}</p>
          <ul className="p-feat">{p.features.slice(0, 4).map(([h]) => <li key={h}>{h}</li>)}</ul>
          <div className="prod-pop-actions">
            {p.url
              ? <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener">{p.cta} ↗</a>
              : <a className="btn btn-primary" href={p.ctaHref}>{p.cta}</a>}
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>See full details</button>
          </div>
        </div>
      </Modal>
    </>
  );
}
