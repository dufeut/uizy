import { ComponentType } from "preact";
import { docSections } from "./store";
import { Home } from "./pages/Home/index";
import { NotFound } from "./pages/_404";
import * as DocPages from "./pages/docs";

// Map section IDs to component names (PascalCase)
const componentMap: Record<string, ComponentType> = {
  "getting-started": DocPages.GettingStarted,
  display: DocPages.Display,
  grid: DocPages.Grid,
  spacing: DocPages.Spacing,
  typography: DocPages.Typography,
  borders: DocPages.Borders,
  shadows: DocPages.Shadows,
  extras: DocPages.Extras,
  responsive: DocPages.Responsive,
  customization: DocPages.Customization,
};

// Generate routes from docSections
export const docRoutes = docSections.map((section) => ({
  path: `/${section.id}`,
  component: componentMap[section.id],
}));

// All routes including home and 404
export const routes = [
  { path: "/", component: Home },
  ...docRoutes,
];

// For prerendering - just the paths
export const prerenderPaths = ["/", "/404", ...docSections.map((s) => `/${s.id}`)];

export { Home, NotFound };
