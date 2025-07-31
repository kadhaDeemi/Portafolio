import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, GraduationCap, GalleryHorizontal } from 'lucide-react';

const SideNavbar = () => {
  const linkStyle = "p-3 rounded-full text-gray-400 transition-all duration-300 group relative flex items-center";
  const activeLinkStyle = "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50";

  const inactiveLinkStyle = "hover:bg-gray-700 hover:text-white";

  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Inicio" },
    { to: "/experiencia", icon: <Briefcase size={20} />, label: "Experiencia" },
    { to: "/educacion", icon: <GraduationCap size={20} />, label: "Educación" },
    { to: "/proyectos", icon: <GalleryHorizontal size={20} />, label: "Proyectos" },
  ];

  return (
    <aside className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4 p-2 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-md">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`}
            title={item.label}>
            {item.icon}
            <span className="absolute right-full mr-4 px-2 py-1 text-xs text-white bg-gray-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default SideNavbar;