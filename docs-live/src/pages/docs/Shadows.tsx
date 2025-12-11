import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function Shadows() {
  return (
    <div class="doc-page">
      <h1>🌑 Shadows</h1>
      <p class="doc-intro">
        Add depth to your elements with box shadows! Shadows make elements look
        like they're floating above the page.
      </p>

      {/* How Shadows Work */}
      <section class="doc-section">
        <h2>🎯 How Shadows Work</h2>
        <p>
          Use <code>sb-*</code> (shadow bottom) classes to add elevation. Higher
          numbers = bigger shadow = looks more "lifted". Also available:{" "}
          <code>st-*</code> (top), <code>sl-*</code> (left), <code>sr-*</code>{" "}
          (right).
        </p>

        <TipBox type="tip">
          <strong>Design tip:</strong> Important elements (like buttons and
          cards) usually have shadows to make them stand out. The shadow size
          shows importance!
        </TipBox>
      </section>

      {/* Shadow Scale */}
      <section class="doc-section">
        <h2>📐 Shadow Scale</h2>
        <p>
          Choose from 24 shadow levels (0 = no shadow, 24 = biggest shadow):
        </p>

        <ClassTable
          classes={[
            { class: "sb-0", description: "No shadow" },
            { class: "sb-1", description: "Subtle shadow (buttons)" },
            { class: "sb-2", description: "Light shadow (cards)" },
            { class: "sb-4", description: "Medium shadow (dropdowns)" },
            { class: "sb-8", description: "Pronounced shadow (modals)" },
            { class: "sb-12", description: "Strong shadow (popovers)" },
            { class: "sb-16", description: "Heavy shadow" },
            { class: "sb-24", description: "Maximum shadow (dialogs)" },
          ]}
        />

        <CodeDemo
          title="Shadow Levels"
          description="Compare different shadow sizes"
          code={`<div class="sb-0">No shadow</div>
<div class="sb-2">Light</div>
<div class="sb-4">Medium</div>
<div class="sb-8">Strong</div>
<div class="sb-16">Heavy</div>`}
        >
          <div class="d-flex gx-4 gy-4 df-fw" style="padding: 16px;">
            <div
              class="pa-4 br-2 sb-0 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              0
            </div>
            <div
              class="pa-4 br-2 sb-2 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              2
            </div>
            <div
              class="pa-4 br-2 sb-4 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              4
            </div>
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              8
            </div>
            <div
              class="pa-4 br-2 sb-16 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              16
            </div>
            <div
              class="pa-4 br-2 sb-24 ta-c"
              style="background: var(--demo-card-bg); min-width: 80px;"
            >
              24
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* When to Use */}
      <section class="doc-section">
        <h2>🎨 When to Use Each Shadow</h2>

        <div class="pa-4 br-2 mb-4" style="background: var(--demo-slate);">
          <h4 class="mb-2">Shadow Guide:</h4>
          <ul style="margin-left: 20px;">
            <li>
              <strong>sb-1 to sb-2:</strong> Buttons, input fields, subtle cards
            </li>
            <li>
              <strong>sb-3 to sb-6:</strong> Cards, panels, raised sections
            </li>
            <li>
              <strong>sb-8 to sb-12:</strong> Dropdown menus, tooltips
            </li>
            <li>
              <strong>sb-16 to sb-24:</strong> Modals, dialogs, important
              overlays
            </li>
          </ul>
        </div>

        <CodeDemo
          title="Button with Shadow"
          description="Shadows make buttons look clickable"
          code={`<button class="pa-3 br-2 sb-2">
  Click Me
</button>`}
        >
          <div class="d-flex gx-3">
            <button
              class="pa-3 br-2 sb-2 e-p"
              style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
            >
              sb-2
            </button>
            <button
              class="pa-3 br-2 sb-4 e-p"
              style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
            >
              sb-4
            </button>
            <button
              class="pa-3 br-2 sb-8 e-p"
              style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
            >
              sb-8
            </button>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Card Component"
          description="Cards often use sb-2 to sb-4"
          code={`<div class="pa-4 br-2 sb-4">
  <h3>Card Title</h3>
  <p>Some content here...</p>
</div>`}
        >
          <div class="pa-4 br-2 sb-4" style="background: var(--demo-card-bg);">
            <h3 class="mb-2">Card Title</h3>
            <p class="mb-0" style="color: var(--demo-text-muted);">
              This is a card with a nice shadow effect!
            </p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Dropdown Menu"
          description="Menus use larger shadows to appear above content"
          code={`<div class="pa-2 br-2 sb-8">
  <div class="pa-2">Option 1</div>
  <div class="pa-2">Option 2</div>
  <div class="pa-2">Option 3</div>
</div>`}
        >
          <div
            class="pa-2 br-2 sb-8"
            style="background: var(--demo-card-bg); width: 200px;"
          >
            <div class="pa-2 br-1 e-p">📄 Option 1</div>
            <div class="pa-2 br-1 e-p">📁 Option 2</div>
            <div class="pa-2 br-1 e-p">⚙️ Option 3</div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Modal / Dialog"
          description="Modals use the largest shadows"
          code={`<div class="pa-6 br-3 sb-24">
  <h2>Modal Title</h2>
  <p>Important content here!</p>
</div>`}
        >
          <div style="background: rgba(0,0,0,0.2); padding: 32px; border-radius: 8px;">
            <div
              class="pa-6 br-3 sb-24 mx-auto"
              style="background: var(--demo-card-bg); max-width: 300px;"
            >
              <h3 class="mb-2">Modal Title</h3>
              <p class="mb-4" style="color: var(--demo-text-muted);">
                This is an important dialog!
              </p>
              <div class="d-flex gx-2 dx-fe">
                <button
                  class="px-3 py-2 br-2"
                  style="background: var(--demo-btn-secondary); border: none;"
                >
                  Cancel
                </button>
                <button
                  class="px-3 py-2 br-2"
                  style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Hover Effects */}
      <section class="doc-section">
        <h2>✨ Hover Effect Idea</h2>
        <p>
          A common pattern is to increase the shadow on hover to make elements
          feel interactive. This requires a little custom CSS:
        </p>

        <CodeDemo
          title="Hover Shadow (Custom CSS)"
          description="Increase shadow on hover for interactivity"
          code={`/* In your CSS */
.card-hover {
  transition: box-shadow 0.2s ease;
}
.card-hover:hover {
  box-shadow: /* sb-8 values */;
}

/* In your HTML */
<div class="card-hover sb-2">
  Hover over me!
</div>`}
        >
          <div
            class="pa-4 br-2 sb-2 ta-c e-p"
            style="background: var(--demo-card-bg); transition: box-shadow 0.2s ease;"
            onMouseEnter={(e) =>
              e.currentTarget.classList.replace("sb-2", "sb-8")
            }
            onMouseLeave={(e) =>
              e.currentTarget.classList.replace("sb-8", "sb-2")
            }
          >
            Hover over me! 🖱️
          </div>
        </CodeDemo>

        <TipBox type="info">
          <strong>Pro tip:</strong> Use CSS transitions to animate shadow
          changes smoothly!
        </TipBox>
      </section>

      {/* Customization */}
      <section class="doc-section">
        <h2>🔧 Customization</h2>
        <p>You can customize shadow colors using CSS variables:</p>

        <CodeDemo
          title="Custom Shadow Color"
          description="Change the shadow color with CSS variables"
          code={`<style>
  .custom-shadow {
    --shadow-color: 99, 102, 241; /* RGB values */
  }
</style>

<div class="custom-shadow sb-8">
  Purple shadow!
</div>`}
        >
          <div class="d-flex gx-4 gy-4 df-fw">
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg);"
            >
              Default
            </div>
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg); --shadow-color: 99, 102, 241;"
            >
              Purple
            </div>
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg); --shadow-color: 239, 68, 68;"
            >
              Red
            </div>
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg); --shadow-color: 34, 197, 94;"
            >
              Green
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 Quick Reference</h2>

        <ClassTable
          classes={[
            { class: "sb-0", description: "None (remove shadow)" },
            { class: "sb-1 to sb-4", description: "Subtle (buttons, cards)" },
            { class: "sb-5 to sb-8", description: "Medium (dropdowns)" },
            { class: "sb-9 to sb-16", description: "Strong (menus, popovers)" },
            {
              class: "sb-17 to sb-24",
              description: "Maximum (modals, dialogs)",
            },
            {
              class: "st-*, sl-*, sr-*",
              description: "Top, left, right shadows",
            },
          ]}
        />
      </section>
    </div>
  );
}
