import { Github, ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    live: string;
    github: string;
  };
  categories?: string[];
  size?: 'md' | 'lg';
}

const ProjectCard = ({ title, description, image, tech, links, categories, size = 'md' }: ProjectCardProps): JSX.Element => (
  <div className={`relative group ${size === 'lg' ? 'lg:col-span-2' : ''}`}>
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-teal/5 bg-slate-mid border border-slate-light/20 hover:border-teal/30">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-mid to-slate-dark">
          <Code2 size={64} className="text-slate-light/40" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/95 via-slate-dark/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {categories && categories.length > 0 && (
            <span className="text-xs text-teal mb-2 block font-medium uppercase tracking-wider">{categories.join(" / ")}</span>
          )}
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed text-sm max-w-[90%]">{description}</p>
          <div className="flex justify-between items-end">
            <div className="flex flex-wrap gap-1.5">
              {tech.map((item, index) => (
                <span key={index} className="px-2.5 py-1 bg-teal/15 text-teal-light rounded-full text-xs font-medium backdrop-blur-sm border border-teal/20">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2 shrink-0 ml-3">
              {links.live && (
                <a
                  href={links.live}
                  className="p-2.5 bg-slate-light/30 backdrop-blur-sm rounded-lg hover:bg-teal hover:text-slate-dark transition-all duration-300 border border-slate-light/30 hover:border-teal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title} live site`}
                >
                  <ExternalLink size={16} className="text-gray-300 group-hover/link:text-slate-dark" />
                </a>
              )}
              <a
                href={links.github}
                className="p-2.5 bg-slate-light/30 backdrop-blur-sm rounded-lg hover:bg-teal hover:text-slate-dark transition-all duration-300 border border-slate-light/30 hover:border-teal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} GitHub repository`}
              >
                <Github size={16} className="text-gray-300 group-hover/link:text-slate-dark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
