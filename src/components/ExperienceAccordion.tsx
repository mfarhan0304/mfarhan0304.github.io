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
  <div className="mb-4">
    <button
      onClick={onToggle}
      className={`w-full px-6 py-4 rounded-xl flex items-center justify-between transition-all duration-300 border ${
        isOpen 
          ? 'bg-[#4169E1] text-white border-[#4169E1] shadow-md' 
          : 'bg-white hover:bg-gray-50 border-gray-200 shadow-sm'
      }`}
      aria-expanded={isOpen}
      aria-controls={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-0">{role}</h3>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-lg ${isOpen ? 'text-gray-200' : 'text-gray-400'}`}>{period}</span>
        <ChevronDown 
          size={20} 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
    </button>
    {isOpen && (
      <div 
        id={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-4 px-6 py-4 bg-white rounded-xl border border-gray-200 shadow-sm"
      >
        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center gap-2">
            <LinkIcon size={16} />
            <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition-colors">
              {website}
            </a>
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm border border-gray-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ExperienceAccordion; 