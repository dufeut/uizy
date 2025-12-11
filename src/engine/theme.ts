export function themeSystem(props: Record<string, string>) {
  const css: string[] = [];
  Object.keys(props).forEach((name) => {
    css.push(`--color-${name}: ${props[name]};`);
  });
  return css.join(" ");
}

export function themeScrollbar({
  size,
  color,
  hover,
}: {
  size?: number;
  color?: string;
  hover?: string;
}) {
  const css: string[] = [
    `--scrollbar-size: ${size}px;`,
    `--scrollbar-thumb: ${color};`,
    `--scrollbar-thumb-hover: ${hover};`,
  ];
  return css.join(" ");
}

export function themeBrand({
  name,
  back,
  text,
  line,
}: {
  name: string;
  back?: string;
  text?: string;
  line?: string;
}) {
  const css: string[] = [];
  if (back) css.push(`--color-${name}-back: ${back};`);
  if (text) css.push(`--color-${name}-text: ${text};`);
  if (line) css.push(`--color-${name}-line: ${line};`);
  return css.join(" ");
}

export class Theme {
  static styles: string[];
  static _system: string;
  static _scrollbar: string;
  static system(props: Record<string, string>): void {
    Theme._system = themeSystem(props);
  }
  static scrollbar({
    size = 22,
    color = "rgba(121, 121, 121, 0.4)",
    hover = "rgba(121, 121, 121, 0.7)",
  }: {
    size?: number;
    color?: string;
    hover?: string;
  }): void {
    Theme._scrollbar = themeScrollbar({ size, color, hover });
  }
  static brand({
    name,
    back,
    text,
    line,
  }: {
    name: string;
    back?: string;
    text?: string;
    line?: string;
  }) {
    const style = themeBrand({
      name,
      back,
      text,
      line,
    });
    Theme.styles.push(style);
  }
  static reset(): void {
    Theme.styles = [];
  }
}

themeSystem({
  // System (dark/light)
  primary: "#1a1a1a", // text/UI
  secondary: "#f5f5f5", // backgrounds
  accent: "#6b08a5ff", // borders & others
  focus: "#1eadffff", // focus

  // Semantic
  info: "#0050b9ff", // calmer, readable info blue
  success: "#28b77b", // modern green with good visibility
  warning: "#f2c94c", // warm amber, less harsh than neon yellow
  danger: "#d64545", // strong but not oversaturated red
  error: "#ff4d4d", // brighter error red for clarity
});

themeScrollbar({ size: 1, color: "#79797966", hover: "#79797966" });
themeBrand({
  name: "one",
  back: "red",
  text: "blue",
  line: "yellow",
});
