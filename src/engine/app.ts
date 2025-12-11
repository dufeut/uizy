// -------------------------------
// Types
// -------------------------------
type ClipOptions = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  leftMini?: boolean;
  rightMini?: boolean;
  system?: boolean;
};

type ShadowDirection = "t" | "b" | "l" | "r";

// -------------------------------
// Constants
// -------------------------------
const CLASS = {
  SYSTEM_BAR: "uizy-system-bar",
  HEADER: "uizy-header",
  FOOTER: "uizy-footer",
  OVERLAY: "uizy-overlay-mask",
  MAIN: "uizy-main",
  DRAWER: "uizy-drawer",
  DRAWER_OPEN: "uizy-drawer--open",
  FLEX: "d-flex",
  FLEX_COL: "df-col",
  FLEX_SB: "dx-sb",
  FULL: "full",
} as const;

const CLIP_CLASS_MAP: Record<keyof ClipOptions, string> = {
  system: "uizy-clip-system-bar",
  top: "uizy-clip-top",
  bottom: "uizy-clip-bottom",
  left: "uizy-clip-left",
  right: "uizy-clip-right",
  leftMini: "uizy-clip-left-mini",
  rightMini: "uizy-clip-right-mini",
};

const CLIP_ATTR_MAP: Record<keyof ClipOptions, string> = {
  system: "clip-system",
  top: "clip-top",
  bottom: "clip-bottom",
  left: "clip-left",
  right: "clip-right",
  leftMini: "clip-left-mini",
  rightMini: "clip-right-mini",
};

const SELECTORS: Record<string, string> = {
  system: "uizy-system-bar",
  header: "uizy-header",
  footer: "uizy-footer",
  overlay: "uizy-overlay",
  main: "uizy-main",
  left: "uizy-drawer:not([right]):not([mini])",
  leftMini: "uizy-drawer:not([right])[mini]",
  right: "uizy-drawer[right]:not([mini])",
  rightMini: "uizy-drawer[right][mini]",
};

