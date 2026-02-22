import { Github, Linkedin, Mail, MapPin, GraduationCap, Mountain, Waves, Trophy, Plane } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import ExperienceAccordion from '../components/ExperienceAccordion';
import TopographicBackground from '../components/TopographicBackground';
import MuseumGallery from '../components/MuseumGallery';
import SectionMountainAccent from '../components/SectionMountainAccent';

const projects = [
  {
    title: "Emojify",
    description: "Transform your photo into an emoji with AI and have real time feed to share your cute emoji.",
    image: "/projects/emojify/1.png",
    tech: ['Supabase', 'TypeScript', 'Node.js', 'PostgreSQL', 'Gemini API'],
    links: {
      live: 'https://emojify-alpha.vercel.app/',
      github: 'https://github.com/mfarhan0304/emojify'
    },
    categories: ["Web Development", "LLM Integration"]
  },
  {
    title: "Pulse of Personas",
    description: "AI-powered marketing platform that transforms campaigns with real-time sentiment analysis and adaptive personalization.",
    image: "/projects/pulse/1.png",
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI API'],
    links: {
      live: 'https://pulse-of-personas.vercel.app/',
      github: 'https://github.com/mfarhan0304/pulse-of-personas'
    },
    categories: ["Web Development", "LLM Integration"]
  },
  {
    title: "NYU Indonesian Night",
    description: "Interactive cultural showcase featuring Javanese astrology and language games, bringing Indonesian heritage to life.",
    image: "/projects/indonesian/1.png",
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      live: 'https://nyu-indonesian-night.vercel.app/',
      github: 'https://github.com/mfarhan0304/nyu-indonesian-night'
    },
    categories: ["Web Development"]
  },
  {
    title: "IPO Performance Prediction",
    description: "Predictive analytics pipeline using textual analysis of SEC filings and social media sentiment to forecast IPO performance.",
    image: "",
    tech: ['Python', 'NLP', 'Predictive Analytics'],
    links: {
      live: '',
      github: 'https://github.com/mfarhan0304'
    },
    categories: ["AI/ML", "Data Science"]
  },
  {
    title: "IELTS Writing Assistant",
    description: "AI-powered IELTS tutor with GPT-based scoring that provides detailed feedback and band score predictions.",
    image: "",
    tech: ['Python', 'OpenAI API', 'NLP'],
    links: {
      live: '',
      github: 'https://github.com/mfarhan0304'
    },
    categories: ["AI/ML", "LLM Integration"]
  },
  {
    title: "Langone Health MRI Simulation",
    description: "Docker-integrated CI/CD pipeline on AWS with serverless compute for MRI simulation workloads.",
    image: "",
    tech: ['Docker', 'AWS', 'CI/CD'],
    links: {
      live: '',
      github: 'https://github.com/mfarhan0304'
    },
    categories: ["DevOps", "Cloud"]
  }
];

const skillCategories = [
  { label: 'Languages', skills: ['Golang', 'Python', 'JavaScript', 'TypeScript', 'Java'] },
  { label: 'Backend & Data', skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Kafka', 'Redis', 'FAISS'] },
  { label: 'AI & ML', skills: ['LLM Agents', 'OpenAI API', 'Gemini API', 'Agno', 'Predictive Analytics'] },
  { label: 'Infrastructure', skills: ['Docker', 'Azure DevOps', 'AWS', 'CI/CD', 'Microservices'] },
  { label: 'Frontend', skills: ['React', 'Node.js', 'Tailwind CSS'] },
  { label: 'Other', skills: ['System Design', 'Product Management', 'A/B Testing'] },
];

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = el.querySelectorAll('.scroll-reveal');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
};

