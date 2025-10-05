import React, { useState } from "react";
import SearchBarStyles from "./lugares.module.css";
import data from "./municipios.json"; // Importamos el JSON

function SelectorMunicipios() {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    const municipio = data.Municipios.find((m) => m.id === id);
    setSelected(municipio);
  };

  return (
    <div className={SearchBarStyles.searchBarContainer}>
      <h1>¿A donde deseas ir?</h1>
      <p>Descubre los mejores lugares ecoturisticos de Risaralda</p>

      <div className={SearchBarStyles.searchBar}>
        <input
          type="search"
          className={SearchBarStyles.bar}
          placeholder="Buscar"
        />
        <select
          onChange={handleChange}
          defaultValue=""
          className={SearchBarStyles.filter}
        >
          <option value="" disabled>
            Selecciona
          </option>
          {data.Municipios.map((muni) => (
            <option key={muni.id} value={muni.id}>
              {muni.nombre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectorMunicipios;
