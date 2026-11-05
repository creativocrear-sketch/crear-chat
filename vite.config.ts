import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";


const plugins = [react(), tailwindcss()];

export default defineConfig(({ isSsrBuild }) => ({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: isSsrBuild
    ? {
        // Compilación de servidor usada solo para pre-renderizar las páginas (scripts/prerender.mjs).
        outDir: path.resolve(import.meta.dirname, "dist/server"),
        emptyOutDir: true,
        copyPublicDir: false,
      }
    : {
        outDir: path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true,
      },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
