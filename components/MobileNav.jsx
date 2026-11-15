'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';
import { PRODUCTS } from '../lib/products';
import { SERVICES } from '../lib/services';


const I = {
  home: <path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />,
  about: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" /></>,
  services: <><rect x="3" y="4" width="7" height="7" rx="2" /><rect x="14" y="4" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
  industries: <path d="M3 21V11l5 3V11l5 3V7l8 4v10H3z" />,
  products: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M4 7.5l8 4.5 8-4.5M12 12v9" /></>,
  team: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15 14.6c3 0 6 1.6 6 5.4" /></>,
  blog: <><path d="M5 4h10l4 4v12H5z" /><path d="M8 11h8M8 15h8M8 7h5" /></>,
  contact: <><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></>,
};
const Icon = ({ name }) => <svg viewBox="0 0 24 24" aria-hidden="true">{I[name]}</svg>;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);

  const close = () => { setOpen(false); setGroup(null); };
  const toggle = (g) => setGroup((cur) => (cur === g ? null : g));

  const links = [
    { name: 'Home', icon: 'home', href: '/' },
    { name: 'Who we are', icon: 'about', href: '/#about' },
    { name: 'Services', icon: 'services', group: 'services', items: SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}/` })) },
    { name: 'Products', icon: 'products', group: 'products', items: [{ name: 'All products', href: '/products/' }, ...PRODUCTS.map((p) => ({ name: p.name, href: `/products/${p.slug}/` }))] },
    { name: 'Team', icon: 'team', href: '/team/' },
    { name: 'Blog', icon: 'blog', href: '/blog/' },
    { name: 'Contact', icon: 'contact', href: '/#contact' },
  ];

  const drawer = (
    <div className={`mnav${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <div className="mnav-back" onClick={close} />
      <aside className="mnav-panel" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="mnav-top">
          <a className="logo" href="/" onClick={close} aria-label="e-Xpert home"><Logo /></a>
          <button type="button" className="mnav-x" onClick={close} aria-label="Close menu">×</button>
        </div>
        <nav className="mnav-list">
          {links.map((l, i) => (
            <div key={l.name} className={`mnav-item${l.group && group === l.group ? ' is-expanded' : ''}`} style={{ '--i': i }}>
              {l.group ? (
                <>
                  <button type="button" className="mnav-link" onClick={() => toggle(l.group)} aria-expanded={group === l.group}>
                    <span className="mnav-ic"><Icon name={l.icon} /></span>
                    <span className="mnav-name">{l.name}</span>
                    <svg className="mnav-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10l4 4 4-4" /></svg>
                  </button>
                  <div className="mnav-sub">
                    <ul>
                      {l.items.map((s) => <li key={s.name}><a href={s.href} onClick={close}>{s.name}</a></li>)}
                    </ul>
                  </div>
                </>
              ) : (
                <a className="mnav-link" href={l.href} onClick={close}>
                  <span className="mnav-ic"><Icon name={l.icon} /></span>
                  <span className="mnav-name">{l.name}</span>
                </a>
              )}
            </div>
          ))}
        </nav>
        <div className="mnav-foot" style={{ '--i': links.length }}>
          <p className="mnav-k">Talk to us</p>
          <p className="mnav-v">care@e-xpertconsultants.com</p>
          <p className="mnav-v">+880 1332-092905</p>
          <a className="btn btn-primary" href="/#contact" onClick={close}>Get in touch</a>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <button type="button" className={`menu-btn${open ? ' is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
        <span /><span /><span />
      </button>
      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
