import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import ExperienceAccordion from '../components/ExperienceAccordion';

const Home = (): JSX.Element => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleExperience = (index: number) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  // Projects data
  const projects = [
    {
      title: "Emojify",
      description: "Transform your photo into an emoji with AI and have real time feed to share your cute emoji.",
      image: "/projects/emojify/1.png",
      tech: ['Supabase', 'TypeScript', 'Node.js', 'PostgreSQL', 'Real-time Channels', 'Gemini API'],
      links: {
        live: 'https://emojify-alpha.vercel.app/',
        github: 'https://github.com/mfarhan0304/emojify'
      },
      categories: ["Web Development", "LLM Integration"]
    },
    {
      title: "Pulse of Personas",
      description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
      image: "/projects/pulse/1.png",
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI API'],
      links: {
        live: 'https://pulse-of-personas.vercel.app/',
        github: 'https://github.com/mfarhan0304/pulse-of-personas'
      },
      categories: ["Web Development", "LLM Integration"]
    },
    {
      title: "NYU Indonesian Night",
      description: "Interactive cultural showcase featuring Javanese astrology and language games, bringing Indonesian heritage to life.",
      image: "/projects/indonesian/1.png",
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      links: {
        live: 'https://nyu-indonesian-night.vercel.app/',
        github: 'https://github.com/mfarhan0304/nyu-indonesian-night'
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
      {/* Hero Section */}
      <section className="pt-20 pb-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-bold text-ink mb-6 leading-tight">
              Hi, I'm <span className="text-sage underline decoration-4 decoration-sage/30 underline-offset-4">Farhan</span>
            </h1>
            <div className="text-3xl md:text-4xl font-medium mb-8 text-fog">
              <span className="text-sage">Full-Stack Developer</span>
              <span className="text-mist mx-2">•</span>
              <span className="text-ink">Problem Solver</span>
            </div>
            <p className="text-xl text-mist max-w-4xl mx-auto leading-relaxed">
              I design scalable software architectures and build robust applications end-to-end — from 
              database design to cloud deployment. With a strong focus on system design and project 
              execution, I bring ideas to life with clean, reliable code.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-charcoal text-cream rounded-lg hover:bg-sage hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-charcoal text-cream rounded-lg hover:bg-sage hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="p-3 bg-charcoal text-cream rounded-lg hover:bg-sage hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative bg-blush">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
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
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tech={project.tech}
                  links={project.links}
                  categories={project.categories}
                  size={index === 0 ? "lg" : "md"}
                />
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

      {/* Experience Section */}
      <section id="experience" className="py-20 relative bg-cloud">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
          </div>
          <div>
            <ExperienceAccordion
              role="byU Product Engineer @ Telkomsel"
              period="Jan. 2022 – Aug. 2024"
              description="Led development of a high-performance PoS and voucher system, enhanced service availability to 99.9% using Kong API Gateway with custom plugins, and transitioned architecture to microservices, accelerating development cycles by 40%. Boosted user engagement by 15% through A/B testing and drove IDR 550M+ in monthly revenue from new features."
              tech={['Kong API Gateway', 'Lua', 'Microservices', 'Firebase', 'Redis']}
              location="Jakarta, ID"
              website="www.byu.id"
              isOpen={openExperience === 0}
              onToggle={() => toggleExperience(0)}
            />
            <ExperienceAccordion
              role="Assoc. Software Engineer @ Tokopedia"
              period="Apr. 2021 – Dec. 2021"
              description="Built a real-time AI feedback platform using Kafka and FAISS, achieving improved CTR by 3%. Streamlined deployment workflows and introduced zero-downtime strategies for enhanced reliability."
              tech={['Kafka', 'FAISS', 'Systemd', 'Python', 'CI/CD']}
              location="Jakarta, ID"
              website="www.tokopedia.com"
              isOpen={openExperience === 1}
              onToggle={() => toggleExperience(1)}
            />
            <ExperienceAccordion
              role="Jr. Software Engineer @ Pinhome"
              period="Jul. 2020 – Apr. 2021"
              description="Automated iOS deployment with GitLab CI/CD and Fastlane, cutting release times by 70%. Reduced bugs by 60% with test coverage tooling and improved property search speed by optimizing Elasticsearch."
              tech={['CI/CD', 'Fastlane', 'Flutter', 'Elasticsearch', 'Python']}
              location="Jakarta, ID"
              website="www.pinhome.id"
              isOpen={openExperience === 2}
              onToggle={() => toggleExperience(2)}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4169E1]/20 to-transparent" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-taupe text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              <br />
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="inline-flex items-center px-10 py-5 text-lg font-medium text-charcoal bg-sage rounded-xl hover:bg-olive hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Send email"
            >
              <Mail size={24} className="mr-3" />
              Let's Collaborate!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;