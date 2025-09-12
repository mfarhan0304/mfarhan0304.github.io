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
    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl bg-white">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-sm text-taupe mb-3 block font-medium">{category}</span>
          <h3 className="text-2xl font-bold text-cream mb-3 tracking-wide">{title}</h3>
          <p className="text-taupe mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
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
      <section className="pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">My Work</h1>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
          </div>
          
          <div className="mb-12">
            <p className="text-xl text-mist max-w-4xl mx-auto text-center leading-relaxed">
              Deployed scalable web applications and microservices, focusing on high performance and user experience.
              Collaborated in multiple projects with various clients across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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