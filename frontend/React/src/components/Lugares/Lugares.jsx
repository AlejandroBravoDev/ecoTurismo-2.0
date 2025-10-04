import React, { use, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchBarStyles from "./lugares.module.css";
function Lugares() {
  return (
    <div className={SearchBarStyles.Background}>
      <div className={SearchBarStyles.SearchContainer}>
        <h1>¿A donde deseas ir?</h1>
        <p>Descubre los mejores lugares ecoturisticos de Risaralda</p>
        <SearchBar />
      </div>
    </div>
  );
}

export default Lugares;
