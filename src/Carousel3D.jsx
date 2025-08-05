import React, { useState, useRef, useEffect, useCallback } from 'react';
import { projects } from './projects';
import ProjectModal from './ProjectModal';

const DynamicCarousel = () => {
  const carouselRef = useRef(null);
  const containerRef = useRef(null); // Ref para el contenedor principal
  const [modalData, setModalData] = useState(null);
  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const [radius, setRadius] = useState(window.innerWidth < 768 ? 220 : 340);
  const [panelSize, setPanelSize] = useState({
    width: window.innerWidth < 768 ? 180 : 280,
    height: window.innerWidth < 768 ? 270 : 420
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setRadius(isMobile ? 220 : 340);
      setPanelSize({
        width: isMobile ? 180 : 280,
        height: isMobile ? 270 : 420
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getClientX = (e) => {
    return e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(getClientX(e));
    setStartRotation(rotationY);
    if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
  };

  //callback para mjorar rendimieento del proyecto 
  const handleDragMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = getClientX(e);
    const deltaX = currentX - startX;
    setRotationY(startRotation + deltaX * 0.5);
  }, [isDragging, startX, startRotation]);

  // Efecto para el touchmove para q no seea pasivo
  useEffect(() => {
    const node = containerRef.current;
    if (node) {
      node.addEventListener('touchmove', handleDragMove, { passive: false });
      return () => {
        node.removeEventListener('touchmove', handleDragMove, { passive: false });
      };
    }
  }, [handleDragMove]);

  const panelCount = projects.length;
  const angle = 360 / panelCount;

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-center items-center text-white p-4 md:p-8 select-none"
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      // onTouchMove es manejado por el useEffect
      onTouchEnd={handleDragEnd}
    >
      <div className="text-center z-10 mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-shadow-glow">
          Mis Proyectos
        </h2>
        <p className="text-base md:text-lg text-gray-400 font-semibold mt-2 px-3">
          Haz clic o desliza para explorar
        </p>
      </div>
      
      <div
        style={{
          width: `${panelSize.width}px`,
          height: `${panelSize.height}px`,
          perspective: '1200px',
          cursor: 'grab'
        }}
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
      >
        <div className="w-full h-full absolute" style={{ transformStyle: 'preserve-3d', transform: `rotateY(${rotationY}deg)` }}>
          {projects.map((project, index) => {
            const panelAngle = index * angle;
            return (
              <div key={project.title} className="absolute top-0 left-0" style={{
                  width: `${panelSize.width}px`,
                  height: `${panelSize.height}px`,
                  transform: `rotateY(${panelAngle}deg) translateZ(${radius}px)`,
                }}>
                <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-orange-400/30 group"
                  onClick={() => {
                    if (Math.abs(rotationY - startRotation) < 5) {
                      setModalData(project);
                    }
                  }}
                >
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover pointer-events-none"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 flex flex-col justify-end">
                    <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                    <p className="text-orange-400 font-semibold text-sm md:text-base">{project.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalData && (
        <ProjectModal project={modalData} onClose={() => setModalData(null)}/>
      )}
    </div>
  );
};

export default DynamicCarousel;