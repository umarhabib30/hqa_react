// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Faster build, smaller files
    minify: "esbuild",

    // No need for source maps in production
    sourcemap: false,

    // Split vendor from app to make the UI load faster
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // all libraries in one cached file
          }
        },
      },
    },

    // Let Vite split CSS for each page
    cssCodeSplit: true,

    // Avoid chunk warnings
    chunkSizeWarningLimit: 1000,
  },
});
