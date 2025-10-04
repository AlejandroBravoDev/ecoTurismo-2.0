import React, { use, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchBarStyles from "./lugares.module.css";
import Footer from "../footer";
import Header from "../header";
function Lugares() {
  return (
    <>
      <Header />
      <div className={SearchBarStyles.Background}>
        <div className={SearchBarStyles.SearchContainer}>
          <h1>¿A donde deseas ir?</h1>
          <p>Descubre los mejores lugares ecoturisticos de Risaralda</p>
          <SearchBar />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lugares;
