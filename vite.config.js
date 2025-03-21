import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/site-portfolio/projets-react/SmartIDE",
  plugins: [react()],
});
