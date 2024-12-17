import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AK-Portfolio-Website/", // Use the name of your repository here
});
