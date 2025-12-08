import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const base = "/uizy";

export default defineConfig({
  base: `${base}/`,
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
        additionalPrerenderRoutes: [
          `${base}/`,
          `${base}/404`,
          `${base}/docs/getting-started`,
          `${base}/docs/display`,
          `${base}/docs/grid`,
          `${base}/docs/spacing`,
          `${base}/docs/typography`,
          `${base}/docs/borders`,
          `${base}/docs/shadows`,
          `${base}/docs/extras`,
          `${base}/docs/responsive`,
          `${base}/docs/customization`,
        ],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: `${base}/404`,
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
