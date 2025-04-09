import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">John Smith</h1>
                <p className="text-lg text-gray-600">Full-Stack Developer</p>
              </div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download size={20} className="mr-2" />
                Download PDF
              </a>
            </div>

            <div className="prose max-w-none">
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Summary</h2>
                <p className="text-gray-600">
                  Experienced full-stack developer with a proven track record of building
                  scalable web applications. Skilled in React, Node.js, and cloud
                  technologies. Passionate about creating intuitive user experiences and
                  solving complex technical challenges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Senior Full-Stack Developer
                    </h3>
                    <p className="text-gray-600">Tech Solutions Inc. • 2020-Present</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>
                        Led development of enterprise e-commerce platform serving 100k+ users
                      </li>
                      <li>
                        Implemented microservices architecture reducing server costs by 40%
                      </li>
                      <li>Mentored junior developers and conducted code reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Full-Stack Developer
                    </h3>
                    <p className="text-gray-600">StartupCo • 2018-2020</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      <li>
                        Developed and maintained multiple client-facing applications
                      </li>
                      <li>
                        Implemented automated testing reducing bugs in production by 60%
                      </li>
                      <li>Collaborated with design team to improve UI/UX</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Frontend</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>React & React Native</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Backend</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>PostgreSQL</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    BS in Computer Science
                  </h3>
                  <p className="text-gray-600">
                    University of Technology • Graduated 2018
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}