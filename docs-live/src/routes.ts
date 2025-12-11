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
  layout: DocPages.Layout,
  customization: DocPages.Customization,
};

// Generate routes from docSections
export const docRoutes = docSections.map((section) => ({
  path: `/${section.id}`,
  component: componentMap[section.id],
}));

// All routes including home and 404
export const routes = [{ path: "/", component: Home }, ...docRoutes];

// For prerendering - just the paths
export const prerenderPaths = [
  "/",
  "/404",
  ...docSections.map((s) => `/${s.id}`),
];

// --- Previous & Next Helpers ---

export function getNextRoute(currentId: string) {
  const index = docSections.findIndex((s) => s.id === currentId);
  if (index === -1 || index === docSections.length - 1) return null;

  const nextSection = docSections[index + 1];
  return docRoutes.find((r) => r.path === `/${nextSection.id}`) ?? null;
}

export function getPreviousRoute(currentId: string) {
  const index = docSections.findIndex((s) => s.id === currentId);
  if (index <= 0) return null;

  const prevSection = docSections[index - 1];
  return docRoutes.find((r) => r.path === `/${prevSection.id}`) ?? null;
}

export { Home, NotFound };
