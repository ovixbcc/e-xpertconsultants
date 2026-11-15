'use client';

import { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    const g0=document.getElementById('g-grid'); if(g0) g0.innerHTML=''; const p0=document.getElementById('g-phases'); if(p0) p0.innerHTML='';
(function(){
  var svg=document.querySelector('.g-svg');if(!svg)return;
  var NS='http://www.w3.org/2000/svg',X0=60,X1=960,Y0=270,Y1=40,VMAX=120;
  var v=[8,9,11,14,18,23,30,38,48,60,74,90,110];
  function x(m){return X0+(X1-X0)*m/12}function y(val){return Y0-(Y0-Y1)*val/VMAX}
  function $(id){return document.getElementById(id)}
  // grid + axis
  var grid=$('g-grid');
  [0,30,60,90,120].forEach(function(g){var l=document.createElementNS(NS,'line');l.setAttribute('class','g-gl');l.setAttribute('x1',X0);l.setAttribute('x2',X1);l.setAttribute('y1',y(g));l.setAttribute('y2',y(g));grid.appendChild(l)});
  for(var m=0;m<=12;m+=2){var t=document.createElementNS(NS,'text');t.setAttribute('class','g-ax');t.setAttribute('x',x(m));t.setAttribute('y',Y0+18);t.textContent='M'+m;grid.appendChild(t)}
  // smooth curve (Catmull-Rom to Bezier)
  var P=v.map(function(val,i){return [x(i),y(val)]});
  var d='M'+P[0][0]+' '+P[0][1];
  for(var i=0;i<P.length-1;i++){var p0=P[i-1]||P[i],p1=P[i],p2=P[i+1],p3=P[i+2]||p2;
    d+=' C'+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+' '+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+' '+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+' '+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+' '+p2[0]+' '+p2[1]}
  $('g-line').setAttribute('d',d);
  $('g-area').setAttribute('d',d+' L'+X1+' '+Y0+' L'+X0+' '+Y0+' Z');
  var line=$('g-line'),L=line.getTotalLength();
  // phases on the curve
  var phases=[[1,'Research & analysis',150,'#0B4A93'],[3,'Product development',212,'#0E5DB8'],[5,'Branding & PR',168,'#3B6FE0'],[7,'Marketing & sales',138,'#1584F7'],[10,'Automation',72,'#1E7FD9']];
  var pg=$('g-phases');
  var ph=phases.map(function(p){
    var g=document.createElementNS(NS,'g');g.setAttribute('class','ph');g.style.setProperty('--pc',p[3]);
    var px=x(p[0]),py=y(v[p[0]]),ty=p[2];
    g.innerHTML='<line x1="'+px+'" x2="'+px+'" y1="'+(ty+8)+'" y2="'+(py-9)+'"/><circle cx="'+px+'" cy="'+py+'" r="7"/><text x="'+px+'" y="'+ty+'">'+p[1]+'</text>';
    pg.appendChild(g);return {m:p[0],el:g};
  });
  var clip=$('g-cliprect'),dot=$('g-dot'),pm=$('g-pmfill'),mo=$('g-month');
  function render(f){ // f: 0..1 progress in months
    var mx=X0+(X1-X0)*f;
    clip.setAttribute('width',mx);
    // find point on line at x=mx
    var lo=0,hi=L;for(var k=0;k<22;k++){var mid=(lo+hi)/2;if(line.getPointAtLength(mid).x<mx)lo=mid;else hi=mid}
    var q=line.getPointAtLength(lo);dot.setAttribute('cx',q.x.toFixed(1));dot.setAttribute('cy',q.y.toFixed(1));
    pm.setAttribute('width',Math.max(22,(X1-X0)*f));
    var month=Math.round(f*12);mo.textContent=month;
    ph.forEach(function(p){p.el.classList.toggle('on',f*12>=p.m-0.05)});
  }
  render(1);
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var DRAW=6000,HOLD=2500,running=false,t0=null;
  function ease(t){return 1-Math.pow(1-t,2.2)}
  function frame(ts){
    if(t0===null)t0=ts;var t=(ts-t0)%(DRAW+HOLD);
    render(t<DRAW?ease(t/DRAW):1);
    if(running)__raf(frame);
  }
  var box=$('growth');
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(es){es.forEach(function(e){
      if(e.isIntersecting&&!running){running=true;t0=null;__raf(frame)}
      else if(!e.isIntersecting){running=false}
    })},{threshold:.35}).observe(box);
  }else{running=true;__raf(frame)}
})();


    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    
