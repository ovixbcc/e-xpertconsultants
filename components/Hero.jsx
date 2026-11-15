'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    

(function(){
  var $=function(id){return document.getElementById(id)};
  var arc=$('esc-arc');if(!arc||!arc.getTotalLength)return;
  var AL=arc.getTotalLength();
  var P={buyer:$('p-buyer'),escrow:$('p-escrow'),seller:$('p-seller')};
  var T={doc:$('t-doc'),parcel:$('t-parcel'),coin:$('t-coin')};
  var POS={buyer:[102,82],vault:[260,105],seller:[418,82]};
  // each step: when, sys, msg, pill, chips [buyer,escrow,seller], on (active parties), anim, held, tone
  function runs(){
    var common=[
      {when:'Day 1 · 10:02',sys:'TrustBee',msg:'Seller sends a conditional payment request to the buyer',pill:'Request sent',chips:['Request received','Empty','Request sent'],on:['seller','buyer'],anim:'request'},
      {when:'Day 1 · 10:05',sys:'Verification',msg:'Buyer and seller verified with NID and fraud checks',pill:'Verified',chips:['Verified','Empty','Verified'],on:['buyer','seller'],anim:'verify'},
      {when:'Day 1 · 10:09',sys:'Payment gateway',msg:'Buyer pays AMT through the licensed payment gateway',pill:'Payment received',chips:['Paid','Receiving','Verified'],on:['buyer','escrow'],anim:'pay'},
      {when:'Day 1 · 10:09',sys:'Escrow',msg:'Funds locked in escrow. Seller is notified to start work',pill:'Funds held',chips:['Paid','Locked','Start work'],on:['escrow','seller'],anim:'lock'},
      {when:'Day 4 · 16:40',sys:'Seller app',msg:'Seller delivers and uploads proof of delivery',pill:'Delivered',chips:['Reviewing','Locked','Delivered'],on:['seller','buyer'],anim:'deliver'}
    ];
    var tail=[
      {when:'Day 6 · 11:30',sys:'Payout service',msg:'Funds released to the seller’s bank or mobile wallet',pill:'Released',chips:['Confirmed','Releasing','Payout'],on:['escrow','seller'],anim:'release'},
      {when:'Day 6 · 11:31',sys:'Notifications',msg:'Receipts sent to both parties by SMS and email',pill:'Completed',chips:['Completed','Closed','Paid out'],on:[],anim:'done'}
    ];
    var smooth=common.concat([
      {when:'Day 5 · 09:15',sys:'Buyer app',msg:'Buyer checks the work and confirms delivery',pill:'Confirmed',chips:['Confirmed','Locked','Delivered'],on:['buyer'],anim:'confirm'}
    ],tail);
    var dispute=common.concat([
      {when:'Day 4 · 19:05',sys:'Dispute desk',msg:'Buyer raises a dispute: two items don’t match the order',pill:'Disputed',chips:['Disputed','On hold','Notified'],on:['buyer'],anim:'dispute',tone:'warn'},
      {when:'Day 5 · 12:20',sys:'Mediation',msg:'Neutral mediator reviews evidence. Funds stay locked',pill:'Under review',chips:['Evidence sent','Under review','Evidence sent'],on:['escrow'],anim:'review',tone:'warn'},
      {when:'Day 6 · 15:45',sys:'Seller app',msg:'Seller replaces the items as agreed in mediation',pill:'Re-delivered',chips:['Reviewing','Locked','Re-delivered'],on:['seller','buyer'],anim:'redeliver'},
      {when:'Day 7 · 10:10',sys:'Buyer app',msg:'Buyer confirms delivery and closes the dispute',pill:'Confirmed',chips:['Confirmed','Locked','Delivered'],on:['buyer'],anim:'confirm'}
    ],tail.map(function(s){var c=Object.assign({},s);c.when=c.when.replace('Day 6','Day 7');return c}));
    return [
      {id:'#ESC-30517',amt:'৳25,000',deal:'Website design project',steps:smooth},
      {id:'#ESC-30518',amt:'৳48,500',deal:'Wholesale garments order',steps:dispute}
    ];
  }
  var RUNS=runs();
  function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  function put(el,p,show){el.setAttribute('transform','translate('+p[0].toFixed(1)+' '+p[1].toFixed(1)+')');el.classList.toggle('show',!!show)}
  function onArc(t){var q=arc.getPointAtLength(AL*t);return [q.x,q.y]}
  // derived per-step state
  function stateFor(run,i){
    var s=run.steps[i],a=s.anim,idx=run.steps.findIndex(function(x){return x.anim==='pay'});
    return {
      verified:i>=1,
      held:i>=idx&&a!=='release'&&a!=='done'?(a==='pay'?'Receiving '+run.amt:run.amt+' held'):(a==='release'?'Releasing '+run.amt:(a==='done'?'৳0 held':'৳0 held')),
      locked:i>idx&&a!=='release'&&a!=='done',
      buyerWarn:a==='dispute'||a==='review',
      vaultWarn:a==='review'||a==='dispute',
      done:a==='done'
    };
  }
  var log=$('flow-log'),ev=document.querySelector('.flow-event'),pill=$('flow-pill');
  function enter(run,i,withLog){
    var s=run.steps[i],st=stateFor(run,i),n=run.steps.length;
    $('esc-id').textContent=run.id;$('esc-amt').textContent=run.amt;$('esc-deal').textContent=run.deal;
    $('flow-sys').textContent=s.sys;$('flow-msg').textContent=s.msg.replace('AMT',run.amt);$('flow-status').textContent=s.pill;
    $('c-buyer').textContent=s.chips[0];$('c-escrow').textContent=s.chips[1];$('c-seller').textContent=s.chips[2];
    $('esc-held').textContent=st.held;
    $('flow-step').textContent='Step '+(i+1)+' of '+n;$('flow-bar').style.width=((i+1)/n*100)+'%';
    $('esc-safe').textContent=st.done?'Paid out':'Yes';
    ['buyer','escrow','seller'].forEach(function(k){
      var el=P[k];el.classList.toggle('on',s.on.indexOf(k)>-1&&!st.done);
      el.classList.toggle('done',st.done);
    });
    P.buyer.classList.toggle('ok',st.verified&&s.anim!=='dispute');P.seller.classList.toggle('ok',st.verified);
    P.buyer.classList.toggle('warn',st.buyerWarn&&s.anim==='dispute');
    P.escrow.classList.toggle('locked',st.locked);P.escrow.classList.toggle('warn',s.anim==='review');
    pill.classList.toggle('ok',st.done);pill.classList.toggle('warn',s.tone==='warn');
    ev.classList.toggle('warn',s.tone==='warn');
    ev.classList.remove('flash');void ev.offsetWidth;ev.classList.add('flash');
    if(withLog){
      var li=document.createElement('li');if(s.tone==='warn')li.className='w';
      li.innerHTML='<b></b><span></span>';li.firstChild.textContent=s.when;li.lastChild.textContent=s.sys+' · '+s.msg.replace('AMT',run.amt);
      log.insertBefore(li,log.firstChild);while(log.children.length>3)log.removeChild(log.lastChild);
    }
  }
  function tokens(run,i,p){
    var a=run.steps[i].anim,k=ease(Math.min(1,p));
    var payIdx=run.steps.findIndex(function(x){return x.anim==='pay'});
    // doc
    put(T.doc,onArc(k),a==='request'&&p<1);
    // parcel
    var del=a==='deliver'||a==='redeliver';
    put(T.parcel,onArc(del?k:1),del&&p<1.15);
    // coin
    var c,show=true;
    if(i<payIdx)c=POS.buyer;
    else if(a==='pay')c=lerp(POS.buyer,POS.vault,k);
    else if(a==='release')c=lerp(POS.vault,POS.seller,k);
    else if(a==='done')c=POS.seller;
    else c=POS.vault;
    if(i===0)show=p>.6;
    put(T.coin,c,show);
  }
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){var r=RUNS[0],last=r.steps.length-1;enter(r,last,true);tokens(r,last,1);return}
  var MOVE=1300,STEP=2600,GAP=1800;
  var ri=0,si=-1,t0=null;
  function frame(ts){
    if(t0===null)t0=ts;
    var run=RUNS[ri],n=run.steps.length,t=ts-t0,i=Math.floor(t/STEP);
    if(i>=n){if(t>n*STEP+GAP){ri=(ri+1)%RUNS.length;si=-1;t0=ts;log.innerHTML='';}__raf(frame);return}
    if(i!==si){si=i;enter(run,i,true)}
    tokens(run,i,(t-i*STEP)/MOVE);
    __raf(frame);
  }
  enter(RUNS[0],0,false);tokens(RUNS[0],0,0);
  __raf(frame);
})();


    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  return (
    <>
<section className="hero">
  <div className="wrap hero-grid">
    <div>
      <p className="eyebrow">Business &amp; Process Automation</p>
      <h1>Processes that <b>run themselves</b>, so your team can run the business.</h1>
      <p className="lede">e-Xpert redesigns how work moves through your company. We remove manual steps, connect the systems you already use, and automate the routine, so growth doesn't depend on adding headcount.</p>
      <div className="actions">
        <a className="btn btn-primary" href="#services">Explore services</a>
        <a className="btn btn-ghost" href="#about">Our story</a>
      </div>
    </div>
    <div className="flow" id="flow" aria-label="Animated example: an escrow payment moving from request to release">
      <div className="flow-top">
        <div>
          <span className="flow-k">TrustBee escrow · sample payment</span>
          <strong className="flow-id"><span id="esc-id">#ESC-30517</span> · <span id="esc-amt">৳25,000</span></strong>
          <span className="flow-deal" id="esc-deal">Website design project</span>
        </div>
        <span className="pill" id="flow-pill"><i /><span id="flow-status">Request sent</span></span>
      </div>
      <svg className="esc" viewBox="0 0 520 236" role="img" aria-label="Buyer pays into escrow, funds are held until delivery is confirmed, then released to the seller">
        <path className="esc-rail" d="M110 105 H222 M298 105 H410" />
        <path className="esc-rail esc-arc" d="M440 135 C 440 232, 80 232, 80 135" />
        <path id="esc-arc" d="M440 135 C 440 232, 80 232, 80 135" fill="none" stroke="none" />
        <text className="esc-arcl" x={260} y={226}>delivery &amp; requests</text>
        <g className="party" id="p-buyer">
          <text className="pn" x={80} y={30}>Buyer</text>
          <g className="chip"><rect x={34} y={40} width={92} height={20} rx={10} /><text x={80} y={54} id="c-buyer">Waiting</text></g>
          <circle className="pc" cx={80} cy={105} r={30} />
          <g className="pi" transform="translate(68 93)"><circle cx={12} cy={8} r="4.5" /><path d="M3.5 22c0-5 3.8-8 8.5-8s8.5 3 8.5 8" /></g>
          <g className="badge"><circle cx={102} cy={127} r={10} /><path className="bk" d="M97.5 127l3 3 5.5-6" /><text className="bx" x={102} y="131.5">!</text></g>
        </g>
        <g className="party vault" id="p-escrow">
          <text className="pn" x={260} y={30}>TrustBee escrow</text>
          <g className="chip"><rect x={208} y={40} width={104} height={20} rx={10} /><text x={260} y={54} id="c-escrow">Empty</text></g>
          <rect className="vglow" x={210} y={69} width={100} height={72} rx={20} />
          <rect className="vb" x={218} y={77} width={84} height={56} rx={16} />
          <g className="lock" transform="translate(248 88)">
            <path className="shackle" d="M5 12V8a7 7 0 0 1 14 0v4" />
            <rect x={1} y={12} width={22} height={17} rx={4} />
            <circle className="kh" cx={12} cy="20.5" r="2.2" />
          </g>
          <text className="held" x={260} y={160} id="esc-held">৳0 held</text>
        </g>
        <g className="party" id="p-seller">
          <text className="pn" x={440} y={30}>Seller</text>
          <g className="chip"><rect x={394} y={40} width={92} height={20} rx={10} /><text x={440} y={54} id="c-seller">Waiting</text></g>
          <circle className="pc" cx={440} cy={105} r={30} />
          <g className="pi" transform="translate(428 93)"><path d="M3 9l2-6h14l2 6M3 9h18v12H3zM3 9c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3c0 2 1.5 3 3 3s3-1 3-3M10 21v-5h4v5" /></g>
          <g className="badge"><circle cx={462} cy={127} r={10} /><path className="bk" d="M457.5 127l3 3 5.5-6" /><text className="bx" x={462} y="131.5">!</text></g>
        </g>
        <g className="tok doc" id="t-doc"><rect x={-11} y={-14} width={22} height={28} rx={4} /><path d="M-5 -6h10M-5 0h10M-5 6h6" /></g>
        <g className="tok parcel" id="t-parcel"><rect x={-13} y={-12} width={26} height={24} rx={5} /><path d="M-13 -3H13M0 -12v9" /></g>
        <g className="tok coin" id="t-coin"><circle r={14} /><text y={5}>৳</text></g>
      </svg>
      <div className="flow-event" aria-live="polite">
        <span className="sys" id="flow-sys">TrustBee</span>
        <span className="msg" id="flow-msg">Seller sends a conditional payment request</span>
      </div>
      <ol className="flow-log" id="flow-log" />
      <div className="flow-foot">
        <div className="bar"><span id="flow-bar" /></div>
        <div className="flow-meta"><span id="flow-step">Step 1 of 8</span><span>Funds protected: <b id="esc-safe">Yes</b></span></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
