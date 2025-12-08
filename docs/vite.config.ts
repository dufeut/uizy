import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/uizy/",
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
        additionalPrerenderRoutes: [
          "/404",
          "/docs/getting-started",
          "/docs/display",
          "/docs/grid",
          "/docs/spacing",
          "/docs/typography",
          "/docs/borders",
          "/docs/shadows",
          "/docs/extras",
          "/docs/responsive",
        ],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: "/404",
      },
    }),
  ],
  // Allow importing from parent directory during dev
  server: {
    fs: {
      allow: [".."],
    },
  },
});
