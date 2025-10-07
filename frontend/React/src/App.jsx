import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PerfilUser from "./pages/PerfilUser.jsx";
import Lugares from "./pages/Lugares.jsx";
import VerLugares from "./pages/verLugares.jsx";
// import Lugares from "./components/Lugares/Lugares.jsx";
import Registro from "./pages/Registro.jsx";
import Hospedajes from "./components/Hospedajes/Hospedajes.jsx";
import VerHospedajes from "./components/ver-hospedajes/ver-hospedajes.jsx";
import Login from "./components/login/login.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<PerfilUser />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hospedajes" element={<Hospedajes />} />
          <Route path="/verHospedajes" element={<VerHospedajes />} />
          <Route path="/verLugares" element={<VerLugares />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
