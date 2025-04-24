import { JSX } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    live: string;
    github: string;
  };
  category: string;
}

const ProjectCard = ({ title, description, image, tech, links, category }: ProjectCardProps): JSX.Element => (
  <div className="relative group">
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-500">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-caption text-white/80 mb-2 block">{category}</span>
          <h3 className="text-h3 font-semibold text-white mb-3 tracking-wide">{title}</h3>
          <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span key={index} className="px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-caption backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={links.live} 
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live site`}
            >
              <ExternalLink size={20} className="text-white group-hover:text-rose" />
            </a>
            <a 
              href={links.github} 
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github size={20} className="text-white group-hover:text-rose" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = (): JSX.Element => {
  const projects = [
    {
      title: "Pulse of Personas",
      description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
      image: "/projects/pulse/1.png",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      links: {
        live: "https://pulse-of-personas.vercel.app/",
        github: "https://github.com/mfarhan0304/pulse-of-personas"
      },
      category: "Web Development"
    },
    {
      title: "NYU Indonesian Night",
      description: "Interactive cultural showcase featuring Javanese astrology and language games, bringing Indonesian heritage to life.",
      image: "/projects/indonesian/1.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://nyu-indonesian-night.vercel.app/",
        github: "https://github.com/mfarhan0304/nyu-indonesian-night"
      },
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen bg-cloud">
      <section className="pt-32 pb-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-bold text-ink mb-6 text-center">My Work</h1>
          
          <div className="mb-8">
            <p className="text-h4 text-fog max-w-3xl mx-auto text-center">
              Deployed scalable web applications and microservices, focusing on high performance and user experience.
              Collaborated in multiple projects with various clients across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 