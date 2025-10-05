import React, { useState } from "react";
import axios from "axios";
import styles from "./Registro.module.css";
import registroImg from "../../assets/registro-login.jpeg";

function Registro() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState("");

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

      <div
        className={styles.right}
        style={{ backgroundImage: `url(${registroImg})` }}
      ></div>
    </section>
  );
}

export default Registro;
