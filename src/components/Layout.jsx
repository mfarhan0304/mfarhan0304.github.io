import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Chatbot from './Chatbot';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cloud">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-1100 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="text-h3 font-bold text-ink">
                Farhun
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'text-rose' : 'text-fog'} hover:text-rose transition-all`
                }
              >
                About
              </NavLink>
              <a
                href="#projects"
                className="text-fog hover:text-rose transition-all"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-fog hover:text-rose transition-all"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-fog hover:text-rose transition-all"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-fog hover:text-ink transition-all"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-rose' : 'text-fog'
                  } block px-3 py-2 hover:text-rose transition-all`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <a
                href="#projects"
                className="block px-3 py-2 text-fog hover:text-rose transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-fog hover:text-rose transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-fog hover:text-rose transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-cloud border-t">
        <div className="max-w-1100 mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-fog hover:text-ink transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-fog hover:text-ink transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:farhun@example.com" className="text-fog hover:text-ink transition-all">
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-8 text-center text-fog">
            <p>&copy; {new Date().getFullYear()} Farhun. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}