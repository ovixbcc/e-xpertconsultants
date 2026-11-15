// One consistent lockup for every product: a square mark of the same size plus the wordmark.
const MARKS = {
  trustbee: <img src="/images/trustbee-mark.png" alt="" width={96} height={96} />,
  chaatro: <img src="/images/chaatro-mark.png" alt="" width={96} height={96} />,
  doctorsbook: <svg viewBox="0 0 40 40" aria-hidden="true" className="plk-svg"><rect width={40} height={40} rx={11} fill="#1584F7" /><path d="M11 12.5c3-1.6 6.2-1.6 9 .3 2.8-1.9 6-1.9 9-.3v15c-3-1.6-6.2-1.6-9 .3-2.8-1.9-6-1.9-9-.3z" fill="none" stroke="#fff" strokeWidth={2} strokeLinejoin="round" /><path d="M20 12.8v15.3" stroke="#fff" strokeWidth={2} /><path d="M15.5 17v5M13 19.5h5" stroke="#fff" strokeWidth={2} strokeLinecap="round" /></svg>,
};

const WORDS = {
  trustbee: <><span style={{ color: '#1190CF' }}>trust</span><span style={{ color: '#6CC6F2' }}>bee</span></>,
  chaatro: <span style={{ color: '#7743D9' }}>Chaatro<span style={{ opacity: 0.6 }}>.com</span></span>,
  doctorsbook: <><span style={{ color: '#16202D' }}>Doctors</span><span style={{ color: '#1584F7', fontWeight: 500 }}>Book</span></>,
};

export default function ProductLogo({ product, big = false }) {
  return (
    <span className={`plk${big ? ' plk-big' : ''}`} role="img" aria-label={product.name}>
      <span className="plk-mark">{MARKS[product.slug]}</span>
      <span className="plk-word" aria-hidden="true">{WORDS[product.slug]}</span>
    </span>
  );
}
