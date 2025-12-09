/**
 * The CSS attr
 */
const attrCSS = "uizy-design";

/**
 * Injects replaceable CSS.
 * @param {string} code - The CSS code to inject.
 * @param {string} id - The ID of the style element to inject the code into.
 */
export const injectCSS = (code: string, id: string = "main") =>
  injectCSSBase({ code, id });

/**
 * Base function for injecting replaceable CSS.
 * @param {object} options - Options for injecting CSS.
 * @param {string} options.code - The CSS code to inject.
 * @param {string} options.id - The ID of the style element to inject the code into.
 */
function injectCSSBase({ code, id }: { code: string; id: string }) {
  const elem = getStyle(id);
  elem.textContent = removeSpace(code);
}

/**
 * Gets the style element with the specified ID, creating one if it doesn't exist.
 * @param {string} id - The ID of the style element to retrieve or create.
 * @returns {HTMLElement} - The style element with the specified ID.
 */
export function getStyle(id: string): HTMLElement {
  const found = window.document.querySelectorAll(`[${attrCSS}="${id}"]`);
  if (found.length > 0) {
    return found[0] as HTMLElement;
  } else {
    const style = window.document.createElement("style");
    style.setAttribute(attrCSS, id);
    window.document.head.append(style);
    return style;
  }
}

/**
 * Cleans up CSS code by removing extra spaces and newlines.
 * @param {string} text - The CSS code to clean up.
 * @returns {string} - The cleaned up CSS code.
 */
export function removeSpace(text: string): string {
  return text
    .replace(/\s\s+/g, " ")
    .replace(/\r?\n|\r/g, "")
    .trim();
}

export const setBreakPoint = ({
  left,
  right,
  top,
  bottom,
}: {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}) => {
  const items: string[] = [];
  const drawer: string[] = [];
  if (left) items.push("margin-left: 0 !important;");
  if (right) items.push("margin-right: 0 !important;");
  if (top) drawer.push("top: 0 !important;");
  if (bottom) drawer.push("bottom: 0 !important;");
  return `
@media (max-width: 1024px) {
    .uizy-main,
    .uizy-header {
        ${items.join(" ")}
    }
    .uizy-drawer {
        ${drawer.join(" ")}
    }
}    
`;
};

export const setLayout = ({
  system,
  header,
  footer,
  left,
  right,
  leftMini,
  rightMini,
  drawerSpeed,
  overlayOpacity,
  overlayColor,
}: {
  system?: number;
  header?: number;
  footer?: number;
  left?: number;
  right?: number;
  leftMini?: number;
  rightMini?: number;
  drawerSpeed?: number;
  overlayOpacity?: number;
  overlayColor?: string;
}) => {
  return `
:root {
    --uizy-system-bar-height: ${system ?? 0}px;
    --uizy-header-height: ${header ?? 56}px;
    --uizy-footer-height: ${footer ?? 48}px;
    --uizy-left-width: ${left ?? 280}px;
    --uizy-right-width: ${right ?? 280}px;
    --uizy-left-mini-width: ${leftMini ?? 64}px;
    --uizy-right-mini-width: ${rightMini ?? 60}px;
    --uizy-drawer-speed: ${drawerSpeed ?? 0.25}s;
    --uizy-overlay-color: ${overlayColor ?? "black"};
    --uizy-overlay-opacity: ${overlayOpacity ?? "0.7"};
}  
uizy-overlay.full {
    z-index: 100 !important;
    top:0 !important;
    bottom:0 !important;
}
  `;
};
