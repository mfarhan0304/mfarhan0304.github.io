import { JSX, useState, useMemo } from 'react';
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
  categories: string[];
}

const ProjectCard = ({ title, description, image, tech, links, categories }: ProjectCardProps): JSX.Element => (
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
          <span className="text-sm text-taupe mb-3 block font-medium">{categories.join(", ")}</span>
          <h3 className="text-2xl font-bold text-cream mb-3 tracking-wide">{title}</h3>
          <p className="text-taupe mb-6 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span key={index} className="px-3 py-1.5 bg-sage/40 text-cream rounded-full text-sm font-medium backdrop-blur-sm border border-sage/50 shadow-lg">
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a 
              href={links.live} 
              className="flex items-center gap-2 px-4 py-2.5 bg-sage/40 backdrop-blur-sm rounded-lg hover:bg-sage hover:text-white transition-all duration-300 border border-sage/50 shadow-lg group/link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visit ${title} live site`}
            >
              <ExternalLink size={16} className="text-cream group-hover/link:text-white" />
              <span className="text-sm font-medium text-cream group-hover/link:text-white">Live Demo</span>
            </a>
            <a 
              href={links.github} 
              className="flex items-center gap-2 px-4 py-2.5 bg-sage/40 backdrop-blur-sm rounded-lg hover:bg-sage hover:text-white transition-all duration-300 border border-sage/50 shadow-lg group/link" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${title} GitHub repository`}
            >
              <Github size={16} className="text-cream group-hover/link:text-white" />
              <span className="text-sm font-medium text-cream group-hover/link:text-white">GitHub</span>
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
      title: "Emojify",
      description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
      image: "/projects/emojify/1.png",
      tech: ["Supabase", "TypeScript", "Node.js", "PostgreSQL", "Real-time Channels", "Gemini API"],
      links: {
        live: "https://emojify-alpha.vercel.app/",
        github: "https://github.com/mfarhan0304/emojify"
      },
      categories: ["Web Development", "LLM Integration"]
    },
    {
      title: "Pulse of Personas",
      description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
      image: "/projects/pulse/1.png",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      links: {
        live: "https://pulse-of-personas.vercel.app/",
        github: "https://github.com/mfarhan0304/pulse-of-personas"
      },
      categories: ["Web Development", "LLM Integration"]
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
      categories: ["Web Development"]
    }
  ];

  // Get unique categories from all projects
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    projects.forEach(project => {
      project.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories).sort();
  }, [projects]);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => 
      project.categories.includes(selectedCategory)
    );
  }, [projects, selectedCategory]);

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

          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'All'
                    ? 'bg-sage text-white shadow-lg'
                    : 'bg-white text-ink border-2 border-sage/30 hover:border-sage hover:bg-sage/10'
                }`}
              >
                All ({projects.length})
              </button>
              {allCategories.map((category) => {
                const count = projects.filter(project => 
                  project.categories.includes(category)
                ).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-sage text-white shadow-lg'
                        : 'bg-white text-ink border-2 border-sage/30 hover:border-sage hover:bg-sage/10'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-mist mb-4">No projects found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-2.5 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage/90 transition-all duration-300"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects; 