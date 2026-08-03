import './Nav.css';
import Emblem from './Emblem';

export default function Nav({ theme, activeSection }) {
  const links = [
    { href: '#who', label: 'Who We Are' },
    { href: '#what', label: 'What We Enable' },
    { href: '#how', label: 'How We Design' },
    { href: '#how', label: 'Build with Us' },
  ];

  return (
    <nav id="nav" className={theme}>
      <a className="nav-logo" href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div className="nav-logo-text">
          <img src="src/assets/alphants.png" alt="Alphants Network Logo" className="nav-logo-img" />
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

      <div className="nav-meta">
        <span className="nav-brand">Alphants Network</span>
        <span className="nav-tagline">The Architecture of Influence</span>
      </div>
    </nav>
  );
}
