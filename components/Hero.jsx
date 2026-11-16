export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Business &amp; Process Automation</p>
          <h1>Processes that <b>run themselves</b>, so your team can run the business.</h1>
          <p className="lede">e-Xpert redesigns how work moves through your company. We remove manual steps, connect the systems you already use, and automate the routine, so growth doesn't depend on adding headcount.</p>
          <div className="actions">
            <a className="btn btn-primary btn-hero" href="/free-consultation/">Identify your business problem for free <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <figure className="hero-gif">
          <img
            src="/images/process-gap.gif"
            width="1920"
            height="1080"
            alt="Animation: a supply chain runs smoothly, then two steps, Approval and Quality check, pile up with delays and errors until the gap is identified"
          />
        </figure>
      </div>
    </section>
  );
}
