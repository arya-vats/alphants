import { useReveal } from '../hooks/useReveal';
import './Founder.css';

export default function Founder() {
  useReveal();
  return (
    <section id="founder">
      <div className="founder-right">
        <p className="founder-pull reveal">
          "The rooms were full, yet the outcomes were unclear. The conversations were loud, but the influence was{' '}
          <em>temporary.</em>
        </p>
        <p className="founder-p reveal">
          For the better part of two decades curating high-stakes spaces, I've seen firsthand that the most powerful connections aren't born from crowded rooms, they are deliberately engineered.
        </p>
        <p className="founder-p reveal rd1">
          Brands invested enormous energy into moments that looked impressive but left little behind. The rooms were full, yet the outcomes were unclear. The conversations were loud, but the influence was temporary. It became clear that events needed more than coordination. They needed structure.
        </p>
        <div className="founder-welcome reveal rd2">
          <p>
            Welcome to Alphants Network.<br />
            <span>The Architecture of Influence.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
