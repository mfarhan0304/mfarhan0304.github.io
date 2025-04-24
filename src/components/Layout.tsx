import { ReactNode } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-cloud">
      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t">
        <div className="max-w-1100 mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-rose transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mfarhan0304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fog hover:text-rose transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:mfarhan0304@gmail.com"
              className="text-fog hover:text-rose transition-all"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 