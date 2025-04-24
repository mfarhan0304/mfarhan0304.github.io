import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    live: string;
    github: string;
  };
  size?: 'md' | 'lg';
}

const ProjectCard = ({ title, description, image, tech, links, size = 'md' }: ProjectCardProps): JSX.Element => (
  <div className={`relative group ${size === 'lg' ? 'md:col-span-2' : ''}`}>
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-500">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-semibold text-white mb-2 tracking-wide">{title}</h3>
          <p className="text-gray-200 mb-2 leading-relaxed text-sm max-w-[90%]">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-1.5">
              {tech.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-xs backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <a 
                href={links.live} 
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live site`}
              >
                <ExternalLink size={14} className="text-white group-hover:text-rose" />
              </a>
              <a 
                href={links.github} 
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${title} GitHub repository`}
              >
                <Github size={14} className="text-white group-hover:text-rose" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard; 