// src/api/auth.test.js
import { login, logout, isAuthenticated } from "./auth";

describe("Auth Service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("login exitoso con credenciales correctas", async () => {
    const result = await login("profesor@campus.com", "profesor123");
    expect(result.token).toBeDefined();
    expect(result.user).toBeDefined();
    expect(isAuthenticated()).toBe(true);
  });

  test("login fallido con credenciales incorrectas", async () => {
    await expect(login("wrong@email.com", "wrongpass")).rejects.toThrow(
      "Credenciales incorrectas"
    );
  });

  test("logout limpia el almacenamiento", () => {
    login("profesor@campus.com", "profesor123");
    logout();
    expect(isAuthenticated()).toBe(false);
  });
});
