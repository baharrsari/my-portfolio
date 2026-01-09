import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite ayarları: sadece React plugin'i
export default defineConfig({
  plugins: [react()],
});
