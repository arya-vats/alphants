import { useReveal } from '../hooks/useReveal';
import './Who.css';

export default function Who() {
  useReveal();
  return (
    <section id="who">
      <div className="who-inner">
        <div className="who-left">
          <p className="lbl-light reveal">Our Story</p>
          <h2 className="who-title reveal rd1">The<br /><em>Architecture</em><br />of Influence</h2>
          <div className="who-accent reveal rd2">
            <p>"Every event is a story waiting to unfold — we ensure it's one worth telling."</p>
          </div>
        </div>
        <div className="who-right">
          <p className="body-p reveal">
            Alphants Network was created to bring architecture to influence, and to approach events the way
            architects approach landmarks: with strategy first, intent at every layer, and{' '}
            <strong>impact that lasts beyond the room.</strong>
          </p>
          <p className="body-p reveal rd1">
            Founded with the belief that every event is a story waiting to unfold, we have spent years
            perfecting the art and science of engineering networks that drive influence.
          </p>
          <div className="trio reveal rd2">
            <div className="trio-row">We design rooms where <em>deals are born.</em></div>
            <div className="trio-row">We connect people who <em>should've met years ago.</em></div>
            <div className="trio-row">We cross-pollinate <em>ideas, industries, and opportunities.</em></div>
          </div>
          <div className="mission-box reveal rd1">
            <p className="mission-lbl">Our Mission</p>
            <p className="mission-txt">"To architect spaces where no one is in the room by accident, and every connection matters."</p>
          </div>
          <p className="who-tagline reveal">We don't network. We engineer networks.</p>
        </div>
      </div>
    </section>
  );
}
