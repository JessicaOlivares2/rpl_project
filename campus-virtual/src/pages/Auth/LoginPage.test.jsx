import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";

// Mock del módulo de autenticación
vi.mock("../../api/auth", () => ({
  login: vi.fn(),
}));

describe("LoginPage", () => {
  test("1. Validar formato de email", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "emailinvalido" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Iniciar Sesión/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Solo se permiten cuentas @etecuba.ar/i)
      ).toBeInTheDocument();
    });
  });

  test("2. Mostrar error si credenciales son incorrectas", async () => {
    const { login } = await import("../../api/auth");
    login.mockRejectedValue(new Error("Credenciales incorrectas"));

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "alumno@etecuba.ar" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "password-incorrecto" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Iniciar Sesión/i }));

    await waitFor(() => {
      expect(screen.getByText(/Credenciales incorrectas/i)).toBeInTheDocument();
    });
  });

  test('3. Redirigir a "Mis Cursos" tras login exitoso', async () => {
    const { login } = await import("../../api/auth");
    const mockNavigate = vi.fn();

    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useNavigate: () => mockNavigate,
      };
    });

    login.mockResolvedValue({ success: true });

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "alumno@etecuba.ar" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Iniciar Sesión/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/cursos");
    });
  });
});
