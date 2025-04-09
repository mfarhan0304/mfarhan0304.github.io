export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Hello! I'm John Smith, a passionate full-stack developer with 5+ years of
              experience building web applications. I specialize in creating intuitive and
              performant user experiences using modern technologies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Background</h2>
            <p className="text-gray-600 mb-6">
              I graduated from the University of Technology with a degree in Computer
              Science. Since then, I've worked with various startups and established
              companies, helping them build and scale their web applications.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">University of Technology • 2015-2019</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Full-Stack Web Development Certification
                </h3>
                <p className="text-gray-600">Tech Academy • 2019</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>React & React Native</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Interests</h2>
            <p className="text-gray-600 mb-6">
              Outside of coding, I enjoy hiking, photography, and contributing to open-source
              projects. I'm also passionate about teaching and mentoring other developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}