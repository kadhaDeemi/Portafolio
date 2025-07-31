import React, { useState, useRef } from 'react';
import { projects } from './projects';
import ProjectModal from './ProjectModal';

const DynamicCarousel = () => {
  const carouselRef = useRef(null);
  const [modalData, setModalData] = useState(null);

  const [rotationY, setRotationY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault(); 
    setIsDragging(true);
    setStartX(e.clientX);
    setStartRotation(rotationY);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const newRotation = startRotation + deltaX * 0.5; 
    setRotationY(newRotation);
  };

  const panelCount = projects.length;
  const angle = 360 / panelCount;
  const radius = 340; 

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white p-8 select-none" onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
      <div className="text-center z-10 mb-10 md:mb-20">
        <h2 className="text-xl md:text-3xl font-bold uppercase text-shadow-glow">
          Mis Proyectos
        </h2>
        <p className="text-lg text-gray-400 font-semibold mt-2 p-3">
          Haz clic y arrastra para explorar
        </p>
      </div>
      <div className="w-[280px] h-[420px] relative" style={{ perspective: '1200px', cursor: 'grab' }} ref={carouselRef}
        onMouseDown={handleMouseDown}>
        <div className="w-full h-full absolute"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotationY}deg)`,
          }}>
          {projects.map((project, index) => {
            const panelAngle = index * angle;
            return (
              <div key={project.title} className="absolute w-[280px] h-[420px] top-0 left-0"
                style={{
                  transform: `rotateY(${panelAngle}deg) translateZ(${radius}px)`,
                }}>
                <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-orange-400/30 group"
                  onClick={() => {
                    if (Math.abs(rotationY - startRotation) < 2) {
                      setModalData(project);
                    }
                  }}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-orange-400 font-semibold">{project.category}</p>
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