import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Al<span>phants</span> Network <span className="footer-copyright">© 2026</span></div>
      <div className="footer-social">
        <span className="footer-follow">Follow Us</span>
        <ul className="footer-links">
          <li>
            <a href="https://www.linkedin.com/company/alphants-network/about/">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alphantsnetwork?igsh=MWFscnJtczV3M2R1dA==">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4.2"/>
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
