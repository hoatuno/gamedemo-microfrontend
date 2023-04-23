import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const PORT = 5002;
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mario_jump",
      filename: "remoteEntry.js",
      exposes: {
        "./remote": "./src/index.jsx",
      },
    }),
  ],
  base:
    process.env.NODE_ENV === "production" ? `http://localhost:${PORT}/` : "/",
  server: {
    port: PORT,
  },
  build: {
    target: "esnext",
  },
  preview: {
    port: PORT,
  },
});
