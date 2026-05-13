import { Github, Linkedin, Mail, MapPin, GraduationCap, Mountain, Trophy, Plane } from 'lucide-react';
import type { RefObject } from 'react';
import { useState, useEffect, useRef } from 'react';
import ExperienceAccordion from '../components/ExperienceAccordion';
import TopographicBackground from '../components/TopographicBackground';
import SectionMountainAccent from '../components/SectionMountainAccent';
import MuseumGallery from '../components/MuseumGallery';

const projects = [
  {
    title: 'Little Lore',
    description:
      'AI bedtime-story app with async LLM/TTS pipelines, content-safety checks, encrypted child PII, idempotent APIs, BullMQ job orchestration, Redis workers, and 200+ tests.',
    image: '/projects/little-lore/1.png',
    tech: ['Node.js', 'TypeScript', 'Fastify', 'Postgres', 'BullMQ', 'Redis'],
    links: {},
    categories: ['AI/ML', 'Backend'],
  },
  {
    title: 'Hero – Web3 Social Trading Platform',
    description:
      'Real-time trading platform with Go microservices for order matching, delegated wallet signing, and order book updates over WebSockets; deployed on AWS and grew to a 10K+ testing waitlist.',
    image: '/projects/hero-je/1.png',
    tech: ['Go', 'React Native', 'AWS', 'WebSockets', 'Wallet Signing', 'Web3'],
    links: {
      live: 'https://hero.je/',
    },
    categories: ['Backend', 'Web3'],
  },
  {
    title: 'MarketMind MCP',
    description:
      'Python MCP server for capital markets analysis, orchestrating market data, news, and synthesis workflows with LangGraph, FastMCP, and real-time streaming into compatible clients.',
    image: '/projects/marketmind-mcp/1.png',
    tech: ['Python', 'FastMCP', 'LangGraph', 'OpenAI SDK', 'Streaming'],
    links: {
      github: 'https://github.com/mfarhan0304/MCP-MarketMind',
    },
    categories: ['AI/ML', 'LLM Integration'],
  },
  {
    title: 'Pulse of Personas',
    description:
      'Finalist project for the Bliss Group Innovation Challenge 2025: an AI-driven marketing platform with real-time sentiment analysis and adaptive ad targeting.',
    image: '/projects/pulse/1.png',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI API'],
    links: {
      live: 'https://pulse-of-personas.vercel.app/',
      github: 'https://github.com/mfarhan0304/pulse-of-personas',
    },
    categories: ['Web Development', 'LLM Integration'],
  },
  {
    title: 'Nexus - BMC Stress Tester',
    description:
      'LLM-powered capital readiness scorer that ingests Business Model Canvas documents, runs structured OpenAI analysis, and returns investor-style feedback through an upload flow, dashboard, and coaching chatbot.',
    image: '/projects/nexus/3.png',
    tech: ['React', 'TypeScript', 'Node.js', 'OpenAI API'],
    links: {
      live: 'https://nexus-coral-beta.vercel.app/',
    },
    categories: ['Web Development', 'LLM Integration'],
  },
  {
    title: 'Langone Health MRI Simulation',
    description:
      'Docker-integrated CI/CD pipeline on AWS Fargate that runs MRI simulation workloads as on-demand serverless functions and removes manual execution steps.',
    image: '',
    tech: ['Docker', 'AWS Fargate', 'CI/CD', 'Serverless'],
    links: {},
    categories: ['Infrastructure'],
  },
  {
    title: 'Twitter Content & Engagement Agent',
    description:
      'AI agent built on OpenClaw that analyzes a target Twitter account’s timeline and topic patterns, generates contextually relatable content, and autonomously engages with the audience for growth.',
    image: '',
    tech: ['Python', 'OpenClaw', 'OpenAI API'],
    links: {
      github: 'https://github.com/mfarhan0304/OpenClaw-Content',
    },
    categories: ['AI/ML', 'Automation'],
  },
];

