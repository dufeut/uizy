import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Layout } from "./components/Layout";
import { MobileHeader } from "./components/MobileHeader";
import { Home } from "./pages/Home/index";
import { NotFound } from "./pages/_404";
import {
  GettingStarted,
  Display,
  Grid,
  Spacing,
  Typography,
  Borders,
  Shadows,
  Extras,
  Responsive,
  Customization,
} from "./pages/docs";
import { config } from "./config";

// Style
import "./style.css";

const { base } = config;

export function App() {
  return (
    <LocationProvider>
      <MobileHeader />
      <Layout>
        <Router>
          <Route path={`${base}/`} component={Home} />
          <Route path={`${base}/docs/getting-started`} component={GettingStarted} />
          <Route path={`${base}/docs/display`} component={Display} />
          <Route path={`${base}/docs/grid`} component={Grid} />
          <Route path={`${base}/docs/spacing`} component={Spacing} />
          <Route path={`${base}/docs/typography`} component={Typography} />
          <Route path={`${base}/docs/borders`} component={Borders} />
          <Route path={`${base}/docs/shadows`} component={Shadows} />
          <Route path={`${base}/docs/extras`} component={Extras} />
          <Route path={`${base}/docs/responsive`} component={Responsive} />
          <Route path={`${base}/docs/customization`} component={Customization} />
          <Route default component={NotFound} />
        </Router>
      </Layout>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
