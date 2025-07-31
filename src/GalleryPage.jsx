import DynamicCarousel from './Carousel3D';
import { motion } from 'framer-motion';
function GalleryPage() {
  //me sirve pa renderizar el carrusel y quede bien centrado y no a los lados
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="w-screen min-h-screen bg-black">
      <DynamicCarousel />
    </motion.div>
  );
}

export default GalleryPage;