import { useParams } from 'react-router-dom'
import CardCurso from '../components/CardCurso'

// Mock de datos
const materiasPorCurso = {
  '3A': ['Matemáticas', 'Historia', 'Biología'],
  '3B': ['Literatura', 'Química']
}

export default function CursosPage() {
  const { cursoId } = useParams()
  const materias = materiasPorCurso[cursoId] || []

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Materias - Curso {cursoId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {materias.map((materia) => (
          <CardCurso 
            key={materia}
            curso={{ nombre: materia, tipo: 'materia' }}
            onClick={() => console.log(`Navegar a ${materia}`)}
          />
        ))}
      </div>
    </div>
  )
}