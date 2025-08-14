import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>
          rpl.etec
        </Link>
      </div>

      <div className={styles.authButtons}>
        <Link to="/login" className={styles.loginButton}>
          Iniciar sesión
        </Link>
        <Link to="/registro" className={styles.registerButton}>
          Registrarse
        </Link>
      </div>
    </header>
  );
}

export default Header;
