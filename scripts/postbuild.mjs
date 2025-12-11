import { cpSync, mkdirSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const docsCSS = join(root, "docs", "public", "css");

// Generate TypeScript declaration
const dts = `interface BreakpointConfig {
  name: string;
  width: number;
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
  main: boolean;
  header: boolean;
}

interface LayoutConfig {
  system: number;
  header: number;
  footer: number;
  left: number;
  right: number;
  leftMini: number;
  rightMini: number;
  drawerSpeed: number;
}

interface OverlayConfig {
  opacity: number;
  color: string;
}

interface LayoutInput {
  breakpoint?: Partial<BreakpointConfig>;
  layout?: Partial<LayoutConfig>;
  overlay?: Partial<OverlayConfig>;
}

interface Uizy {
  init(callback: () => void): void;
  layout(config?: LayoutInput): void;
  get(name: string): HTMLElement | null;
}

declare const uizy: Uizy;
export default uizy;
`;
writeFileSync(join(dist, "index.d.ts"), dts);
console.log("✓ Generated dist/index.d.ts");

// Copy CSS to docs
mkdirSync(docsCSS, { recursive: true });
cpSync(join(dist, "index.css"), join(docsCSS, "index.css"));
console.log("✓ Copied dist/index.css to docs/public/css/");
