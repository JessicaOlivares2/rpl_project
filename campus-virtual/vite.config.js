import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // Permite styles.myClass
      generateScopedName: "[name]__[local]___[hash:base64:5]", // Ej: Button_primary__aBc12
    },
  },
});
