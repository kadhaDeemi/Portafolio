import { useState } from "react";

export default function Educacion() {
  // Nuevo estado para controlar qué contenido se muestra en el panel lateral
  // Puede ser 'cursos', 'certificaciones', o null (para panel cerrado)
  const [selectedPanelContent, setSelectedPanelContent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Cursos agrupados por categoria
  const cursos = {
    "Desarrollo & Programación": [
      "Programación de Algoritmos",
      "Programación Web",
      "Ingeniería de Software",
      "Desarrollo de Software de Escritorio",
      "Programación de Aplicaciones Móviles",
    ],
    "Bases de Datos": [
      "Modelamiento de Base de Datos",
      "Consultas de Bases de Datos",
      "Programación de Base de Datos",
      "Minería de Datos"
    ],
    "Sistemas & Arquitectura": [
      "Arquitectura",
      "Integración de Plataformas",
      "Seguridad en Sistemas Computacionales",
    ],
    "Gestión & Metodologías": [
      "Diseño y Gestión de Requisitos",
      "BPM",
      "Gestión Ágil de Proyectos",
      "Gestión de Proyectos Informáticos",
      "Calidad de Software",
      "GestiÓn de Riesgos"
    ],
  };

  const categorias = ["Todos", ...Object.keys(cursos)];

  // filtro cursos
  const getCursosFiltrados = () => {
    if (selectedCategory === "Todos") {
      return Object.entries(cursos).flatMap(([categoria, lista]) =>
        lista.map((curso) => ({ categoria, curso }))
      );
    }
    return cursos[selectedCategory].map((curso) => ({
      categoria: selectedCategory,
      curso,
    }));
  };

  // colores para categoria
  const categoriaColor = {
    "Desarrollo & Programación": "text-sky-400",
    "Bases de Datos": "text-green-400",
    "Sistemas & Arquitectura": "text-purple-400",
    "Gestión & Metodologías": "text-orange-400",
  };

  // --- DATA PARA CERTIFICACIONES ---
  const certificaciones = [
    {
      titulo: "ANÁLISIS Y DESARROLLO DE MODELOS DE DATOS",
      institucion: "Instituto Profesional Duoc UC",
      fecha: "Obtenido en Diciembre 2024",
      descripcion: "Valida la capacidad para diseñar, optimizar e implementar estructuras de bases de datos robustas y eficientes, asegurando la integridad y disponibilidad de la información.",
      enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
      titulo: "CALIDAD DE SOFTWARE",
      institucion: "Instituto Profesional Duoc UC",
      fecha: "Obtenido en Diciembre 2024",
      descripcion: "Acredita conocimientos en metodologías y herramientas para asegurar la excelencia, fiabilidad y eficiencia de los productos de software a lo largo de su ciclo de vida.",
      enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing", 
    },
    {
      titulo: "ARQUITECTURA DE SOFTWARE",
      institucion: "Instituto Profesional Duoc UC",
      fecha: "Obtenido en Diciembre 2024",
      descripcion: "Certifica la habilidad para diseñar estructuras de sistemas de software escalables, mantenibles y seguras, definiendo los componentes clave y sus interacciones.",
      enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "INTERNACIONAL EN INGLÉS INTERMEDIO ALTO",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Demuestra fluidez y competencia comunicativa en inglés a un nivel intermedio-alto, facilitando la interacción en entornos profesionales globales y el acceso a recursos técnicos.",
        enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "GESTIÓN DE PROYECTOS INFORMÁTICOS",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Valida la experiencia en la planificación, ejecución y control de proyectos de TI, aplicando las mejores prácticas para asegurar la entrega exitosa dentro del alcance, tiempo y presupuesto.",
        enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "ANÁLISIS Y PLANIFICACIÓN DE REQUERIMIENTOS INFORMÁTICOS",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Descripción: Acredita la capacidad para identificar, documentar y gestionar los requerimientos de sistemas de software, traduciendo las necesidades del negocio en especificaciones funcionales y no funcionales.",
        enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "INTELIGENCIA DE NEGOCIOS",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Certifica habilidades en la transformación de datos en información estratégica y conocimiento para la toma de decisiones, mediante el uso de herramientas y técnicas de Business Intelligence.",
        enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "PROGRAMACIÓN DE SOFTWARE",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Demuestra competencias fundamentales y avanzadas en el desarrollo, codificación y depuración de aplicaciones de software, siguiendo las mejores prácticas de programación.",
        enlace: "https://drive.google.com/file/d/1_XsatMGRVigqchQOikI8sZ_9RgB8rlXX/view?usp=sharing",
    },
    {
        titulo: "GESTIÓN DE PROYECTOS TI",
        institucion: "Instituto Profesional Duoc UC",
        fecha: "Obtenido en Diciembre 2024",
        descripcion: "Certificación que valida la aprobación de la Especialización en Gestión de Proyectos de Tecnologías de la Información, cubriendo las metodologías y prácticas para la dirección exitosa de iniciativas TI.",
        enlace: "https://drive.google.com/file/d/1P3rYHefhJfufKTdPeGKxGm3Y3XWqzPEj/view?usp=sharing",
    },
  ];

  return (
    <div className="w-full relative">
      <div className="max-w-5xl mx-auto mt-3 px-10">
        <ul className="relative"> {/*para los panelees*/}
          {[1, 2].map((semester) => (
            <li
              key={semester}
              data-aos="fade"
              id={`card${semester}`}
              className="relative mb-10"
            >
              {/* Card principal */}
              <div
                onClick={() => {
                  if (semester === 1) {
                    setSelectedPanelContent('cursos');
                  } else {
                    setSelectedPanelContent(null);
                  }
                }}
                className="cursor-pointer flex flex-col justify-between h-auto group overflow-hidden transition-colors duration-500 ease-in-out
                bg-[#131313] p-6 border-[1.6px] border-[#2c2c2c] shadow-lg rounded-xl hover:border-orange-800 relative"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#1a1a1a] rounded-lg">
                      <img src="/diploma.gif" alt="emoji gif" className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white">
                        {semester === 1 ? "Ingeniería en Informática ↗" : "Telecomunicaciones"}
                      </h3>

                      {semester === 1 ? (
                        <>
                          <span className="text-yellow-500 font-semibold text-xl">
                            Duoc
                          </span>{" "}
                          <span className="text-blue-600 text-xl">UC</span>
                        </>
                      ) : (
                        <span className="text-yellow-500 text-xl font-semibold">
                          Instituto Tecnologico San Mateo
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                    <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {semester === 1
                          ? "2020 - 2024"
                          : semester === 2
                          ? "2016 - 2019"
                          : ""}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#1a1a1a] px-3 py-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className=" text-gray-300">Santiago, Maipú</span>
                    </div>

                    <div className="flex items-center gap-2  bg-[#1a1a1a] px-3 py-1 rounded-full">
                      {semester === 1 ? (
                        <span className=" text-orange-400">Titulado</span>
                      ) : (
                        <span className=" text-sky-500">Graduado</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-100">
                      Progreso del semestre
                    </span>
                    <span className="text-gray-200">100%</span>
                  </div>
                  <div
                  className="h-2 w-8 rounded-full shadow-lg
                  bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                  bg-[length:300%_300%] animate-neon-blue-red"
                  style={{ width: "100%" }}>
                  </div>
                </div>
              </div>
            </li>
          ))}
          {/*Div certificaciones */}
          <li className="relative mb-2">
            <div className="cursor-pointer flex flex-col justify-between h-auto group overflow-hidden transition-colors duration-500 ease-in-out
                            bg-[#131313] p-6 border-[1.6px] border-[#2c2c2c] shadow-lg rounded-xl hover:border-blue-600 relative"
                 onClick={() => setSelectedPanelContent(selectedPanelContent === 'certificaciones' ? null : 'certificaciones')}>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-[#1a1a1a] rounded-lg">
                        <img src="/certificado.gif"className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-white">
                            Ver Certificaciones ↗
                        </h3>
                        <span className="text-yellow-400 text-xl font-semibold">
                            Explora mis logros
                        </span>
                    </div>
                </div>
                <div className="mt-">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-200">
                      Haz click para ver los detalles
                    </span>
                  </div>
                  <div
                  className="h-2 w-full rounded-full shadow-lg
                  bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                  bg-[length:300%_300%] animate-neon-blue-red"
                  ></div>
                </div>
            </div>
          </li>
        </ul>

        {/* PANEL LATERAL CURSO/CERTIFICACIONES*/}
        {selectedPanelContent && (
          <div className={`absolute top-0 left-full ml-6 w-90 rounded-xl shadow-xl p-[2px] overflow-hidden animate-slideIn transition-transform duration-500 ease-in-out`}>
            {/* Fondo gradiente neon */}
            <div className="absolute -inset-[2px] rounded-xl opacity-100 pointer-events-none
                bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                bg-[length:300%_300%] animate-neon-blue-red z-0"></div>

            {/* Contenido del panel */}
            <div className="relative z-10 bg-[#1a1a1a] rounded-xl p-4 text-white">
              {/* Header del Panel */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-orange-400">
                  {selectedPanelContent === 'cursos' ? "Cursos Destacados" : "Mis Certificaciones"}
                </h4>
                <button
                  onClick={() => setSelectedPanelContent(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Contenido condicional: Cursos o Certificaciones */}
              {selectedPanelContent === 'cursos' && (
                <>
                  {/* filtro de cursos */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 rounded-md bg-[#222] text-gray-300 border border-[#333] mb-3"
                  >
                    {categorias.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  {/* Lista de Cursos */}
                  <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-3"> {/* Ajustado max-h para mejor scroll */}
                    {getCursosFiltrados().map(({ categoria, curso }, index) => (
                      <div
                        key={index}
                        className={`relative p-3 rounded-xl bg-[#222] hover:bg-[#2c2c2c] transition group border border-transparent`}
                      >
                        {/* Borde neon al hover */}
                        <span className="absolute -inset-[3px] rounded-2xl opacity-0 pointer-events-none
                            bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                            bg-[length:300%_300%] animate-neon-blue-red
                            transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>

                        <p className="text-sm text-gray-200">{curso}</p>
                        <span className={`text-xs ${categoriaColor[categoria]}`}>
                          {categoria}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {selectedPanelContent === 'certificaciones' && (
                <div className="space-y-6 max-h-[calc(100vh-150px)] overflow-y-auto pr-3"> 
                  {certificaciones.map((cert, index) => (
                    <div
                      key={index}
                      className="group relative bg-[#131313] p-5 border-[1.6px] border-[#2c2c2c] shadow-lg rounded-xl
                                 transition-colors duration-500 flex flex-col justify-between">
                        <span className="absolute -inset-[5px] rounded-2xl opacity-0 pointer-events-none
                            bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                            bg-[length:300%_300%] animate-neon-blue-red
                            transition-opacity duration-500 group-hover:opacity-100 z-[-1]">
                            </span>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{cert.titulo}</h3>
                        <p className="text-gray-400 text-sm mb-1">{cert.institucion}</p>
                        <p className="text-gray-500 text-xs mb-3">{cert.fecha}</p>
                        {cert.descripcion && (
                          <p className="text-gray-300 text-sm mb-3">{cert.descripcion}</p>
                        )}
                      </div>
                      {cert.enlace && (
                        <div className="mt-auto pt-2"> {/* Empuja el botón hacia abajo si el contenido varía */}
                          <a
                            href={cert.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-semibold
                                       hover:bg-orange-700 transition-colors duration-300"> Ver Credencial
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}