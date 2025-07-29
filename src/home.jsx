import { Link } from "react-router-dom";
import ApiUdeChile from "./UdeChileAPI";
export default function Principal(){

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#050505] p-1">
          {/*4 columnas x 8 filas*/}
          <div className="grid grid-cols-4 grid-rows-8 gap-4 w-4/6 max-w-7lg">
    
            {/* Bienvenidos → columnas 1–3, filas 1–4 */}
            <div className="col-start-1 col-span-3 row-start-1 row-span-4 relative rounded-xl border border-gray-700 p-6 bg-[#0b0b0f] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h2 className="text-2xl font-bold  flex items-center gap-2">
                  <img src="/saludo.gif" alt="emoji gif" className="w-10 h-10" />
                   Bienvenido/a</h2>
                <p className="mt-3 text-gray-300">
                  Soy <span className="font-bold">Damian Valderrama Acuña</span>, <span className="font-bold">Ingeniero en Informática</span> titulado de <span className="text-yellow-300">Duoc UC</span>. 
                  Cuento con sólida formación y experiencia práctica en desarrollo web, utilizando Python, Django, JavaScript (JSX) y React, además de bases de datos relacionales y no relacionales. 
                  Estoy buscando activamente mi primera oportunidad profesional en desarrollo de software/web, donde pueda aportar mis conocimientos, compromiso y visión emprendedora.
                  </p>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
            {/* Habilidades: col 4, filas 1–8 */}
            <div className="col-start-4 col-span-1 row-span-7 relative rounded-xl border border-gray-700 p-6 bg-[#0f0f12] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <img src="/informatico.gif" alt="emoji gif" className="w-10 h-10" />
                Habilidades
              </h2>
              <ul className="grid grid-cols-1 pl-5 gap-2 text-gray-100 text-sm sm:text-base font-medium list-disc">
                <li>React.js</li>
                <li>Django</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
                <li>Git / GitHub</li>
                <li>Metodologías ágiles</li>
              </ul>
              <div className="mt-7 p-3 rounded-lg bg-[#1a1a1a] border-l-3 border-violet-600"> 
                <p className="text-sm text-gray-300 italic" data-cursor="text">Cuando no estoy programando, disfruto ver y jugar fútbol, jugar videojuegos. Y también ir al estadio a ver a la U de Chile🦉💙
                </p>
              </div>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
            {/* Educacipon: columna 1, filas 5–8 */}
            <Link
          to="/educacion" 
          className="col-start-1 row-start-5 row-span-4 relative rounded-xl border border-gray-700 p-4 bg-[#101014] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h3 className="text-lg font-bold flex item-center gap-2"> 
              <img src="/buho.gif" alt="emoji gif" className="w-10 h-10" />
                Educación ↗</h3>
              <p className="text-gray-200 text-lg mt-10  font-semibold">
                Ingeneria en informatica
              </p>
              <p className="text-gray-300 text-sm font-semibold">
                DUOC UC 
              </p>
              <p className="text-gray-300 text-sm font-semibold">
                2020 - 2024
              </p>
              <p class="underline font-semibold text-white-500 hover:text-gray-300 mt-2">ver más</p>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </Link>
    
            {/* Divs Cards q van al medio  */}
    
            {/* Card 4: col 2, filaa 5 */}
            <div className="col-start-2 col-span-2 row-start-5 row-span-2 relative rounded-xl border border-gray-700 p-4 bg-[#101014] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <ApiUdeChile></ApiUdeChile>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
            {/* Card 5: col 3, fila 5 */}
            <Link
          to="/experiencia" 
          className="col-start-2 col-span-1 row-start-7 row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                     transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group cursor-pointer"
        >
          <h4 className="font-bold flex items-center gap-2">
            <img src="/jobs.gif" alt="emoji gif" className="w-10 h-10" />
            Experiencia
          </h4>
          <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                          bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                          bg-[length:300%_300%] animate-neon-blue-red
                          transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
        </Link>
    
            {/* Card 6: col 2, fila 6 */}
            <div className="col-start-2 col-span-1 row-start-8 col-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h4 className="font-bold">Próximamente...</h4>
              <p className="text-sm text-gray-300"></p>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
            {/* Card 7: col 3, fila 6 */}
            <div className="col-start-3 col-span-1 row-start-7 row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h4 className="font-bold flex item-center gap-2">
              <img src="/programar.gif" alt="emoji gif" className="w-10 h-10" />
                 Proyectos</h4>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
            {/* Card 8: col 2, fila 7 */}
            <div className="col-start-3 col-span-1 row-start-8 row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                            transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
              <h4 className="font-bold">Próximamente....</h4>
              <p className="text-sm text-gray-300"></p>
              <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                               bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                               bg-[length:300%_300%] animate-neon-blue-red
                               transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
            </div>
    
          </div>
        </div>
      );
}