import stylesHeader from "./header.module.css";
import usuarioDemo from "../../assets/usuarioDemo.png";

function Header() {
  return (
    <header>
      <div className={stylesHeader.header}>
        <div className={stylesHeader.containerLogo}>
          <a href="#">
            <h1>
              <span className={stylesHeader.titleSpan}>ECO TURISMO</span>
              RISARALDA
            </h1>
          </a>
        </div>
        <div className={stylesHeader.containerLinks}>
          <ul>
            <a href="#">
              <li>Lugares</li>
            </a>
            <a href="#">
              <li>Hospedajes</li>
            </a>
            <a href="#">
              <img src={usuarioDemo}></img>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
