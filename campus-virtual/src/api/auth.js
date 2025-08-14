// src/api/auth.js

// Datos simulados de usuarios
const users = [
  {
    email: "alumno@etecuba.ar",
    password: "alumno123",
    name: "Alumno Ejemplo",
    cursos: [101, 102],
    role: "student",
  },
];

// Datos simulados de cursos
const cursosData = {
  101: { id: 101, nombre: "Programación Básica", profesor: "Prof. García" },
  102: { id: 102, nombre: "Matemáticas", profesor: "Prof. Martínez" },
};

// Función para login
export const login = async (email, password) => {
  // Validar dominio
  if (!email.endsWith("@etecuba.ar")) {
    throw new Error("Solo se permiten cuentas @etecuba.ar");
  }

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Credenciales incorrectas");
  }

  localStorage.setItem("authToken", "simulated-token");
  localStorage.setItem("user", JSON.stringify(user));

  return user;
};

// Función para obtener cursos del usuario (añade esta exportación)
export const getCursosDelUsuario = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) throw new Error("Usuario no autenticado");

  return user.cursos.map((cursoId) => ({
    ...cursosData[cursoId],
    progreso: Math.floor(Math.random() * 100),
  }));
};

// Otras funciones de autenticación
export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
