import { useReveal } from '../hooks/useReveal';
import './Who.css';

export default function Who() {
  useReveal();
  return (
    <section id="who">
      <div className="who-header">
        <p className="lbl-light reveal">Who We Are</p>
      </div>

      <div className="who-grid">
        <div className="who-dark reveal">
          <p className="mission-lbl">Our Story</p>
          <p className="mission-txt">
            "To architect spaces where no one is in the room by accident, and every connection matters."
          </p>
          <div className="mission-divider" />
        </div>

        <div className="who-light reveal rd1">
          <p className="body-p">
            Alphants Network was created to bring architecture to influence, approaching business gatherings
            the way an architect approaches a landmark: with strategy first, intent behind every decision,
            and impact that lasts long after the evening ends.
          </p>
          <p className="body-p">
            Most organisations have a discipline for almost every strategic function. Brand. Product.
            Customer experience. Yet how organisations bring people together is rarely treated as a
            discipline of its own.
          </p>
          <p className="body-p final-p">
            That's the gap Alphants exists to fill.
          </p>

          <div className="callout-row">
            <div className="callout-block">
              <p className="block-label">Strategic Convening</p>
              <p className="body-p">
                Not event management, not networking. The deliberate design of gatherings that build trust and
                lasting relationships.
              </p>
            </div>
            <div className="callout-block bordered">
              <p className="block-label">What We Design</p>
              <p className="body-p">
                Not just gatherings, but the conditions that make influence possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
