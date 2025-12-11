/**
 * Uizy Engine
 *
 * Main entry point for the Uizy layout system and component registry.
 * Provides both granular APIs and a unified `start()` configuration method.
 *
 * @example
 * ```ts
 * import uizy from "@dufeut/uizy";
 *
 * // Option 1: Unified configuration
 * uizy.start({
 *   layout: { header: 56, footer: 48 },
 *   theme: { colors: { primary: "#1a1a1a" } },
 *   onReady: () => console.log("Ready!")
 * });
 *
 * // Option 2: Granular APIs
 * uizy.layout({ layout: { header: 56 } });
 * uizy.theme.system({ primary: "#1a1a1a" });
 * uizy.init(() => console.log("Ready!"));
 * ```
 */

import { initialize } from "./app.ts";
import { layout, type LayoutInput } from "./layout.ts";
import {
  Components,
  Actions,
  Stores,
  Directives,
  type ComponentTree,
  type DirectiveHandler,
} from "./components.ts";
import {
  Theme,
  type SystemColors,
  type ScrollbarOptions,
  type BrandOptions,
} from "./theme.ts";
import { injectCSS } from "./utils.ts";

/* ------------------------------------------------------------------ */
/* Nano-Stores                                                        */
/* ------------------------------------------------------------------ */
import * as NanoStore from "nanostores";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

/** Theme configuration for the start() method */
export interface ThemeConfig {
  /** System color variables (primary, secondary, accent, etc.) */
  colors?: SystemColors;
  /** Scrollbar customization */
  scrollbar?: ScrollbarOptions;
  /** Brand color sets */
  brands?: BrandOptions[];
}

/** Directives configuration (simple or full handlers) */
export type DirectivesConfig = Record<string, DirectiveHandler | ((el: HTMLElement) => void)>;

/** Complete configuration for the start() method */
export interface StartConfig {
  /** Layout dimensions and breakpoint settings */
  layout?: LayoutInput;

  /** Theme configuration (colors, scrollbar, brands) */
  theme?: ThemeConfig;

  /** Components to register (nested tree structure) */
  components?: ComponentTree;

  /** Actions to register (nested tree structure) */
  actions?: ComponentTree;

  /** Stores to register (nested tree structure) */
  stores?: ComponentTree;

  /** Custom directives to register */
  directives?: DirectivesConfig;

  /** Inject global shortcuts to window ($ and $emit) */
  globals?: boolean;

  /** Callback to run when DOM is ready */
  onReady?: () => void;
}

/* ------------------------------------------------------------------ */
/* Core Functions                                                      */
/* ------------------------------------------------------------------ */

/**
 * Initializes web components and optionally runs a callback on DOMContentLoaded.
 *
 * @param callback - Function to call when DOM is ready
 *
 * @example
 * ```ts
 * uizy.init(() => {
 *   const app = uizy.get("app");
 *   // Setup event handlers...
 * });
 * ```
 */
function init(callback?: () => void): void {
  // Initialize web components
  initialize();

  // Run callback on DOM ready
  if (callback && typeof callback === "function") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      // DOM already loaded
      callback();
    }
  }
}

/**
 * Unified configuration method for setting up Uizy.
 * Configures layout, theme, components, and initialization in one call.
 *
 * @param config - Complete configuration object
 *
 * @example
 * ```ts
 * uizy.start({
 *   // Layout configuration
 *   layout: {
 *     layout: {
 *       system: 24,
 *       header: 56,
 *       footer: 48,
 *       left: 240,
 *       right: 240,
 *       leftMini: 64,
 *       rightMini: 64,
 *       drawerSpeed: 0.2,
 *     },
 *     overlay: {
 *       opacity: 0.45,
 *       color: "black",
 *     },
 *     breakpoint: {
 *       name: "md",
 *       main: true,
 *       header: true,
 *       left: true,
 *       right: true,
 *     },
 *   },
 *
 *   // Theme configuration
 *   theme: {
 *     colors: {
 *       primary: "#1a1a1a",
 *       secondary: "#f5f5f5",
 *       accent: "#6b08a5",
 *       focus: "#1eadff",
 *       info: "#0050b9",
 *       success: "#28b77b",
 *       warning: "#f2c94c",
 *       danger: "#d64545",
 *       error: "#ff4d4d",
 *     },
 *     scrollbar: {
 *       size: 12,
 *       color: "rgba(121, 121, 121, 0.4)",
 *       hover: "rgba(121, 121, 121, 0.7)",
 *     },
 *     brands: [
 *       { name: "primary", back: "#6b08a5", text: "#fff" },
 *       { name: "success", back: "#28b77b", text: "#fff" },
 *     ],
 *   },
 *
 *   // Custom components
 *   components: {
 *       button: () => `px-4 py-2`,
 *       buttonWithConfig: (arg) => `px-${arg.x ?? 0} py-${arg.x ?? 0}`,
 *   },
 *
 *   // Ready callback
 *   onReady: () => {
 *     console.log("Uizy is ready!");
 *   },
 * });
 * ```
 */
declare const __APP_NAME__: string;
declare const __APP_VERSION__: string;
declare const __APP_AUTHOR__: string;

declare global {
  interface Window {
    uizy: typeof UIZY & {
      __name__: string;
      __version__: string;
      __author__: string;
    };
    /** Global store accessor (when globals: true) */
    $: typeof UIZY.$;
    /** Global action emitter (when globals: true) */
    $emit: typeof UIZY.emit;
  }
}

