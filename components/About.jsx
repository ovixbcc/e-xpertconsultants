'use client';

import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    const m0=document.getElementById('inf-marks'); if(m0) m0.innerHTML=''; const s0=document.getElementById('inf-sparks'); if(s0) s0.innerHTML='';
(function(){
  var NS='http://www.w3.org/2000/svg',path=document.getElementById('inf-path');
  if(!path||!path.getTotalLength)return;
  var L=path.getTotalLength();
  var runner=document.getElementById('inf-runner'),g=document.getElementById('inf-marks'),sg=document.getElementById('inf-sparks');
  var trails=[['.inf-t1',90],['.inf-glow',90],['.inf-t2',190],['.inf-t3',320]].map(function(t){var e=document.querySelector(t[0]);e.style.strokeDasharray=t[1]+' '+(L*2);return {e:e,len:t[1]}});
  var items=document.querySelectorAll('#stages li');
  items.forEach(function(li){if(!li.querySelector('.prog')){var p=document.createElement('span');p.className='prog';li.appendChild(p)}});
  var icons={
    Analyze:'<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',
    Solve:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
    Automate:'<g class="gear"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></g>',
    Grow:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'
  };
  var pts=[[150,92,'Analyze',36],[150,238,'Solve',306],[410,92,'Automate',36],[410,238,'Grow',306]];
  function near(x,y){var best=0,bd=1e9;for(var s=0;s<=L;s+=1){var q=path.getPointAtLength(s),d=(q.x-x)*(q.x-x)+(q.y-y)*(q.y-y);if(d<bd){bd=d;best=s}}return best}
  var marks=pts.map(function(p){
    var s=near(p[0],p[1]),q=path.getPointAtLength(s),x=q.x.toFixed(1),y=q.y.toFixed(1),m=document.createElementNS(NS,'g');
    m.setAttribute('class','mk');
    m.innerHTML='<circle class="rip" cx="'+x+'" cy="'+y+'" r="26"/><circle class="rip r2" cx="'+x+'" cy="'+y+'" r="26"/>'+
      '<g class="pop"><circle class="disc" cx="'+x+'" cy="'+y+'" r="26"/><g class="ic" transform="translate('+(q.x-12).toFixed(1)+' '+(q.y-12).toFixed(1)+')">'+icons[p[2]]+'</g></g>'+
      '<text class="ml" x="'+x+'" y="'+p[3]+'">'+p[2]+'</text>';
    g.appendChild(m);return {s:s,el:m};
  });
  // spark pool
  var sparks=[];for(var i=0;i<22;i++){var c=document.createElementNS(NS,'circle');c.setAttribute('class','spk');c.setAttribute('r','0');sg.appendChild(c);sparks.push({el:c,life:0})}
  var si=0;
  function emit(x,y,n){for(var k=0;k<n;k++){var s=sparks[si++%sparks.length];var a=Math.random()*Math.PI*2,v=0.6+Math.random()*1.6;s.x=x;s.y=y;s.vx=Math.cos(a)*v;s.vy=Math.sin(a)*v;s.life=1;s.r=1.5+Math.random()*2.5}}
  function stepSparks(dt){sparks.forEach(function(s){if(s.life<=0)return;s.life-=dt/700;s.x+=s.vx*dt/16;s.y+=s.vy*dt/16;s.el.setAttribute('cx',s.x.toFixed(1));s.el.setAttribute('cy',s.y.toFixed(1));s.el.setAttribute('r',Math.max(0,s.r*s.life).toFixed(2));s.el.style.opacity=Math.max(0,s.life)})}
  var active=-1;
  function activate(a,dur){
    if(a===active)return;active=a;
    marks.forEach(function(m,i){m.el.classList.toggle('on',i===a);m.el.classList.remove('hit')});
    void marks[a].el.getBoundingClientRect();marks[a].el.classList.add('hit');
    items.forEach(function(li,i){li.classList.toggle('on',i===a);var p=li.querySelector('.prog');p.style.transition='none';p.style.width='0';
      if(i===a&&dur){void p.offsetWidth;p.style.transition='width '+dur+'ms linear';p.style.width='100%'}});
    var q=path.getPointAtLength(marks[a].s);emit(q.x,q.y,14);
  }
  function place(pos){
    var q=path.getPointAtLength(pos);runner.setAttribute('transform','translate('+q.x.toFixed(1)+' '+q.y.toFixed(1)+')');
    trails.forEach(function(t){t.e.style.strokeDashoffset=(t.len-pos).toFixed(1);});
    return q;
  }
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){place(marks[0].s+40);activate(0,0);return}
  // move with a soft pause at each stage
  var SPEED=L/11000,PAUSE=900;
  var seq=marks.map(function(m,i){var next=i<3?marks[i+1].s:marks[0].s+L;return {from:m.s,to:next,i:i}});
  var cycle=seq.reduce(function(a,s){return a+PAUSE+(s.to-s.from)/SPEED},0);
  var t0=null,last=null,frameN=0;
  function ease(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
  function frame(ts){
    if(t0===null){t0=ts;last=ts}
    var dt=Math.min(50,ts-last);last=ts;
    var t=(ts-t0)%cycle,acc=0;
    for(var k=0;k<4;k++){var s=seq[k],mv=(s.to-s.from)/SPEED,span=PAUSE+mv;
      if(t<acc+span){var lt=t-acc;
        activate(s.i,span);
        var pos=lt<PAUSE?s.from:s.from+(s.to-s.from)*ease((lt-PAUSE)/mv);
        var q=place(pos%L);
        if(lt>=PAUSE&&(frameN++%3===0))emit(q.x,q.y,1);
        break}
      acc+=span}
    stepSparks(dt);
    __raf(frame);
  }
  __raf(frame);
})();



    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  return (
    <>
<section className="block" id="about">
  <div className="wrap">
    <div className="head">
      <div>
        <p className="eyebrow">Who we are</p>
        <h2>We find the problem, solve it, automate it, and grow with you.</h2>
      </div>
      <p className="lede">E-Xpert Consultants Limited is a business and process automation firm based in Dhaka. Every engagement follows the same loop as our logo: understand the business, fix what holds it back, take the manual work out, and keep it growing.</p>
    </div>
    <div className="cycle">
      <div className="cycle-art">
        <svg className="inf" viewBox="0 0 560 330" role="img" aria-label="The e-Xpert loop: Analyze, Solve, Automate, Grow">
          <defs>
            <linearGradient id="inf-grad" x1={0} y1={0} x2={1} y2={0}>
              <stop offset={0} className="ig1" /><stop offset=".5" className="ig2" /><stop offset={1} className="ig1" />
            </linearGradient>
            <filter id="inf-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation={6} /></filter>
            <radialGradient id="inf-halo"><stop offset={0} className="ih1" /><stop offset={1} className="ih2" /></radialGradient>
          </defs>
          <circle className="inf-bg" cx={280} cy={165} r={150} fill="url(#inf-halo)" />
          <path className="inf-track" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path className="inf-rail" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path className="inf-t inf-t3" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path className="inf-t inf-t2" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path className="inf-t inf-glow" filter="url(#inf-glow)" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path className="inf-t inf-t1" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" />
          <path id="inf-path" d="M280 165 C 220 67, 82 67, 66 165 C 82 263, 220 263, 280 165 C 340 67, 478 67, 494 165 C 478 263, 340 263, 280 165 Z" fill="none" stroke="none" />
          <circle className="inf-eye" cx={122} cy={165} r={14} />
          <circle className="inf-eye-ring" cx={122} cy={165} r={14} />
          <g id="inf-sparks" />
          <g id="inf-marks" />
          <g id="inf-runner"><circle className="inf-run-halo" r={20} /><circle className="inf-run" r={9} /></g>
        </svg>
      </div>
      <ol className="stages" id="stages">
        <li className="on"><span className="sn">01</span><div><h3>Analyze</h3><p>We study your workflows, data and teams to find the real problem, not only the symptoms.</p></div></li>
        <li><span className="sn">02</span><div><h3>Solve</h3><p>We design the fix: a cleaner process, the right tools, and clear ownership for every step.</p></div></li>
        <li><span className="sn">03</span><div><h3>Automate</h3><p>We build and roll out automations so routine work runs without manual effort or errors.</p></div></li>
        <li><span className="sn">04</span><div><h3>Grow</h3><p>We measure results and keep improving, so the business scales without adding cost.</p></div></li>
      </ol>
    </div>
  </div>
</section>
    </>
  );
}
