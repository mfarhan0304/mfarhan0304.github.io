interface SectionMountainAccentProps {
  position?: 'top' | 'bottom';
  variant?: 'subtle' | 'medium';
}

const SectionMountainAccent = ({ position = 'bottom', variant = 'subtle' }: SectionMountainAccentProps): JSX.Element => {
  const opacity = variant === 'subtle' ? 0.4 : 0.6;
  const flip = position === 'top' ? 'rotate(180deg)' : undefined;

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none overflow-hidden"
      style={{
        [position]: 0,
        height: '120px',
        transform: flip,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        {/* Distant ridge */}
        <path
          d="M 0,80 L 120,50 L 240,65 L 360,35 L 480,55 L 600,25 L 720,45 L 840,30 L 960,50 L 1080,20 L 1200,40 L 1320,30 L 1440,45 L 1440,120 L 0,120 Z"
          fill="rgba(15, 23, 42, 0.5)"
          stroke="rgba(6, 182, 212, 0.06)"
          strokeWidth="0.5"
        />
        {/* Closer ridge */}
        <path
          d="M 0,100 L 180,75 L 360,90 L 540,70 L 720,85 L 900,65 L 1080,80 L 1260,70 L 1440,85 L 1440,120 L 0,120 Z"
          fill="rgba(15, 23, 42, 0.8)"
          stroke="rgba(6, 182, 212, 0.04)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default SectionMountainAccent;
