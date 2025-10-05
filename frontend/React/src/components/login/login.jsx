import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import loginImg from "../../assets/registro-login.jpeg"; 

function Login() {
  const [formData, setFormData] = useState({
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
      const res = await axios.post("http://localhost:3001/login", formData);
      setMensaje(res.data.mensaje);
      setFormData({ correo: "", contraseña: "" });
    } catch (err) {
      console.error("Error en login:", err);
      setMensaje("No se pudo iniciar sesión.");
    }
  };

  return (
    <section className={styles.container}>
      <div
        className={styles.left}
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>

      <div className={styles.right}>
        <div className={styles.formBox}>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
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

            <button type="submit">Iniciar sesión</button>
          </form>

          {mensaje && <p className={styles.mensaje}>{mensaje}</p>}

          <p className={styles.loginText}>¿No tienes cuenta?</p>
          <a href="/registro" className={styles.loginLink}>
            Ir a registro
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
