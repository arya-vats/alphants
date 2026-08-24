import './Nav.css';
import logoUrl from '../assets/alphants.png';

export default function Nav({ theme, activeSection }) {
  const links = [
    { href: '#who', label: 'Who We Are' },
    { href: '#what', label: 'What We Enable' },
    { href: '#how', label: 'How We Design' },
  ];

  return (
    <nav id="nav" className={theme}>
      <a className="nav-logo" href="#home">
        <img src={logoUrl} alt="Alphants Network Logo" className="nav-logo-img" />
        <div className="nav-wordmark">
          <span className="nav-brand">Alphants Network</span>
          <span className="nav-tagline">The Architecture of Influence</span>
        </div>
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={`nav-lnk${activeSection === l.href.slice(1) ? ' active' : ''}`}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#build" className="nav-cta">Start a Conversation</a>
    </nav>
  );
}
