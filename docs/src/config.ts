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
};

// Helper to create internal links (simple paths since we prerender all pages)
export const link = (path: string) => path;