(function(){
  var cards=document.querySelectorAll('.svc');
  if(!('IntersectionObserver' in window)){cards.forEach(function(c){c.classList.add('play')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('play');io.unobserve(e.target)}})},{threshold:.3});
  cards.forEach(function(c){io.observe(c)});
})();


    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  return (
    <>
<section className="block" id="services">
  <div className="wrap">
    <div className="head">
      <div>
        <p className="eyebrow">Services</p>
        <h2>Everything a business needs to grow, under one roof.</h2>
      </div>
      <p className="lede">Six services that work on their own or together. Most clients start with research and grow into a full engagement, with project management running through every stage.</p>
    </div>
    <figure className="growth" id="growth">
      <div className="growth-top">
        <div><span className="flow-k">Growth over time</span><strong className="g-title">How our services compound</strong></div>
        <div className="g-read"><span className="flow-k">Month</span><strong id="g-month">12</strong></div>
      </div>
      <div className="growth-scroll">
        <svg className="g-svg" viewBox="0 0 1000 340" role="img" aria-label="Illustrative growth curve rising over 12 months as research, product development, branding, marketing and automation are added, with project management throughout">
          <defs>
            <linearGradient id="g-fill" x1={0} y1={0} x2={1} y2={0}>
              <stop offset={0} stopColor="#0B4A93" stopOpacity=".18" />
              <stop offset=".3" stopColor="#0E5DB8" stopOpacity=".18" />
              <stop offset=".5" stopColor="#3B6FE0" stopOpacity=".18" />
              <stop offset=".7" stopColor="#1584F7" stopOpacity=".18" />
              <stop offset={1} stopColor="#2E9BFF" stopOpacity=".2" />
            </linearGradient>
            <linearGradient id="g-stroke" gradientUnits="userSpaceOnUse" x1={60} y1={0} x2={960} y2={0}>
              <stop offset={0} stopColor="#0B4A93" />
              <stop offset=".3" stopColor="#0E5DB8" />
              <stop offset=".5" stopColor="#3B6FE0" />
              <stop offset=".7" stopColor="#1584F7" />
              <stop offset={1} stopColor="#2E9BFF" />
            </linearGradient>
            <clipPath id="g-clip"><rect id="g-cliprect" x={0} y={0} width={1000} height={340} /></clipPath>
          </defs>
          <g id="g-grid" />
          <g clipPath="url(#g-clip)">
            <path id="g-area" className="g-area" />
            <path id="g-line" className="g-line" />
          </g>
          <g id="g-phases" />
          <circle id="g-dot" className="g-dot" r={8} />
          <rect className="g-pm" x={60} y={292} width={900} height={22} rx={11} />
          <rect id="g-pmfill" className="g-pmfill" x={60} y={292} width={900} height={22} rx={11} />
          <text className="g-pmt" x={72} y={307}>Project management, every month</text>
        </svg>
      </div>
      <figcaption>Illustrative example of a typical engagement, not client data.</figcaption>
    </figure>
    <div className="svc-grid">
      <article className="svc" style={{'--c': 'var(--c1)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample market share donut chart">
            <text className="vt" x={0} y={12}>Market sizing</text>
            <circle className="trk" cx={62} cy={78} r={44} strokeWidth={18} />
            <g transform="rotate(-90 62 78)">
              <circle className="seg" cx={62} cy={78} r={44} pathLength={100} style={{'--v': '42', 'stroke': '#1584F7', 'strokeDashoffset': '0', '--dl': '0s'}} />
              <circle className="seg" cx={62} cy={78} r={44} pathLength={100} style={{'--v': '28', 'stroke': '#5AA8FA', 'strokeDashoffset': '-42', '--dl': '.25s'}} />
              <circle className="seg" cx={62} cy={78} r={44} pathLength={100} style={{'--v': '18', 'stroke': '#9CC9FB', 'strokeDashoffset': '-70', '--dl': '.5s'}} />
              <circle className="seg" cx={62} cy={78} r={44} pathLength={100} style={{'--v': '12', 'stroke': '#CFE4FD', 'strokeDashoffset': '-88', '--dl': '.75s'}} />
            </g>
            <text className="vbig" x={62} y={83}>42%</text>
            <g className="lg"><rect x={140} y={40} width={10} height={10} rx={3} fill="#1584F7" /><text x={158} y={49}>Target segment</text></g>
            <g className="lg"><rect x={140} y={62} width={10} height={10} rx={3} fill="#5AA8FA" /><text x={158} y={71}>Competitor A</text></g>
            <g className="lg"><rect x={140} y={84} width={10} height={10} rx={3} fill="#9CC9FB" /><text x={158} y={93}>Competitor B</text></g>
            <g className="lg"><rect x={140} y={106} width={10} height={10} rx={3} fill="#CFE4FD" /><text x={158} y={115}>Others</text></g>
          </svg>
        </div>
        <h3>Market Research and Business Analysis</h3>
        <p>Market sizing, competitor and customer research, and a clear read on your business model, costs and processes before any big decision.</p>
        <div className="tags"><span className="tag">Market sizing</span><span className="tag">Competitor analysis</span><span className="tag">Feasibility</span></div>
      </article>
      <article className="svc" style={{'--c': 'var(--c2)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample sales funnel">
            <text className="vt" x={0} y={12}>Sales funnel</text>
            <text className="vl" x={0} y={39}>Reach</text><rect className="sbar" x={80} y={26} width={196} height={18} rx={9} fill="#0E5DB8" style={{'--dl': '0s'}} />
            <text className="vl" x={0} y={67}>Leads</text><rect className="sbar" x={80} y={54} width={146} height={18} rx={9} fill="#3F7FCB" style={{'--dl': '.2s'}} />
            <text className="vl" x={0} y={95}>Prospects</text><rect className="sbar" x={80} y={82} width={98} height={18} rx={9} fill="#7AA6DD" style={{'--dl': '.4s'}} />
            <text className="vl" x={0} y={123}>Customers</text><rect className="sbar" x={80} y={110} width={56} height={18} rx={9} fill="#B3CDEE" style={{'--dl': '.6s'}} />
            <path className="up" d="M226 122 L262 86 M248 86 h14 v14" style={{'--dl': '1s'}} />
          </svg>
        </div>
        <h3>Marketing, Sales and Growth</h3>
        <p>Go-to-market plans, digital campaigns, sales pipelines and CRM, measured against targets every month.</p>
        <div className="tags"><span className="tag">Go-to-market</span><span className="tag">Digital marketing</span><span className="tag">Sales pipeline</span></div>
      </article>
      <article className="svc" style={{'--c': 'var(--c3)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample product sprint progress">
            <text className="vt" x={0} y={12}>Sprint progress</text>
            <text className="vl" x={0} y={41}>Design</text><rect className="trk2" x={70} y={31} width={176} height={12} rx={6} /><rect className="sbar" x={70} y={31} width={176} height={12} rx={6} fill="#3B6FE0" style={{'--dl': '0s'}} /><circle className="tick" cx={264} cy={37} r={8} style={{'--dl': '.9s'}} />
            <text className="vl" x={0} y={69}>Build</text><rect className="trk2" x={70} y={59} width={176} height={12} rx={6} /><rect className="sbar" x={70} y={59} width={176} height={12} rx={6} fill="#628BE6" style={{'--dl': '.6s'}} /><circle className="tick" cx={264} cy={65} r={8} style={{'--dl': '1.5s'}} />
            <text className="vl" x={0} y={97}>Test</text><rect className="trk2" x={70} y={87} width={176} height={12} rx={6} /><rect className="sbar" x={70} y={87} width={176} height={12} rx={6} fill="#90ADEE" style={{'--dl': '1.2s'}} /><circle className="tick" cx={264} cy={93} r={8} style={{'--dl': '2.1s'}} />
            <text className="vl" x={0} y={125}>Launch</text><rect className="trk2" x={70} y={115} width={176} height={12} rx={6} /><rect className="sbar" x={70} y={115} width={176} height={12} rx={6} fill="#BFCFF6" style={{'--dl': '1.8s'}} /><circle className="tick" cx={264} cy={121} r={8} style={{'--dl': '2.7s'}} />
          </svg>
        </div>
        <h3>Technical Product Development</h3>
        <p>Websites, mobile apps, booking engines and internal tools, designed, built and maintained by our product team.</p>
        <div className="tags"><span className="tag">Web &amp; mobile apps</span><span className="tag">Integrations</span><span className="tag">MVPs</span></div>
      </article>
      <article className="svc" style={{'--c': 'var(--c4)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample project timeline">
            <text className="vt" x={0} y={12}>Project timeline</text>
            <g className="wk"><text x={86} y={30}>W1</text><text x={132} y={30}>W2</text><text x={178} y={30}>W3</text><text x={224} y={30}>W4</text><text x={266} y={30}>W5</text>
              <path d="M64 36V134M110 36V134M156 36V134M202 36V134M248 36V134" /></g>
            <text className="vl" x={0} y={54}>Scope</text><rect className="sbar" x={66} y={42} width={70} height={16} rx={8} fill="#0796C9" style={{'--dl': '0s'}} />
            <text className="vl" x={0} y={80}>Build</text><rect className="sbar" x={112} y={68} width={110} height={16} rx={8} fill="#3AABD4" style={{'--dl': '.3s'}} />
            <text className="vl" x={0} y={106}>QA</text><rect className="sbar" x={180} y={94} width={64} height={16} rx={8} fill="#78C6E2" style={{'--dl': '.6s'}} />
            <text className="vl" x={0} y={132}>Go-live</text><rect className="sbar" x={228} y={120} width={44} height={16} rx={8} fill="#B0DEEF" style={{'--dl': '.9s'}} />
            <g className="today"><rect x={63} y={36} width={2} height={100} rx={1} /><circle cx={64} cy={36} r={4} /></g>
          </svg>
        </div>
        <h3>Project Management</h3>
        <p>A dedicated lead who plans, tracks and reports on delivery, keeping scope, budget and timelines under control.</p>
        <div className="tags"><span className="tag">Planning</span><span className="tag">Progress reports</span><span className="tag">Agile delivery</span></div>
      </article>
      <article className="svc" style={{'--c': 'var(--c5)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample brand awareness chart by quarter">
            <text className="vt" x={0} y={12}>Brand awareness</text>
            <path className="base" d="M20 122H270" />
            <rect className="col" x={34} y={92} width={36} height={30} rx={6} fill="#B6C8E2" style={{'--dl': '0s'}} />
            <rect className="col" x={94} y={74} width={36} height={48} rx={6} fill="#7E9CC6" style={{'--dl': '.2s'}} />
            <rect className="col" x={154} y={54} width={36} height={68} rx={6} fill="#4673AD" style={{'--dl': '.4s'}} />
            <rect className="col" x={214} y={30} width={36} height={92} rx={6} fill="#0B4A93" style={{'--dl': '.6s'}} />
            <path className="trend" pathLength={100} d="M52 84 L112 66 L172 46 L232 22" style={{'--dl': '.9s'}} />
            <g className="q"><text x={52} y={137}>Q1</text><text x={112} y={137}>Q2</text><text x={172} y={137}>Q3</text><text x={232} y={137}>Q4</text></g>
          </svg>
        </div>
        <h3>Branding and PR</h3>
        <p>Brand identity, messaging, launch campaigns and media relations that make your business recognised and trusted.</p>
        <div className="tags"><span className="tag">Identity</span><span className="tag">Content</span><span className="tag">Media relations</span></div>
      </article>
      <article className="svc" style={{'--c': 'var(--c6)'}}>
        <div className="svc-viz">
          <svg viewBox="0 0 280 140" role="img" aria-label="Sample automation gauge">
            <text className="vt" x={0} y={12}>Process automation</text>
            <path className="gtrk" d="M18 118 A66 66 0 0 1 150 118" />
            <path className="gval" pathLength={100} d="M18 118 A66 66 0 0 1 150 118" />
            <line className="needle" x1={84} y1={118} x2={84} y2={66} />
            <circle className="hub" cx={84} cy={118} r={6} />
            <text className="vbig" x={84} y={100}>88%</text>
            <text className="vl" x={176} y={58}>Manual work</text>
            <rect className="trk2" x={176} y={64} width={98} height={10} rx={5} /><rect className="shrink" x={176} y={64} width={22} height={10} rx={5} fill="#9AA6B5" />
            <text className="vl" x={176} y={100}>Automated</text>
            <rect className="trk2" x={176} y={106} width={98} height={10} rx={5} /><rect className="sbar" x={176} y={106} width={86} height={10} rx={5} fill="#2E9BFF" style={{'--dl': '.3s'}} />
          </svg>
        </div>
        <h3>Automation and Excellence</h3>
        <p>Workflow automation, ERP and CRM integration, dashboards and continuous improvement, so operations run smoothly at scale.</p>
        <div className="tags"><span className="tag">Workflow automation</span><span className="tag">ERP &amp; CRM</span><span className="tag">Dashboards</span></div>
      </article>
    </div>
    <p className="svc-note">Charts show illustrative examples, not client data.</p>
  </div>
</section>
    </>
  );
}
