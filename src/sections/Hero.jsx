import './Hero.css';

export default function Hero() {
  return (
    <section id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <h1 className="hero-word">Al·<em>phant</em></h1>
        <p className="hero-phonetic">/ˈal·fant/ &nbsp;·&nbsp; noun</p>
        <div className="hero-rule" />
        <p className="hero-noun">Definition</p>
        <p className="hero-def">
          A leader who embodies instinctive leadership, collective intelligence, and enduring strength; an architect of high-value human connection.
        </p>
        <div className="hero-origin">
          <p className="hero-origin-lbl">Origin</p>
          <p className="hero-origin-txt">
            A deliberate dual-concept. Linguistically derived from{' '}
            <strong>Alpha + Phantasia</strong> — to manifest the unseen network into reality.
            Conceptually born from the vision of the <strong>Alpha</strong>, the discipline of
            the <strong>Ant</strong>, and the profound legacy of the <strong>Elephant</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
