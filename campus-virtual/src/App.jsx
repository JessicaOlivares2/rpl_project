import styles from "./App.module.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import LoginPage from "./pages/Auth/LoginPage";
import CursosPage from "./pages/Cursos/CursosPage";
import "./App.module.css";
import EjerciciosPage from "./pages/Ejercicios/EjerciciosPage";
import EjercicioPage from "./pages/Ejercicios/EjercicioPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className={styles.app}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/ejercicios" element={<EjerciciosPage />} />
          <Route path="/ejercicios/:id" element={<EjercicioPage />} />
          <Route
            path="/cursos/:cursoId/ejercicios"
            element={<EjerciciosPage />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
