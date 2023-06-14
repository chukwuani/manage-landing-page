export default function Hero() {
  return (
    <section className="hero-section">
      <section className="hero-left">
        <h1 className="hero-title">Bring everyone together to build better products.</h1>

        <p className="hero-sub">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the
          larger team goals in view.
        </p>

        <button className="cta-btn">Get Started</button>
      </section>

      <img
        className="hero-img"
        src="/images/illustration-intro.svg"
        alt="Hero image"
        aria-roledescription="banner"
      />

      {/* <img src="/images/bg-tablet-pattern.svg" alt="" className="hero-overflow" /> */}
    </section>
  );
}
