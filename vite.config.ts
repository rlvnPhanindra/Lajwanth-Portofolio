import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

// Always serve /resume.pdf with explicit PDF headers + download filename
const resumePdfHeaders = (): Plugin => ({
  name: "resume-pdf-headers",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.split("?")[0] === "/resume.pdf") {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          'attachment; filename="Ravuri_Lajwanth_Resume.pdf"'
        );
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Cache-Control", "public, max-age=3600");
      }
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url && req.url.split("?")[0] === "/resume.pdf") {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          'attachment; filename="Ravuri_Lajwanth_Resume.pdf"'
        );
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Cache-Control", "public, max-age=3600");
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    resumePdfHeaders(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
