import SearchBarStyles from "./lugares.module.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";

function Cards() {
  return (
    <section className={SearchBarStyles.cardsSection}>
      <div className={SearchBarStyles.cardsContainer}>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor dicta. Porro fuga saepe corporis</p>
          <button className={SearchBarStyles.button}>Ver más</button>
        </div>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor dicta. Porro fuga saepe corporis</p>
          <button className={SearchBarStyles.button}>Ver más</button>
        </div>
        <div className={SearchBarStyles.card}>
          <img src={img1} alt="" className={SearchBarStyles.img} />
          <h3>Titulo</h3>
          <p>Lorem ipsum dolor dicta. Porro fuga saepe corporis</p>
          <button className={SearchBarStyles.button}>Ver más</button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
