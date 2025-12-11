import { cpSync, rmSync, existsSync } from "fs";
import { join } from "path";

const dist = join(import.meta.dirname, "..", "dist");
const nested = join(dist, "uizy");

// Copy prerendered content from dist/uizy/ to dist/ (overwrites shell files)
if (existsSync(nested)) {
  cpSync(nested, dist, { recursive: true });
  rmSync(nested, { recursive: true });
  console.log("✓ Moved prerendered content from dist/uizy/ to dist/");
}
