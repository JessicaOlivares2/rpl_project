import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import CursosPage from './pages/CursosPage'
import GestionCurso from './pages/Docente/GestionCurso'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cursos/:cursoId" element={<CursosPage />} />
        <Route path="/Docente" element={<GestionCurso />} />
      </Routes>
    </BrowserRouter>
  )
}