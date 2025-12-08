import { signal, computed, effect } from "@preact/signals";

// Search state
export const searchQuery = signal("");
export const isSidebarOpen = signal(false);

// Theme state
const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const theme = signal<"light" | "dark">(getInitialTheme());

// Apply theme to document
if (typeof window !== "undefined") {
  effect(() => {
    document.documentElement.setAttribute("data-theme", theme.value);
    localStorage.setItem("theme", theme.value);
  });
}

// Toggle theme
export function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

// Documentation sections for navigation and search
export const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    emoji: "🚀",
    description: "Learn how to install and use Uizy CSS",
    keywords: ["install", "setup", "start", "begin", "quick"],
  },
  {
    id: "display",
    title: "Display",
    emoji: "👁️",
    description: "Show, hide, and change how elements appear",
    keywords: [
      "show",
      "hide",
      "visible",
      "none",
      "block",
      "flex",
      "grid",
      "inline",
    ],
  },
  {
    id: "grid",
    title: "Grid System",
    emoji: "📊",
    description: "Create layouts with rows and columns",
    keywords: ["row", "column", "layout", "col", "12", "responsive"],
  },
  {
    id: "spacing",
    title: "Spacing",
    emoji: "📏",
    description: "Add space around and inside elements",
    keywords: ["margin", "padding", "space", "gap", "distance"],
  },
  {
    id: "typography",
    title: "Typography",
    emoji: "✏️",
    description: "Style your text - size, alignment, and decoration",
    keywords: ["text", "font", "size", "bold", "italic", "align", "center"],
  },
  {
    id: "borders",
    title: "Borders",
    emoji: "🔲",
    description: "Add borders and rounded corners",
    keywords: ["border", "radius", "round", "corner", "outline"],
  },
  {
    id: "shadows",
    title: "Shadows",
    emoji: "🌑",
    description: "Add depth with box shadows",
    keywords: ["shadow", "elevation", "depth", "drop"],
  },
  {
    id: "extras",
    title: "Extras",
    emoji: "✨",
    description: "Helpful utilities like cursor and dimensions",
    keywords: ["cursor", "pointer", "width", "height", "overflow"],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    emoji: "📱",
    description: "Make your site work on all screen sizes",
    keywords: ["mobile", "tablet", "desktop", "breakpoint", "screen"],
  },
  {
    id: "layout",
    title: "Layout System",
    emoji: "🏗️",
    description: "Build app layouts with headers, sidebars, footers, and drawers",
    keywords: [
      "layout",
      "header",
      "footer",
      "sidebar",
      "drawer",
      "navigation",
      "system-bar",
      "overlay",
      "fixed",
      "clip",
    ],
  },
  {
    id: "customization",
    title: "Customization",
    emoji: "🎨",
    description:
      "Customize colors, fonts, spacing, and more with CSS variables",
    keywords: [
      "customize",
      "theme",
      "variables",
      "css",
      "color",
      "font",
      "config",
      "override",
    ],
  },
];

// Filtered sections based on search
export const filteredSections = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return docSections;

  return docSections.filter(
    (section) =>
      section.title.toLowerCase().includes(query) ||
      section.description.toLowerCase().includes(query) ||
      section.keywords.some((k) => k.includes(query))
  );
});

// Toggle sidebar
export function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// Close sidebar
export function closeSidebar() {
  isSidebarOpen.value = false;
}
