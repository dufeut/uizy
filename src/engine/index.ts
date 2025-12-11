import { initialize } from "./app.ts";
import { layout } from "./layout.ts";
import components from "./components.ts";

export default {
  init,
  layout,
  get: (name: string) => document.getElementById(name),
  use: components.call,
  components: components,
};

function init(callback: () => void) {
  // WC-Init
  initialize();
  // Page Loaded
  if (callback && typeof callback === "function") {
    document.addEventListener("DOMContentLoaded", () => {
      callback();
    });
  }
}
