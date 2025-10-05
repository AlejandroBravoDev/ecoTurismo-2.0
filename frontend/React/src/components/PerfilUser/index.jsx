import React, { useState } from "react";
import styles from "./PerfilUser.module.css";

import placeholderFotoUsuario from "../../assets/usuarioDemo.png";
import imagenOpinion from "../../assets/img3.jpg";
import imagenFavorito from "../../assets/img2.jpg";
import bannerFondo from "../../assets/img1.jpg";

function PerfilUsuario() {
  const [pestanaActiva, setPestanaActiva] = useState("opiniones");
  const [menuOpcionesAbierto, setMenuOpcionesAbierto] = useState(false);

  const alternarMenuOpciones = () => {
    setMenuOpcionesAbierto(!menuOpcionesAbierto);
  };

  const datosUsuario = {
    name: "Acercandro Bravo",
    email: "alejo123@gmail.com",
    id: "2",
    opinionesCount: 1,
    favoritosCount: 1,
    profilePicture: placeholderFotoUsuario,
    bannerImage: bannerFondo,
  };

  const activarModoEdicion = () => {
    setPestanaActiva("editar");
  };

  const renderizarContenidoPerfil = () => {
    switch (pestanaActiva) {
      case "opiniones":
        return (
          <div className={styles.contenedorOpiniones}>
            <h3 className={styles.tituloSeccion}>Opiniones</h3>
            <div className={styles.tarjetaOpinion}>
              <div className={styles.cabeceraOpinion}>
                <div className={styles.bloqueInfoAutor}>
                  <img
                    src={datosUsuario.profilePicture}
                    alt="Perfil"
                    className={styles.fotoPequenaAutor}
                  />
                  <div className={styles.metaOpinion}>
                    <h4>{datosUsuario.name}</h4>
                    <p>Sábado, 27 de septiembre • Familia</p>
                    <p className={styles.calificacionOpinion}>❤️❤️❤️❤️❤️</p>
                  </div>
                </div>
                <div className={styles.accionesOpinion}>
                  <div className={styles.contenedorActivadorMenu}>
                    <span
                      className={styles.activadorOpciones}
                      onClick={alternarMenuOpciones}
                    >
                      ...
                    </span>
                    {menuOpcionesAbierto && (
                      <div className={styles.menuDesplegableAcciones}>
                        <button className={styles.itemMenuDesplegable}>
                          Denunciar opinión
                        </button>
                        <button className={styles.itemMenuDesplegable}>
                          Eliminar opinión
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className={styles.textoOpinion}>
                Se aconseja usar ropa ligera y cómoda, zapatos adecuados para
                caminar, llevar protector solar, gafas de sol y gorra. Está
                prohibido alimentar a los animales, hacer ruidos fuertes o
                golpear vidrios y barreras. Se debe respetar siempre los
                senderos y la señalización.
              </p>
              <img
                src={imagenOpinion}
                alt="Lugar"
                className={styles.imagenOpinion}
              />
            </div>
          </div>
        );
      case "favoritos":
        return (
          <div className={styles.contenedorFavoritos}>
            <h3 className={styles.tituloSeccion}>Favoritos</h3>
            <div className={styles.tarjetaItemFavorito}>
              <img
                src={imagenFavorito}
                alt="Lugar Favorito"
                className={styles.imagenItemFavorito}
              />
              <div className={styles.detallesItemFavorito}>
                <h4>Bioparque Ukumari</h4>
                <p>
                  El Bioparque Ukumarí es un parque de flora y fauna con un
                  fuerte enfoque en la conservación y la educación ambiental.
                  Ofrece espacios para investigación y experiencias inmersivas,
                  ideal para visitar en familia.
                </p>
              </div>
              <span className={styles.iconoCorazonFavorito}>❤️</span>
            </div>
          </div>
        );
      case "editar":
        return (
          <div className={styles.contenedorFormularioEdicion}>
            <h3 className={styles.tituloSeccion}>Editar perfil</h3>
            <form className={styles.formularioEdicionPerfil}>
              <label>Nombre</label>
              <input type="text" defaultValue={datosUsuario.name} />
              <label>Correo</label>
              <input type="email" defaultValue={datosUsuario.email} />
              <label>Foto de perfil</label>
              <div className={styles.areaCargaArchivo}>
                <span>Agrega una nueva imagen</span>
                <input type="file" className={styles.inputArchivoOculto} />
              </div>
              <label>Foto de portada</label>
              <div className={styles.areaCargaArchivo}>
                <span>Agrega una nueva imagen</span>
                <input type="file" className={styles.inputArchivoOculto} />
              </div>
              <label>ID</label>
              <input
                type="text"
                value={datosUsuario.id}
                readOnly
                className={styles.campoSoloLectura}
              />
              <button type="submit" className={styles.botonGuardarPerfil}>
                Guardar
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className={styles.estructuraPaginaPerfil}>
      <div
        className={styles.bannerSuperior}
        style={{ backgroundImage: `url(${datosUsuario.bannerImage})` }}
      ></div>
      <div className={styles.contenedorPrincipalPerfil}>
        <div className={styles.contenidoCabeceraPerfil}>
          <img
            src={datosUsuario.profilePicture}
            alt="Perfil"
            className={styles.avatarPerfil}
          />
          <div className={styles.bloqueInfoUsuario}>
            <h3>{datosUsuario.name}</h3>
            <p className={styles.textoEmailUsuario}>
              @{datosUsuario.email.split("@")[0]}
            </p>
            <span className={styles.idCuentaUsuario}>
              ID: {datosUsuario.id}
            </span>
          </div>
          <button
            className={`${styles.botonEditarPerfil} ${
              pestanaActiva === "editar" ? styles.ocultoEnEdicion : ""
            }`}
            onClick={activarModoEdicion}
          >
            Editar perfil
          </button>
        </div>
        <div className={styles.pestanasNavegacionPerfil}>
          <button
            className={`${styles.botonPestanaNavegacion} ${
              pestanaActiva === "opiniones" ? styles.pestanaActiva : ""
            }`}
            onClick={() => setPestanaActiva("opiniones")}
          >
            Opiniones <span>{datosUsuario.opinionesCount}</span>
          </button>
          <button
            className={`${styles.botonPestanaNavegacion} ${
              pestanaActiva === "favoritos" ? styles.pestanaActiva : ""
            }`}
            onClick={() => setPestanaActiva("favoritos")}
          >
            Favoritos <span>{datosUsuario.favoritosCount}</span>
          </button>
        </div>
        <div className={styles.areaContenidoPestana}>
          {renderizarContenidoPerfil()}
        </div>
      </div>
    </main>
  );
}

export default PerfilUsuario;
