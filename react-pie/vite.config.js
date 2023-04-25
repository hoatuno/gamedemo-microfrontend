import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        mario_jump: "http://localhost:5002/assets/remoteEntry.js",
        vue_2048: "http://localhost:5001/assets/remoteEntry.js",
        ant_react: "http://localhost:5003/assets/remoteEntry.js",
        // add more remote pieces here
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
