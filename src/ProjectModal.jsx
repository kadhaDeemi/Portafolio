import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Database, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const techInfo = {
    'HTML': {
      logo: 'https://cdn.simpleicons.org/html5/E44D26',
      style: 'bg-[#E44D26]/10 text-[#E44D26] border-[#E44D26]/30'
    },
    'CSS': {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      style: 'bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/30'
    },
    'JavaScript': {
      logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
      style: 'bg-[#3E371D]/80 text-[#F7DF1E] border-gray-700/50'
    },
    'React': {
      logo: 'https://cdn.simpleicons.org/react/61DAFB',
      style: 'bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/30'
    },
    'Python': {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      style: 'bg-[#306998]/10 text-[#306998] border-[#306998]/30'
    },
    'Django': {
      logo: 'https://cdn.simpleicons.org/django/05df72',
      style: 'bg-[#197d57]/20 text-[#092E20] dark:text-green-400 border-green-400/30'
    },
    'Bootstrap': {
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      style: 'bg-[#7952B3]/10 text-[#7952B3] border-[#7952B3]/30'
    },
    'JQuery': {
      logo: 'https://cdn.simpleicons.org/jquery/0769AD',
      style: 'bg-[#0769AD]/10 text-[#0769AD] border-[#0769AD]/30'
    },
    'SQL': {
      icon: <Database size={16} className="text-gray-400" />,
      style: 'bg-gray-500/10 text-gray-400 border-gray-500/30'
    },
    'OracleDB': {
      icon: <Database size={16} className="text-red-500" />,
      style: 'bg-red-500/10 text-red-500 border-red-500/30'
    },
    'JavaScript (JSX)': 'React',
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? project.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    const isLastImage = currentIndex === project.images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}>
      <div className="bg-gray-800 text-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full md:w-1/2 group">
          <img src={`/${project.images[currentIndex]}`} alt={`${project.title} - imagen ${currentIndex + 1}`} className="w-full h-64 md:h-full object-cover"/>
          {project.images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-3 -translate-y-1/2 p-2 rounded-full text-white bg-black/30 border border-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:border-white/50 hover:scale-110">
                <ChevronLeft size={24} />
              </button>
              <button onClick={goToNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 p-2 rounded-full text-white bg-black/30 border border-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50 hover:border-white/50 hover:scale-110">
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <div className="p-8 flex flex-col flex-grow overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold text-orange-400">{project.title}</h2>
              <p className="text-gray-400">{project.category}</p>
            </div>
            <button onClick={onClose}
              className="p-2 rounded-full text-gray-400 border-2 border-transparent transform transition-all duration-300 hover:text-red-500 hover:border-red-500/50 hover:scale-110"
              title="Cerrar">
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Tecnologías Usadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => {
                let info = techInfo[tag];
                if (typeof info === 'string') {
                  info = techInfo[info];
                }
                const defaultStyle = 'bg-gray-700 text-gray-300 border-gray-600';
                return (
                  <div key={tag}
                    className={`flex items-center gap-x-2 rounded-full text-xs px-3 py-1.5 font-medium shadow-sm border backdrop-blur-sm transition-transform hover:scale-105 ${info?.style || defaultStyle}`}>
                    {info?.logo && <img src={info.logo} alt={tag} className="size-4" />}
                    {info?.icon}
                    <span>{tag}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-auto pt-6">
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 text-white border border-gray-600 shadow-lg transform transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:scale-110"
                title="Ver Demo">
                <ExternalLink size={20} />
              </a>
            ) : (
              <div className="p-3 rounded-full bg-gray-900 text-gray-600 border border-gray-700 cursor-not-allowed" title="Demo no disponible">
                <ExternalLink size={20} />
              </div>
            )}
            {project.repoUrl && project.repoUrl !== '#' ? (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 text-white border border-gray-600 shadow-lg transform transition-all duration-300 hover:bg-orange-500/60 hover:shadow-orange-500/20 hover:scale-110"
                title="Ver Código en GitHub">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-5 h-5" />
              </a>
            ) : (
              <div className="p-3 rounded-full bg-gray-900 text-gray-600 border border-gray-700 cursor-not-allowed" title="Código no disponible">
                <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-5 h-5 opacity-40" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;