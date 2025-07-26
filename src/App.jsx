import { Routes, Route } from "react-router-dom";
import Principal from "./home";
import Exp from "./experiencia";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/experiencia" element={<Exp />} />
    </Routes>
  );
}

export default App;
