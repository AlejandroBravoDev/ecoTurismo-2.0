import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function PerfilUser() {
  return (
    <div className="nueva-interfaz-page">
      <Header />

      <main style={{ padding: "50px", textAlign: "center" }}>
        <h2>Perfil Usuario</h2>
      </main>
      <Footer />
    </div>
  );
}

export default PerfilUser;
