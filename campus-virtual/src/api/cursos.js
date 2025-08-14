// src/api/cursos.js
export const getCursos = async () => {
  // En una aplicación real, esto haría una llamada a tu API
  // Simulamos una respuesta con un retraso
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Introducción a React",
          descripcion: "Aprende los fundamentos de React desde cero",
          profesor: "Ana Martínez",
          duracion: 4,
        },
        {
          id: 2,
          nombre: "JavaScript Avanzado",
          descripcion: "Domina conceptos avanzados de JavaScript",
          profesor: "Carlos Gómez",
          duracion: 6,
        },
        {
          id: 3,
          nombre: "Node.js Backend",
          descripcion: "Construye APIs con Node.js y Express",
          profesor: "Laura Fernández",
          duracion: 5,
        },
      ]);
    }, 1000);
  });
};
