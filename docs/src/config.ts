// Base path for deployment (set by Vite)
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

// Site configuration - change these to customize the documentation
export const config = {
  // Library info
  name: "U-izy",
  shortName: "Uizy",
  tagline: "Tiny footprint, limitless possibilities",
  description: "A beginner-friendly utility-first CSS framework",
  emoji: "🌐",

  // URLs
  npm: "uizy",
  cdn: "https://unpkg.com/uizy/dist/index.css",
  github: "https://github.com/dufeut/uizy",

  // Base path
  base,
};

// Helper to create internal links with base path
export const link = (path: string) => `${base}${path}`;
