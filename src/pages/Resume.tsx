import { JSX } from 'react';
import { Download } from 'lucide-react';

const Resume = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      <section className="pt-20 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ink">Farhan</h1>
            <a
              href="/resume.pdf"
              download
              className="btn-primary"
              aria-label="Download resume"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Summary Section */}
            <div className="lg:col-span-2">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-ink mb-4">Summary</h2>
                <div className="w-16 h-1 bg-sage mx-auto rounded-full" />
              </div>
              <div className="card p-8">
                <p className="text-mist leading-relaxed text-lg">
                  Experienced software engineer with a strong focus on backend development and system architecture.
                  Proven track record of building scalable microservices and high-performance systems.
                  Skilled in various programming languages and technologies, with a passion for solving complex problems
                  through elegant and efficient solutions.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-ink mb-4">Contact</h2>
                <div className="w-16 h-1 bg-sage mx-auto rounded-full" />
              </div>
              <div className="card p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Email</h3>
                    <a href="mailto:mfarhan0304@gmail.com" className="text-mist hover:text-sage transition-colors">
                      mfarhan0304@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Location</h3>
                    <p className="text-mist">Jakarta, Indonesia</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-2">Links</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/mfarhan0304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mist hover:text-sage transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/mfarhan0304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mist hover:text-sage transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink mb-4">Experience</h2>
              <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
            </div>
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-bold text-ink mb-2">byU Product Engineer @ Telkomsel</h3>
                <p className="text-mist mb-4 font-medium">Jan. 2022 - Aug. 2024</p>
                <p className="text-mist mb-6 leading-relaxed">
                  Led development of a high-performance PoS and voucher system, enhanced service availability to 99.9% using Kong API Gateway with custom plugins, and transitioned architecture to microservices, accelerating development cycles by 40%. Boosted user engagement by 15% through A/B testing and drove IDR 550M+ in monthly revenue from new features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kong API Gateway', 'Lua', 'Microservices', 'Firebase', 'Redis'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold text-ink mb-2">Assoc. Software Engineer @ Tokopedia</h3>
                <p className="text-mist mb-4 font-medium">Apr. 2021 – Dec. 2021</p>
                <p className="text-mist mb-6 leading-relaxed">
                  Built a real-time AI feedback platform using Kafka and FAISS, achieving improved CTR by 3%. Streamlined deployment workflows and introduced zero-downtime strategies for enhanced reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kafka', 'FAISS', 'Systemd', 'Python', 'CI/CD'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold text-ink mb-2">Jr. Software Engineer @ Pinhome</h3>
                <p className="text-mist mb-4 font-medium">Jul. 2020 – Apr. 2021</p>
                <p className="text-mist mb-6 leading-relaxed">
                  Automated iOS deployment with GitLab CI/CD and Fastlane, cutting release times by 70%. Reduced bugs by 60% with test coverage tooling and improved property search speed by optimizing Elasticsearch.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['CI/CD', 'Fastlane', 'Flutter', 'Elasticsearch', 'Python'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ink mb-4">Education</h2>
              <div className="w-20 h-1 bg-sage mx-auto rounded-full" />
            </div>
            <div className="card p-8">
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

export default Resume; 