// src/pages/Auth/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email, password);
      navigate("/cursos");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Iniciar Sesion</h1>

        {error && <div className={styles.error}>{error}</div>}
        <p className={styles.loginP}>Bienvenido a la plataforma educativa</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@etecuba.ar"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className={styles.links}>
          <a href="/olvide-contrasena">¿Olvidaste tu contraseña?</a>
          <a href="/registro">¿No tienes una cuenta? Regístrate aquí</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
