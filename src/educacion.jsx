import { useState } from "react";

export default function Educacion() {
  const [selectedCard, setSelectedCard] = useState(null);
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

  return (
    <div className="w-full relative">
      <div className="max-w-5xl mx-auto mt-5 px-10">
        <ul>
          {[1, 2].map((semester) => (
            <li
              key={semester}
              data-aos="fade"
              id={`card${semester}`}
              className="relative mb-12"
            >
              {/* Card principal */}
              <div
                onClick={() => {
                  if (semester === 1) {
                    setSelectedCard(semester);
                  } else {
                    setSelectedCard(null);
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

              {/* Panel lateral */}
              {selectedCard === semester && (
                <div className="absolute top-0 left-full ml-6 w-80 rounded-xl shadow-xl p-[2px] overflow-hidden animate-slideIn">
                  {/* Fondo gradiente neon */}
                  <div className="absolute -inset-[2px] rounded-xl opacity-100 pointer-events-none 
                      bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                      bg-[length:300%_300%] animate-neon-blue-red z-0"></div>

                  {/* Contenido del panel */}
                  <div className="relative z-10 bg-[#1a1a1a] rounded-xl p-4 text-white">
                    {/* Header*/}
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-orange-400">
                        Cursos Destacados
                      </h4>
                      <button
                        onClick={() => setSelectedCard(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>

                    {/* filtro */}
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

                    {/* List */}
                    <div className="space-y-3 max-h-74 overflow-y-auto pr-3">
                      {getCursosFiltrados().map(({ categoria, curso }, index) => (
                        <div
                          key={index}
                          className={`relative p-3 rounded-xl bg-[#222] hover:bg-[#2c2c2c] transition group border border-transparent`}
                        >
                          {/* Borde neon al hover */}
                          <span className="absolute -inset-[2px] rounded-2xl opacity-0 pointer-events-none 
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
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
