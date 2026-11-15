'use client';

import { useEffect, useState } from 'react';
import Modal from './Modal';

const FIELDS = [
  { cls: 'f-travel', name: "TravelTech", desc: "Booking engines, channel managers, reservations and supplier payouts.", steps: ["Search", "Book", "Pay", "Check-in"],
    icon: (<svg viewBox="0 0 48 48"><path className="trail" d="M4 42 C 10 38, 14 36, 18 33" /><g className="plane"><path d="M8 24 40 9 31 39 24 29zM24 29 40 9" /></g></svg>) },
  { cls: 'f-fin', name: "FinTech", desc: "Payment flows, KYC onboarding, reconciliation and settlement.", steps: ["KYC", "Pay", "Hold", "Settle"],
    icon: (<svg viewBox="0 0 48 48"><path d="M8 40h32" /><rect className="b1" x={11} y={26} width={6} height={14} rx="1.5" /><rect className="b2" x={21} y={18} width={6} height={22} rx="1.5" /><rect className="b3" x={31} y={10} width={6} height={30} rx="1.5" /></svg>) },
  { cls: 'f-agro', name: "Agro", desc: "Farm-to-market supply chains, procurement, storage and traceability.", steps: ["Farm", "Collect", "Store", "Market"],
    icon: (<svg viewBox="0 0 48 48"><path d="M10 40h28" /><g className="sprout"><path d="M24 40V22" /><path d="M24 28c-8 0-12-5-12-12 8 0 12 5 12 12z" /><path d="M24 24c0-7 4-11 12-11 0 7-4 11-12 11z" /></g></svg>) },
  { cls: 'f-ecom', name: "E-commerce", desc: "Orders, inventory, courier booking and customer service in one flow.", steps: ["Order", "Pack", "Ship", "Deliver"],
    icon: (<svg viewBox="0 0 48 48"><g className="cart"><path d="M6 10h5l5 20h20l4-14H14" /><circle className="w" cx={19} cy={37} r={3} /><circle className="w" cx={33} cy={37} r={3} /></g><rect className="box" x={21} y={12} width={8} height={8} rx="1.5" /></svg>) },
  { cls: 'f-med', name: "Medical", desc: "Doctor chambers and clinics: appointments, prescriptions, patient records and billing, powered by DoctorsBook.", steps: ["Book", "Consult", "Bill", "Review"],
    icon: (<svg viewBox="0 0 48 48"><path className="pulse" pathLength={100} d="M4 26h9l4-10 6 20 5-14 3 4h13" /></svg>) },
  { cls: 'f-estate', name: "Real Estate", desc: "Lead handling, site visits, bookings and instalment collection.", steps: ["Lead", "Visit", "Book", "Collect"],
    icon: (<svg viewBox="0 0 48 48"><path d="M6 40h36M10 40V20l14-11 14 11v20" /><rect className="win w1" x={16} y={22} width={6} height={6} rx={1} /><rect className="win w2" x={26} y={22} width={6} height={6} rx={1} /><path d="M21 40v-7h6v7" /></svg>) },
  { cls: 'f-bpc', name: "BPC", desc: "Beauty and personal care: catalogues, distributors, retail orders and loyalty.", steps: ["Stock", "Dealer", "Retail", "Loyalty"],
    icon: (<svg viewBox="0 0 48 48"><path d="M17 20h14v18a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z" /><path d="M20 20v-5h8v5M22 15v-4h4v4" /><path className="spark s1" d="M37 8v6M34 11h6" /><path className="spark s2" d="M10 14v4M8 16h4" /></svg>) },
  { cls: 'f-rmg', name: "RMG", desc: "Buyer orders, production planning, compliance and shipment tracking.", steps: ["Order", "Plan", "Produce", "Ship"],
    icon: (<svg viewBox="0 0 48 48"><g className="shirt"><path d="M18 8l-10 6 4 8 4-2v20h16V20l4 2 4-8-10-6c-1 3-3 5-6 5s-5-2-6-5z" /><path className="stitch" d="M20 26h8" /></g></svg>) },
];

function Process({ steps }) {
  const [step, setStep] = useState(-1);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStep(steps.length - 1); return; }
    let s = -1;
    const id = setInterval(() => { s = s >= steps.length + 1 ? -1 : s + 1; setStep(Math.min(s, steps.length - 1)); }, 900);
    return () => clearInterval(id);
  }, [steps.length]);
  const p = step < 0 ? 0 : step / (steps.length - 1);
  return (
    <div className="proc">
      <span className="proc-k">Process we automate</span>
      <div className="proc-row" style={{ '--p': p }}>
        <div className="pt"><span className="pf" /><span className="pdot" /></div>
        <ol>{steps.map((s, k) => <li key={s} className={(k <= step ? 'on' : '') + (k === step ? ' hit' : '')}>{s}</li>)}</ol>
      </div>
    </div>
  );
}

export default function Fields() {
  const [open, setOpen] = useState(null);
  const f = open === null ? null : FIELDS[open];
  return (
    <section className="block" id="expertise">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="eyebrow">Industries</p>
            <h2>Industries where we deliver.</h2>
          </div>
          <p className="lede">Each sector has its own workflows, regulations and peak seasons. Tap an industry to see the process we automate there.</p>
        </div>
        <div className="fields">
          {FIELDS.map((x, i) => (
            <button type="button" key={x.cls} className={`field ${x.cls}`} onClick={() => setOpen(i)} aria-haspopup="dialog">
              <span className="ico">{x.icon}</span>
              <span className="field-name">{x.name}</span>
              <span className="field-more">View process</span>
            </button>
          ))}
        </div>
      </div>
      <Modal open={!!f} onClose={() => setOpen(null)} label={f ? `${f.name} automation process` : ''}>
        {f && (
          <div className={`field-pop ${f.cls}`}>
            <span className="ico ico-lg">{f.icon}</span>
            <h3>{f.name}</h3>
            <p>{f.desc}</p>
            <Process steps={f.steps} key={f.cls} />
            <a className="btn btn-primary" href="/#contact" onClick={() => setOpen(null)}>Talk to us about {f.name}</a>
          </div>
        )}
      </Modal>
    </section>
  );
}
