import "./App.css";
import ApiUdeChile from "./UdeChileAPI";
function App() {

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
              Soy <span className="font-bold">Damian Valderrama</span>, Titulado de la <span className="font-bold">carrera Ingeniería en Informática</span> en <span className="text-yellow-300">DuocUC</span> apasionado por el desarrollo Frontend. 
              Con 4 años de estudio completados y mi práctica profesional realizada, me encuentro activamente buscando mi primera oportunidad laboral, 
              cuento con experiencia en desarrollo <span className="font-bold">Frontend</span> y algo de <span className="font-bold">Backend</span>.
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
          <ul className="grid grid-cols-1 gap-2 text-gray-300">
            {/*<span className="text-sm sm:text-base font-medium text-black dark:text-white"> SQL</span>*/}
            <li className="text-sm sm:text-base font-medium text-black dark:text-white" >✅ React.js</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Django / APIs</li>
            <li>✅ PostgreSQL</li>
            <li>✅ Git / GitHub</li>
            <li>✅ Metodologías ágiles</li>
          </ul>
          <div className="mt-6 p-3 rounded-lg bg-[#1a1a1a] border-l-4 border-blue-600"> 
            <p className="text-sm text-gray-300 italic" data-cursor="text">DJAKSJA
            </p>
          </div>
          <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                           bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                           bg-[length:300%_300%] animate-neon-blue-red
                           transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
        </div>

        {/* Educacipon: columna 1, filas 5–8 */}
        <div className="col-start-1 row-start-5 row-span-4 relative rounded-xl border border-gray-700 p-4 bg-[#101014] text-white
                        transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
          <h3 className="text-lg font-bold flex item-center gap-2"> 
          <img src="/buho.gif" alt="emoji gif" className="w-10 h-10" />
            Educación</h3>
          <p className="text-gray-300 text-sm mt-2">
            Titulado de Ingeniería en Informática en DuocUC. 
            Formación sólida en desarrollo web Frontend y Backend, 
            con experiencia en proyectos académicos y prácticas profesionales.
          </p>
          <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                           bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                           bg-[length:300%_300%] animate-neon-blue-red
                           transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
        </div>

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
        <div className="col-start-2 col-span-1 row-start-7 row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                        transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
          <h4 className="font-bold flex text-center gap-2"> 
          <img src="/jobs.gif" alt="emoji gif" className="w-10 h-10" />
            Experiencia</h4>
          <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                           bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                           bg-[length:300%_300%] animate-neon-blue-red
                           transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
        </div>

        {/* Card 6: col 2, fila 6 */}
        <div className="col-start-2 col-span-1 row-start-8 col-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                        transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
          <h4 className="font-bold">Card 6</h4>
          <p className="text-sm text-gray-300">LA U</p>
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
          <h4 className="font-bold">Card 8</h4>
          <p className="text-sm text-gray-300">KJSAJKA</p>
          <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                           bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                           bg-[length:300%_300%] animate-neon-blue-red
                           transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
        </div>

      </div>
    </div>
  );
}

export default App;