function start(config: StartConfig = {}): void {
  window.uizy = Object.freeze({
    __name__: __APP_NAME__,
    __version__: __APP_VERSION__,
    __author__: __APP_AUTHOR__,
    ...UIZY,
  });

  const {
    layout: layoutConfig,
    theme: themeConfig,
    components,
    actions,
    stores,
    directives,
    globals,
    onReady,
  } = config;

  // 1. Configure layout
  if (layoutConfig) {
    layout(layoutConfig);
  }

  // 2. Configure theme
  if (themeConfig) {
    // System colors
    if (themeConfig.colors) {
      Theme.system(themeConfig.colors);
    }

    // Scrollbar
    if (themeConfig.scrollbar) {
      Theme.scrollbar(themeConfig.scrollbar);
    }

    // Brand colors
    if (themeConfig.brands && themeConfig.brands.length > 0) {
      for (const brand of themeConfig.brands) {
        Theme.brand(brand);
      }
    }

    // Inject theme CSS into document
    const themeCSS = Theme.toCSS();
    if (themeCSS) {
      injectCSS(`:root { ${themeCSS} }`, "theme");
    }
  }

  // 3. Register components
  if (components) {
    Components.add(components);
  }

  // 4. Register actions
  if (actions) {
    Actions.add(actions);
  }

  // 5. Register stores
  if (stores) {
    Stores.add(stores);
  }

  // 6. Register directives
  if (directives) {
    Directives.addAll(directives);
  }

  // 7. Inject global shortcuts
  if (globals) {
    window.$ = UIZY.$;
    window.$emit = UIZY.emit;
  }

  // 8. Initialize and run callback
  init(onReady);
}

/* ------------------------------------------------------------------ */
/* UIZY API                                                            */
/* ------------------------------------------------------------------ */

/**
 * Main Uizy API object.
 *
 * Provides access to all Uizy functionality:
 * - `start()` - Unified configuration
 * - `init()` - Initialize web components
 * - `layout()` - Configure layout dimensions
 * - `theme` - Theme configuration class
 * - `components` - Component registry class
 * - `actions` - Action registry class
 * - `get()` - Get element by ID
 * - `use()` - Call a registered component
 * - `add()` - Register components
 * - `on()` - Register action handlers
 * - `emit()` - Call an action
 * - `store` - Nanostores utilities (atom, map, computed)
 * - `$()` - Get store value
 * - `$set()` - Set store value
 * - `$key()` - Set single key in map store
 * - `$sub()` - Subscribe to store (immediate + changes)
 * - `$on()` - Listen to store (changes only)
 * - `directive()` - Register a custom directive
 */
const UIZY = {
  /** Unified configuration method */
  start,

  /** Initialize web components and run callback on DOM ready */
  init,

  /** Configure layout dimensions, breakpoints, and overlay */
  layout,

  /** Get an element by ID */
  get: (id: string): HTMLElement | null => document.getElementById(id),

  /** Theme configuration class */
  theme: Theme,

  /** Component registry class */
  components: Components,

  /** Action registry class */
  actions: Actions,

  /** Nano-Stores utilities */
  store: NanoStore,

  /** Call a registered component by path */
  use: Components.call.bind(Components),

  /** Register components */
  add: Components.add.bind(Components),

  /** Register action handlers */
  on: Actions.add.bind(Actions),

  /** Call an action */
  emit: Actions.call.bind(Actions),

  /** Get store value by path */
  $: Stores.call.bind(Stores),

  /** Set store value: uizy.$set("path", value) */
  $set: <T>(path: string, value: T): void => {
    const store = Stores.call<T>(path, { raw: true }) as { set?: (v: T) => void } | undefined;
    store?.set?.(value);
  },

  /** Update a single key in a map store: uizy.$key("path", "key", value) */
  $key: <T, K extends keyof T>(path: string, key: K, value: T[K]): void => {
    const store = Stores.call<T>(path, { raw: true }) as { setKey?: (k: K, v: T[K]) => void } | undefined;
    store?.setKey?.(key, value);
  },

  /** Subscribe to store changes (immediate + updates): uizy.$sub("path", callback) */
  $sub: <T>(path: string, callback: (value: T) => void): (() => void) => {
    const store = Stores.call<T>(path, { raw: true }) as { subscribe?: (cb: (v: T) => void) => () => void } | undefined;
    return store?.subscribe?.(callback) ?? (() => {});
  },

  /** Listen to store changes (updates only): uizy.$on("path", callback) */
  $on: <T>(path: string, callback: (value: T) => void): (() => void) => {
    const store = Stores.call<T>(path, { raw: true }) as { listen?: (cb: (v: T) => void) => () => void } | undefined;
    return store?.listen?.(callback) ?? (() => {});
  },

  /** Register stores */
  state: Stores.add.bind(Stores),

  /** Register a custom directive */
  directive: Directives.add.bind(Directives),

  /** Directives registry */
  directives: Directives,
} as const;

/* ------------------------------------------------------------------ */
/* Exports                                                             */
/* ------------------------------------------------------------------ */

export default UIZY;

// Re-export types from other modules for external use
export type {
  LayoutInput,
  BreakpointConfig,
  LayoutConfig,
  OverlayConfig,
} from "./layout.ts";

export type { SystemColors, ScrollbarOptions, BrandOptions } from "./theme.ts";

export type {
  ComponentTree,
  ActionHandler,
  NanoStore,
  DirectiveHandler,
  DirectiveContext,
} from "./components.ts";
