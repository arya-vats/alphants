import { useReveal } from '../hooks/useReveal';
import './Who.css';

export default function Who() {
  useReveal();
  return (
    <section id="who">
      {/* <div className="who-header">
        <p className="lbl-light reveal">Who We Are</p>
      </div> */}

      <div className="who-grid">
        <div className="who-dark reveal">
          <p className="mission-lbl">Our Mission</p>
          <p className="mission-txt">
            "To architect spaces where no one is in the room by accident, and every connection matters."
          </p>
          <div className="mission-divider" />

          <p className="belief-lbl">Our Belief</p>
          <p className="belief-txt">
            We started with one idea: influence isn't random. If you build a room with real care, it doesn't
            just give people a good evening. It gives them somewhere to stand, long after they've left.
          </p>
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

          <div className="pillars">
            <p className="pillars-lbl">The Three Pillars</p>
            <p className="pillars-sub">Three ideas hold up everything we design.</p>

            <div className="pillar">
              <p className="pillar-name">Presence</p>
              <p className="pillar-txt">
                Being in the room matters more than any message sent ahead of it. We build gatherings around
                real people, actually there, actually talking.
              </p>
            </div>
            <div className="pillar">
              <p className="pillar-name">Purpose</p>
              <p className="pillar-txt">
                No room exists just to exist. Before anything else, we ask what this gathering needs to make
                true, and design everything else around that answer.
              </p>
            </div>
            <div className="pillar">
              <p className="pillar-name">Permanence</p>
              <p className="pillar-txt">
                A good evening ends. What it builds shouldn't. We think about what a room leaves behind long
                after everyone's gone home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
