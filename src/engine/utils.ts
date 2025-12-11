/* ------------------------------------------------------------------ */
/* CSS Injection Utilities                                            */
/* ------------------------------------------------------------------ */

const STYLE_ATTR = "uizy-design";

/** Minifies CSS by removing extra whitespace and newlines */
const minifyCSS = (css: string): string =>
  css.replace(/\s\s+/g, " ").replace(/\r?\n|\r/g, "").trim();

/** Gets or creates a style element with the specified ID */
const getOrCreateStyle = (id: string): HTMLStyleElement => {
  const existing = document.querySelector<HTMLStyleElement>(`style[${STYLE_ATTR}="${id}"]`);
  if (existing) return existing;

  const style = document.createElement("style");
  style.setAttribute(STYLE_ATTR, id);
  document.head.append(style);
  return style;
};

/** Injects CSS into a named style element (creates if not exists) */
export const injectCSS = (code: string, id = "main"): void => {
  getOrCreateStyle(id).textContent = minifyCSS(code);
};
