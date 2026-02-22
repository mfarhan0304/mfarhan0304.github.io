const TopographicBackground = (): JSX.Element => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 900"
        className="absolute bottom-0 left-0 w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Gradient for sky glow */}
          <radialGradient id="skyGlow" cx="70%" cy="20%" r="50%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Moon glow */}
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.15)" />
            <stop offset="60%" stopColor="rgba(6, 182, 212, 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Sky glow */}
        <rect width="1440" height="900" fill="url(#skyGlow)" />

        {/* Stars — tiny dots that twinkle */}
        {[
          { cx: 120, cy: 80, r: 1.2, delay: '0s' },
          { cx: 340, cy: 120, r: 0.8, delay: '1.5s' },
          { cx: 520, cy: 60, r: 1.0, delay: '3s' },
          { cx: 680, cy: 140, r: 0.7, delay: '0.8s' },
          { cx: 850, cy: 50, r: 1.1, delay: '2.2s' },
          { cx: 1020, cy: 100, r: 0.9, delay: '4s' },
          { cx: 1180, cy: 70, r: 1.0, delay: '1s' },
          { cx: 1320, cy: 130, r: 0.6, delay: '3.5s' },
          { cx: 200, cy: 200, r: 0.5, delay: '2.8s' },
          { cx: 760, cy: 30, r: 0.8, delay: '0.5s' },
          { cx: 950, cy: 180, r: 0.6, delay: '1.8s' },
          { cx: 1100, cy: 40, r: 0.9, delay: '4.5s' },
          { cx: 400, cy: 170, r: 0.7, delay: '3.2s' },
          { cx: 600, cy: 210, r: 0.5, delay: '2.5s' },
        ].map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#F8FAFC"
            className="star-twinkle"
            style={{ animationDelay: star.delay }}
          />
        ))}

        {/* Moon */}
        <circle cx="1100" cy="150" r="60" fill="url(#moonGlow)" />
        <circle cx="1100" cy="150" r="8" fill="rgba(248, 250, 252, 0.12)" />

        {/* Mountain Layer 1 — furthest back, tallest peaks */}
        <path
          d="M 0,650 L 80,520 L 160,580 L 280,420 L 360,480 L 440,350 L 520,400 L 620,310 L 720,380 L 800,280 L 880,350 L 960,290 L 1060,370 L 1140,320 L 1220,400 L 1300,340 L 1380,420 L 1440,380 L 1440,900 L 0,900 Z"
          fill="rgba(15, 23, 42, 0.3)"
          stroke="rgba(6, 182, 212, 0.06)"
          strokeWidth="1"
        />

        {/* Mountain Layer 2 — mid range */}
        <path
          d="M 0,700 L 100,600 L 200,650 L 320,530 L 420,580 L 500,470 L 580,530 L 680,450 L 780,520 L 860,430 L 940,500 L 1040,440 L 1120,510 L 1200,460 L 1300,530 L 1380,490 L 1440,540 L 1440,900 L 0,900 Z"
          fill="rgba(15, 23, 42, 0.5)"
          stroke="rgba(6, 182, 212, 0.08)"
          strokeWidth="0.8"
          className="mountain-layer"
          style={{ animationDelay: '0s' }}
        />

        {/* Mountain Layer 3 — closer, darker */}
        <path
          d="M 0,780 L 120,680 L 240,720 L 340,640 L 460,690 L 560,600 L 660,660 L 740,580 L 840,640 L 960,570 L 1060,630 L 1160,590 L 1260,650 L 1340,610 L 1440,660 L 1440,900 L 0,900 Z"
          fill="rgba(15, 23, 42, 0.7)"
          stroke="rgba(6, 182, 212, 0.1)"
          strokeWidth="0.6"
          className="mountain-layer"
          style={{ animationDelay: '2s' }}
        />

        {/* Foreground hills — darkest */}
        <path
          d="M 0,850 L 160,780 L 320,810 L 480,760 L 640,790 L 800,740 L 960,780 L 1120,750 L 1280,790 L 1440,760 L 1440,900 L 0,900 Z"
          fill="rgba(15, 23, 42, 0.9)"
          stroke="rgba(6, 182, 212, 0.05)"
          strokeWidth="0.5"
        />

        {/* Trail path — a winding dotted line across the mountains */}
        <path
          d="M -20,820 C 100,790 200,750 320,770 C 440,790 500,720 620,700 C 740,680 800,640 900,650 C 1000,660 1080,600 1200,580 C 1320,560 1400,530 1460,510"
          fill="none"
          stroke="rgba(6, 182, 212, 0.15)"
          strokeWidth="1.5"
          className="trail-path"
          strokeLinecap="round"
        />

        {/* Small trees on the foreground hills */}
        {[
          { x: 80, y: 830, s: 0.7 },
          { x: 140, y: 800, s: 0.5 },
          { x: 250, y: 815, s: 0.6 },
          { x: 380, y: 790, s: 0.8 },
          { x: 420, y: 780, s: 0.5 },
          { x: 560, y: 775, s: 0.7 },
          { x: 700, y: 770, s: 0.6 },
          { x: 750, y: 760, s: 0.4 },
          { x: 880, y: 765, s: 0.7 },
          { x: 1000, y: 775, s: 0.5 },
          { x: 1100, y: 760, s: 0.6 },
          { x: 1250, y: 785, s: 0.5 },
          { x: 1350, y: 770, s: 0.7 },
        ].map((tree, i) => (
          <g key={i} transform={`translate(${tree.x}, ${tree.y}) scale(${tree.s})`} className="tree-sway" style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${tree.x}px ${tree.y}px` }}>
            {/* Simple triangular pine tree */}
            <line x1="0" y1="0" x2="0" y2="-20" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" />
            <polygon points="-6,-8 6,-8 0,-28" fill="rgba(6, 182, 212, 0.06)" />
            <polygon points="-5,-14 5,-14 0,-30" fill="rgba(6, 182, 212, 0.05)" />
          </g>
        ))}

        {/* Runner silhouette on the trail — very subtle */}
        <g transform="translate(620, 688) scale(0.4)" opacity="0.12" className="runner-move">
          {/* Simplified running figure */}
          <circle cx="0" cy="-18" r="4" fill="#06B6D4" />
          <line x1="0" y1="-14" x2="0" y2="-2" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" />
          <line x1="0" y1="-2" x2="-6" y2="8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="-2" x2="6" y2="8" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="-7" y2="-4" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="5" y2="-14" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Shooting star */}
        <line
          x1="300" y1="60"
          x2="380" y2="100"
          stroke="rgba(248, 250, 252, 0.3)"
          strokeWidth="1"
          strokeLinecap="round"
          className="shooting-star"
        />
      </svg>
    </div>
  );
};

export default TopographicBackground;
