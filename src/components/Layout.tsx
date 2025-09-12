import { ReactNode } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-charcoal border-t-2 border-sage/20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-sage transition-all duration-300 p-2"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:text-sage transition-all duration-300 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="text-taupe hover:text-sage transition-all duration-300 p-2"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
          <div className="text-center mt-6">
            <p className="text-ash text-sm">© 2024 Farhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 