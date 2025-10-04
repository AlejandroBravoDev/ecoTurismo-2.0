import { useState } from "react";
import stylesHeader from "./header.module.css";
import usuarioDemo from "../../assets/usuarioDemo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={stylesHeader.headerContainer}>
      {menuOpen && (
        <div className={stylesHeader.pageOverlay} onClick={toggleMenu}></div>
      )}

      <header className={stylesHeader.header}>
        <div className={stylesHeader.containerLogo}>
          <a href="#">
            <h1>
              <span className={stylesHeader.titleSpan}>ECO TURISMO</span>
              RISARALDA
            </h1>
          </a>
        </div>

        <div className={stylesHeader.iconAndMenuWrapper}>
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
          <nav
            className={`${stylesHeader.containerLinks} ${
              menuOpen ? stylesHeader.menuOpen : ""
            }`}
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
