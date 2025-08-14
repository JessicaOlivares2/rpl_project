import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          © {new Date().getFullYear()} Campus Virtual - Todos los derechos
          reservados
        </p>

        <div className={styles.links}>
          <a href="/terminos">Términos de servicio</a>
          <a href="/privacidad">Política de privacidad</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
