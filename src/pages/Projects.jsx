import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://source.unsplash.com/random/800x600?ecommerce',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media managers with real-time data visualization and reporting features.',
    image: 'https://source.unsplash.com/random/800x600?dashboard',
    tech: ['React', 'D3.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, file sharing, and team chat features.',
    image: 'https://source.unsplash.com/random/800x600?task',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Forecast App',
    description:
      'Modern weather application with location-based forecasts, interactive maps, and severe weather alerts.',
    image: 'https://source.unsplash.com/random/800x600?weather',
    tech: ['React', 'OpenWeather API', 'Mapbox'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-blush"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-ink/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-rose hover:text-white transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-rose hover:text-white transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-h3 font-semibold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-fog mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blush text-ink rounded-full text-caption"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}