export default function CardCurso({ curso, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow"
    >
      <h3 className="font-bold text-lg">{curso.nombre}</h3>
      <p className="text-gray-500 text-sm">
        {curso.tipo === 'materia' ? 'Ver ejercicios' : 'Ver alumnos'}
      </p>
    </div>
  )
}