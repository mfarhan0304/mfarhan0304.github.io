import { useMemo, useState } from 'react';
import { ExternalLink, Github, MapPin, Timer } from 'lucide-react';

type CatalogKind = 'Run' | 'Project';

export interface CatalogItem {
  kind: CatalogKind;
  title: string;
  description: string;
  meta: string;
  tags: string[];
  image?: string;
  live?: string;
  github?: string;
  featured?: boolean;
}

interface CatalogGridProps {
  items: CatalogItem[];
}

const CatalogGrid = ({ items }: CatalogGridProps): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<'All' | CatalogKind>('All');

  const filters: Array<'All' | CatalogKind> = ['All', 'Run', 'Project'];

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? items
        : items.filter((item) => item.kind === activeFilter),
    [items, activeFilter]
  );

  const kindLabel = (kind: CatalogKind) =>
    kind === 'Run' ? 'Run log' : 'Project';

  const kindColor = (kind: CatalogKind) =>
    kind === 'Run' ? 'bg-teal/10 text-teal border-teal/40' : 'bg-slate-mid/80 text-gray-300 border-slate-light/40';

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              activeFilter === f
                ? 'bg-teal/15 text-teal border-teal/40'
                : 'bg-slate-mid/60 text-gray-400 border-slate-light/30 hover:text-gray-200 hover:border-slate-light'
            }`}
          >
            {f === 'All' ? 'All' : kindLabel(f)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filtered.map((item, i) => (
          <article
            key={item.title + i}
            className={`card relative overflow-hidden group scroll-reveal ${
              item.featured ? 'border-teal/50 glow-teal' : ''
            }`}
            style={{ transitionDelay: `${0.15 + i * 0.05}s` }}
          >
            {/* Accent gradient */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(74,124,89,0.32),transparent_55%)]" />
            </div>

            {item.image && (
              <div className="h-40 w-full overflow-hidden border-b border-slate-light/40 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            )}

            <div className="p-5 space-y-3 relative z-10">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border font-fira tracking-[0.15em] uppercase ${kindColor(
                    item.kind
                  )}`}
                >
                  {kindLabel(item.kind)}
                </span>
                {item.featured && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-amber/10 text-amber border border-amber/40">
                    Showcase
                  </span>
                )}
                <span className="flex items-center gap-1 text-[11px] text-gray-500">
                  {item.kind === 'Run' ? (
                    <>
                      <Timer size={12} /> {item.meta}
                    </>
                  ) : (
                    <>
                      <MapPin size={12} /> {item.meta}
                    </>
                  )}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-dark/70 text-gray-300 border border-slate-light/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-teal transition-colors"
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-teal transition-colors"
                  >
                    <Github size={13} /> Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CatalogGrid;

