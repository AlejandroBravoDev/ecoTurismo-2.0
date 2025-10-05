import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PerfilUser from "./pages/PerfilUser.jsx";
import Lugares from "./components/Lugares/Lugares.jsx";
import Registro from "./pages/Registro.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<PerfilUser />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
