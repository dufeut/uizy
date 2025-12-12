// vite.config.js
// @ts-ignore
import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";
// import type { MinifyOptions } from "terser";

// Use "uizy" as the global name (handles scoped package names)
const globalName = "uizy";

export default defineConfig({
  define: {
    __APP_NAME__: JSON.stringify(globalName),
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_AUTHOR__: JSON.stringify(pkg.author),
    // Replace process.env.NODE_ENV for browser builds (nanostores uses this)
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/__init__.js"),
      name: globalName,
    },
    cssCodeSplit: false,
    rollupOptions: {
      // Bundle all dependencies (including nanostores) for both formats
      output: [
        {
          format: "es",
          entryFileNames: "index.js",
          assetFileNames: "index[extname]",
        },
        {
          format: "iife",
          name: globalName,
          entryFileNames: "uizy.iife.js",
          assetFileNames: "index[extname]",
        },
      ],
    },
  },
});
