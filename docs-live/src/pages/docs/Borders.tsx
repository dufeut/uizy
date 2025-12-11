import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function Borders() {
  return (
    <div class="doc-page">
      <h1>🔲 Borders</h1>
      <p class="doc-intro">
        Add borders and rounded corners to make your elements look polished!
      </p>

      {/* Border Radius */}
      <section class="doc-section">
        <h2>🔵 Border Radius (Rounded Corners)</h2>
        <p>
          Use <code>br-*</code> (Border Radius) to round corners:
        </p>

        <ClassTable
          classes={[
            { class: "br-0", description: "No rounding (sharp corners)" },
            { class: "br-1", description: "Slightly rounded (2px)" },
            { class: "br-2", description: "Medium rounded (4px)" },
            { class: "br-3", description: "More rounded (8px)" },
            { class: "br-4", description: "Very rounded (16px)" },
            { class: "br-100p", description: "Circle (for squares)" },
            { class: "br-pill", description: "Pill shape (very round ends)" },
          ]}
        />

        <CodeDemo
          title="Border Radius Scale"
          description="From sharp to fully rounded"
          code={`<div class="br-0">Sharp corners</div>
<div class="br-2">Medium rounded</div>
<div class="br-4">Very rounded</div>
<div class="br-pill">Pill shape</div>`}
        >
          <div class="d-flex gx-3 df-fw dy-ce">
            <div
              class="pa-3 ta-c br-0"
              style="background: var(--demo-blue); width: 100px;"
            >
              br-0
            </div>
            <div
              class="pa-3 ta-c br-2"
              style="background: var(--demo-green); width: 100px;"
            >
              br-2
            </div>
            <div
              class="pa-3 ta-c br-4"
              style="background: var(--demo-yellow); width: 100px;"
            >
              br-4
            </div>
            <div
              class="pa-3 ta-c br-pill"
              style="background: var(--demo-purple); width: 100px;"
            >
              br-pill
            </div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Circle Avatar"
          description="Use br-100p with a square element"
          code={`<div class="br-100p" style="width: 80px; height: 80px;">
  Avatar
</div>`}
        >
          <div class="d-flex gx-4 gy-4 dy-ce">
            <div
              class="br-100p d-flex dx-ce dy-ce"
              style="width: 80px; height: 80px; background: var(--demo-btn-primary); color: var(--demo-dark-text);"
            >
              JD
            </div>
            <div
              class="br-100p d-flex dx-ce dy-ce"
              style="width: 60px; height: 60px; background: var(--demo-text-green); color: var(--demo-dark-text);"
            >
              AB
            </div>
            <div
              class="br-100p d-flex dx-ce dy-ce"
              style="width: 50px; height: 50px; background: var(--demo-text-yellow); color: var(--demo-dark-text);"
            >
              XY
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Border Width */}
      <section class="doc-section">
        <h2>📏 Border Width</h2>
        <p>
          Use <code>bw-*</code> (Border Width) classes:
        </p>

        <ClassTable
          classes={[
            { class: "bw-0", description: "No border" },
            { class: "bw-1", description: "Thin border (2px)" },
            { class: "bw-2", description: "Medium border (4px)" },
            { class: "bw-3", description: "Thick border (8px)" },
            { class: "bw-4", description: "Very thick (16px)" },
          ]}
        />

        <CodeDemo
          title="Border Widths"
          description="Different border thicknesses"
          code={`<div class="bd-a bw-1">Thin border</div>
<div class="bd-a bw-2">Medium border</div>
<div class="bd-a bw-3">Thick border</div>`}
        >
          <div class="d-flex gx-4 gy-4 df-fw">
            <div
              class="pa-3 br-2 bd-a bw-1"
              style="border-color: var(--primary);"
            >
              bw-1 (thin)
            </div>
            <div
              class="pa-3 br-2 bd-a bw-2"
              style="border-color: var(--primary);"
            >
              bw-2 (medium)
            </div>
            <div
              class="pa-3 br-2 bd-a bw-3"
              style="border-color: var(--primary);"
            >
              bw-3 (thick)
            </div>
          </div>
        </CodeDemo>

        <TipBox type="info">
          <strong>Note:</strong> You need to add <code>bd-a</code> (border-all)
          or a side-specific class for the border to show. Width alone isn't
          enough!
        </TipBox>
      </section>

      {/* Border Sides */}
      <section class="doc-section">
        <h2>📐 Border Sides</h2>
        <p>Add borders to specific sides:</p>

        <ClassTable
          classes={[
            { class: "bd-a", description: "Border All sides" },
            { class: "bd-t", description: "Border Top only" },
            { class: "bd-b", description: "Border Bottom only" },
            { class: "bd-l", description: "Border Left only" },
            { class: "bd-r", description: "Border Right only" },
          ]}
        />

        <CodeDemo
          title="Individual Sides"
          description="Border on specific sides only"
          code={`<div class="bd-t bw-2">Top border only</div>
<div class="bd-b bw-2">Bottom border only</div>
<div class="bd-l bw-2">Left border only</div>`}
        >
          <div class="d-flex gx-4 gy-4 df-fw">
            <div
              class="pa-3 bd-t bw-2"
              style="background: var(--demo-slate); border-color: var(--demo-text-red);"
            >
              bd-t (top)
            </div>
            <div
              class="pa-3 bd-b bw-2"
              style="background: var(--demo-slate); border-color: var(--demo-text-green);"
            >
              bd-b (bottom)
            </div>
            <div
              class="pa-3 bd-l bw-2"
              style="background: var(--demo-slate); border-color: var(--demo-text-blue);"
            >
              bd-l (left)
            </div>
            <div
              class="pa-3 bd-r bw-2"
              style="background: var(--demo-slate); border-color: var(--demo-text-yellow);"
            >
              bd-r (right)
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Border Styles */}
      <section class="doc-section">
        <h2>🎨 Border Styles</h2>
        <p>Change the border line style:</p>

        <ClassTable
          classes={[
            { class: "bs-solid", description: "Solid line (default)" },
            { class: "bs-dashed", description: "Dashed line (- - -)" },
            { class: "bs-dotted", description: "Dotted line (. . .)" },
          ]}
        />

        <CodeDemo
          title="Border Styles"
          description="Different line patterns"
          code={`<div class="bd-a bw-2 bs-solid">Solid border</div>
<div class="bd-a bw-2 bs-dashed">Dashed border</div>
<div class="bd-a bw-2 bs-dotted">Dotted border</div>`}
        >
          <div class="d-flex gx-4 gy-4 df-fw">
            <div
              class="pa-3 br-2 bd-a bw-2 bs-solid"
              style="border-color: var(--primary);"
            >
              Solid
            </div>
            <div
              class="pa-3 br-2 bd-a bw-2 bs-dashed"
              style="border-color: var(--primary);"
            >
              Dashed
            </div>
            <div
              class="pa-3 br-2 bd-a bw-2 bs-dotted"
              style="border-color: var(--primary);"
            >
              Dotted
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Common Patterns */}
      <section class="doc-section">
        <h2>🌟 Common Patterns</h2>

        <CodeDemo
          title="Card with Border"
          description="A simple bordered card"
          code={`<div class="pa-4 br-2 bd-a bw-1">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>`}
        >
          <div
            class="pa-4 br-2 bd-a bw-1"
            style="border-color: var(--border); background: var(--demo-card-bg);"
          >
            <h3 class="mb-2">Card Title</h3>
            <p style="color: var(--demo-text-muted);">Card content goes here</p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Accent Border"
          description="Left border for emphasis"
          code={`<div class="pa-4 bd-l bw-3">
  <strong>Important Note</strong>
  <p>This content is highlighted!</p>
</div>`}
        >
          <div
            class="pa-4 bd-l bw-3"
            style="background: var(--demo-slate); border-color: var(--primary);"
          >
            <strong>Important Note</strong>
            <p class="mb-0" style="color: var(--demo-text-muted);">
              This content is highlighted with a left border!
            </p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Pill Button"
          description="Rounded button style"
          code={`<button class="px-4 py-2 br-pill bd-a bw-1">
  Click Me
</button>`}
        >
          <div class="d-flex gx-3">
            <button
              class="px-4 py-2 br-pill bd-a bw-1 e-p"
              style="background: transparent; border-color: var(--primary); color: var(--primary);"
            >
              Outlined
            </button>
            <button
              class="px-4 py-2 br-pill e-p"
              style="background: var(--demo-btn-primary); border: none; color: var(--demo-dark-text);"
            >
              Filled
            </button>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Divider Line"
          description="Use border-bottom as a separator"
          code={`<div>
  <p class="pb-2 bd-b bw-1">Section 1</p>
  <p class="py-2 bd-b bw-1">Section 2</p>
  <p class="pt-2">Section 3</p>
</div>`}
        >
          <div style="background: var(--demo-card-bg);" class="pa-4 br-2">
            <p class="pb-2 bd-b bw-1 mb-2" style="border-color: var(--border);">
              Section 1
            </p>
            <p class="py-2 bd-b bw-1 mb-2" style="border-color: var(--border);">
              Section 2
            </p>
            <p class="pt-2 mb-0">Section 3</p>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 Quick Reference</h2>

        <div class="d-flex gx-4 gy-4 df-fw">
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 180px;"
          >
            <h4>Radius (br-*)</h4>
            <code>0, 1, 2, 3, 4, 100p, pill</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 180px;"
          >
            <h4>Width (bw-*)</h4>
            <code>0, 1, 2, 3, 4, 5</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 180px;"
          >
            <h4>Sides</h4>
            <code>bd-a, bd-t, bd-b, bd-l, bd-r</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 180px;"
          >
            <h4>Style (bs-*)</h4>
            <code>solid, dashed, dotted</code>
          </div>
        </div>
      </section>
    </div>
  );
}
