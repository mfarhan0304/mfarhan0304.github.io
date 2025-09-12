import { ChevronDown, MapPin, Link as LinkIcon } from 'lucide-react';

interface ExperienceAccordionProps {
  role: string;
  period: string;
  description: string;
  tech: string[];
  location: string;
  website: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ExperienceAccordion = ({ 
  role, 
  period, 
  description, 
  tech, 
  location, 
  website, 
  isOpen, 
  onToggle 
}: ExperienceAccordionProps): JSX.Element => (
  <div className="mb-6">
    <button
      onClick={onToggle}
      className={`w-full px-8 py-6 rounded-2xl flex items-center justify-between transition-all duration-300 border-2 ${
        isOpen 
          ? 'bg-sage text-cream border-sage shadow-lg' 
          : 'bg-white hover:bg-blush border-taupe/30 shadow-md hover:shadow-lg'
      }`}
      aria-expanded={isOpen}
      aria-controls={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-left">
        <h3 className="text-xl font-bold mb-0">{role}</h3>
      </div>
      <div className="flex items-center gap-6">
        <span className={`text-lg font-medium ${isOpen ? 'text-cream' : 'text-mist'}`}>{period}</span>
        <ChevronDown 
          size={24} 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
    </button>
    {isOpen && (
      <div 
        id={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-6 px-8 py-6 bg-white rounded-2xl border-2 border-taupe/30 shadow-lg"
      >
        <div className="flex items-center gap-2 text-mist mb-6">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span className="font-medium">{location}</span>
          </div>
          <span className="mx-3">•</span>
          <div className="flex items-center gap-2">
            <LinkIcon size={18} />
            <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors font-medium">
              {website}
            </a>
          </div>
        </div>
        <p className="text-mist mb-6 leading-relaxed text-lg">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tech.map((item, index) => (
            <span key={index} className="px-4 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium border border-sage/20">
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ExperienceAccordion; 