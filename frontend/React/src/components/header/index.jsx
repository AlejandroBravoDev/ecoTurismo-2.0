import { useState } from "react";
import stylesHeader from "./header.module.css";
import usuarioDemo from "../../assets/usuarioDemo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Creamos un contenedor que tendrá posición relativa para que el overlay funcione
    <div className={stylesHeader.headerContainer}>
      {/* 1. Overlay (Capa oscura) */}
      {/* Solo se muestra si el menú está abierto */}
      {menuOpen && (
        <div
          className={stylesHeader.pageOverlay}
          onClick={toggleMenu} // Cierra el menú si se hace clic fuera
        ></div>
      )}

      {/* 2. El Header principal */}
      <header className={stylesHeader.header}>
        {/* Contenedor del Logo/Título */}
        <div className={stylesHeader.containerLogo}>
          <a href="#">
            <h1>
              <span className={stylesHeader.titleSpan}>ECO TURISMO</span>
              RISARALDA
            </h1>
          </a>
        </div>

        {/* 3. Contenedor de Ícono y Menú (Para que el menú siga al ícono) */}
        <div className={stylesHeader.iconAndMenuWrapper}>
          {/* El botón/Ícono Hamburguesa */}
          <div className={stylesHeader.menuToggle} onClick={toggleMenu}>
            <div className={stylesHeader.hamburgerIcon}>
              <span
                className={`${stylesHeader.bar} ${
                  menuOpen ? stylesHeader.barTop : ""
                }`}
              ></span>
              <span
                className={`${stylesHeader.bar} ${
                  menuOpen ? stylesHeader.barMiddle : ""
                }`}
              ></span>
              <span
                className={`${stylesHeader.bar} ${
                  menuOpen ? stylesHeader.barBottom : ""
                }`}
              ></span>
            </div>
          </div>

          {/* 4. Menú Desplegable: Aplicamos la clase dinámica */}
          <nav
            className={`${stylesHeader.containerLinks} ${
              menuOpen ? stylesHeader.menuOpen : ""
            }`}
            // El onClick aquí ya no es necesario si el overlay lo cierra
          >
            <ul className={stylesHeader.navList}>
              <li>
                <a href="#">Lugares</a>
              </li>
              <li>
                <a href="#">Hospedajes</a>
              </li>
              <li className={stylesHeader.profileLink}>
                <a href="#">
                  <img src={usuarioDemo} alt="Perfil de Usuario" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Header;
