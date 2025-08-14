// src/pages/Cursos/MisCursosPage.jsx
import { useEffect, useState } from "react";
import { getCursosDelUsuario } from "../../api/auth"; // Importación corregida
import styles from "./CursosPage.module.css";

function MisCursosPage() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCursos = async () => {
      try {
        const data = await getCursosDelUsuario(); // Llamada corregida
        setCursos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCursos();
  }, []);

  if (loading) return <div>Cargando cursos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1>Mis Cursos</h1>
      <div className={styles.cursosGrid}>
        {cursos.map((curso) => (
          <div key={curso.id} className={styles.cursoCard}>
            <h2>{curso.nombre}</h2>
            <p>Profesor: {curso.profesor}</p>
            <div className={styles.progressBar}>
              <div style={{ width: `${curso.progreso}%` }}></div>
            </div>
            <span>{curso.progreso}% completado</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisCursosPage;
