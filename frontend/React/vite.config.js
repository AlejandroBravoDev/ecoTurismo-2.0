// vite.config.js (o .ts)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✨ AÑADE ESTE BLOQUE ✨
  server: {
    // Esto previene que Vite intente hot-reload el mapa
    // lo que causa la doble inicialización.
    hmr: {
      overlay: false, // Opcional, pero útil
    },
    watch: {
      ignored: ["**/src/components/mapa/mapaRisaralda.jsx"],
    },
  },
  // ✨ FIN DEL BLOQUE A AÑADIR ✨

  // ... el resto de tu config ...
});
