// Mock de datos de cursos
export const fetchCursos = async (cursoId) => {
  const cursosDB = {
    '3A': {
      nombre: 'Tercero A',
      materias: ['Matemáticas', 'Historia']
    },
    // ...otros cursos
  }
  return new Promise(resolve => {
    setTimeout(() => resolve(cursosDB[cursoId]), 300)
  })
}