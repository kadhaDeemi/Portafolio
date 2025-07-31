import DynamicCarousel from './Carousel3D';

function GalleryPage() {
  //me sirve pa renderizar el carrusel y quede bien centrado y no a los lados
  return (
    <div className="w-screen min-h-screen bg-black">
      <DynamicCarousel />
    </div>
  );
}

export default GalleryPage;