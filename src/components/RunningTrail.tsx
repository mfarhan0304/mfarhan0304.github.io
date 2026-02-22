import { useEffect, useRef } from 'react';

const TRAIL_PATH = 'M 20,0 C 35,50 5,100 20,150 C 35,200 5,250 20,300 C 35,350 5,400 20,450 C 35,500 5,550 20,600 C 35,650 5,700 20,750 C 35,800 5,850 20,900 C 35,950 5,1000 20,1050';

const WAYPOINTS = [
  { y: 0, label: '' },
  { y: 180, label: 'About' },
  { y: 370, label: 'Work' },
  { y: 560, label: 'Projects' },
  { y: 750, label: 'Edu' },
  { y: 940, label: 'Contact' },
];

const RunningTrail = (): JSX.Element => {
  const pathRef = useRef<SVGPathElement>(null);
  const runnerRef = useRef<SVGGElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const drawnPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const runner = runnerRef.current;
    const glow = glowRef.current;
    const drawnPath = drawnPathRef.current;
    if (!path || !runner || !glow || !drawnPath) return;

    const totalLength = path.getTotalLength();
    drawnPath.style.strokeDasharray = `${totalLength}`;
    drawnPath.style.strokeDashoffset = `${totalLength}`;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.max(0, Math.min(1, window.scrollY / docHeight)) : 0;

        const point = path.getPointAtLength(progress * totalLength);
        runner.setAttribute('transform', `translate(${point.x}, ${point.y})`);
        glow.setAttribute('cx', String(point.x));
        glow.setAttribute('cy', String(point.y));

        // Draw path up to runner position
        drawnPath.style.strokeDashoffset = `${totalLength - progress * totalLength}`;

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial position
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed left-3 lg:left-6 top-0 bottom-0 w-10 pointer-events-none z-[3] hidden md:block">
      <svg
        viewBox="0 0 40 1050"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="runnerGlow">
            <stop offset="0%" stopColor="rgba(74, 124, 89, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Background trail (faint dashed) */}
        <path
          ref={pathRef}
          d={TRAIL_PATH}
          fill="none"
          stroke="rgba(74, 124, 89, 0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Drawn trail (solid, reveals with scroll) */}
        <path
          ref={drawnPathRef}
          d={TRAIL_PATH}
          fill="none"
          stroke="rgba(74, 124, 89, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Waypoint dots */}
        {WAYPOINTS.map((wp, i) => (
          <g key={i}>
            <circle
              cx="20"
              cy={wp.y}
              r="3"
              fill="none"
              stroke="rgba(74, 124, 89, 0.2)"
              strokeWidth="0.8"
            />
            {wp.label && (
              <text
                x="32"
                y={wp.y + 1.5}
                fill="rgba(139, 133, 120, 0.5)"
                fontSize="3.5"
                fontFamily="'Fira Mono', monospace"
                letterSpacing="0.05em"
              >
                {wp.label}
              </text>
            )}
          </g>
        ))}

        {/* Runner glow */}
        <circle
          ref={glowRef}
          cx="20"
          cy="0"
          r="12"
          fill="url(#runnerGlow)"
        />

        {/* Runner figure */}
        <g ref={runnerRef} transform="translate(20, 0)">
          {/* Runner body — simplified stick figure in running pose */}
          <circle cx="0" cy="-6" r="2.2" fill="#4A7C59" />
          <line x1="0" y1="-4" x2="0" y2="1" stroke="#4A7C59" strokeWidth="1.2" strokeLinecap="round" />
          {/* Legs */}
          <line x1="0" y1="1" x2="-2.5" y2="5" stroke="#4A7C59" strokeWidth="1" strokeLinecap="round" />
          <line x1="0" y1="1" x2="2.5" y2="5" stroke="#4A7C59" strokeWidth="1" strokeLinecap="round" />
          {/* Arms */}
          <line x1="0" y1="-2.5" x2="-3" y2="0" stroke="#4A7C59" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="0" y1="-2.5" x2="2" y2="-5" stroke="#4A7C59" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default RunningTrail;