const skillCategories = [
  { label: 'Languages', skills: ['Go', 'Python', 'Java', 'TypeScript'] },
  { label: 'Backend APIs', skills: ['REST APIs', 'gRPC', 'WebSockets', 'Microservices', 'API Gateway'] },
  { label: 'Data & Messaging', skills: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Kafka'] },
  { label: 'AI Systems', skills: ['LLM Routing', 'MCP', 'LangGraph', 'FastMCP', 'OpenAI SDK'] },
  { label: 'Cloud & DevOps', skills: ['Docker', 'AWS', 'Cloudflare', 'CI/CD', 'Prometheus'] },
  { label: 'Systems', skills: ['Distributed Systems', 'System Design', 'RBAC', 'Observability'] },
];

const useScrollReveal = (): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries): void => {
        entries.forEach((entry): void => {
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

    return (): void => observer.disconnect();
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
              Backend Engineer • AI Systems • Runner
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
              Backend engineer with 5+ years building scalable APIs, AI-native workflows, and high-volume transaction systems.
            </p>
            <p
              className={`text-gray-500 text-sm italic mb-10 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              "Follow your heart, but take your brain with you."
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
                href="mailto:m.farhan@nyu.edu"
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
              I started my career building backend systems at Tokopedia and Telkomsel, where I worked on real-time ML feedback pipelines,
              distributed point-of-sale systems, payment gateway services, and transaction platforms serving millions of users.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Now I am pursuing an MS in Information Systems at New York University while building AI-native legal tools at Legali AI,
              where I design backend orchestration, LLM routing, streaming interfaces, multi-tenant APIs, RBAC, and billing systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am most interested in the engineering layer where reliable distributed systems meet applied AI: routing,
              orchestration, observability, cost control, and interfaces that make complex workflows feel fast.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me running, hiking, or chasing quiet views.
              Running taught me the best systems are like good training blocks: consistent, measurable, and built for the long haul.
            </p>
          </div>

          {/* Beyond Code */}
          <div className="max-w-3xl mb-16 scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-white mb-6">Beyond Code</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { Icon: Trophy, label: 'Marathon Runner' },
                { Icon: Mountain, label: 'Hiker' },
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
              role="Senior Software Engineer @ Legali AI"
              period="Nov 2025 – Present"
              description="Building backend orchestration for AI-native legal workflows at an early-stage legal AI startup."
              highlights={[
                'Architected FastAPI workflow orchestration that chains intent classification, document analysis, and drafting into guided legal-case flows.',
                'Designed a Redis-cached intent router that gates LLM calls, cutting API latency by 35% and per-session inference cost by 70%.',
                'Launched multi-tenant REST APIs with RBAC and Stripe billing across 3 pricing tiers, moving the platform from free-only to its first paid customers.',
                'Engineered WebSocket and streaming layers for a real-time voice assistant, increasing average live intake session length by 15%.',
              ]}
              tech={['Python', 'FastAPI', 'Redis', 'REST APIs', 'WebSockets', 'LLM Routing', 'RBAC', 'Stripe']}
              location="Remote – San Francisco"
              website="legali.ai"
              isOpen={openExperience === 0}
              onToggle={() => toggleExperience(0)}
            />
            <ExperienceAccordion
              role="Software Engineer @ Telkomsel"
              period="Jan 2022 – Sep 2024"
              description="Built transaction-heavy backend systems for Indonesia's largest mobile operator, supporting retail, voucher, and payment workflows."
              highlights={[
                'Led cross-team delivery for a Java Spring Boot/PostgreSQL distributed POS system across 5 teams, increasing peak-load throughput by 29% and reducing checkout failures by 40%.',
                'Built a voucher distribution system processing 2M+ monthly transactions and supporting higher voucher activation volume.',
                'Led architecture reviews for payment gateway services handling 500+ TPS at peak, aligning tradeoffs across teams to ship 2 major releases on schedule.',
                'Owned Prometheus/Grafana observability across 5+ payment services, reducing incident detection time from hours to minutes.',
              ]}
              tech={['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'API Gateway', 'Prometheus', 'Grafana']}
              location="Indonesia"
              website="www.telkomsel.com"
              isOpen={openExperience === 1}
              onToggle={() => toggleExperience(1)}
            />
            <ExperienceAccordion
              role="Associate Software Engineer @ Tokopedia"
              period="Apr 2021 – Jan 2022"
              description="Worked on experimentation and recommendation infrastructure for Indonesia's first e-commerce unicorn."
              highlights={[
                'Engineered a config-driven Go backend for A/B experiment management, replacing multi-minute deploy cycles with near-instant config updates across 5+ active experiments.',
                'Optimized large-dataset retrieval across 100M+ user profiles using FAISS vector search and Cassandra query tuning, lifting recommendation CTR by 3%.',
                'Architected a Kafka real-time ML feedback pipeline delivering sub-minute model signals to recommendation systems serving 100M+ monthly users.',
              ]}
              tech={['Go', 'Kafka', 'FAISS', 'Cassandra', 'A/B Testing', 'ML Systems']}
              location="Indonesia"
              website="www.tokopedia.com"
              isOpen={openExperience === 2}
              onToggle={() => toggleExperience(2)}
            />
            <ExperienceAccordion
              role="Junior Software Engineer @ Pinhome"
              period="Jul 2020 – Apr 2021"
              description="Improved search and release workflows for an Indonesian proptech platform."
              highlights={[
                'Tuned Elasticsearch indexing and query patterns, cutting search response times by 20% on the consumer-facing property search API.',
                'Automated mobile release workflows with GitLab CI/CD and Fastlane, reducing release-day engineering time.',
                'Added line-level test coverage visibility to merge requests, helping reduce QA rejection on mobile tickets.',
              ]}
              tech={['Elasticsearch', 'GitLab CI/CD', 'Fastlane', 'Flutter', 'Python']}
              location="Indonesia"
              website="www.pinhome.id"
              isOpen={openExperience === 3}
              onToggle={() => toggleExperience(3)}
            />
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECT MUSEUM
          ============================================ */}
      <section id="projects" className="bg-slate-mid/50 relative">
        <SectionMountainAccent position="top" variant="medium" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-8">
          <div className="scroll-reveal">
            <span className="section-label mb-3 block">03 / Project Museum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Flagship Work</h2>
          </div>
        </div>
        <MuseumGallery projects={projects} featuredCount={3} />
      </section>

      {/* ============================================
          EDUCATION SECTION
          ============================================ */}
      <section id="education" className="py-20 md:py-28 bg-slate-dark" ref={educationRef}>
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
                    <span className="text-gray-300 font-medium">Relevant Courses:</span> Operating Systems, Database Systems, Machine Learning, Predictive Analytics, Distributed Systems
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
      <section id="contact" className="py-20 md:py-28 bg-slate-mid/50" ref={contactRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 scroll-reveal">
            <span className="section-label mb-3 block">05 / Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          </div>
          <div className="max-w-2xl scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              If you want to build reliable backend systems, AI-native products, or transaction-heavy platforms, reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} className="text-teal" />
                <span>New York, United States</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:m.farhan@nyu.edu"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                m.farhan@nyu.edu
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
