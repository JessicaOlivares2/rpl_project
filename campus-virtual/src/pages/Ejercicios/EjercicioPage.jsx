// src/pages/Ejercicios/EjercicioPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEjercicioById, submitEjercicio } from "../../api/ejercicios";
import styles from "./EjercicioPage.module.css";

function EjercicioPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ejercicio, setEjercicio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [respuesta, setRespuesta] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const loadEjercicio = async () => {
      try {
        const data = await getEjercicioById(id);
        setEjercicio(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEjercicio();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await submitEjercicio(id, respuesta);
      setResultado(result);
      // Actualizar el estado a "entregado"
      setEjercicio((prev) => ({ ...prev, estado: "entregado" }));
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return <div className={styles.loading}>Cargando ejercicio...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Volver
      </button>

      <div className={styles.header}>
        <h1>{ejercicio.titulo}</h1>
        <span className={`${styles.estado} ${styles[ejercicio.estado]}`}>
          {ejercicio.estado}
        </span>
      </div>

      <div className={styles.metaInfo}>
        <span>Curso: {ejercicio.cursoId}</span>
        <span>Dificultad: {ejercicio.dificultad}</span>
        <span>
          Fecha de entrega:{" "}
          {new Date(ejercicio.fechaEntrega).toLocaleDateString()}
        </span>
      </div>

      <div className={styles.descripcion}>
        <h2>Descripción</h2>
        <p>{ejercicio.descripcion}</p>
      </div>

      {ejercicio.estado !== "entregado" ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Tu Respuesta</h2>
          <textarea
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            required
          />

          <button
            type="submit"
            disabled={submitting}
            className={styles.submitButton}
          >
            {submitting ? "Enviando..." : "Entregar Ejercicio"}
          </button>
        </form>
      ) : (
        <div className={styles.resultado}>
          <h2>Resultado</h2>
          {resultado ? (
            <>
              <p>
                <strong>Calificación:</strong> {resultado.calificacion}/10
              </p>
              <p>
                <strong>Fecha de entrega:</strong>{" "}
                {new Date(resultado.fechaEntrega).toLocaleString()}
              </p>
            </>
          ) : (
            <p>Ejercicio ya entregado anteriormente</p>
          )}
        </div>
      )}
    </div>
  );
}

export default EjercicioPage;
