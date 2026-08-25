import { useReveal } from '../hooks/useReveal';
import './Build.css';

const cards = [
  {
    label: 'Commission a Gathering',
    title: 'Work together',
    text: "Whether you're commissioning a single defining gathering or a series of strategic ones, this is where it begins. Tell us about the room you need to build.",
    link: 'mailto:as@alphantsnetwork.com',
    linkText: 'Start the conversation',
    light: true,
  },
  {
    label: 'Join the Team',
    title: 'Careers',
    text: "If you have a question, an idea, or just want to say hello, feel free to reach out directly.",
    link: 'mailto:as@alphantsnetwork.com',
    linkText: 'Get in touch',
  },
  {
    label: 'Get in Touch',
    title: 'Contact',
    text: 'Every gathering starts with a conversation. We respond to every message personally.',
    link: 'mailto:welcome@alphantsnetwork.com',
    linkText: 'welcome@alphantsnetwork.com',
  },
];

export default function Build() {
  useReveal();
  return (
    <section id="build">
      <div className="build-inner">
        <div className="build-top">
          <div>
            <p className="lbl-dark reveal">Start Here</p>
            <h2 className="build-title reveal rd1">Design <em>influence</em><br />together.</h2>
          </div>
          <div className="build-quote reveal rd1">
            "Whether curating a high-stakes gathering or laying the foundation for a lasting
            partnership, the conversation starts here."
          </div>
        </div>

        <div className="build-divider" />

        <div className="build-cards">
          {cards.map((c, i) => (
            <div
              className={`build-card${c.light ? ' bc-light' : ''} reveal${i === 1 ? ' rd1' : i === 2 ? ' rd2' : ''}`}
              key={c.title}
            >
              <p className="bc-label">{c.label}</p>
              <h3 className="bc-title">{c.title}</h3>
              <p className="bc-text">{c.text}</p>
              <a href={c.link} className="bc-link">{c.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
