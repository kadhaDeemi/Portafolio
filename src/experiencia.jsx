export default function Exp() {
  return (
    
    <div className="flex flex-col justify-center items-start md:max-w-3xl mx-auto mb-16 px-4">
      
      {/* === EXPERIENCIA 1 === */}
      <div className="relative w-full">
        {/* Línea vertical del timeline */}
        <div className="absolute left-8 top-0 h-full w-1 bg-[#2c2c2c] origin-top"></div>
        <section className="relative pl-24 py-8" data-aos="fade" data-aos-duration="2000">
          {/* Punto del timeline */}
          <div className="absolute left-8 top-12 -ml-3.5 h-8 w-8 rounded-full shadow-lg
             bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a] 
             bg-[length:300%_300%] animate-neon-blue-red
             flex items-center justify-center"></div>
          {/* Card + efecto hover */}
          <div className="relative group flex flex-col md:flex-row gap-6 p-6 bg-[#131313] border border-[#2c2c2c] rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">      
            {/*info de al lado */}
            <div className="md:w-48 flex-shrink-0">
              <div className="bg-[#1a1a1a] px-3 py-1 rounded-full inline-block">
                <span className="text-sm font-semibold text-orange-400">
                  Práctica Profesional
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-200">Sept 2023 - Nov 2023</p>
            </div>

            {/*Contenido*/}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Desarrollador Web (Duoc UC Maipú)
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6 text-sm p-1">
                • Desarrollo de sistema de reservas con Django.<br />
                • Migración de base de datos de PostgreSQL a MySQL.<br />
                • Optimización web y documentación técnica.<br />
                • Mantenimiento de templates HTML/CSS.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "JavaScript", "HTML", "CSS", "SQL/NoSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[#1a1a1a] text-orange-400 rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/*fondo*/}
            <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none 
                bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                bg-[length:300%_300%] animate-neon-blue-red
                transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
          </div>
        </section>
      </div>

      {/*chamba 2 */}
      <div className="relative w-full">
        <div className="absolute left-8 top-0 h-full w-1 bg-[#2c2c2c] origin-top"></div>

        <section className="relative pl-24 py-8" data-aos="fade" data-aos-duration="2000">
          <div className="absolute left-8 top-12 -ml-3.5 h-8 w-8 rounded-full shadow-lg
             bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a] 
             bg-[length:300%_300%] animate-neon-blue-red
             flex items-center justify-center"></div>

          <div className="relative group flex flex-col md:flex-row gap-6 p-6 bg-[#131313] border border-[#2c2c2c] rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            
            {/*info del lado*/}
            <div className="md:w-48 flex-shrink-0">
              <div className="bg-[#1a1a1a] px-3 py-1 rounded-full inline-block">
                <span className="text-sm font-semibold text-orange-400">
                  Práctica Laboral
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-200">Agost 2022 - Oct 2022</p>
            </div>

            {/*Contenido*/}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Desarrollador de Software
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6 text-sm p-1">
                • Desarrollo de un tótem informativo web dinámico.<br />
                • Interfaces web con HTML, CSS, JavaScript, React (JSX).<br />
                • Documentación técnica y metodologías ágiles.
              </p>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React (JSX)"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-[#1a1a1a] text-orange-400 rounded-full"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/*fondo */}
            <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none 
                bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                bg-[length:300%_300%] animate-neon-blue-red
                transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
          </div>
        </section>
      </div>

      {/* Chamba 3*/}
      <div className="relative w-full">
        <div className="absolute left-8 top-0 h-full w-1 bg-[#2c2c2c] origin-top"></div>

        <section className="relative pl-24 py-8" data-aos="fade" data-aos-duration="2000">
         <div className="absolute left-8 top-12 -ml-3.5 h-8 w-8 rounded-full shadow-lg
             bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a] 
             bg-[length:300%_300%] animate-neon-blue-red
             flex items-center justify-center"></div>

          <div className="relative group flex flex-col md:flex-row gap-6 p-6 bg-[#131313] border border-[#2c2c2c] rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02]">
            
            {/*info de los lados*/}
            <div className="md:w-48 flex-shrink-0">
              <div className="bg-[#1a1a1a] px-3 py-1 rounded-full inline-block">
                <span className="text-sm font-semibold text-sky-500 ">
                  Otros
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-200">Mar 2024 - Dic 2024</p>
            </div>

            {/*conteenido*/}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-100 mb-3">
                Técnico de Soporte en Eventos
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6 text-sm p-1">
                • Instalación y configuración de pantallas LED para eventos.<br />
                • Diagnóstico y resolución de problemas en tiempo real.<br />
                • Coordinación con equipos técnicos y de producción.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Trabajo en equipo",
                  "Resolución de problemas",
                  "Trabajo bajo presión",
                  "Toma de requisitos",
                  "Comunicación"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-[#1a1a1a] text-sky-500 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/*Fondo*/}
            <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none 
                bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                bg-[length:300%_300%] animate-neon-blue-red
                transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
          </div>
        </section>
      </div>
    </div>
  );
}
