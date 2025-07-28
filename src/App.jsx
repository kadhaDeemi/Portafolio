import { Routes, Route } from "react-router-dom";
import Principal from "./home";
import Exp from "./experiencia";
import Educacion from "./educacion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/experiencia" element={<Exp />} />
      <Route path="/educacion" element={<Educacion />} />
    </Routes>
  );
}

export default App;
