import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, X, LayoutGrid } from 'lucide-react';

const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

interface GalleryProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: { live?: string; github?: string };
  categories: string[];
}

interface MuseumGalleryProps {
  projects: GalleryProject[];
  featuredCount?: number;
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

/* ─── All Projects Modal ─── */
const ProjectsModal = ({
  projects,
  isOpen,
  onClose,
}: {
  projects: GalleryProject[];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Gather unique categories
  const categories = ['All', ...Array.from(
    new Set(projects.flatMap((p) => p.categories))
  )];

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-dark/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-5xl mx-4 my-8 md:my-16 max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-mid border border-slate-light/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-mid/95 backdrop-blur-md border-b border-slate-light/20 px-6 md:px-8 py-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">All Projects</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-slate-light/30 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 md:px-8 pt-5 pb-2 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal/20 text-teal border-teal/40'
                  : 'bg-slate-dark/40 text-gray-500 border-slate-light/20 hover:text-gray-300 hover:border-slate-light/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="px-6 md:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <div
              key={project.title}
              id={slugify(project.title)}
              className="group bg-slate-dark/60 rounded-xl border border-slate-light/20 overflow-hidden hover:border-teal/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden bg-slate-dark">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-mid to-slate-dark">
                    <Code2 size={40} className="text-slate-light/40" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h4 className="text-lg font-bold text-white">{project.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-teal/10 text-teal rounded-full text-[11px] font-medium border border-teal/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-1">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-teal transition-colors"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-teal transition-colors"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Gallery Component ─── */
const MuseumGallery = ({ projects, featuredCount = 3 }: MuseumGalleryProps): JSX.Element => {
  const isDesktop = useMediaQuery(768);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const featured = projects.slice(0, featuredCount);

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
        const maxTranslate = (featured.length - 1) * window.innerWidth;
        setTranslateX(progress * maxTranslate);
        setCurrentIndex(Math.min(
          featured.length - 1,
          Math.round(progress * (featured.length - 1))
        ));
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop, featured.length]);

  const formatIndex = (i: number) =>
    `${String(i + 1).padStart(2, '0')} / ${String(featured.length).padStart(2, '0')}`;

  const viewAllButton = (
    <button
      onClick={() => setModalOpen(true)}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 bg-slate-mid border border-slate-light/30 hover:border-teal hover:text-teal transition-all duration-300"
    >
      <LayoutGrid size={16} />
      View All Projects ({projects.length})
    </button>
  );

  // Scroll to the project matching the URL hash on load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = featured.findIndex((p) => slugify(p.title) === hash);
    if (idx === -1) return;

    const navigate = () => {
      if (!isDesktop) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (!containerRef.current) return;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollableDistance = containerHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;
      const targetScroll =
        containerRef.current.offsetTop +
        (idx / Math.max(1, featured.length - 1)) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    };

    // Wait for full page layout before computing positions
    if (document.readyState === 'complete') {
      setTimeout(navigate, 150);
    } else {
      window.addEventListener('load', () => setTimeout(navigate, 150), { once: true });
    }
  }, [isDesktop, featured]);

  // Mobile: vertical card stack (featured only) + view all
  if (!isDesktop) {
    return (
      <>
        <div className="space-y-8 px-4 pb-10">
          {featured.map((project, i) => (
            <div key={project.title} id={slugify(project.title)} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="gallery-image-container" style={{ height: '200px' }}>
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
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-teal transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center pt-6">
            {viewAllButton}
          </div>
        </div>
        <ProjectsModal
          projects={projects}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </>
    );
  }

  // Desktop: horizontal scroll gallery (featured only) + view all
  return (
    <>
      <div
        ref={containerRef}
        style={{ height: `${featured.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Gallery Track */}
          <div
            className="gallery-track h-full"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {featured.map((project, i) => (
              <div key={project.title} id={slugify(project.title)} className="gallery-slide">
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
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal transition-colors duration-300"
                        >
                          <Github size={16} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress UI */}
          <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              {/* Dots */}
              <div className="gallery-dots">
                {featured.map((_, i) => (
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
            {viewAllButton}
          </div>
        </div>
      </div>
      <ProjectsModal
        projects={projects}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default MuseumGallery;
