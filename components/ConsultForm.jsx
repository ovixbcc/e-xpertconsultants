'use client';

import { useState } from 'react';

const INDUSTRIES = ['TravelTech', 'FinTech', 'Agro', 'E-commerce', 'Medical', 'Real Estate', 'BPC (Beauty and Personal Care)', 'RMG', 'Other'];
const SERVICES = ['Not sure yet', 'Market Research and Business Analysis', 'Marketing, Sales and Growth', 'Technical Product Development', 'Project Management', 'Branding and PR', 'Automation and Excellence', 'DoctorsBook for doctors'];

export default function ConsultForm() {
  const [note, setNote] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k) => String(f.get(k) || '').trim();
    if (!v('name') || !/.+@.+\..+/.test(v('email')) || !v('phone')) {
      setNote('Please add your name, a valid email address and a phone number.');
      return;
    }
    const lines = [
      'Free consultation request', '',
      'Name: ' + v('name'), 'Company: ' + v('company'), 'Email: ' + v('email'), 'Phone: ' + v('phone'),
      'Industry: ' + v('industry'), 'Interested in: ' + v('service'), 'Team size: ' + v('size'),
      'Preferred contact: ' + v('contact') + (v('time') ? ' (' + v('time') + ')' : ''), '',
      'What slows the business down:', v('message'),
    ];
    const subject = 'Free consultation request: ' + v('name') + (v('company') ? ' (' + v('company') + ')' : '');
    window.location.href = 'mailto:care@e-xpertconsultants.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    setNote('Your email app should open with the request ready to send. If it does not, email care@e-xpertconsultants.com or call +880 1332-092905.');
  };
  return (
    <form className="consult-form" onSubmit={onSubmit} noValidate>
      <div className="row2">
        <label htmlFor="c-name">Your name *<input id="c-name" name="name" autoComplete="name" required /></label>
        <label htmlFor="c-company">Company<input id="c-company" name="company" autoComplete="organization" /></label>
      </div>
      <div className="row2">
        <label htmlFor="c-email">Email *<input id="c-email" name="email" type="email" autoComplete="email" required /></label>
        <label htmlFor="c-phone">Phone / WhatsApp *<input id="c-phone" name="phone" type="tel" autoComplete="tel" required /></label>
      </div>
      <div className="row2">
        <label htmlFor="c-industry">Industry
          <select id="c-industry" name="industry" defaultValue="">{['', ...INDUSTRIES].map((x) => <option key={x} value={x}>{x || 'Choose your industry'}</option>)}</select>
        </label>
        <label htmlFor="c-size">Team size
          <select id="c-size" name="size" defaultValue="">{['', '1–10', '11–50', '51–200', '200+'].map((x) => <option key={x} value={x}>{x || 'Choose team size'}</option>)}</select>
        </label>
      </div>
      <label htmlFor="c-service">What would you like help with?
        <select id="c-service" name="service" defaultValue="Not sure yet">{SERVICES.map((x) => <option key={x}>{x}</option>)}</select>
      </label>
      <div className="row2">
        <label htmlFor="c-contact">Best way to reach you
          <select id="c-contact" name="contact" defaultValue="Phone call">{['Phone call', 'WhatsApp', 'Email', 'Meeting at your office'].map((x) => <option key={x}>{x}</option>)}</select>
        </label>
        <label htmlFor="c-time">Preferred time<input id="c-time" name="time" placeholder="e.g. Weekdays after 4 pm" /></label>
      </div>
      <label htmlFor="c-message">Which process slows your business down?<textarea id="c-message" name="message" placeholder="For example: orders are typed into Excel by hand, payment follow-ups take hours every week…" /></label>
      <div><button className="btn btn-primary" type="submit">Book my free consultation</button></div>
      {note && <p className="formnote">{note}</p>}
    </form>
  );
}
