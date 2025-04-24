import ProjectCarousel from './ProjectCarousel';

const projects = [
  {
    title: "Pulse of Personas",
    description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
    link: "https://pulse-of-personas.vercel.app/",
    images: [
      "../projects/pulse/1.png",
      "../projects/pulse/2.png",
      "../projects/pulse/3.png",
      "../projects/pulse/4.png"
    ]
  },
  {
    title: "NYU Indonesian Night",
    description: "Interactive cultural showcase featuring Javanese astrology and language games, bringing Indonesian heritage to life.",
    link: "https://nyu-indonesian-night.vercel.app/",
    images: [
      "../projects/indonesian/1.png",
      "../projects/indonesian/2.png",
      "../projects/indonesian/3.png",
      "../projects/indonesian/4.png"
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Projects</h2>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCarousel
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 