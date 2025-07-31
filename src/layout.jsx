// src/Layout.jsx

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideNavbar from './navbar';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const location = useLocation(); //Obtiene la ubicación actual de la ruta

  return (
    <>
      <SideNavbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}>
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Layout;