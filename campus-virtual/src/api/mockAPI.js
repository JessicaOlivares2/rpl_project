// src/api/mockAPI.js
const estudiantes = [
  {
    codigo: "20230001",
    test: "clave123",
    nombre: "Juan Pérez",
    carrera: "Ingeniería de Software",
    cursos: [101, 102, 201],
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    codigo: "20230002",
    test: "abc456",
    nombre: "María García",
    carrera: "Ciencia de Datos",
    cursos: [101, 103, 202],
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

export const autenticarEstudiante = async (codigo, test) => {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 500));

  const estudiante = estudiantes.find(
    (est) => est.codigo === codigo && est.test === test
  );

  if (!estudiante) {
    throw new Error("Código o test incorrecto");
  }

  // Eliminamos el test de la respuesta por seguridad
  const { test: _, ...datosSeguros } = estudiante;

  return {
    token: btoa(JSON.stringify({ codigo, timestamp: Date.now() })),
    usuario: datosSeguros,
  };
};

export const obtenerCursosDelEstudiante = async (codigo) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const estudiante = estudiantes.find((est) => est.codigo === codigo);
  if (!estudiante) throw new Error("Estudiante no encontrado");

  // Simulamos datos de cursos
  const todosCursos = {
    101: { id: 101, nombre: "Programación I", profesor: "Dr. Smith" },
    102: { id: 102, nombre: "Bases de Datos", profesor: "Dra. Johnson" },
    103: { id: 103, nombre: "Algoritmos", profesor: "Dr. Williams" },
    201: { id: 201, nombre: "Programación II", profesor: "Dra. Brown" },
    202: { id: 202, nombre: "Machine Learning", profesor: "Dr. Davis" },
  };

  return estudiante.cursos.map((cursoId) => ({
    ...todosCursos[cursoId],
    progreso: Math.floor(Math.random() * 100),
    ultimoAcceso: new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
  }));
};
