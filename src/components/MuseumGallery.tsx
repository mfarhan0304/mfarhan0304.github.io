import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

interface GalleryProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: { live: string; github: string };
  categories: string[];
}

interface MuseumGalleryProps {
  projects: GalleryProject[];
}

const useMediaQuery = (breakpoint: number): boolean => {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return matches;
};

const MuseumGallery = ({ projects }: MuseumGalleryProps): JSX.Element => {
  const isDesktop = useMediaQuery(768);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!containerRef.current) {
          ticking = false;
          return;
        }
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableDistance = containerHeight - viewportHeight;

        if (scrollableDistance <= 0) {
          ticking = false;
          return;
        }

        const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));
        const maxTranslate = (projects.length - 1) * window.innerWidth;
        setTranslateX(progress * maxTranslate);
        setCurrentIndex(Math.min(
          projects.length - 1,
          Math.round(progress * (projects.length - 1))
        ));
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop, projects.length]);

  const formatIndex = (i: number) =>
    `${String(i + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;

  // Mobile: vertical card stack
  if (!isDesktop) {
    return (
      <div className="space-y-12 px-4">
        {projects.map((project, i) => (
          <div key={project.title} className="scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="gallery-image-container" style={{ height: '250px' }}>
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-mid to-slate-dark">
                  <Code2 size={48} className="text-slate-light/40" />
                </div>
              )}
            </div>
            <div className="mt-4 space-y-3">
              <span className="gallery-index">{formatIndex(i)}</span>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-teal/10 text-teal rounded-full text-xs font-medium border border-teal/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-teal transition-colors"
                >
                  <Github size={14} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop: horizontal scroll gallery
  return (
    <div
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Gallery Track */}
        <div
          className="gallery-track h-full"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {projects.map((project, i) => (
            <div key={project.title} className="gallery-slide">
              <div className="gallery-slide-inner">
                {/* Image */}
                <div className="gallery-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-mid to-slate-dark">
                      <Code2 size={80} className="text-slate-light/30" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="gallery-info">
                  <span className="gallery-index">{formatIndex(i)}</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-teal/10 text-teal rounded-full text-xs font-medium border border-teal/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal transition-colors duration-300"
                      >
                        <ExternalLink size={16} /> View Live
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal transition-colors duration-300"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress UI */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6">
          {/* Dots */}
          <div className="gallery-dots">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`gallery-dot ${i === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
          {/* Counter */}
          <span className="gallery-index">
            {formatIndex(currentIndex)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MuseumGallery;