const Home = (): JSX.Element => {
  const [openExperience, setOpenExperience] = useState<number | null>(0);

  const toggleExperience = (index: number): void => {
    setOpenExperience(openExperience === index ? null : index);
  };

  const aboutRef = useScrollReveal();
  const experienceRef = useScrollReveal();
  const educationRef = useScrollReveal();
  const contactRef = useScrollReveal();

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="bg-slate-dark">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
        {/* Topographic contour background */}
        <TopographicBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-teal/5 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <p className={`section-label mb-6 ${heroVisible ? 'clip-reveal' : 'opacity-0'}`}>
              Software Engineer
            </p>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-2 leading-[0.95] tracking-tight ${heroVisible ? 'clip-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Muhammad
            </h1>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[0.95] tracking-tight gradient-text ${heroVisible ? 'clip-reveal' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              Farhan
            </h1>
            <p
              className={`text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-4 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              Building scalable systems and AI-powered products.
              From enterprise platforms in Indonesia to cutting-edge AI in New York City.
            </p>
            <p
              className={`text-gray-500 text-sm italic mb-10 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              "Follow your heart but take your brain with you."
            </p>
            <div
              className={`flex gap-4 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '1.0s' }}
            >
              <a
                href="https://github.com/mfarhan0304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-mid text-gray-300 rounded-lg border border-slate-light/30 hover:border-teal hover:text-teal transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/mfarhan0304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-mid text-gray-300 rounded-lg border border-slate-light/30 hover:border-teal hover:text-teal transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:mfarhan0304@gmail.com"
                className="p-3 bg-slate-mid text-gray-300 rounded-lg border border-slate-light/30 hover:border-teal hover:text-teal transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION
          ============================================ */}
      <section id="about" className="py-20 md:py-28 bg-slate-mid/50 relative" ref={aboutRef}>
        <SectionMountainAccent position="top" variant="subtle" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 scroll-reveal">
            <span className="section-label mb-3 block">01 / About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
          </div>
          <div className="max-w-3xl mb-16 scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I started my career building systems at Indonesia's biggest tech companies — Tokopedia and Telkomsel — where
              I worked on real-time ML platforms, microservices architectures, and products serving millions of users.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Now I'm pursuing my MS at New York University while building AI-powered products at Legali AI,
              where I design LLM router agents and automatic agent chaining systems. I'm also the President of the
              NYU Indonesian Student Association, and an LPDP scholar.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm passionate about bridging enterprise-scale engineering with cutting-edge AI — building things
              that are both robust and intelligent.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me running marathons, hiking national parks, freediving,
              or exploring a new city. I bring the same curiosity and endurance to my engineering work
              as I do to a trail or a starting line.
            </p>
          </div>

          {/* Beyond Code */}
          <div className="max-w-3xl mb-16 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white mb-6">Beyond Code</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { Icon: Trophy, label: 'Marathon Runner' },
                { Icon: Mountain, label: 'Hiker' },
                { Icon: Waves, label: 'Freediver' },
                { Icon: Plane, label: 'Explorer' },
              ].map(({ Icon, label }, i) => (
                <div key={label} className="bg-slate-mid rounded-xl p-5 border border-slate-light/20 text-center group hover:border-teal/30 transition-all scroll-reveal" style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
                  <Icon size={24} className="text-amber mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div key={cat.label} className="bg-slate-mid rounded-xl p-6 border border-slate-light/20 scroll-reveal" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <h3 className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">{cat.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-dark/60 text-gray-300 rounded-full text-sm border border-slate-light/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          EXPERIENCE SECTION
          ============================================ */}
      <section id="experience" className="py-20 md:py-28 bg-slate-dark relative" ref={experienceRef}>
        <SectionMountainAccent position="top" variant="subtle" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 scroll-reveal">
            <span className="section-label mb-3 block">02 / Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          </div>
          <div className="max-w-4xl scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <ExperienceAccordion
              role="Software Engineer @ Legali AI"
              period="Oct 2025 – Present"
              description="Built a SaaS subscription system for the platform. Designed and implemented an LLM router agent that reduced latency by 35%. Developed automatic agent chaining for complex legal document workflows."
              tech={['Python', 'Agno', 'LLM', 'SaaS']}
              location="Remote – San Francisco"
              website="https://legali.ai/"
              isOpen={openExperience === 0}
              onToggle={() => toggleExperience(0)}
            />
            <ExperienceAccordion
              role="Product Engineer @ Telkomsel"
              period="Jan 2022 – Sep 2024"
              description="Led development of a PoS system that improved transaction speed by 29%. Transitioned architecture to microservices, accelerating development cycles by 40%. Built a voucher system that doubled revenue. Drove 17% engagement improvement through A/B testing."
              tech={['Java', 'PostgreSQL', 'Docker', 'Azure DevOps', 'Firebase', 'Microservices']}
              location="Jakarta, Indonesia"
              website="https://www.telkomsel.com"
              isOpen={openExperience === 1}
              onToggle={() => toggleExperience(1)}
            />
            <ExperienceAccordion
              role="Associate Software Engineer @ Tokopedia"
              period="Apr 2021 – Jan 2022"
              description="Built a real-time ML feedback platform using Kafka. Streamlined A/B testing workflow, cutting experiment setup time by 50%. Implemented zero-downtime deployment strategies. Optimized FAISS-based recommendation system, improving CTR by 3%."
              tech={['Golang', 'Kafka', 'FAISS', 'Cassandra', 'Linux']}
              location="Jakarta, Indonesia"
              website="https://www.tokopedia.com"
              isOpen={openExperience === 2}
              onToggle={() => toggleExperience(2)}
            />
            <ExperienceAccordion
              role="Junior Software Engineer @ Pinhome"
              period="Jul 2020 – Apr 2021"
              description="Automated iOS deployment with GitLab CI/CD and Fastlane, cutting release times by 70%. Reduced bugs by 60% with test coverage tooling and improved property search speed by optimizing Elasticsearch."
              tech={['CI/CD', 'Fastlane', 'Flutter', 'Elasticsearch', 'Python']}
              location="Jakarta, Indonesia"
              website="https://www.pinhome.id"
              isOpen={openExperience === 3}
              onToggle={() => toggleExperience(3)}
            />
            <ExperienceAccordion
              role="Part-time AI Engineer @ eftax Co., Ltd."
              period="2020"
              description="Developed AI-powered solutions for document processing and data extraction workflows."
              tech={['Python', 'Machine Learning', 'NLP']}
              location="Remote"
              website=""
              isOpen={openExperience === 4}
              onToggle={() => toggleExperience(4)}
            />
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS — MUSEUM GALLERY
          ============================================ */}
      <section id="projects" className="bg-slate-mid/50 relative">
        <SectionMountainAccent position="top" variant="medium" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-8">
          <div className="scroll-reveal">
            <span className="section-label mb-3 block">03 / Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Selected Projects</h2>
          </div>
        </div>
        <MuseumGallery projects={projects} />
      </section>

      {/* ============================================
          EDUCATION SECTION
          ============================================ */}
      <section id="education" className="py-20 md:py-28 bg-slate-dark relative" ref={educationRef}>
        <SectionMountainAccent position="top" variant="subtle" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 scroll-reveal">
            <span className="section-label mb-3 block">04 / Education</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
          </div>
          <div className="max-w-4xl space-y-8">
            {/* NYU */}
            <div className="bg-slate-mid rounded-xl p-8 border border-slate-light/20 glow-teal scroll-reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <GraduationCap size={28} className="text-teal" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">New York University</h3>
                    <span className="text-gray-500 text-sm">Sep 2024 – May 2026 (expected)</span>
                  </div>
                  <p className="text-teal font-medium mb-2">MS in Information Systems</p>
                  <p className="text-gray-300 text-sm mb-3">GPA: 3.8 / 4.0</p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-gray-300 font-medium">Relevant Courses:</span> Operating Systems, Database Systems, Machine Learning, Predictive Analytics
                  </p>
                </div>
              </div>
            </div>
            {/* ITB */}
            <div className="bg-slate-mid rounded-xl p-8 border border-slate-light/20 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal/10 rounded-lg">
                  <GraduationCap size={28} className="text-teal" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Institut Teknologi Bandung</h3>
                    <span className="text-gray-500 text-sm">Aug 2016 – Jul 2020</span>
                  </div>
                  <p className="text-teal font-medium mb-2">B.Eng in Informatics</p>
                  <p className="text-gray-300 text-sm mb-3">GPA: 3.5 / 4.0 &bull; Cum Laude</p>
                  <p className="text-gray-500 text-sm">
                    <span className="text-gray-300 font-medium">Final Project:</span> Speaker Verification ML model
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section id="contact" className="py-20 md:py-28 bg-slate-mid/50 relative" ref={contactRef}>
        <SectionMountainAccent position="top" variant="subtle" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 scroll-reveal">
            <span className="section-label mb-3 block">05 / Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          </div>
          <div className="max-w-2xl scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-teal" />
                <span>mfarhan0304@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-teal" />
                <span>New York, United States</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:mfarhan0304@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Let's Collaborate!
              </a>
              <a
                href="https://github.com/mfarhan0304"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mfarhan0304"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
