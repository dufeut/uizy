/**
 * Theme System
 *
 * Provides utilities for generating CSS custom properties for theming.
 * Supports system colors, scrollbar customization, and brand color sets.
 *
 * @example
 * ```ts
 * Theme.system({
 *   primary: "#1a1a1a",
 *   secondary: "#f5f5f5",
 *   accent: "#6b08a5",
 * });
 *
 * Theme.scrollbar({ size: 12, color: "#79797966" });
 *
 * Theme.brand({ name: "success", back: "#28b77b", text: "#fff" });
 * ```
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** System color configuration (key-value pairs for CSS variables) */
export type SystemColors = Record<string, string>;

/** Scrollbar customization options */
export interface ScrollbarOptions {
  /** Scrollbar width/height in pixels */
  size?: number;
  /** Thumb color (default state) */
  color?: string;
  /** Thumb color on hover */
  hover?: string;
}

/** Brand color set options */
export interface BrandOptions {
  /** Brand name (used in CSS variable names) */
  name: string;
  /** Background color */
  back?: string;
  /** Text/foreground color */
  text?: string;
  /** Border/line color */
  line?: string;
}

/* ------------------------------------------------------------------ */
/* CSS Generators                                                      */
/* ------------------------------------------------------------------ */

/** Generates CSS custom properties for system colors */
function generateSystemCSS(props: SystemColors): string {
  return Object.entries(props)
    .map(([name, value]) => `--color-${name}: ${value};`)
    .join(" ");
}

/** Generates CSS custom properties for scrollbar styling */
function generateScrollbarCSS({ size, color, hover }: Required<ScrollbarOptions>): string {
  return [
    `--scrollbar-size: ${size}px;`,
    `--scrollbar-thumb: ${color};`,
    `--scrollbar-thumb-hover: ${hover};`,
  ].join(" ");
}

/** Generates CSS custom properties for a brand color set */
function generateBrandCSS({ name, back, text, line }: BrandOptions): string {
  const vars: string[] = [];
  if (back) vars.push(`--color-${name}-back: ${back};`);
  if (text) vars.push(`--color-${name}-text: ${text};`);
  if (line) vars.push(`--color-${name}-line: ${line};`);
  return vars.join(" ");
}

/* ------------------------------------------------------------------ */
/* Default Values                                                      */
/* ------------------------------------------------------------------ */

/** Default scrollbar configuration */
const DEFAULT_SCROLLBAR: Required<ScrollbarOptions> = {
  size: 22,
  color: "rgba(121, 121, 121, 0.4)",
  hover: "rgba(121, 121, 121, 0.7)",
};

/* ------------------------------------------------------------------ */
/* Theme Class                                                         */
/* ------------------------------------------------------------------ */

/**
 * Global theme manager for CSS custom property generation.
 *
 * Collects theme configurations and generates CSS strings
 * that can be injected into the document.
 *
 * @example
 * ```ts
 * // Set system colors
 * Theme.system({
 *   primary: "#1a1a1a",
 *   secondary: "#f5f5f5",
 *   accent: "#6b08a5",
 *   focus: "#1eadff",
 *   info: "#0050b9",
 *   success: "#28b77b",
 *   warning: "#f2c94c",
 *   danger: "#d64545",
 *   error: "#ff4d4d",
 * });
 *
 * // Customize scrollbar
 * Theme.scrollbar({ size: 12, color: "#79797966" });
 *
 * // Add brand colors
 * Theme.brand({ name: "primary", back: "#6b08a5", text: "#fff" });
 * ```
 */
export class Theme {
  /** Collected brand style strings */
  static styles: string[] = [];

  /** Generated system color CSS */
  static _system: string = "";

  /** Generated scrollbar CSS */
  static _scrollbar: string = "";

  /**
   * Sets system-wide color variables.
   *
   * @param props - Object mapping color names to CSS color values
   */
  static system(props: SystemColors): void {
    Theme._system = generateSystemCSS(props);
  }

  /**
   * Configures scrollbar appearance.
   *
   * @param options - Scrollbar options (all optional with defaults)
   */
  static scrollbar(options: ScrollbarOptions = {}): void {
    const config: Required<ScrollbarOptions> = {
      size: options.size ?? DEFAULT_SCROLLBAR.size,
      color: options.color ?? DEFAULT_SCROLLBAR.color,
      hover: options.hover ?? DEFAULT_SCROLLBAR.hover,
    };

    Theme._scrollbar = generateScrollbarCSS(config);
  }

  /**
   * Adds a brand color set.
   *
   * @param options - Brand color configuration
   */
  static brand(options: BrandOptions): void {
    const style = generateBrandCSS(options);

    if (style) {
      Theme.styles.push(style);
    }
  }

  /**
   * Clears all collected brand styles.
   * Does not clear system or scrollbar settings.
   */
  static reset(): void {
    Theme.styles = [];
  }

  /**
   * Clears all theme settings including system and scrollbar.
   */
  static clear(): void {
    Theme.styles = [];
    Theme._system = "";
    Theme._scrollbar = "";
  }

  /**
   * Returns all collected CSS as a single string.
   * Useful for generating a complete theme stylesheet.
   *
   * @returns Combined CSS string with all theme variables
   */
  static toCSS(): string {
    const parts: string[] = [];

    if (Theme._system) parts.push(Theme._system);
    if (Theme._scrollbar) parts.push(Theme._scrollbar);
    if (Theme.styles.length > 0) parts.push(Theme.styles.join(" "));

    return parts.join(" ");
  }
}
