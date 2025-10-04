import React, { useState } from "react";
import data from "./municipios.json"; // Importamos el JSON

function SelectorMunicipios() {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    const municipio = data.Municipios.find((m) => m.id === id);
    setSelected(municipio);
  };

  return (
    <div>
      <input type="search" />
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          -- Selecciona --
        </option>
        {data.Municipios.map((muni) => (
          <option key={muni.id} value={muni.id}>
            {muni.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectorMunicipios;
