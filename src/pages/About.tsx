import { JSX } from 'react';

const About = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      <section className="pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">About Me</h1>
            <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise Section */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-ink mb-4">Software Development</h3>
              <p className="text-mist mb-6">
                Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript, Lua.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'Lua'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-ink mb-4">Backend Development</h3>
              <p className="text-mist mb-6">
                Skilled in building scalable microservices and high-performance APIs.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kong API Gateway', 'Kafka', 'Redis', 'Elasticsearch', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-ink mb-4">DevOps & CI/CD</h3>
              <p className="text-mist mb-6">
                Experienced in automating deployment pipelines and infrastructure management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['GitLab CI/CD', 'Fastlane', 'Systemd', 'Docker', 'Kubernetes'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Background</h2>
              <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
            </div>
            <div className="card p-10">
              <p className="text-mist leading-relaxed text-lg">
                I'm a passionate software engineer with a strong focus on backend development and system architecture. 
                My journey in tech started with building mobile applications and has evolved into creating 
                scalable microservices and high-performance systems. I'm particularly interested in 
                solving complex problems through elegant and efficient solutions.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">Education</h2>
              <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
            </div>
            <div className="card p-10">
              <h3 className="text-2xl font-bold text-ink mb-3">New York University</h3>
              <p className="text-mist mb-4 text-lg">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-ash font-medium">2016 - 2020</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 