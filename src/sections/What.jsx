import { useReveal } from '../hooks/useReveal';
import './What.css';

export default function What() {
  useReveal();
  return (
    <section id="what">
      <div className="what-header">
        <p className="lbl-light reveal">What We Enable</p>
        <h2 className="what-title reveal rd1">Built for the<br />right <em>people.</em><br />By design.</h2>
      </div>
      <div className="cards-grid">
        <div className="card-light reveal">
          <h3 className="card-name">Alphants Unlisted</h3>
          <p className="card-sub">Private events built around the people you need to meet</p>
          <p className="card-txt">
            Whether you are hosting a high-stakes board retreat or an intimate executive summit, we architect
            the environment so every interaction serves your strategic goals. Flawless execution is our
            baseline — our true deliverable is ensuring the exact right minds are at the table,
            transforming a gathering into a catalyst.
          </p>
          <div className="card-bar" />
        </div>
        <div className="card-light reveal rd1">
          <h3 className="card-name">Alphants Originals</h3>
          <p className="card-sub">Our own gatherings, where every attendee adds value</p>
          <p className="card-txt">
            Our own conferences and events are built on one strict rule: no one is in the room by accident.
            When you attend an Alphants Original, you don't have to hope you'll bump into the right
            person — we've already made sure the room is full of them.
          </p>
          <div className="card-bar" />
        </div>
      </div>
    </section>
  );
}
