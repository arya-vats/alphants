import { useReveal } from '../hooks/useReveal';
import './How.css';

const steps = [
  {
    n: '01',
    title: 'Strategy Before Spectacle',
    body: <>Every powerful structure begins with a blueprint. We start by defining exactly why the gathering must exist before deciding how it should look. Purpose, positioning, and identifying the exact right minds to be in the room form the foundation that <strong>anchors everything that follows.</strong></>,
  },
  {
    n: '02',
    title: 'Precision in Planning',
    body: <>Once the blueprint is set, we construct the framework. From concept design and venue curation to logistics and on-ground operations, every element is selected with discipline and intention. <strong>Nothing is ornamental. Everything serves the experience.</strong></>,
  },
  {
    n: '03',
    title: 'Visibility With Purpose',
    body: <>A structure deserves to be seen, but never shouted about. Our marketing approach amplifies the event without diluting its exclusivity. Campaigns are designed to attract <strong>the right audience, not just a larger one.</strong></>,
  },
  {
    n: '04',
    title: 'Designing Engagement',
    body: <>An event is alive only when people move within it. We curate the networking to create natural flow, meaningful interactions, and moments that outlast the room. <strong>We don't hope people engage. We design for it.</strong></>,
  },
  {
    n: '05',
    title: 'Measurement That Matters',
    body: <>Influence must be accountable, and true ROI outlasts the event itself. We measure success not in vanity metrics, but in the enduring impact of the room — the quality of connections forged and <strong>the tangible business signals that inform what can be built next.</strong></>,
  },
];

export default function How() {
  useReveal();
  return (
    <section id="how">
      <div className="how-top">
        <div>
          <p className="lbl-light reveal">How Influence Is Designed</p>
          <h2 className="how-title reveal rd1">Five<br /><em>movements.</em><br />One outcome.</h2>
        </div>
        <p className="how-intro reveal">
          At Alphants Network, we approach events the way architects approach landmarks — with intent,
          structure, and foresight. Each movement builds on the last. Nothing is ornamental.
          Everything serves the experience.
        </p>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step reveal" key={s.n}>
            <span className="step-n">{s.n}</span>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-body">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
