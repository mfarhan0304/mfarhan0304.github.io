import { JSX } from 'react';

const About = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      <section className="pt-32 pb-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 font-bold text-ink mb-12 text-center">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise Section */}
            <div className="bg-white p-8 rounded-xl border border-blush/50">
              <h3 className="text-h4 font-semibold text-ink mb-4">Software Development</h3>
              <p className="text-fog mb-4">
                Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript, Lua.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'Lua'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-blush/50">
              <h3 className="text-h4 font-semibold text-ink mb-4">Backend Development</h3>
              <p className="text-fog mb-4">
                Skilled in building scalable microservices and high-performance APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kong API Gateway', 'Kafka', 'Redis', 'Elasticsearch', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-blush/50">
              <h3 className="text-h4 font-semibold text-ink mb-4">DevOps & CI/CD</h3>
              <p className="text-fog mb-4">
                Experienced in automating deployment pipelines and infrastructure management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['GitLab CI/CD', 'Fastlane', 'Systemd', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background Section */}
          <div className="mt-16">
            <h2 className="text-h2 font-bold text-ink mb-8 text-center">Background</h2>
            <div className="bg-white p-8 rounded-xl border border-blush/50">
              <p className="text-fog leading-relaxed">
                I'm a passionate software engineer with a strong focus on backend development and system architecture. 
                My journey in tech started with building mobile applications and has evolved into creating 
                scalable microservices and high-performance systems. I'm particularly interested in 
                solving complex problems through elegant and efficient solutions.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16">
            <h2 className="text-h2 font-bold text-ink mb-8 text-center">Education</h2>
            <div className="bg-white p-8 rounded-xl border border-blush/50">
              <h3 className="text-h4 font-semibold text-ink mb-2">New York University</h3>
              <p className="text-fog mb-4">Bachelor of Science in Computer Science</p>
              <p className="text-caption text-fog">2016 - 2020</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 