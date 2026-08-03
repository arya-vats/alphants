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
          <div className="mission-box reveal rd2">
            <p className="mission-lbl">Our Mission</p>
            <p className="mission-txt">“To architect spaces where no one is in the room by accident, and every connection matters.”</p>
          </div>
        </div>

        <div className="who-right">
          <div className="story-card reveal">
            <p className="body-p">
              Alphants Network was created to bring architecture to influence, approaching business gatherings
              the way an architect approaches a landmark: with strategy first, intent behind every decision,
              and impact that lasts long after the evening ends.
            </p>
            <p className="body-p">
              Most organisations have a discipline for almost every strategic function. Brand. Product.
              Customer experience. Organisational design. Yet the way organisations bring people together is
              rarely treated as a strategic discipline in its own right.
            </p>
            <p className="body-p">
              That is the gap Alphants exists to fill.
            </p>
          </div>

          <div className="convener-grid reveal rd1">
            <div className="definition-block">
              <p className="block-label">Strategic Convening</p>
              <p className="body-p">
                Not event management. Not networking. The deliberate design of gatherings that bring together
                the right people, in the right environment, to build trust, spark meaningful relationships,
                and create opportunities that continue long after everyone has left the room.
              </p>
            </div>

            <div className="definition-block accent-block">
              <p className="block-label">What we Design</p>
              <p className="body-p">
                Not just events, but the conditions that make influence possible.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
