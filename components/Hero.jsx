export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-head">
          <p className="eyebrow">Business &amp; Process Automation</p>
          <h1>Processes that <b>run themselves</b>, so your team can run the business.</h1>
        </div>
        <figure className="hero-gif hero-portrait">
          <video
            src="/images/process-leaks.mp4"
            poster="/images/process-leaks-poster.jpg"
            width="810"
            height="1080"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Animation: work flows through a pipeline of checkpoints, but three leaks waste days of time and people's effort until the gaps are found and fixed"
          />
        </figure>
        <div className="hero-copy">
          <p className="lede">e-Xpert redesigns how work moves through your company. We remove manual steps, connect the systems you already use, and automate the routine, so growth doesn't depend on adding headcount.</p>
          <div className="actions">
            <a className="btn btn-primary btn-hero" href="/free-consultation/">Identify your business problem for free <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
