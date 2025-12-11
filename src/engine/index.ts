import { initialize } from "./app";
import { layout } from "./layout";

export default {
  init,
  layout,
  get: (name: string) => document.getElementById(name),
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
