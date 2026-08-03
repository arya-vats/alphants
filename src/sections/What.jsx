import { useReveal } from '../hooks/useReveal';
import './What.css';

export default function What() {
  useReveal();
  return (
    <section id="what">
      <div className="what-header">
        <p className="lbl-light reveal">What We Enable</p>
        <h2 className="what-title reveal rd1">The right minds.<br />At the exact right <em>coordinates.</em></h2>
      </div>

      <div className="cards-grid">
        <div className="card-light reveal">
          <h3 className="card-name">Alphants Exclusive</h3>
          <p className="card-sub">Private gatherings designed around your strategic priorities.</p>
          <p className="card-txt">
            We design intimate, invitation-only experiences that bring together exceptional individuals in
            carefully considered settings. Every detail is orchestrated to foster genuine connection and
            meaningful dialogue. From venue selection to guest curation, nothing is left to chance. The
            result: rooms where ideas flow freely, relationships deepen, and opportunities emerge
            organically among peers who share ambition and values.
          </p>
          <div className="card-bar" />
        </div>

        <div className="card-light reveal rd1">
          <h3 className="card-name">Alphants Originals</h3>
          <p className="card-sub">Communities and conversations designed around ideas we believe deserve a room.</p>
          <p className="card-txt">
            We identify the inflection points where industries need new thinking and build gatherings around
            them. Each event is architected with precision: the right minds, the right questions, the right
            environment. Our formats break conventional conference monotony with structured intimacy,
            provocative framing, and curated serendipity. The outcome is not just conversation but
            catalysis — ideas that leave the room and reshape markets.
          </p>
          <div className="card-bar" />
        </div>
      </div>
    </section>
  );
}
