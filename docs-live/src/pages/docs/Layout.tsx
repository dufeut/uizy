import { useState } from "preact/hooks";
import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

const FULL_EXAMPLE = `
<!-- System Bar -->
<div class="uizy-system-bar">
    Status: Online
</div>

<!-- Header -->
<header class="uizy-header">
    <button onclick="toggleLeft()">Menu</button>
    <h1>My App</h1>
</header>

<!-- Left Sidebar (Drawer) -->
<aside class="
  uizy-left
  uizy-drawer
  uizy-drawer--left
  uizy-clip-system-bar
">
    <nav>...</nav>
</aside>

<!-- Right Panel (Drawer) -->
<aside class="
  uizy-right
  uizy-drawer
  uizy-drawer--right
  uizy-clip-system-bar
">
    <div>Details...</div>
</aside>

<!-- Overlay -->
<div class="
  uizy-overlay-mask
  uizy-clip-top
  uizy-clip-bottom
">
    <div class="uizy-overlay"></div>
</div>

<!-- Main Content -->
<main class="
  uizy-main
  uizy-clip-top
  uizy-clip-bottom
  uizy-clip-left
  uizy-clip-right
">
    <div>Content here...</div>
</main>

<!-- Footer -->
<footer class="uizy-footer">
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
              class: "uizy-system-bar",
              description: "Fixed top bar at the very top of the viewport",
            },
          ]}
        />

        <CodeDemo
          title="System Bar"
          description="A slim bar at the top for system info"
          code={`<div class="uizy-system-bar">
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
          Configure the height with <code>--uizy-system-bar-height</code>{" "}
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
              class: "uizy-header",
              description: "Fixed header below system bar",
            },
          ]}
        />

        <CodeDemo
          title="Header"
          description="Main application header with navigation"
          code={`<header class="uizy-header">
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
          Configure with <code>--uizy-header-height</code> (default: 50px) and{" "}
          <code>--uizy-header-layer</code> (z-index, default: 20).
        </TipBox>
      </section>

      {/* Footer */}
      <section class="doc-section">
        <h2>📋 Footer</h2>
        <p>Fixed footer at the bottom of the viewport.</p>

        <ClassTable
          classes={[
            {
              class: "uizy-footer",
              description: "Fixed footer at the bottom",
            },
          ]}
        />

        <CodeDemo
          title="Footer"
          description="Application footer"
          code={`<footer class="uizy-footer">
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
          Configure with <code>--uizy-footer-height</code> (default: 50px).
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
            { class: "uizy-left", description: "Fixed left sidebar" },
            {
              class: "uizy-left--mini",
              description: "Collapsed mini sidebar",
            },
          ]}
        />

        <CodeDemo
          title="Left Sidebar"
          description="Navigation sidebar"
          code={`<aside class="uizy-left">
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
          Use <code>--uizy-left-width</code> (default: 185px) and{" "}
          <code>--uizy-left-mini-width</code> (default: 60px) for sizing.
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
            { class: "uizy-right", description: "Fixed right sidebar" },
            {
              class: "uizy-right--mini",
              description: "Collapsed mini right sidebar",
            },
          ]}
        />

        <CodeDemo
          title="Right Sidebar"
          description="Details or settings panel"
          code={`<aside class="uizy-right">
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
          Configure with <code>--uizy-right-width</code> and{" "}
          <code>--uizy-right-mini-width</code>.
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
              class: "uizy-main",
              description: "Main content area with full viewport height",
            },
          ]}
        />

        <CodeDemo
          title="Main Content"
          description="Primary content area"
          code={`<main class="uizy-main uizy-clip-top uizy-clip-bottom uizy-clip-left uizy-clip-right">
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
              class: "uizy-drawer",
              description: "Base drawer with transform animation",
            },
            {
              class: "uizy-drawer--left",
              description: "Slides in from the left",
            },
            {
              class: "uizy-drawer--right",
              description: "Slides in from the right",
            },
            {
              class: "uizy-drawer--open",
              description: "Shows the drawer (translateX(0))",
            },
          ]}
        />

        <CodeDemo
          title="Drawer Navigation"
          description="Combine with sidebars for slide-in behavior"
          code={`<!-- Left drawer (hidden by default on mobile) -->
<aside class="uizy-left uizy-drawer uizy-drawer--left" id="leftNav">
  <nav>...</nav>
</aside>

<!-- Toggle with JavaScript -->
<script>
  function toggleLeft() {
    document.getElementById('leftNav').classList.toggle('uizy-drawer--open');
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
          Configure animation with <code>--uizy-drawer-speed</code> (default:
          0.2s) and <code>--uizy-drawer-easing</code> (default:
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
              class: "uizy-clip-system-bar",
              description: "Position below system bar only",
            },
            {
              class: "uizy-clip-top",
              description: "Position below system bar + header",
            },
            {
              class: "uizy-clip-bottom",
              description: "Position above footer",
            },
          ]}
        />

        <h3>Horizontal Clipping</h3>
        <ClassTable
          classes={[
            {
              class: "uizy-clip-left",
              description: "Add left margin for sidebar (resets on mobile)",
            },
            {
              class: "uizy-clip-right",
              description: "Add right margin for sidebar (resets on mobile)",
            },
          ]}
        />

        <CodeDemo
          title="Clipping Main Content"
          description="Adjust main content to fit within the layout"
          code={`<!-- Main content clipped on all sides -->
<main class="uizy-main uizy-clip-top uizy-clip-bottom uizy-clip-left uizy-clip-right">
  Content fits between header, footer, and sidebars
</main>

<!-- Sidebar clipped below system bar only -->
<aside class="uizy-left uizy-clip-system-bar">
  Sidebar extends into header area
</aside>`}
        >
          <div class="pa-3 br-2" style="background: #f5f5f5;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Use <code>uizy-clip-system-bar</code> when you want content to
              start below the system bar but extend into the header area (common
              for sidebars).
            </p>
          </div>
        </CodeDemo>

        <TipBox type="info">
          Horizontal clip classes (<code>uizy-clip-left</code>,{" "}
          <code>uizy-clip-right</code>) automatically reset to 0 on mobile
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
              class: "uizy-overlay-mask",
              description: "Clickable overlay container (for closing drawers)",
            },
            {
              class: "uizy-overlay",
              description: "The visual overlay with opacity",
            },
          ]}
        />

        <CodeDemo
          title="Overlay with Drawer"
          description="Show overlay when drawer is open"
          code={`<div class="uizy-overlay-mask uizy-clip-top uizy-clip-bottom" id="overlay" style="display: none;">
  <div class="uizy-overlay"></div>
</div>

<script>
  function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    const isOpen = drawer.classList.toggle('uizy-drawer--open');
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
          Configure with <code>--uizy-overlay-color</code> (default: black) and{" "}
          <code>--uizy-overlay-opacity</code> (default: 0.4).
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
  --uizy-system-bar-height: 24px;
  --uizy-system-bar-layer: 40;

  /* Header */
  --uizy-header-height: 56px;
  --uizy-header-layer: 20;

  /* Footer */
  --uizy-footer-height: 48px;
  --uizy-footer-layer: 20;

  /* Left Sidebar */
  --uizy-left-width: 240px;
  --uizy-left-mini-width: 64px;
  --uizy-left-layer: 20;

  /* Right Sidebar */
  --uizy-right-width: 280px;
  --uizy-right-mini-width: 60px;
  --uizy-right-layer: 20;

  /* Drawer Animation */
  --uizy-drawer-speed: 0.25s;
  --uizy-drawer-easing: cubic-bezier(0.4, 0, 0.2, 1);

  /* Overlay */
  --uizy-overlay-color: rgba(0, 0, 0, 0.5);
  --uizy-overlay-opacity: 1;
  --uizy-overlay-layer: 10;
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
