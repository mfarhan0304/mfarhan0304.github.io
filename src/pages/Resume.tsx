import { JSX } from 'react';
import { Download } from 'lucide-react';

const Resume = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      <section className="pt-32 pb-16">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-h1 font-bold text-ink text-center">Farhan</h1>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-sm font-medium text-white bg-rose hover:bg-rose/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose"
              aria-label="Download resume"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Summary Section */}
            <div className="md:col-span-2">
              <h2 className="text-h2 font-bold text-ink mb-8 text-center">Summary</h2>
              <div className="bg-white p-8 rounded-xl border border-blush/50">
                <p className="text-fog leading-relaxed">
                  Experienced software engineer with a strong focus on backend development and system architecture.
                  Proven track record of building scalable microservices and high-performance systems.
                  Skilled in various programming languages and technologies, with a passion for solving complex problems
                  through elegant and efficient solutions.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-h2 font-bold text-ink mb-8 text-center">Contact</h2>
              <div className="bg-white p-8 rounded-xl border border-blush/50">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-h4 font-semibold text-ink mb-1">Email</h3>
                    <a href="mailto:mfarhan0304@gmail.com" className="text-fog hover:text-rose transition-colors">
                      mfarhan0304@gmail.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-h4 font-semibold text-ink mb-1">Location</h3>
                    <p className="text-fog">Jakarta, Indonesia</p>
                  </div>
                  <div>
                    <h3 className="text-h4 font-semibold text-ink mb-1">Links</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/mfarhan0304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fog hover:text-rose transition-colors"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com/in/mfarhan0304"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fog hover:text-rose transition-colors"
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
          <div className="mt-16">
            <h2 className="text-h2 font-bold text-ink mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-blush/50">
                <h3 className="text-h4 font-semibold text-ink mb-2">byU Product Engineer @ Telkomsel</h3>
                <p className="text-fog mb-4">Jan. 2022 - Aug. 2024</p>
                <p className="text-fog mb-4">
                  Led development of a high-performance PoS and voucher system, enhanced service availability to 99.9% using Kong API Gateway with custom plugins, and transitioned architecture to microservices, accelerating development cycles by 40%. Boosted user engagement by 15% through A/B testing and drove IDR 550M+ in monthly revenue from new features.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kong API Gateway', 'Lua', 'Microservices', 'Firebase', 'Redis'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-blush/50">
                <h3 className="text-h4 font-semibold text-ink mb-2">Assoc. Software Engineer @ Tokopedia</h3>
                <p className="text-fog mb-4">Apr. 2021 – Dec. 2021</p>
                <p className="text-fog mb-4">
                  Built a real-time AI feedback platform using Kafka and FAISS, achieving improved CTR by 3%. Streamlined deployment workflows and introduced zero-downtime strategies for enhanced reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kafka', 'FAISS', 'Systemd', 'Python', 'CI/CD'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-blush/50">
                <h3 className="text-h4 font-semibold text-ink mb-2">Jr. Software Engineer @ Pinhome</h3>
                <p className="text-fog mb-4">Jul. 2020 – Apr. 2021</p>
                <p className="text-fog mb-4">
                  Automated iOS deployment with GitLab CI/CD and Fastlane, cutting release times by 70%. Reduced bugs by 60% with test coverage tooling and improved property search speed by optimizing Elasticsearch.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['CI/CD', 'Fastlane', 'Flutter', 'Elasticsearch', 'Python'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 bg-rose/10 text-rose rounded-full text-caption">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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

export default Resume; 