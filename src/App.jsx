import { Routes, Route } from "react-router-dom";
import Principal from "./home";
import Exp from "./experiencia";
import Educacion from "./educacion";
import GalleryPage from "./GalleryPage";
import Layout from "./layout"; 

function App() {
  return (
    <Routes>
      <Route index element={<Principal />} /> {/* La página de inicio */}
      <Route path="/" element={<Layout />}>
        <Route path="experiencia" element={<Exp />} />
        <Route path="educacion" element={<Educacion />} />
        <Route path="proyectos" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
}

export default App;