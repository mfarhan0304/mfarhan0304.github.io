import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ title, description, image, tech, links, size = 'md' }) => (
  <div className={`relative group ${size === 'lg' ? 'md:col-span-2' : ''}`}>
    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transition-transform duration-500">
      <img src={image} alt={title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
        <div className="absolute bottom-0 left-0 right-0 p-8">
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
            >
              <ExternalLink size={20} className="text-white group-hover:text-rose" />
            </a>
            <a 
              href={links.github} 
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={20} className="text-white group-hover:text-rose" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceAccordion = ({ role, company, period, description, tech, location, website, isOpen, onToggle }) => (
  <div className="mb-6">
    <button
      onClick={onToggle}
      className={`w-full p-8 rounded-xl flex items-center justify-between transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-r from-rose to-rose/90 text-white shadow-lg' 
          : 'bg-white hover:bg-rose/5 text-ink border border-blush/50'
      }`}
    >
      <div className="flex-1">
        <h3 className="text-h3 font-semibold text-left tracking-wide">{role}</h3>
        <p className={`${isOpen ? 'text-white/90' : 'text-rose'} font-medium`}>{company}</p>
      </div>
      <div className="flex items-center gap-6">
        <span className={isOpen ? 'text-white/80' : 'text-fog'}>{period}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
    </button>
    
    {isOpen && (
      <div className="mt-2 bg-white p-8 rounded-xl border border-blush/50 shadow-sm">
        <div className="flex flex-wrap items-center gap-8 mb-6 text-fog">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-rose" />
            <span className="font-medium">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon size={18} className="text-rose" />
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium hover:text-rose transition-colors duration-300"
            >
              {website.replace('https://', '')}
            </a>
          </div>
        </div>
        <p className="text-fog leading-relaxed mb-8">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 bg-blush/30 text-ink rounded-full text-caption font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default function Home() {
  const [openExperience, setOpenExperience] = useState(0);

  const projects = [
    {
      title: "AI-Powered Content Platform",
      description: "A revolutionary content creation platform leveraging GPT-4 for automated writing and editing.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
      links: { github: "https://github.com", live: "https://example.com" },
      size: "lg"
    },
    {
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading platform with advanced analytics.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80",
      tech: ["React", "WebSocket", "D3.js", "Firebase"],
      links: { github: "https://github.com", live: "https://example.com" }
    },
    {
      title: "Smart Home IoT Platform",
      description: "Centralized IoT management system for smart home devices.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
      tech: ["React Native", "Node.js", "MQTT", "PostgreSQL"],
      links: { github: "https://github.com", live: "https://example.com" }
    },
    {
      title: "Social Learning Platform",
      description: "Educational platform connecting students and mentors worldwide.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      tech: ["Next.js", "GraphQL", "AWS", "Redis"],
      links: { github: "https://github.com", live: "https://example.com" },
      size: "lg"
    },
    {
      title: "Health & Fitness Tracker",
      description: "Comprehensive fitness tracking app with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80",
      tech: ["React Native", "TensorFlow.js", "Node.js", "MongoDB"],
      links: { github: "https://github.com", live: "https://example.com" }
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Advanced analytics platform for e-commerce businesses with real-time insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tech: ["React", "Redux", "Python", "BigQuery"],
      links: { github: "https://github.com", live: "https://example.com" }
    }
  ];

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      website: "https://techcorp.com",
      period: "2021 - Present",
      description: "Led development of enterprise-scale applications, mentored junior developers, and implemented microservices architecture. Improved system performance by 40% through optimization and modern architecture patterns.",
      tech: ["React", "Node.js", "AWS", "MongoDB", "Docker", "Kubernetes"]
    },
    {
      role: "Full Stack Developer",
      company: "Innovation Labs",
      location: "New York, NY",
      website: "https://innovationlabs.tech",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client projects, improved CI/CD pipelines, reduced deployment time by 40%. Led a team of 5 developers in creating a revolutionary fintech platform.",
      tech: ["Vue.js", "Python", "Docker", "PostgreSQL", "AWS", "Jenkins"]
    },
    {
      role: "Frontend Developer",
      company: "Creative Digital",
      location: "Austin, TX",
      website: "https://creativedigital.io",
      period: "2018 - 2019",
      description: "Built responsive web applications, implemented design systems, and improved web performance metrics. Reduced load time by 60% through optimization techniques.",
      tech: ["React", "TypeScript", "SASS", "Jest", "Webpack", "Redux"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blush/20 to-cloud">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-bold text-ink mb-8 leading-tight tracking-tight">
              Hi, I'm Farhun 👋
              <br />
              <span className="text-rose">Full-Stack Developer</span>
              <br />
              and Problem Solver
            </h1>
            <p className="text-fog text-lg mb-12 leading-relaxed">
              I craft elegant solutions to complex problems, specializing in building modern web applications with React, Node.js, and cloud technologies. Currently crafting digital experiences that make a difference.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full hover:bg-rose hover:text-white shadow-sm transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-full hover:bg-rose hover:text-white shadow-sm transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:farhun@example.com"
                className="p-4 bg-white rounded-full hover:bg-rose hover:text-white shadow-sm transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-cloud">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-ink mb-16 text-center tracking-wide">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-ink mb-16 text-center tracking-wide">Professional Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceAccordion
                key={index}
                {...experience}
                isOpen={openExperience === index}
                onToggle={() => setOpenExperience(openExperience === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-cloud">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-h2 font-bold text-ink mb-8 tracking-wide">Let's Work Together</h2>
          <p className="text-fog text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:farhun@example.com"
            className="inline-flex items-center px-10 py-5 bg-rose text-white rounded-full hover:bg-rose/90 shadow-lg hover:shadow-xl transition-all duration-300 text-body font-semibold tracking-wide"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}