function LugaresList({ lugares, municipio }) {
  if (!municipio) {
    return <p>Aún no haz realizado ninguna busqueda</p>;
  }

  if (lugares.length === 0) {
    return <p>No hay lugares registrados en {municipio}</p>;
  }

  return (
    <>
      <h3>lugares en {municipio}</h3>

      <div>
        {lugares.map((lugar) => (
          <div className="LugaresCard" key={lugar.id}>
            <h4>{lugar.nombre}</h4>
            <p>
              <strong>Categoría</strong> {lugar.categoria}
            </p>
            <p>{lugar.descripcion}</p>
            <small>{lugar.municipio}</small>
          </div>
        ))}
      </div>
    </>
  );
}

export default LugaresList;
