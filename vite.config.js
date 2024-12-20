import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/e-commerce/",
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@features": path.resolve("./src/features"),
      "@contexts": path.resolve("./src/app/contexts"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/config/test/setup.js",
  },
});
