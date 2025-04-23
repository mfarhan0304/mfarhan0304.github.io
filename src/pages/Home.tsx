import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

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

interface ExperienceAccordionProps {
  role: string;
  period: string;
  description: string;
  tech: string[];
  location: string;
  website: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceAccordion = ({ 
  role, 
  period, 
  description, 
  tech, 
  location, 
  website, 
  isOpen, 
  onToggle 
}: ExperienceAccordionProps): JSX.Element => (
  <div className="mb-6">
    <button
      onClick={onToggle}
      className={`w-full p-8 rounded-xl flex items-center justify-between transition-all duration-300 ${
        isOpen 
          ? 'bg-gradient-to-r from-rose to-rose/90 text-white shadow-lg' 
          : 'bg-white hover:bg-rose/5 text-ink border border-blush/50'
      }`}
      aria-expanded={isOpen}
      aria-controls={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-left">
        <h3 className="text-h4 font-semibold mb-1">{role}</h3>
        <p className="text-caption text-fog">{period}</p>
      </div>
      <ChevronDown 
        size={24} 
        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    {isOpen && (
      <div 
        id={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-4 p-8 bg-white rounded-xl border border-blush/50"
      >
        <div className="flex items-center gap-2 text-fog mb-4">
          <MapPin size={16} />
          <span>{location}</span>
          <span className="mx-2">•</span>
          <LinkIcon size={16} />
          <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-rose transition-colors">
            {website}
          </a>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Home = (): JSX.Element => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  const toggleExperience = (index: number) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cloud">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-bold text-ink mb-6 text-center">
            Hi, I'm <span className="text-rose">Farhan</span>
          </h1>
          <p className="text-h4 text-fog mb-8 max-w-2xl mx-auto text-center">
            A passionate full-stack developer creating beautiful and functional web applications.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-rose transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-ink mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Pulse of Personas"
              description="AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization."
              image="/projects/pulse/1.png"
              tech={['Node.js', 'MCP', 'React', 'TypeScript', 'MongoDB']}
              links={{
                live: 'https://pulse-of-personas.vercel.app/',
                github: 'https://github.com/mfarhan0304/pulse-of-personas'
              }}
              size="lg"
            />
            <ProjectCard
              title="NYU Indonesian Night"
              description="Interactive cultural showcase featuring Javanese astrology and language games, bringing Indonesian heritage to life."
              image="/projects/indonesian/1.png"
              tech={['React', 'TypeScript', 'Tailwind CSS']}
              links={{
                live: 'https://nyu-indonesian-night.vercel.app/',
                github: 'https://github.com/mfarhan0304/nyu-indonesian-night'
              }}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-ink mb-12 text-center">Professional Experience</h2>
          <div>
            <ExperienceAccordion
              role="byU Product Engineer @ Telkomsel"
              period="Jan. 2022 - Aug. 2024"
              description="Led development of a high-performance PoS and voucher system, enhanced service availability to 99.9% using Kong API Gateway with custom plugins, and transitioned architecture to microservices, accelerating development cycles by 40%. Boosted user engagement by 15% through A/B testing and drove IDR 550M+ in monthly revenue from new features."
              tech={['Kong API Gateway', 'Lua', 'Microservices', 'Firebase', 'Redis']}
              location="Jakarta, ID"
              website="https://www.byu.id"
              isOpen={openExperience === 0}
              onToggle={() => toggleExperience(0)}
            />
            <ExperienceAccordion
              role="Assoc. Software Engineer @ Tokopedia"
              period="Apr. 2021 – Dec. 2021"
              description="Built a real-time AI feedback platform using Kafka and FAISS, achieving improved CTR by 3%. Streamlined deployment workflows and introduced zero-downtime strategies for enhanced reliability."
              tech={['Kafka', 'FAISS', 'Systemd', 'Python', 'CI/CD']}
              location="Jakarta, ID"
              website="https://www.tokopedia.com"
              isOpen={openExperience === 1}
              onToggle={() => toggleExperience(1)}
            />
            <ExperienceAccordion
              role="Jr. Software Engineer @ Pinhome"
              period="Jul. 2020 – Apr. 2021"
              description="Automated iOS deployment with GitLab CI/CD and Fastlane, cutting release times by 70%. Reduced bugs by 60% with test coverage tooling and improved property search speed by optimizing Elasticsearch."
              tech={['CI/CD', 'Fastlane', 'Flutter', 'Elasticsearch', 'Python']}
              location="Jakarta, ID"
              website="https://www.pinhome.id"
              isOpen={openExperience === 2}
              onToggle={() => toggleExperience(2)}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold text-ink mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-h4 text-fog mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-rose hover:bg-rose/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose"
              aria-label="Send email"
            >
              <Mail size={20} className="mr-2" />
              Let's Collaborate!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 