// src/api/ejercicios.js

// Datos de ejemplo (en producción vendrían de tu backend)
const ejerciciosData = [
  {
    id: 1,
    cursoId: 1,
    titulo: "Introducción a React",
    descripcion: "Crea tu primer componente en React",
    fechaEntrega: "2023-12-15",
    dificultad: "Principiante",
    estado: "pendiente",
    tipo: "práctica",
  },
  {
    id: 2,
    cursoId: 1,
    titulo: "Hooks en React",
    descripcion: "Implementa useState y useEffect en un proyecto",
    fechaEntrega: "2023-12-20",
    dificultad: "Intermedio",
    estado: "en progreso",
    tipo: "práctica",
  },
  {
    id: 3,
    cursoId: 2,
    titulo: "Closures en JavaScript",
    descripcion: "Resuelve los problemas sobre closures",
    fechaEntrega: "2023-12-18",
    dificultad: "Avanzado",
    estado: "entregado",
    tipo: "teoría",
  },
];

// Simula retraso de red
const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

export const getEjercicios = async (cursoId = null) => {
  await delay();

  if (cursoId) {
    return ejerciciosData.filter((ej) => ej.cursoId === cursoId);
  }

  return ejerciciosData;
};

export const getEjercicioById = async (id) => {
  await delay();
  const ejercicio = ejerciciosData.find((ej) => ej.id === id);

  if (!ejercicio) {
    throw new Error("Ejercicio no encontrado");
  }

  return ejercicio;
};

export const submitEjercicio = async (ejercicioId, respuesta) => {
  await delay();

  // En una app real, esto enviaría al backend
  return {
    success: true,
    mensaje: "Ejercicio entregado correctamente",
    fechaEntrega: new Date().toISOString(),
    calificacion: Math.floor(Math.random() * 10) + 1, // Simula calificación aleatoria
  };
};
