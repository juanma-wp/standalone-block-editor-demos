import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.IS_GUTENBERG_PLUGIN": false,
    // Add global polyfills
    global: "globalThis",
  },
  plugins: [react()],
});
