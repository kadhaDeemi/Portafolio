import { Link } from "react-router-dom";
import ApiUdeChile from "./UdeChileAPI";
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Principal() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="w-full min-h-screen flex items-center justify-center bg-[#050505] p-4 lg:p-1 "  >
            <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-8 gap-4 w-full lg:w-4/6 max-w-7xl">
                {/* principal*/}
                <div className="lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-4 relative rounded-xl border border-gray-700 p-6 bg-[#0b0b0f] text-white
                                transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <h2 className="text-2xl font-bold  flex items-center gap-2">
                        <img src="/saludo.gif" alt="emoji gif" className="w-10 h-10" />
                        Bienvenido/a</h2>
                    <p className="mt-3 text-gray-300">
                        Soy <span className="font-bold">Damian Valderrama Acuña</span>, <span className="font-bold">Ingeniero en Informática</span> titulado de <span className="text-yellow-300">Duoc UC</span>.
                        Cuento con sólida formación y experiencia práctica en desarrollo web, utilizando Python, Django, JavaScript (JSX) y React, además de bases de datos relacionales y no relacionales.
                        Estoy buscando activamente mi primera oportunidad profesional en desarrollo de software/web, donde pueda aportar mis conocimientos, compromiso y visión emprendedora.
                    </p>
                    <div className="mt-6 lg:absolute lg:bottom-6 lg:left-6 flex items-center gap-4">
                        <a href="https://github.com/kadhaDeemi" title="GitHub" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-[#141418] border border-gray-700 text-gray-400 transition-all duration-300 hover:text-white hover:border-white/80 hover:shadow-lg hover:shadow-white/50 hover:scale-110">
                            <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/damian-valderrama-acuna/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-[#141418] border border-gray-700 text-gray-400 transition-all duration-300 hover:text-blue-500 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor">
                                <title>LinkedIn</title>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 0 1 2.063-2.065 2.064 2.064 0 0 1 2.063 2.065c0 1.14-.926 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/youngdeemi/" title="Instagram" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-[#141418] border border-gray-700 text-gray-400 transition-all duration-300 hover:text-pink-500 hover:border-pink-500/80 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110">
                            <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram" className="w-5 h-5" />
                        </a>
                        <a href="https://drive.google.com/file/d/13umdWRB6gs7WrWLGaWFoe2vg2KEAyqWB/view?usp=sharing" title="Descargar CV" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-[#141418] border border-gray-700 text-gray-400 transition-all duration-300 hover:text-green-500 hover:border-green-500/80 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110">
                            <FileText size={20} />
                        </a>
                    </div>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </div>
                {/* habilidades */}
                <div className="lg:col-start-4 lg:col-span-1 lg:row-span-7 relative rounded-xl border border-gray-700 p-6 bg-[#0f0f12] text-white
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
                {/* educacion */}
                <Link
                    to="/educacion"
                    className="lg:col-start-1 lg:row-start-5 lg:row-span-4 relative rounded-xl border border-gray-700 p-4 bg-[#101014] text-white
                                transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <h3 className="text-lg font-bold flex items-center gap-2">
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
                    <p className="underline font-semibold text-white hover:text-gray-300 mt-2">ver más</p>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </Link>
                {/* API DEL BULLITAAAAA 🤘 */}
                <div className="lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-2 relative rounded-xl border border-gray-700 p-4 bg-[#101014] text-white
                                transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <ApiUdeChile />
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </div>
                {/* exp */}
                <Link
                    to="/experiencia"
                    className="lg:col-start-2 lg:col-span-1 lg:row-start-7 lg:row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                               transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group cursor-pointer">
                    <h4 className="font-bold flex items-center gap-2">
                        <img src="/jobs.gif" alt="emoji gif" className="w-10 h-10" />
                        Experiencia ↗
                    </h4>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                    bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                    bg-[length:300%_300%] animate-neon-blue-red
                                    transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </Link>
                {/* proyectos*/}
                <Link
                    to="/proyectos"
                    className="lg:col-start-3 lg:col-span-1 lg:row-start-7 lg:row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                               transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <h4 className="font-bold flex items-center gap-2">
                        <img src="/programar.gif" alt="emoji gif" className="w-10 h-10" />
                        Proyectos ↗</h4>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </Link>
                
                {/* proximamente*/}
                <div className="lg:col-start-2 lg:col-span-1 lg:row-start-8 lg:row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                                transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <h4 className="font-bold">Próximamente...</h4>
                    <p className="text-sm text-gray-300"></p>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </div>
                
                {/* proximamente*/}
                <div className="lg:col-start-3 lg:col-span-1 lg:row-start-8 lg:row-span-1 relative rounded-xl border border-gray-700 p-4 bg-[#141418] text-white
                                transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl group">
                    <h4 className="font-bold">Próximamente....</h4>
                    <p className="text-sm text-gray-300"></p>
                    <span className="absolute -inset-[2px] rounded-xl opacity-0 pointer-events-none
                                     bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a]
                                     bg-[length:300%_300%] animate-neon-blue-red
                                     transition-opacity duration-500 group-hover:opacity-100 z-[-1]"></span>
                </div>
            </div>
        </motion.div>
    );
}