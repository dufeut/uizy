import { toggleSidebar } from "../store";
import { config, link } from "../config";
import Logo from "./Logo";

export function MobileHeader() {
  return (
    <header class="mobile-header">
      <a href={link("/")} class="mobile-logo">
        <Logo height="40px" space="1" />
        <span class="mobile-logo-text">{config.name}</span>
      </a>
      <button class="menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
        ☰
      </button>
    </header>
  );
}
