import { injectCSS } from "./utils.ts";

/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */
const BREAKPOINT: Record<string, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

export interface BreakpointConfig {
  name: string;
  width: number;
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  main: boolean;
  header: boolean;
}

export interface LayoutConfig {
  system: number;
  header: number;
  footer: number;
  left: number;
  right: number;
  leftMini: number;
  rightMini: number;
  drawerSpeed: number;
}

export interface OverlayConfig {
  opacity: number;
  color: string;
}

export interface LayoutInput {
  breakpoint?: Partial<BreakpointConfig>;
  layout?: Partial<LayoutConfig>;
  overlay?: Partial<OverlayConfig>;
}

/* ------------------------------------------------------------------ */
/* DEFAULT CONFIG */
/* ------------------------------------------------------------------ */

const DEFAULT_BREAKPOINT: BreakpointConfig = {
  name: "",
  width: 0,
  top: false,
  bottom: false,
  left: false,
  right: false,
  header: true,
  main: true,
};

const DEFAULT_LAYOUT: LayoutConfig = {
  system: 0,
  header: 56,
  footer: 48,
  left: 240,
  right: 240,
  leftMini: 64,
  rightMini: 64,
  drawerSpeed: 0.2,
};

const DEFAULT_OVERLAY: OverlayConfig = {
  opacity: 0.45,
  color: "black",
};

/* ------------------------------------------------------------------ */
/* MAIN LAYOUT FUNCTION */
/* ------------------------------------------------------------------ */

export function layout({
  breakpoint = {},
  layout: layoutCfg = {},
  overlay = {},
}: LayoutInput = {}): void {
  const bp: BreakpointConfig = { ...DEFAULT_BREAKPOINT, ...breakpoint };
  const ly: LayoutConfig = { ...DEFAULT_LAYOUT, ...layoutCfg };
  const ov: OverlayConfig = { ...DEFAULT_OVERLAY, ...overlay };

  const css = [setBreakPoint(bp), setLayout({ ...ly, ...ov })].join("");

  injectCSS(css);
}

/* ------------------------------------------------------------------ */
/* BREAKPOINT CSS GENERATOR */
/* ------------------------------------------------------------------ */

function setBreakPoint(bp: BreakpointConfig): string {
  const marginRules: string[] = [];
  const drawerRules: string[] = [];
  const allRules: string[] = [];

  if (bp.left) marginRules.push("margin-left: 0 !important;");
  if (bp.right) marginRules.push("margin-right: 0 !important;");
  if (bp.top) drawerRules.push("top: 0 !important;");
  if (bp.bottom) drawerRules.push("bottom: 0 !important;");

  let width = bp.width;
  if (bp.name) width = BREAKPOINT[bp.name] as number;

  const margin = marginRules.join(" ");
  if (bp.main) allRules.push(`.uizy-main { ${margin} }`);
  if (bp.header) allRules.push(`.uizy-header { ${margin} }`);
  return `
@media (max-width: ${width}px) {
  ${allRules.join(" ")}
  .uizy-drawer { ${drawerRules.join(" ")} }
}
`;
}

/* ------------------------------------------------------------------ */
/* LAYOUT VARIABLE MAPPING */
/* ------------------------------------------------------------------ */

type CSSVariableMap = {
  [K in keyof LayoutConfig | keyof OverlayConfig]: string;
};

const CSS_VAR_MAP: CSSVariableMap = {
  system: "--uizy-system-bar-height",
  header: "--uizy-header-height",
  footer: "--uizy-footer-height",
  left: "--uizy-left-width",
  right: "--uizy-right-width",
  leftMini: "--uizy-left-mini-width",
  rightMini: "--uizy-right-mini-width",
  drawerSpeed: "--uizy-drawer-speed",
  color: "--uizy-overlay-color",
  opacity: "--uizy-overlay-opacity",
};

/* ------------------------------------------------------------------ */
/* LAYOUT CSS GENERATOR */
/* ------------------------------------------------------------------ */

function setLayout(vars: LayoutConfig & OverlayConfig): string {
  const cssVars = Object.entries(CSS_VAR_MAP)
    .map(([key, cssVar]) => {
      const value = vars[key as keyof typeof vars];
      const suffix =
        key === "drawerSpeed"
          ? "s"
          : key === "color"
          ? ""
          : key === "opacity"
          ? ""
          : "px";

      return `${cssVar}: ${value}${suffix};`;
    })
    .join("\n    ");

  return `
:root {
    ${cssVars}
}
uizy-overlay.full {
  z-index: 100 !important;
  top: 0 !important;
  bottom: 0 !important;
}
`;
}
