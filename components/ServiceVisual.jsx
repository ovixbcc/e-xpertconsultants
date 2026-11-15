// Small, light, looping line-art animation for each service page.
export default function ServiceVisual({ slug }) {
  return (
    <svg className={`sv sv-${slug}`} viewBox="0 0 360 240" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="svg-line" x1="0" x2="1">
          <stop offset="0" stopColor="#0B63C4" />
          <stop offset="1" stopColor="#7CC4FF" />
        </linearGradient>
      </defs>
      <circle className="sv-halo" cx="180" cy="120" r="110" />
      {slug === 'market-research-business-analysis' && (
        <g>
          <path className="sv-base" d="M50 190H310" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} className="sv-bar" x={70 + i * 46} y={190 - (30 + i * 22)} width="22" height={30 + i * 22} rx="5" style={{ '--d': `${i * 0.18}s` }} />
          ))}
          <path className="sv-trend" pathLength="100" d="M81 150 L127 128 L173 110 L219 84 L265 58" />
          <g className="sv-lens">
            <circle cx="0" cy="0" r="26" />
            <path d="M19 19 L38 38" />
          </g>
        </g>
      )}
      {slug === 'marketing-sales-growth' && (
        <g>
          <path className="sv-funnel" d="M70 50 H290 L222 128 V182 L138 196 V128 Z" />
          <path className="sv-line" d="M95 78 H265 M120 106 H240" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} className="sv-drop" cx={110 + (i % 3) * 70} cy="40" r="4" style={{ '--d': `${i * 0.45}s`, '--x': `${(i % 3 === 0 ? 1 : i % 3 === 2 ? -1 : 0) * 70}px` }} />
          ))}
          <path className="sv-trend" pathLength="100" d="M250 200 L280 176 L300 182 L330 150" />
        </g>
      )}
      {slug === 'technical-product-development' && (
        <g>
          <rect className="sv-frame" x="60" y="40" width="240" height="160" rx="14" />
          <path className="sv-line" d="M60 66 H300" />
          <circle className="sv-dotl" cx="76" cy="53" r="3" /><circle className="sv-dotl" cx="88" cy="53" r="3" /><circle className="sv-dotl" cx="100" cy="53" r="3" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} className="sv-code" x={84 + (i % 2) * 18} y={86 + i * 22} width={[120, 90, 140, 70][i]} height="8" rx="4" style={{ '--d': `${i * 0.35}s` }} />
          ))}
          <rect className="sv-block" x="232" y="86" width="48" height="48" rx="10" />
          <path className="sv-tick" pathLength="100" d="M244 110 l9 9 l16 -18" />
          <rect className="sv-prog-bg" x="84" y="176" width="196" height="6" rx="3" />
          <rect className="sv-prog" x="84" y="176" width="196" height="6" rx="3" />
        </g>
      )}
      {slug === 'project-management' && (
        <g>
          {[0, 1, 2, 3, 4].map((i) => <path key={i} className="sv-grid" d={`M${90 + i * 50} 40 V200`} />)}
          {[
            [90, 70, 'Plan'], [130, 90, 'Build'], [190, 70, 'Test'], [250, 40, 'Go-live'],
          ].map(([x, w, l], i) => (
            <g key={l}>
              <text className="sv-txt" x="40" y={74 + i * 38}>{l}</text>
              <rect className="sv-gbar" x={x} y={62 + i * 38} width={w} height="14" rx="7" style={{ '--d': `${i * 0.3}s` }} />
            </g>
          ))}
          <g className="sv-today"><path d="M90 46 V196" /><circle cx="90" cy="46" r="4" /></g>
        </g>
      )}
      {slug === 'branding-pr' && (
        <g>
          {[0, 1, 2].map((i) => <circle key={i} className="sv-ring" cx="180" cy="120" r="40" style={{ '--d': `${i * 1}s` }} />)}
          <path className="sv-star" d="M180 92 l8 18 20 2 -15 13 5 20 -18 -10 -18 10 5 -20 -15 -13 20 -2z" />
          {[[70, 70], [295, 80], [80, 185], [285, 180]].map(([x, y], i) => (
            <g key={i} className="sv-node" style={{ '--d': `${i * 0.4}s` }}>
              <path className="sv-link" d={`M180 120 L${x} ${y}`} pathLength="100" />
              <circle cx={x} cy={y} r="9" />
            </g>
          ))}
        </g>
      )}
      {slug === 'automation-excellence' && (
        <g>
          <path id="sv-pipe" className="sv-pipe" d="M50 150 C 100 150, 100 90, 150 90 S 210 150, 260 150 S 300 90, 320 90" />
          {[[50, 150], [150, 90], [260, 150], [320, 90]].map(([x, y], i) => (
            <circle key={i} className="sv-stop" cx={x} cy={y} r="9" style={{ '--d': `${i * 0.75}s` }} />
          ))}
          <circle className="sv-runner" r="4">
            <animateMotion dur="3s" repeatCount="indefinite" rotate="auto"><mpath href="#sv-pipe" /></animateMotion>
          </circle>
          <g transform="translate(180 192)">
            <g className="sv-gear">
              <circle r="12" />
              <path d="M0 -20 V-14 M0 14 V20 M-20 0 H-14 M14 0 H20 M-14 -14 l4 4 M10 10 l4 4 M-14 14 l4 -4 M10 -10 l4 -4" />
            </g>
          </g>
        </g>
      )}
    </svg>
  );
}
