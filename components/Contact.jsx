'use client';

import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    let alive = true, rafId = 0;
    const __raf = (fn) => { if (alive) rafId = requestAnimationFrame((t) => { if (alive) fn(t); }); };
    
document.querySelectorAll('.copy').forEach(function(b){
  b.addEventListener('click',function(){
    var el=document.getElementById(b.dataset.copy), t=el.textContent.trim();
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600)}
    function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected'}
    try{navigator.clipboard.writeText(t).then(done,fallback)}catch(e){fallback()}
  });
});
document.getElementById('enquiry').addEventListener('submit',function(e){
  e.preventDefault();
  var v=function(id){return document.getElementById(id).value.trim()};
  var note=document.getElementById('formnote');
  if(!v('f-name')||!/.+@.+\..+/.test(v('f-email'))){note.textContent='Please add your name and a valid email address.';note.hidden=false;return}
  var subject='Website enquiry: '+v('f-topic')+' ('+v('f-name')+')';
  var lines=['Name: '+v('f-name'),'Company: '+v('f-company'),'Email: '+v('f-email'),'Phone: '+v('f-phone'),'Service: '+v('f-topic'),'','Message:',v('f-msg')];
  window.location.href='mailto:care@e-xpertconsultants.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(lines.join('\n'));
  note.textContent='Your email app should open with the enquiry ready to send. If it does not, email care@e-xpertconsultants.com or call +880 1332-092905.';
  note.hidden=false;
});
document.querySelectorAll('[data-topic]').forEach(function(a){a.addEventListener('click',function(){var s=document.getElementById('f-topic');if(s)s.value=a.dataset.topic})});

    return () => { alive = false; cancelAnimationFrame(rafId); };
  }, []);
  return (
    <>
<section className="block tint" id="contact">
  <div className="wrap contact">
    <div>
      <p className="eyebrow">Contact</p>
      <h2 style={{'fontSize': 'clamp(1.6rem,3vw,2.3rem)', 'marginTop': '14px'}}>Tell us which process slows you down.</h2>
      <p className="lede" style={{'marginTop': '14px', 'fontSize': '.97rem'}}>A free first consultation covers your current workflow and where automation would pay back fastest.</p>
      <ul className="details">
        <li><span className="k">Email</span><span className="v" id="v-email">care@e-xpertconsultants.com</span><button className="copy" type="button" data-copy="v-email">Copy</button></li>
        <li><span className="k">Phone</span><span className="v" id="v-phone">+880 1332-092905</span><button className="copy" type="button" data-copy="v-phone">Copy</button></li>
        <li><span className="k">Office</span><span className="v" id="v-addr">House 998 (1B), Road 9A, Avenue 11, Mirpur DOHS, Dhaka-1216, Bangladesh</span><button className="copy" type="button" data-copy="v-addr">Copy</button></li>
      </ul>
    </div>
    <form id="enquiry" noValidate>
      <div className="row2">
        <label htmlFor="f-name">Your name<input id="f-name" name="name" autoComplete="name" required /></label>
        <label htmlFor="f-company">Company<input id="f-company" name="company" autoComplete="organization" /></label>
      </div>
      <div className="row2">
        <label htmlFor="f-email">Email<input id="f-email" name="email" type="email" autoComplete="email" required /></label>
        <label htmlFor="f-phone">Phone<input id="f-phone" name="phone" type="tel" autoComplete="tel" /></label>
      </div>
      <label htmlFor="f-topic">What do you need help with?
        <select id="f-topic" name="topic">
          <option>Market Research and Business Analysis</option>
          <option>Marketing, Sales and Growth</option>
          <option>Technical Product Development</option>
          <option>Project Management</option>
          <option>Branding and PR</option>
          <option>Automation and Excellence</option>
          <option>DoctorsBook for doctors</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label htmlFor="f-msg">Message<textarea id="f-msg" name="message" placeholder="Briefly describe the process or problem" defaultValue={""} /></label>
      <div><button className="btn btn-primary" type="submit">Send enquiry</button></div>
      <p className="formnote" id="formnote" hidden />
    </form>
  </div>
</section>
    </>
  );
}
