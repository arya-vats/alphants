export default function Emblem({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 340 340">
      <defs>
        <linearGradient id="e-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a4846"/><stop offset="45%" stopColor="#2a2826"/><stop offset="100%" stopColor="#4a4846"/>
        </linearGradient>
        <linearGradient id="e-pl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3835"/><stop offset="50%" stopColor="#2a2826"/><stop offset="100%" stopColor="#5a5855"/>
        </linearGradient>
        <linearGradient id="e-br" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1816"/><stop offset="100%" stopColor="#3a3835"/>
        </linearGradient>
        <radialGradient id="e-body" cx="42%" cy="36%" r="68%">
          <stop offset="0%" stopColor="#fdfaf5"/><stop offset="100%" stopColor="#ede9e2"/>
        </radialGradient>
        <radialGradient id="e-cd" cx="38%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#f5f1ea"/><stop offset="100%" stopColor="#e5e1d8"/>
        </radialGradient>
        <radialGradient id="e-edge" cx="30%" cy="26%" r="72%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.06)"/><stop offset="100%" stopColor="rgba(0,0,0,0.06)"/>
        </radialGradient>
        <pattern id="e-grid" x="0" y="0" width="17" height="17" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="17" y2="0" stroke="rgba(20,19,18,0.09)" strokeWidth="0.45"/>
          <line x1="0" y1="0" x2="0" y2="17" stroke="rgba(20,19,18,0.09)" strokeWidth="0.45"/>
        </pattern>
        <clipPath id="e-cl"><circle cx="170" cy="170" r="122"/></clipPath>
        <filter id="e-inn">
          <feFlood floodColor="rgba(0,0,0,0.15)" result="f"/>
          <feComposite in="f" in2="SourceGraphic" operator="in" result="s"/>
          <feGaussianBlur in="s" stdDeviation="5" result="bl"/>
          <feMerge><feMergeNode in="bl"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="e-gmd">
          <feGaussianBlur stdDeviation="4" result="b1"/>
          <feGaussianBlur stdDeviation="1.5" result="b2"/>
          <feMerge><feMergeNode in="b1"/><feMergeNode in="b1"/><feMergeNode in="b2"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="e-glg">
          <feGaussianBlur stdDeviation="7" result="b1"/>
          <feGaussianBlur stdDeviation="3" result="b2"/>
          <feMerge><feMergeNode in="b1"/><feMergeNode in="b1"/><feMergeNode in="b2"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="170" cy="170" r="167" fill="none" stroke="url(#e-rim)" strokeWidth="1.2" strokeDasharray="2.5 2.5" opacity="0.35"/>
      <circle cx="170" cy="170" r="158" fill="url(#e-body)" stroke="url(#e-rim)" strokeWidth="4" filter="url(#e-inn)"/>
      <circle cx="170" cy="170" r="158" fill="url(#e-edge)"/>
      <circle cx="170" cy="170" r="150" fill="none" stroke="url(#e-rim)" strokeWidth="2.2" opacity="0.5"/>
      <circle cx="170" cy="170" r="144" fill="none" stroke="url(#e-rim)" strokeWidth="0.6" opacity="0.2"/>
      <g stroke="url(#e-pl)" strokeLinecap="round">
        <line x1="170" y1="12" x2="170" y2="26" strokeWidth="2.2" opacity="0.55"/>
        <line x1="170" y1="314" x2="170" y2="328" strokeWidth="2.2" opacity="0.55"/>
        <line x1="12" y1="170" x2="26" y2="170" strokeWidth="2.2" opacity="0.55"/>
        <line x1="314" y1="170" x2="328" y2="170" strokeWidth="2.2" opacity="0.55"/>
        <line x1="57" y1="57" x2="67" y2="67" strokeWidth="1.4" opacity="0.35"/>
        <line x1="283" y1="57" x2="273" y2="67" strokeWidth="1.4" opacity="0.35"/>
        <line x1="57" y1="283" x2="67" y2="273" strokeWidth="1.4" opacity="0.35"/>
        <line x1="283" y1="283" x2="273" y2="273" strokeWidth="1.4" opacity="0.35"/>
      </g>
      <g fill="url(#e-pl)" opacity="0.55">
        <polygon points="170,9 174,14 170,19 166,14"/>
        <polygon points="170,321 174,326 170,331 166,326"/>
        <polygon points="9,170 14,166 19,170 14,174"/>
        <polygon points="321,170 326,166 331,170 326,174"/>
      </g>
      <path id="e-top" d="M 44,170 A 126,126 0 0 1 296,170" fill="none"/>
      <path id="e-bot" d="M 44,170 A 126,126 0 0 0 296,170" fill="none"/>
      <text fontFamily="Courier Prime, monospace" fontSize="11" fill="url(#e-pl)" letterSpacing="7" opacity="0.55">
        <textPath href="#e-top" startOffset="50%" textAnchor="middle">ALPHANTS NETWORK</textPath>
      </text>
      <text fontFamily="Courier Prime, monospace" fontSize="8.5" fill="url(#e-pl)" letterSpacing="3" opacity="0.3">
        <textPath href="#e-bot" startOffset="50%" textAnchor="middle">PRESENCE · PURPOSE · PERMANENCE</textPath>
      </text>
      <rect x="48" y="48" width="244" height="244" fill="url(#e-grid)" clipPath="url(#e-cl)"/>
      <g clipPath="url(#e-cl)" stroke="url(#e-br)" strokeLinecap="round">
        <line x1="170" y1="170" x2="170"   y2="92"  strokeWidth="1.5" opacity="0.38"/>
        <line x1="170" y1="170" x2="237.6" y2="131" strokeWidth="1.5" opacity="0.38"/>
        <line x1="170" y1="170" x2="237.6" y2="209" strokeWidth="1.5" opacity="0.38"/>
        <line x1="170" y1="170" x2="170"   y2="248" strokeWidth="1.5" opacity="0.38"/>
        <line x1="170" y1="170" x2="102.4" y2="209" strokeWidth="1.5" opacity="0.38"/>
        <line x1="170" y1="170" x2="102.4" y2="131" strokeWidth="1.5" opacity="0.38"/>
        <line x1="170"   y1="92"  x2="237.6" y2="131" strokeWidth="0.9" opacity="0.22"/>
        <line x1="237.6" y1="131" x2="237.6" y2="209" strokeWidth="0.9" opacity="0.22"/>
        <line x1="237.6" y1="209" x2="170"   y2="248" strokeWidth="0.9" opacity="0.22"/>
        <line x1="170"   y1="248" x2="102.4" y2="209" strokeWidth="0.9" opacity="0.22"/>
        <line x1="102.4" y1="209" x2="102.4" y2="131" strokeWidth="0.9" opacity="0.22"/>
        <line x1="102.4" y1="131" x2="170"   y2="92"  strokeWidth="0.9" opacity="0.22"/>
      </g>
      <g filter="url(#e-gmd)">
        <circle cx="170"   cy="92"  r="8.5" fill="url(#e-br)" opacity="0.88"/>
        <circle cx="237.6" cy="131" r="7.5" fill="url(#e-br)" opacity="0.88"/>
        <circle cx="237.6" cy="209" r="7"   fill="url(#e-br)" opacity="0.88"/>
        <circle cx="170"   cy="248" r="8"   fill="url(#e-br)" opacity="0.88"/>
        <circle cx="102.4" cy="209" r="7"   fill="url(#e-br)" opacity="0.88"/>
        <circle cx="102.4" cy="131" r="7.5" fill="url(#e-br)" opacity="0.88"/>
      </g>
      <circle cx="170" cy="170" r="30" fill="url(#e-cd)" stroke="url(#e-pl)" strokeWidth="1.6" opacity="0.85"/>
      <circle cx="170" cy="170" r="23" fill="none" stroke="url(#e-pl)" strokeWidth="0.5" opacity="0.28"/>
      <circle cx="170" cy="170" r="11" fill="url(#e-br)" filter="url(#e-glg)" opacity="0.88"/>
    </svg>
  );
}
