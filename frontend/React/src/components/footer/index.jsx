import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.footerRow}>
          <div className={styles.footerLinks}>
            <h4>
              <span>GAME</span>ZONE
            </h4>
            <ul>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Nuestros servicos</a>
              </li>
              <li>
                <a href="#">Politica de privacidad</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="#">Envios</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Compras</a>
              </li>
              <li>
                <a href="#">Pagos</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Tienda</h4>
            <ul>
              <li>
                <a href="#">Videojuegos</a>
              </li>
              <li>
                <a href="#">Plataformas</a>
              </li>
              <li>
                <a href="#">Contenido</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>Siguenos</h4>
            <div className={styles.socialLink}>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
