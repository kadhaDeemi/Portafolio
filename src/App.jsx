import { Routes, Route } from "react-router-dom";
import Principal from "./home";
import Exp from "./experiencia";
import Educacion from "./educacion";
import GalleryPage from "./GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/experiencia" element={<Exp />} />
      <Route path="/educacion" element={<Educacion />} />
      <Route path="/proyectos" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;