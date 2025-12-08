import { useState } from "preact/hooks";
import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

const FULL_EXAMPLE = `
<!-- System Bar -->
<div class="layout-system-bar">
    Status: Online
</div>

<!-- Header -->
<header class="layout-header">
    <button onclick="toggleLeft()">Menu</button>
    <h1>My App</h1>
</header>

<!-- Left Sidebar (Drawer) -->
<aside class="
  layout-left
  layout-drawer
  layout-drawer--left
  layout-clip-system-bar
">
    <nav>...</nav>
</aside>

<!-- Right Panel (Drawer) -->
<aside class="
  layout-right
  layout-drawer
  layout-drawer--right
  layout-clip-system-bar
">
    <div>Details...</div>
</aside>

<!-- Overlay -->
<div class="
  layout-overlay-mask
  layout-clip-top
  layout-clip-bottom
">
    <div class="layout-overlay"></div>
</div>

<!-- Main Content -->
<main class="
  layout-main
  layout-clip-top
  layout-clip-bottom
  layout-clip-left
  layout-clip-right
">
    <div>Content here...</div>
</main>

<!-- Footer -->
<footer class="layout-footer">
    Footer
</footer>`.trim();

export function Layout() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(FULL_EXAMPLE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div class="doc-page">
      <h1>🏗️ Layout System</h1>
      <p class="doc-intro">
        Build complete application layouts with fixed positioning, sidebars,
        headers, footers, and drawer navigation - all configurable via CSS
        variables!
      </p>

      {/* System Bar */}
      <section class="doc-section">
        <h2>📡 System Bar</h2>
        <p>
          An optional top bar for system status, notifications, or branding.
          Sits above everything else.
        </p>

        <ClassTable
          classes={[
            {
              class: "layout-system-bar",
              description: "Fixed top bar at the very top of the viewport",
            },
          ]}
        />

        <CodeDemo
          title="System Bar"
          description="A slim bar at the top for system info"
          code={`<div class="layout-system-bar">
  <span>System Status: Online</span>
  <span style="margin-left: auto;">v1.0.0</span>
</div>`}
        >
          <div
            class="pa-3 br-2"
            style="background: #1a1a2e; color: white; font-size: 12px;"
          >
            <span>System Status: Online</span>
            <span style="float: right;">v1.0.0</span>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          Configure the height with <code>--layout-system-bar-height</code>{" "}
          (default: 0px). Set to 0 if not using a system bar.
        </TipBox>
      </section>

      {/* Header */}
      <section class="doc-section">
        <h2>🎯 Header</h2>
        <p>The main application header, positioned below the system bar.</p>

        <ClassTable
          classes={[
            {
              class: "layout-header",
              description: "Fixed header below system bar",
            },
          ]}
        />

        <CodeDemo
          title="Header"
          description="Main application header with navigation"
          code={`<header class="layout-header">
  <button class="btn">Menu</button>
  <h1>My App</h1>
  <button class="btn" style="margin-left: auto;">Settings</button>
</header>`}
        >
          <div
            class="d-flex dy-ce gx-3 pa-3 br-2"
            style="background: #16213e; color: white;"
          >
            <button
              class="pa-2 br-1"
              style="background: #e94560; color: white; border: none;"
            >
              Menu
            </button>
            <h3 style="font-size: 16px; margin: 0;">My App</h3>
            <button
              class="pa-2 br-1"
              style="margin-left: auto; background: #e94560; color: white; border: none;"
            >
              Settings
            </button>
          </div>
        </CodeDemo>

        <TipBox type="info">
          Configure with <code>--layout-header-height</code> (default: 50px) and{" "}
          <code>--layout-header-layer</code> (z-index, default: 20).
        </TipBox>
      </section>

      {/* Footer */}
      <section class="doc-section">
        <h2>📋 Footer</h2>
        <p>Fixed footer at the bottom of the viewport.</p>

        <ClassTable
          classes={[
            {
              class: "layout-footer",
              description: "Fixed footer at the bottom",
            },
          ]}
        />

        <CodeDemo
          title="Footer"
          description="Application footer"
          code={`<footer class="layout-footer">
  My Application - v1.0.0
</footer>`}
        >
          <div
            class="d-flex dx-ce dy-ce pa-3 br-2"
            style="background: #0f3460; color: white; font-size: 14px;"
          >
            My Application - v1.0.0
          </div>
        </CodeDemo>

        <TipBox type="info">
          Configure with <code>--layout-footer-height</code> (default: 50px).
        </TipBox>
      </section>

      {/* Left Sidebar */}
      <section class="doc-section">
        <h2>◀️ Left Sidebar</h2>
        <p>
          Fixed left sidebar for navigation. Can be collapsed to a mini width.
        </p>

        <ClassTable
          classes={[
            { class: "layout-left", description: "Fixed left sidebar" },
            {
              class: "layout-left--mini",
              description: "Collapsed mini sidebar",
            },
          ]}
        />

        <CodeDemo
          title="Left Sidebar"
          description="Navigation sidebar"
          code={`<aside class="layout-left">
  <h3>Navigation</h3>
  <a href="#">Dashboard</a>
  <a href="#">Projects</a>
  <a href="#">Settings</a>
</aside>`}
        >
          <div
            class="pa-3 br-2"
            style="background: white; border: 1px solid #e0e0e0; width: 200px;"
          >
            <h4 style="margin: 0 0 12px 0;">Navigation</h4>
            <div class="d-flex" style="flex-direction: column; gap: 8px;">
              <a href="#" style="color: #333; text-decoration: none;">
                Dashboard
              </a>
              <a href="#" style="color: #333; text-decoration: none;">
                Projects
              </a>
              <a href="#" style="color: #333; text-decoration: none;">
                Settings
              </a>
            </div>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          Use <code>--layout-left-width</code> (default: 185px) and{" "}
          <code>--layout-left-mini-width</code> (default: 60px) for sizing.
        </TipBox>
      </section>

      {/* Right Sidebar */}
      <section class="doc-section">
        <h2>▶️ Right Sidebar</h2>
        <p>
          Fixed right sidebar for details panels, settings, or secondary
          content.
        </p>

        <ClassTable
          classes={[
            { class: "layout-right", description: "Fixed right sidebar" },
            {
              class: "layout-right--mini",
              description: "Collapsed mini right sidebar",
            },
          ]}
        />

        <CodeDemo
          title="Right Sidebar"
          description="Details or settings panel"
          code={`<aside class="layout-right">
  <h3>Details Panel</h3>
  <p>Additional information here...</p>
</aside>`}
        >
          <div class="d-flex dx-sb">
            <span></span>
            <div
              class="pa-3 br-2"
              style="background: white; border: 1px solid #e0e0e0; width: 200px;"
            >
              <h4 style="margin: 0 0 12px 0;">Details Panel</h4>
              <p style="color: #666; font-size: 14px; margin: 0;">
                Additional information here...
              </p>
            </div>
          </div>
        </CodeDemo>

        <TipBox type="info">
          Configure with <code>--layout-right-width</code> and{" "}
          <code>--layout-right-mini-width</code>.
        </TipBox>
      </section>

      {/* Main Content */}
      <section class="doc-section">
        <h2>📄 Main Content</h2>
        <p>
          The main content area. Uses <code>100dvh</code> for full viewport
          height and supports margin transitions.
        </p>

        <ClassTable
          classes={[
            {
              class: "layout-main",
              description: "Main content area with full viewport height",
            },
          ]}
        />

        <CodeDemo
          title="Main Content"
          description="Primary content area"
          code={`<main class="layout-main layout-clip-top layout-clip-bottom layout-clip-left layout-clip-right">
  <div class="card">
    <h2>Welcome</h2>
    <p>Your main content goes here.</p>
  </div>
</main>`}
        >
          <div
            class="pa-4 br-2"
            style="background: #fafafa; min-height: 100px;"
          >
            <div
              class="pa-3 br-2"
              style="background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
            >
              <h4 style="margin: 0 0 8px 0;">Welcome</h4>
              <p style="margin: 0; color: #666;">
                Your main content goes here.
              </p>
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Drawers */}
      <section class="doc-section">
        <h2>🚪 Drawers</h2>
        <p>
          Animated slide-in panels. Perfect for mobile navigation or contextual
          panels.
        </p>

        <ClassTable
          classes={[
            {
              class: "layout-drawer",
              description: "Base drawer with transform animation",
            },
            {
              class: "layout-drawer--left",
              description: "Slides in from the left",
            },
            {
              class: "layout-drawer--right",
              description: "Slides in from the right",
            },
            {
              class: "layout-drawer--open",
              description: "Shows the drawer (translateX(0))",
            },
          ]}
        />

        <CodeDemo
          title="Drawer Navigation"
          description="Combine with sidebars for slide-in behavior"
          code={`<!-- Left drawer (hidden by default on mobile) -->
<aside class="layout-left layout-drawer layout-drawer--left" id="leftNav">
  <nav>...</nav>
</aside>

<!-- Toggle with JavaScript -->
<script>
  function toggleLeft() {
    document.getElementById('leftNav').classList.toggle('layout-drawer--open');
  }
</script>`}
        >
          <div class="pa-3 br-2" style="background: #f5f5f5;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Drawers use <code>transform: translateX()</code> for smooth
              GPU-accelerated animations.
            </p>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          Configure animation with <code>--layout-drawer-speed</code> (default:
          0.2s) and <code>--layout-drawer-easing</code> (default:
          cubic-bezier(0.4, 0, 0.2, 1)).
        </TipBox>
      </section>

      {/* Clip Classes */}
      <section class="doc-section">
        <h2>✂️ Clip Classes</h2>
        <p>
          Position elements relative to the layout structure. Clip classes
          adjust margins and positions to account for headers, footers, and
          sidebars.
        </p>

        <h3>Vertical Clipping</h3>
        <ClassTable
          classes={[
            {
              class: "layout-clip-system-bar",
              description: "Position below system bar only",
            },
            {
              class: "layout-clip-top",
              description: "Position below system bar + header",
            },
            {
              class: "layout-clip-bottom",
              description: "Position above footer",
            },
          ]}
        />

        <h3>Horizontal Clipping</h3>
        <ClassTable
          classes={[
            {
              class: "layout-clip-left",
              description: "Add left margin for sidebar (resets on mobile)",
            },
            {
              class: "layout-clip-right",
              description: "Add right margin for sidebar (resets on mobile)",
            },
          ]}
        />

        <CodeDemo
          title="Clipping Main Content"
          description="Adjust main content to fit within the layout"
          code={`<!-- Main content clipped on all sides -->
<main class="layout-main layout-clip-top layout-clip-bottom layout-clip-left layout-clip-right">
  Content fits between header, footer, and sidebars
</main>

<!-- Sidebar clipped below system bar only -->
<aside class="layout-left layout-clip-system-bar">
  Sidebar extends into header area
</aside>`}
        >
          <div class="pa-3 br-2" style="background: #f5f5f5;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Use <code>layout-clip-system-bar</code> when you want content to
              start below the system bar but extend into the header area (common
              for sidebars).
            </p>
          </div>
        </CodeDemo>

        <TipBox type="info">
          Horizontal clip classes (<code>layout-clip-left</code>,{" "}
          <code>layout-clip-right</code>) automatically reset to 0 on mobile
          (under 1024px).
        </TipBox>
      </section>

      {/* Overlay */}
      <section class="doc-section">
        <h2>🌫️ Overlay</h2>
        <p>
          Semi-transparent backdrop for drawers and modals. Use with clip
          classes to match the main content area.
        </p>

        <ClassTable
          classes={[
            {
              class: "layout-overlay-mask",
              description: "Clickable overlay container (for closing drawers)",
            },
            {
              class: "layout-overlay",
              description: "The visual overlay with opacity",
            },
          ]}
        />

        <CodeDemo
          title="Overlay with Drawer"
          description="Show overlay when drawer is open"
          code={`<div class="layout-overlay-mask layout-clip-top layout-clip-bottom" id="overlay" style="display: none;">
  <div class="layout-overlay"></div>
</div>

<script>
  function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const isOpen = drawer.classList.toggle('layout-drawer--open');
    overlay.style.display = isOpen ? 'block' : 'none';
  }

  // Close on overlay click
  document.getElementById('overlay').onclick = toggleDrawer;
</script>`}
        >
          <div
            class="pa-3 br-2"
            style="background: rgba(0,0,0,0.5); color: white; text-align: center;"
          >
            Overlay appears behind drawers for click-to-close behavior
          </div>
        </CodeDemo>

        <TipBox type="tip">
          Configure with <code>--layout-overlay-color</code> (default: black)
          and <code>--layout-overlay-opacity</code> (default: 0.4).
        </TipBox>
      </section>

      {/* CSS Variables Reference */}
      <section class="doc-section">
        <h2>🎨 CSS Variables Reference</h2>
        <p>
          All layout dimensions and behaviors are configurable via CSS custom
          properties:
        </p>

        <CodeDemo
          title="Configuration Example"
          description="Customize the layout via CSS variables"
          code={`:root {
  /* System Bar */
  --layout-system-bar-height: 24px;
  --layout-system-bar-layer: 40;

  /* Header */
  --layout-header-height: 56px;
  --layout-header-layer: 20;

  /* Footer */
  --layout-footer-height: 48px;
  --layout-footer-layer: 20;

  /* Left Sidebar */
  --layout-left-width: 240px;
  --layout-left-mini-width: 64px;
  --layout-left-layer: 20;

  /* Right Sidebar */
  --layout-right-width: 280px;
  --layout-right-mini-width: 60px;
  --layout-right-layer: 20;

  /* Drawer Animation */
  --layout-drawer-speed: 0.25s;
  --layout-drawer-easing: cubic-bezier(0.4, 0, 0.2, 1);

  /* Overlay */
  --layout-overlay-color: rgba(0, 0, 0, 0.5);
  --layout-overlay-opacity: 1;
  --layout-overlay-layer: 10;
}`}
        >
          <div
            class="pa-3 br-2"
            style="background: #1a1a2e; color: #e94560; font-family: monospace; font-size: 13px;"
          >
            All values have sensible defaults - only override what you need!
          </div>
        </CodeDemo>
      </section>

      {/* Complete Example */}
      <section class="doc-section">
        <h2>📚 Complete Example</h2>
        <p>Here's a full layout structure:</p>

        <div class="sb-16">
          <pre class="demo-code">
            <span class="ef-r mt-n1  e-p" onClick={copyCode}>
              {copied ? "✅ Copied!" : "📋 Copy"}
            </span>
            <code>{FULL_EXAMPLE}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
