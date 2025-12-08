import { useLocation } from "preact-iso";
import {
  searchQuery,
  filteredSections,
  isSidebarOpen,
  closeSidebar,
  theme,
  toggleTheme,
} from "../store";
import { config, link } from "../config";
import Logo from "./Logo";

export function Sidebar() {
  const { url } = useLocation();

  const handleSearch = (e: Event) => {
    searchQuery.value = (e.target as HTMLInputElement).value;
  };

  const handleNavClick = () => {
    // Close sidebar on mobile when clicking a link
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <aside class={`sidebar ${isSidebarOpen.value ? "open" : ""}`}>
      {/* Logo and Title */}
      <div
        class="sidebar-header"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href={link("/")} class="logo" onClick={handleNavClick}>
          <Logo height="40px" space="0" />
          <span class="logo-text">{config.name}</span>
        </a>
        <p class="tagline">{config.tagline}</p>
      </div>

      {/* Search */}
      {/*

		<div class="search-box">
		<input
			type="text"
			placeholder="🔍 Search docs..."
			value={searchQuery.value}
			onInput={handleSearch}
			class="search-input"
		/>
		</div>

			*/}

      {/* Navigation */}
      <nav class="sidebar-nav">
        <a
          href={link("/")}
          class={`nav-item ${url === link("/") ? "active" : ""}`}
          onClick={handleNavClick}
        >
          <span class="nav-emoji">🏠</span>
          <span>Home</span>
        </a>

        <div class="nav-section-title">Documentation</div>

        {filteredSections.value.map((section) => (
          <a
            key={section.id}
            href={link(`/docs/${section.id}`)}
            class={`nav-item ${url === link(`/docs/${section.id}`) ? "active" : ""}`}
            onClick={handleNavClick}
          >
            <span class="nav-emoji">{section.emoji}</span>
            <span>{section.title}</span>
          </a>
        ))}

        {filteredSections.value.length === 0 && (
          <p class="no-results">No results found 😕</p>
        )}
      </nav>

      {/* Footer */}
      <div class="sidebar-footer">
        <div class="sidebar-footer-row">
          <a
            href={config.github}
            target="_blank"
            rel="noopener"
            class="footer-link"
          >
            ⭐ GitHub
          </a>
          <button
            class="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme.value === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </aside>
  );
}
