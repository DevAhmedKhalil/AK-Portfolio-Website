import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AK-Portfolio-Website/", // Use the name of your repository here
  build: {
    // Three.js is one lazy-loaded chunk (~800 kB) that loads after first paint.
    chunkSizeWarningLimit: 900,
  },
});
