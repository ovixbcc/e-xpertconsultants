export default function ProductLogo({ product, big = false }) {
  if (product.logo) {
    return <img className={`plogo${big ? ' plogo-big' : ''}`} src={product.logo.src} alt={product.name} width={product.logo.width} height={product.logo.height} />;
  }
  return (
    <span className={`plogo plogo-db${big ? ' plogo-big' : ''}`} aria-label={product.name}>
      <div className="db-logo"><span className="db-mark"><svg viewBox="0 0 40 40" aria-hidden="true"><rect width={40} height={40} rx={11} fill="#1584F7" /><path d="M11 12.5c3-1.6 6.2-1.6 9 .3 2.8-1.9 6-1.9 9-.3v15c-3-1.6-6.2-1.6-9 .3-2.8-1.9-6-1.9-9-.3z" fill="none" stroke="#fff" strokeWidth={2} strokeLinejoin="round" /><path d="M20 12.8v15.3" stroke="#fff" strokeWidth={2} /><path d="M15.5 17v5M13 19.5h5" stroke="#fff" strokeWidth={2} strokeLinecap="round" /></svg></span><span className="db-word">Doctors<b>Book</b></span></div>
    </span>
  );
}
