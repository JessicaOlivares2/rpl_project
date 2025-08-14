export const fetchEjercicios = async (materia) => {
  const ejerciciosDB = {
    'Matemáticas': [
      {
        id: 1,
        titulo: 'Ecuaciones lineales',
        descripcion: 'Resolver para x: 2x + 5 = 15'
      }
    ]
  }
  return ejerciciosDB[materia] || []
}