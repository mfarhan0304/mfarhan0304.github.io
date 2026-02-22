import { ReactNode, useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-dark">
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-dark/90 backdrop-blur-md border-b border-slate-light/20 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-lg font-bold text-white hover:text-teal transition-colors"
            >
              Farhan<span className="text-teal">.</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-teal'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-mid/95 backdrop-blur-md border-b border-slate-light/20">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block w-full text-left text-sm font-medium py-2 transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-teal'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-mid border-t border-slate-light/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal transition-all duration-300 p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-teal transition-all duration-300 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="text-gray-500 hover:text-teal transition-all duration-300 p-2"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">&copy; 2026 Farhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
