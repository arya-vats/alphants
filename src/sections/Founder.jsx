import { useReveal } from '../hooks/useReveal';
import './Founder.css';

export default function Founder() {
  useReveal();
  return (
    <section id="founder">
      <div className="founder-left">
        <p className="lbl-dark reveal">A Note from the Founder</p>
        <div className="founder-visual reveal rd1">
          <div className="fv-grid" />
          <div className="fv-inner">AN</div>
          <div className="fv-overlay" />
          <div className="fv-name">
            <h3>Founder</h3>
            <p>Alphants Network · Delhi</p>
          </div>
        </div>
      </div>
      <div className="founder-right">
        <p className="founder-pull reveal">
          "The rooms were full, yet the outcomes were unclear. The conversations were loud, but the influence was{' '}
          <em>temporary.</em> Something was missing — it was architecture."
        </p>
        <p className="founder-p reveal">
          Alphants Network was born from a simple observation: most events are executed well, but very few are
          designed with purpose. Over the years, I saw brands invest enormous energy into moments that looked
          impressive but left little behind.
        </p>
        <p className="founder-p reveal rd1">
          Alphants Network was created to bring architecture to influence. To approach events the way architects
          approach landmarks: with strategy first, intent at every layer, and impact that lasts beyond the unveiling.
        </p>
        <p className="founder-p reveal rd2">
          We believe the most powerful experiences happen when the right people are brought together with purpose
          — and when nothing about that room is left to chance.
        </p>
        <p className="founder-tagline reveal">"We don't chase attention. We design relevance."</p>
        <div className="founder-welcome reveal rd1">
          <p>
            Welcome to Alphants Network.<br />
            <span>The Architecture of Influence.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
