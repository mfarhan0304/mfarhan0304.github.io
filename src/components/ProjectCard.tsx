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
  <div className={`relative group ${size === 'lg' ? 'lg:col-span-2' : ''}`}>
    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl bg-white">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-2xl font-bold text-cream mb-3 tracking-wide">{title}</h3>
          <p className="text-taupe mb-4 leading-relaxed text-sm max-w-[90%]">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span key={index} className="px-3 py-1 bg-sage/20 text-sage rounded-full text-xs backdrop-blur-sm border border-sage/30">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a 
                href={links.live} 
                className="p-2.5 bg-sage/20 backdrop-blur-sm rounded-lg hover:bg-sage hover:text-white transition-all duration-300 border border-sage/30" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live site`}
              >
                <ExternalLink size={16} className="text-sage group-hover:text-white" />
              </a>
              <a 
                href={links.github} 
                className="p-2.5 bg-sage/20 backdrop-blur-sm rounded-lg hover:bg-sage hover:text-white transition-all duration-300 border border-sage/30" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${title} GitHub repository`}
              >
                <Github size={16} className="text-sage group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard; 