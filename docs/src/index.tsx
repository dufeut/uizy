import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { Layout } from "./components/Layout";
import { MobileHeader } from "./components/MobileHeader";
import { routes, NotFound } from "./routes";
import { config } from "./config";

// Style
import "normalize.css";
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <MobileHeader />
      <Layout>
        <Router>
          {routes.map(({ path, component }) => (
            <Route key={path} path={`${config.base}${path}`} component={component} />
          ))}
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
