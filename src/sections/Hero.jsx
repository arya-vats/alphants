import './Hero.css';

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-headword-line">
          <span className="hero-headword">Al<span className="hero-dot">·</span><em>phant</em></span>
          <div className="hero-pron-pos">
            <span className="hero-pronunciation">/ˈal·fant/</span>
            <span className="hero-pos">noun</span>
          </div>
        </div>
        <div className="hero-def-block">
          <p className="hero-def-text">
            A leader who embodies instinctive leadership, collective intelligence, and enduring strength; <span className="hero-def-gold">an</span> <em>architect of high-value human connection</em><span className="hero-def-gold">.</span>
          </p>
        </div>
        <div className="hero-origin">
          <div className="hero-origin-label">Origin &amp; Etymology</div>
          <p className="hero-origin-txt">
            A deliberate dual-concept. Linguistically derived from <strong>Alpha</strong> + <strong>Phantasia</strong> — to manifest the unseen network into reality. Conceptually born from the vision of <strong>the Alpha</strong>, the discipline of <strong>the Ant</strong>, and the profound legacy of <strong>the Elephant</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
