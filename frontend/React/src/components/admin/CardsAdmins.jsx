import SearchBarStyles from "./lugares.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";

function CardsAdmin() {
  return (
    <section className={SearchBarStyles.cardsSection}>
      <div className={SearchBarStyles.cardsContainer}>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Crear</h3>
          <p>Crea un lugar</p>
          <Link to="/crearLugar">
            <button className={SearchBarStyles.button}>Crear lugar</button>
          </Link>
        </div>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor dicta. Porro fuga saepe corporis</p>
          <Link to="/verLugares">
            <button className={SearchBarStyles.button}>Editar</button>
          </Link>
          <button
            className={SearchBarStyles.button}
            style={{ backgroundColor: "red" }}
          >
            Eliminar
          </button>
        </div>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor dicta. Porro fuga saepe corporis</p>
          <Link to="/verLugares">
            <button className={SearchBarStyles.button}>Editar</button>
          </Link>
          <button
            className={SearchBarStyles.button}
            style={{ backgroundColor: "red" }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardsAdmin;
