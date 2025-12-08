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

// Style
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <MobileHeader />
      <Layout>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/docs/getting-started" component={GettingStarted} />
          <Route path="/docs/display" component={Display} />
          <Route path="/docs/grid" component={Grid} />
          <Route path="/docs/spacing" component={Spacing} />
          <Route path="/docs/typography" component={Typography} />
          <Route path="/docs/borders" component={Borders} />
          <Route path="/docs/shadows" component={Shadows} />
          <Route path="/docs/extras" component={Extras} />
          <Route path="/docs/responsive" component={Responsive} />
          <Route path="/docs/customization" component={Customization} />
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
