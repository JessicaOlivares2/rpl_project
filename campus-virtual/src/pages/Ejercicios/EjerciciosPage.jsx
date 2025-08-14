// src/pages/Ejercicios/EjerciciosPage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getEjercicios } from "../../api/ejercicios";
import Card from "../../components/Card/Card";
import styles from "./Ejercicios.module.css";

function EjerciciosPage() {
  const { cursoId } = useParams();
  const [ejercicios, setEjercicios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEjercicios = async () => {
      try {
        const data = await getEjercicios(cursoId);
        setEjercicios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEjercicios();
  }, [cursoId]);

  if (loading)
    return <div className={styles.loading}>Cargando ejercicios...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <h1>{cursoId ? "Ejercicios del Curso" : "Todos los Ejercicios"}</h1>

      <div className={styles.filters}>
        <button className={styles.filterButton}>Todos</button>
        <button className={styles.filterButton}>Pendientes</button>
        <button className={styles.filterButton}>Entregados</button>
      </div>

      <div className={styles.ejerciciosList}>
        {ejercicios.map((ejercicio) => (
          <Card key={ejercicio.id} className={styles.ejercicioCard}>
            <div className={`${styles.estado} ${styles[ejercicio.estado]}`}>
              {ejercicio.estado}
            </div>
            <h2>{ejercicio.titulo}</h2>
            <p>{ejercicio.descripcion}</p>
            <div className={styles.metaInfo}>
              <span>
                Entrega: {new Date(ejercicio.fechaEntrega).toLocaleDateString()}
              </span>
              <span>Dificultad: {ejercicio.dificultad}</span>
            </div>
            <Link
              to={`/ejercicios/${ejercicio.id}`}
              className={styles.verButton}
            >
              Ver Detalles
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default EjerciciosPage;
