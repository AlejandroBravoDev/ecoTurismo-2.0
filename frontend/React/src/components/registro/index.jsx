import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Registro.module.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState("");
  const sliderImages = [img1, img2, img3, img4, img5, img6];
  const totalImages = sliderImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/registro", formData);
      setMensaje(res.data.mensaje);
      setFormData({ nombre: "", correo: "", contraseña: "" });
    } catch (err) {
      console.error("Error en registro:", err);
      setMensaje("No se pudo registrar.");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.formBox}>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <label>Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />

            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />

            <button type="submit">Registrarse</button>
          </form>

          {mensaje && <p className={styles.mensaje}>{mensaje}</p>}

          <p className={styles.loginText}>¿Ya estás registrado?</p>
          <a href="/login" className={styles.loginLink}>
            Iniciar Sesión
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.sliderTrack}>
          {sliderImages.map((imgSrc, index) => (
            <div
              key={index}
              className={`${styles.sliderItem} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <img src={imgSrc} alt={`Slider image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Registro;
