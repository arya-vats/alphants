import { useReveal } from '../hooks/useReveal';
import './How.css';

const steps = [
  {
    n: '01',
    title: 'Purpose before spectacle',
    body: 'Every gathering starts with a simple question: why does this actually need to happen? We figure out what the room is for, the purpose, the positioning, and the people who genuinely need to be there. Everything else follows.',
  },
  {
    n: '02',
    title: 'Precision in every detail',
    body: "Once we know why the room exists, we get into the details. Every part of the gathering, the venue, the format, the agenda, the pacing, is chosen because it actually serves that purpose, not because it's the usual thing to do.",
  },
  {
    n: '03',
    title: 'Visibility, not volume',
    body: "The right gathering doesn't need to reach everyone, just the people it was built for. We believe in visibility with purpose: enough to attract the right attention, never so much that we dilute what makes the gathering valuable.",
  },
  {
    n: '04',
    title: 'Engagement by design',
    body: "Being in the same room doesn't automatically mean people connect. That's something we plan for, carefully, long before anyone arrives. We just have one goal: making sure the conversations we're hoping for actually get a chance to happen.",
  },
];

const finalStep = {
  n: '05',
  title: 'Impact that matters',
  body: "We don't judge a room only by how it felt that night. We look at what came after too, the relationships that formed, the conversations that kept going, the decisions that followed. And then we take what we learn into the next room.",
};

export default function How() {
  useReveal();
  return (
    <section id="how">
      <p className="lbl-light reveal">How Influence Is Designed</p>

      <div className="how-top">
        <h2 className="how-title reveal rd1">Five steps. <em>One outcome.</em></h2>
        <p className="how-intro reveal">
          Every gathering starts with a simple question: why does this actually need to happen? We figure out
          what the room is for, then everything else follows.
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

        <div className="step step-final reveal">
          <span className="step-n">{finalStep.n}</span>
          <h3 className="step-title">{finalStep.title}</h3>
          <p className="step-body">{finalStep.body}</p>
        </div>
      </div>
    </section>
  );
}