// -------------------------------
// Utilities
// -------------------------------
const csx = (...inputs: unknown[]): string =>
  inputs
    .flatMap((i) => {
      if (typeof i === "string") return i;
      if (i && typeof i === "object") {
        return Object.entries(i)
          .filter(([, v]) => v)
          .map(([k]) => k);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");

const qs = <T extends Element = Element>(selector: string): T | null =>
  document.querySelector<T>(selector);

const clipClasses = (options: ClipOptions = {}): string =>
  csx(
    Object.fromEntries(
      Object.entries(options)
        .filter(([, enabled]) => enabled)
        .map(([key]) => [CLIP_CLASS_MAP[key as keyof ClipOptions], true])
    )
  );

const shadowClass = (direction: ShadowDirection, level?: number): string =>
  level && level > 0 ? `s${direction}-${level}` : "";

const parseClip = (el: HTMLElement): ClipOptions =>
  Object.fromEntries(
    Object.entries(CLIP_ATTR_MAP).map(([key, attr]) => [
      key,
      el.hasAttribute(attr),
    ])
  ) as ClipOptions;

// -------------------------------
// Base Element
// -------------------------------
abstract class BaseElement extends HTMLElement {
  protected updateClass(classes: unknown[]) {
    this.className = csx(...classes, this.className);
  }

  protected get clip(): ClipOptions {
    return parseClip(this);
  }

  protected getShadowLevel(attrName = "shadow"): number {
    return Number(this.getAttribute(attrName)) || 0;
  }
}

// -------------------------------
// Components
// -------------------------------
class UizySystemBar extends BaseElement {
  connectedCallback() {
    this.updateClass([CLASS.SYSTEM_BAR]);
  }
}

class UizyHeader extends BaseElement {
  connectedCallback() {
    this.updateClass([
      CLASS.FLEX,
      CLASS.FLEX_SB,
      CLASS.HEADER,
      shadowClass("b", this.getShadowLevel()),
    ]);
  }
}

class UizyFooter extends BaseElement {
  connectedCallback() {
    this.updateClass([CLASS.FOOTER, shadowClass("t", this.getShadowLevel())]);
  }
}

class UizyOverlay extends BaseElement {
  connectedCallback() {
    this.updateClass([CLASS.OVERLAY, clipClasses(this.clip)]);
    Object.assign(this.style, {
      background: "var(--uizy-overlay-color)",
      opacity: "var(--uizy-overlay-opacity)",
      display: "none",
    });
  }
}

class UizyMain extends BaseElement {
  connectedCallback() {
    this.updateClass([CLASS.MAIN, clipClasses(this.clip)]);
  }
}

class UizyDrawer extends BaseElement {
  connectedCallback() {
    const isLeft = !this.hasAttribute("right");
    const position = isLeft ? "left" : "right";
    const open = this.hasAttribute("open");
    const mini = this.hasAttribute("mini");

    this.updateClass([
      CLASS.FLEX,
      CLASS.FLEX_COL,
      CLASS.DRAWER,
      `uizy-${position}`,
      `uizy-drawer--${position}`,
      shadowClass(isLeft ? "r" : "l", this.getShadowLevel()),
      { [`uizy-${position}--mini`]: mini, [CLASS.DRAWER_OPEN]: open },
      clipClasses(this.clip),
    ]);
  }
}

class UizyApp extends BaseElement {
  private initialized = false;

  private parts: Record<string, HTMLElement | null> = {
    system: null,
    header: null,
    footer: null,
    overlay: null,
    main: null,
    left: null,
    leftMini: null,
    right: null,
    rightMini: null,
  };

  connectedCallback() {}

  private ensureInitialized(): void {
    if (this.initialized) return;

    for (const key of Object.keys(SELECTORS)) {
      this.parts[key] = qs<HTMLElement>(SELECTORS[key]);
    }

    this.initialized = true;
  }

  private setOverlayState(
    el: HTMLElement | null,
    open?: boolean | null,
    full?: boolean
  ): void {
    if (!el) return;

    const noValue = open === undefined || open === null;
    el.style.display = noValue
      ? el.style.display === "none"
        ? "block"
        : "none"
      : open
      ? "block"
      : "none";

    el.classList.toggle(CLASS.FULL, Boolean(full));
  }

  private capitalize(str: string) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  }

  private setDrawer(el: HTMLElement | null, open: boolean | null = null) {
    if (!el) return;

    const cls = "uizy-drawer--open";

    if (open === null) {
      el.classList.toggle(cls);
      return;
    }

    el.classList.toggle(cls, open);
  }

  action(section: string, callback: (payload: any) => void): void {
    this.ensureInitialized();

    const [root, part] = section.split(".");
    const key = part ? root + this.capitalize(part) : root;
    const el = this.parts[key];

    if (!el || typeof callback !== "function") return;

    const utils: Record<string, any> = {
      overlay: {
        set: (open?: boolean | null, full?: boolean) =>
          this.setOverlayState(el, open, full),
      },
      left: { set: (o?: boolean | null) => this.setDrawer(el, o) },
      right: { set: (o?: boolean | null) => this.setDrawer(el, o) },
      leftMini: { set: (o?: boolean | null) => this.setDrawer(el, o) },
      rightMini: { set: (o?: boolean | null) => this.setDrawer(el, o) },
    };

    const payload = utils[key];
    if (!payload) return;

    callback({ ...payload, self: el });
  }
}

// -------------------------------
// Registration & Initialization
// -------------------------------
const COMPONENT_REGISTRY: [string, CustomElementConstructor][] = [
  ["uizy-app", UizyApp],
  ["uizy-system-bar", UizySystemBar],
  ["uizy-header", UizyHeader],
  ["uizy-footer", UizyFooter],
  ["uizy-overlay", UizyOverlay],
  ["uizy-main", UizyMain],
  ["uizy-drawer", UizyDrawer],
];

export const initialize = (): void => {
  COMPONENT_REGISTRY.forEach(([name, ctor]) => {
    if (!customElements.get(name)) {
      customElements.define(name, ctor);
    }
  });
};

export {
  UizySystemBar,
  UizyHeader,
  UizyFooter,
  UizyOverlay,
  UizyMain,
  UizyDrawer,
};
