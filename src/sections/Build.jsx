import { useReveal } from '../hooks/useReveal';
import './Build.css';

const cards = [
  {
    label: 'Commission an Event',
    title: 'Work Together',
    text: "Whether you're commissioning a single defining event or a series of strategic gatherings, this is where it begins. Tell us about the room you need to build.",
    link: 'mailto:hello@alphants.com',
    linkText: 'Start the conversation',
  },
  {
    label: 'Join the Team',
    title: 'Careers',
    text: "Join a team of strategists, creators, and innovators redefining events. We're building something that matters — and we're looking for people who think the same way.",
    link: 'mailto:careers@alphants.com',
    linkText: 'View opportunities',
  },
  {
    label: 'Get in Touch',
    title: 'Contact',
    text: 'Every significant architecture begins with a conversation. Reach us by phone, email, or wherever you find us online. We respond to every message personally.',
    link: 'mailto:hello@alphants.com',
    linkText: 'hello@alphants.com',
  },
];

export default function Build() {
  useReveal();
  return (
    <section id="build">
      <div className="build-grid-bg" />
      <div className="build-inner">
        <div className="build-top">
          <div>
            <p className="lbl-light reveal">Build With Us</p>
            <h2 className="build-title reveal rd1">Design<br /><em>influence</em><br />together.</h2>
          </div>
          <div className="build-desc">
            <p className="reveal">
              Engagement is not forced. It is designed. Whether you're planning a defining event or
              exploring a long-term partnership, the conversation starts here.
            </p>
            <div className="build-stamp reveal rd1">
              "No one is in the room by accident, and every connection matters."
            </div>
          </div>
        </div>

        <div className="build-cards">
          {cards.map((c, i) => (
            <div className={`build-card reveal${i === 1 ? ' rd1' : i === 2 ? ' rd2' : ''}`} key={c.title}>
              <p className="bc-label">{c.label}</p>
              <h3 className="bc-title">{c.title}</h3>
              <p className="bc-text">{c.text}</p>
              <a href={c.link} className="bc-link">{c.linkText}</a>
              <div className="bc-bar" />
            </div>
          ))}
        </div>

        <div className="build-final reveal">
          <p className="build-final-q">
            "We don't network.<br /><strong>We engineer networks.</strong>"
          </p>
          <a href="mailto:hello@alphants.com" className="btn-ink">Begin the conversation</a>
        </div>
      </div>
    </section>
  );
}
