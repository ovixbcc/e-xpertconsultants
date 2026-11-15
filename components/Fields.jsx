'use client';

import { useEffect } from 'react';

export default function Fields() {
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    
(function(){
  var cards=[].slice.call(document.querySelectorAll('.field'));
  var items=cards.map(function(c,i){return {c:c,lis:c.querySelectorAll('.proc li'),row:c.querySelector('.proc-row'),off:i*650,vis:false,last:-1}});
  function set(it,p){
    it.row.style.setProperty('--p',p.toFixed(3));
    var n=it.lis.length,reached=Math.floor(p*(n-1)+1e-6);
    it.lis.forEach(function(li,k){li.classList.toggle('on',k<=reached);li.classList.toggle('hit',k===reached&&p<1)});
  }
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){items.forEach(function(it){set(it,1)});return}
  items.forEach(function(it){set(it,0)});
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){items.forEach(function(it){if(it.c===e.target)it.vis=e.isIntersecting})})},{threshold:.2});cards.forEach(function(c){io.observe(c)})}
  else items.forEach(function(it){it.vis=true});
  var CYC=6200,RUN=4200;
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function f(ts){
    items.forEach(function(it){if(!it.vis)return;var t=(ts+CYC-it.off)%CYC;set(it,t<RUN?ease(t/RUN):1)});
    __raf(f);
  }
  __raf(f);
})();

    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  return (
    <>
<section className="block" id="expertise">
  <div className="wrap">
    <div className="head">
      <div>
        <p className="eyebrow">Major fields</p>
        <h2>Industries where we deliver.</h2>
      </div>
      <p className="lede">Each sector has its own workflows, regulations and peak seasons. We bring ready process templates from every one of them, so projects start further ahead.</p>
    </div>
    <div className="fields">
      <article className="field f-travel" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path className="trail" d="M4 42 C 10 38, 14 36, 18 33" /><g className="plane"><path d="M8 24 40 9 31 39 24 29zM24 29 40 9" /></g></svg></span>
        <h3>TravelTech</h3>
        <p>Booking engines, channel managers, reservations and supplier payouts.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Search</li><li>Book</li><li>Pay</li><li>Check-in</li></ol></div></div>
      </article>
      <article className="field f-fin" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path d="M8 40h32" /><rect className="b1" x={11} y={26} width={6} height={14} rx="1.5" /><rect className="b2" x={21} y={18} width={6} height={22} rx="1.5" /><rect className="b3" x={31} y={10} width={6} height={30} rx="1.5" /></svg></span>
        <h3>FinTech</h3>
        <p>Payment flows, KYC onboarding, reconciliation and settlement.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>KYC</li><li>Pay</li><li>Hold</li><li>Settle</li></ol></div></div>
      </article>
      <article className="field f-agro" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path d="M10 40h28" /><g className="sprout"><path d="M24 40V22" /><path d="M24 28c-8 0-12-5-12-12 8 0 12 5 12 12z" /><path d="M24 24c0-7 4-11 12-11 0 7-4 11-12 11z" /></g></svg></span>
        <h3>Agro</h3>
        <p>Farm-to-market supply chains, procurement, storage and traceability.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Farm</li><li>Collect</li><li>Store</li><li>Market</li></ol></div></div>
      </article>
      <article className="field f-ecom" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><g className="cart"><path d="M6 10h5l5 20h20l4-14H14" /><circle className="w" cx={19} cy={37} r={3} /><circle className="w" cx={33} cy={37} r={3} /></g><rect className="box" x={21} y={12} width={8} height={8} rx="1.5" /></svg></span>
        <h3>E-commerce</h3>
        <p>Orders, inventory, courier booking and customer service in one flow.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Order</li><li>Pack</li><li>Ship</li><li>Deliver</li></ol></div></div>
      </article>
      <article className="field f-med" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path className="pulse" pathLength={100} d="M4 26h9l4-10 6 20 5-14 3 4h13" /></svg></span>
        <h3>Medical</h3>
        <p>Doctor chambers and clinics: appointments, prescriptions, patient records and billing, powered by DoctorsBook.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Book</li><li>Consult</li><li>Bill</li><li>Review</li></ol></div></div>
      </article>
      <article className="field f-estate" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path d="M6 40h36M10 40V20l14-11 14 11v20" /><rect className="win w1" x={16} y={22} width={6} height={6} rx={1} /><rect className="win w2" x={26} y={22} width={6} height={6} rx={1} /><path d="M21 40v-7h6v7" /></svg></span>
        <h3>Real Estate</h3>
        <p>Lead handling, site visits, bookings and instalment collection.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Lead</li><li>Visit</li><li>Book</li><li>Collect</li></ol></div></div>
      </article>
      <article className="field f-bpc" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><path d="M17 20h14v18a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z" /><path d="M20 20v-5h8v5M22 15v-4h4v4" /><path className="spark s1" d="M37 8v6M34 11h6" /><path className="spark s2" d="M10 14v4M8 16h4" /></svg></span>
        <h3>BPC</h3>
        <p>Beauty and personal care: catalogues, distributors, retail orders and loyalty.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Stock</li><li>Dealer</li><li>Retail</li><li>Loyalty</li></ol></div></div>
      </article>
      <article className="field f-rmg" style={{'--c': 'var(--blue)'}}>
        <span className="ico"><svg viewBox="0 0 48 48"><g className="shirt"><path d="M18 8l-10 6 4 8 4-2v20h16V20l4 2 4-8-10-6c-1 3-3 5-6 5s-5-2-6-5z" /><path className="stitch" d="M20 26h8" /></g></svg></span>
        <h3>RMG</h3>
        <p>Buyer orders, production planning, compliance and shipment tracking.</p>
        <div className="proc"><span className="proc-k">Process we automate</span><div className="proc-row"><div className="pt"><span className="pf" /><span className="pdot" /></div><ol><li>Order</li><li>Plan</li><li>Produce</li><li>Ship</li></ol></div></div>
      </article>
    </div>
  </div>
</section>
    </>
  );
}
