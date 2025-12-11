// vite.config.js
// @ts-ignore
import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";
import type { MinifyOptions } from "terser";

const packageName = JSON.stringify(pkg.name.replace(/-/g, "_"));

const terserOptions: MinifyOptions = {
  compress: {
    passes: 4,
    pure_funcs: ["console.log"],
    drop_debugger: true,
    drop_console: false,
    unsafe: true,
    unsafe_arrows: true,
    unsafe_methods: true,
    unsafe_proto: true,
    unsafe_regexp: true,
    unsafe_undefined: true,
    inline: 3,
    collapse_vars: true,
    reduce_vars: true,
    reduce_funcs: true,
    dead_code: true,
    booleans_as_integers: true,
    hoist_funs: true,
    hoist_vars: false,
    join_vars: true,
    sequences: true,
    if_return: true,
    conditionals: true,
    comparisons: true,
    evaluate: true,
    toplevel: true,
    pure_getters: true,
  },
  mangle: {
    toplevel: true,
    properties: {
      regex: /^_/,
    },
  },
  format: {
    comments: false,
    ecma: 2020,
  },
  ecma: 2020,
};

export default defineConfig({
  define: {
    __APP_NAME__: packageName,
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_AUTHOR__: JSON.stringify(pkg.author),
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/__init__.js"),
      name: JSON.parse(packageName),
      fileName: (format) => `waria.${format}.js`,
      formats: ["es", "iife"],
    },
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: "[name][extname]",
      },
    },
  },
});
