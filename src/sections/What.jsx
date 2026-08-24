import { useReveal } from '../hooks/useReveal';
import './What.css';

export default function What() {
  useReveal();
  return (
    <section id="what">
      <div className="what-header">
        <p className="lbl-light reveal">What We Design</p>
        <h2 className="what-title reveal rd1">The right minds.<br />At the exact <em>right coordinates.</em></h2>
      </div>

      <div className="cards-grid">
        <div className="card-dark reveal">
          <h3 className="card-name">Unlisted</h3>
          <p className="card-sub">Private gatherings for the conversations that matter most.</p>
          <p className="card-txt">
            We design intimate, invitation-only gatherings that bring together senior leaders in carefully crafted settings. Every detail is thoughtfully considered to create the conditions for genuine connection and meaningful dialogue.
          </p>
          <div className="card-bar" />
        </div>

        <div className="card-light reveal rd1">
          <h3 className="card-name">ORIGINALS</h3>
          <p className="card-sub">Curated spaces that create the conversations industries need.</p>
          <p className="card-txt">
            We identify the inflection points where industries need new thinking, and build gatherings around them.             Each gathering is shaped around a carefully chosen set of speakers and a guest list built to match.

          </p>
          <div className="card-bar" />
        </div>
      </div>
    </section>
  );
}
