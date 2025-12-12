import type { JSX } from "preact";
import type UIZY from "@dufeut/uizy";

// Declare uizy as a global variable
declare global {
  const uizy: typeof UIZY;
}

// Base attributes for all uizy components
type UizyBaseAttributes = JSX.HTMLAttributes<HTMLElement>;

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      // App Layout
      "uizy-app": UizyBaseAttributes;

      // System Bar
      "uizy-system-bar": UizyBaseAttributes;

      // Header
      "uizy-header": UizyBaseAttributes & {
        shadow?: string | number;
      };

      // Footer
      "uizy-footer": UizyBaseAttributes & {
        shadow?: string | number;
      };

      // Main Content
      "uizy-main": UizyBaseAttributes & {
        "clip-top"?: boolean;
        "clip-bottom"?: boolean;
        "clip-left"?: boolean;
        "clip-right"?: boolean;
      };

      // Drawer/Sidebar
      "uizy-drawer": UizyBaseAttributes & {
        open?: boolean;
        right?: boolean;
        left?: boolean;
        shadow?: string | number;
        "clip-top"?: boolean;
        "clip-bottom"?: boolean;
      };

      // Overlay
      "uizy-overlay": UizyBaseAttributes & {
        "clip-top"?: boolean;
        "clip-bottom"?: boolean;
      };
    }
  }
}
