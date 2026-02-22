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
      className={`w-full px-6 sm:px-8 py-5 rounded-xl flex items-center justify-between transition-all duration-300 border ${
        isOpen
          ? 'bg-slate-mid border-teal/40 shadow-lg'
          : 'bg-slate-mid/60 hover:bg-slate-mid border-slate-light/20 hover:border-slate-light/40'
      }`}
      aria-expanded={isOpen}
      aria-controls={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="text-left">
        <h3 className={`text-lg font-bold ${isOpen ? 'text-teal' : 'text-white'}`}>{role}</h3>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className={`text-sm font-medium hidden sm:inline ${isOpen ? 'text-gray-300' : 'text-gray-500'}`}>{period}</span>
        <ChevronDown
          size={20}
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal' : 'text-gray-500'}`}
        />
      </div>
    </button>
    <div
      id={`experience-${role.toLowerCase().replace(/\s+/g, '-')}`}
      className={`accordion-content mt-2 ${isOpen ? 'open' : ''}`}
    >
      <div>
        <div className="px-6 sm:px-8 py-6 bg-slate-mid rounded-xl border border-slate-light/20">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500 mb-5 text-sm">
            <span className="text-gray-300 sm:hidden">{period}</span>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
            {website && (
              <>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5">
                  <LinkIcon size={16} />
                  <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                    {website}
                  </a>
                </div>
              </>
            )}
          </div>
          <p className="text-gray-300 mb-5 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-3 py-1.5 bg-teal/10 text-teal rounded-full text-xs font-medium border border-teal/20">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceAccordion;
