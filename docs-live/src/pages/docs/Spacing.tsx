import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function Spacing() {
  return (
    <div class="doc-page">
      <h1>📏 Spacing Utilities</h1>
      <p class="doc-intro">
        Add space around and inside elements! Spacing is one of the most
        important parts of good design - it makes everything easier to read.
      </p>

      {/* Understanding Spacing */}
      <section class="doc-section">
        <h2>🎯 Padding vs Margin</h2>
        <p>There are two types of spacing:</p>

        <div class="d-flex gx-4 gy-4 df-fw mb-4">
          <div
            class="pa-4 br-2"
            style="background: var(--demo-blue); flex: 1; min-width: 200px;"
          >
            <strong>Padding</strong>
            <p style="font-size: 0.875rem;">
              Space <em>inside</em> the element, between the border and content
            </p>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-green); flex: 1; min-width: 200px;"
          >
            <strong>Margin</strong>
            <p style="font-size: 0.875rem;">
              Space <em>outside</em> the element, pushing other elements away
            </p>
          </div>
        </div>

        <CodeDemo
          title="Padding vs Margin Visual"
          description="See how padding and margin work differently"
          code={`<!-- Padding (inside) -->
<div class="pa-4" style="background: lightblue;">
  I have padding inside me!
</div>

<!-- Margin (outside) -->
<div class="ma-4" style="background: lightgreen;">
  I have margin pushing others away!
</div>`}
        >
          <div style="background: var(--demo-slate); padding: 8px;">
            <div class="pa-4 br-2 mb-2" style="background: var(--demo-blue);">
              <div style="background: var(--demo-card-bg); padding: 8px; border-radius: 4px;">
                I have <code>pa-4</code> (padding inside)
              </div>
            </div>
            <div class="ma-4 pa-2 br-2" style="background: var(--demo-green);">
              I have <code>ma-4</code> (margin outside)
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Scale */}
      <section class="doc-section">
        <h2>📐 The Spacing Scale</h2>
        <p>Spacing uses a simple number system. Each number = 4 pixels:</p>

        <ClassTable
          classes={[
            { class: "*-0", description: "0px" },
            { class: "*-1", description: "4px" },
            { class: "*-2", description: "8px" },
            { class: "*-3", description: "12px" },
            { class: "*-4", description: "16px" },
            { class: "*-6", description: "24px" },
            { class: "*-8", description: "32px" },
            { class: "*-12", description: "48px" },
            { class: "*-16", description: "64px" },
            { class: "*-24", description: "96px" },
          ]}
        />

        <TipBox type="tip">
          <strong>Easy math:</strong> Multiply the number by 4 to get pixels!
          <br />
          <code>pa-4</code> = 4 × 4 = 16px
        </TipBox>
      </section>

      {/* Padding */}
      <section class="doc-section">
        <h2>📦 Padding Classes</h2>
        <p>Add space inside elements:</p>

        <ClassTable
          classes={[
            { class: "pa-*", description: "Padding All sides" },
            { class: "pt-*", description: "Padding Top" },
            { class: "pb-*", description: "Padding Bottom" },
            { class: "pl-*", description: "Padding Left" },
            { class: "pr-*", description: "Padding Right" },
            { class: "px-*", description: "Padding X-axis (left + right)" },
            { class: "py-*", description: "Padding Y-axis (top + bottom)" },
          ]}
        />

        <CodeDemo
          title="Padding Examples"
          description="Different ways to add padding"
          code={`<!-- All sides -->
<div class="pa-4">Padding everywhere!</div>

<!-- Just top and bottom -->
<div class="py-4">Padding top & bottom only</div>

<!-- Just left and right -->
<div class="px-4">Padding left & right only</div>`}
        >
          <div class="d-flex gx-2 df-fw">
            <div class="pa-4 br-2" style="background: var(--demo-blue);">
              <code>pa-4</code>
            </div>
            <div class="py-4 br-2" style="background: var(--demo-green);">
              <code>py-4</code>
            </div>
            <div class="px-4 br-2" style="background: var(--demo-yellow);">
              <code>px-4</code>
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Margin */}
      <section class="doc-section">
        <h2>↔️ Margin Classes</h2>
        <p>Add space outside elements:</p>

        <ClassTable
          classes={[
            { class: "ma-*", description: "Margin All sides" },
            { class: "mt-*", description: "Margin Top" },
            { class: "mb-*", description: "Margin Bottom" },
            { class: "ml-*", description: "Margin Left" },
            { class: "mr-*", description: "Margin Right" },
            { class: "mx-*", description: "Margin X-axis (left + right)" },
            { class: "my-*", description: "Margin Y-axis (top + bottom)" },
          ]}
        />

        <CodeDemo
          title="Margin Examples"
          description="Push elements apart with margin"
          code={`<div>
  <div class="mb-4">I have margin bottom</div>
  <div class="mt-4">I have margin top</div>
</div>`}
        >
          <div style="background: var(--demo-slate); padding: 8px;">
            <div class="mb-4 pa-3 br-2" style="background: var(--demo-blue);">
              I have <code>mb-4</code> (margin bottom)
            </div>
            <div class="pa-3 br-2" style="background: var(--demo-green);">
              Next element
            </div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Center with Auto Margin"
          description="Use mx-auto to center block elements"
          code={`<div class="mx-auto" style="width: 200px;">
  I'm centered!
</div>`}
        >
          <div style="background: var(--demo-slate); padding: 16px;">
            <div
              class="mx-auto pa-4 br-2 ta-c"
              style="width: 200px; background: var(--demo-purple);"
            >
              <code>mx-auto</code>
              <br />
              I'm centered!
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Gap */}
      <section class="doc-section">
        <h2>🔲 Gap (for Flexbox/Grid)</h2>
        <p>
          The easiest way to add space between items in a flex or grid
          container:
        </p>

        <ClassTable
          classes={[
            { class: "gx-0", description: "No column gap (0px)" },
            { class: "gx-1", description: "4px column gap" },
            { class: "gx-2", description: "8px column gap" },
            { class: "gx-4", description: "16px column gap" },
            { class: "gy-*", description: "Row gap (for wrapped rows)" },
          ]}
        />

        <CodeDemo
          title="Gap in Flexbox"
          description="Much cleaner than adding margin to each item!"
          code={`<div class="d-flex gx-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
        >
          <div class="d-flex gx-4">
            <div class="pa-3 br-2" style="background: var(--demo-blue);">
              Item 1
            </div>
            <div class="pa-3 br-2" style="background: var(--demo-green);">
              Item 2
            </div>
            <div class="pa-3 br-2" style="background: var(--demo-yellow);">
              Item 3
            </div>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          <strong>Why use gap?</strong> It's cleaner than margin because you
          don't have to worry about extra space on the first/last items!
        </TipBox>
      </section>

      {/* Common Patterns */}
      <section class="doc-section">
        <h2>🎨 Common Patterns</h2>

        <CodeDemo
          title="Card with Good Spacing"
          description="A well-spaced card component"
          code={`<div class="pa-4 br-2 sb-2">
  <h3 class="mb-2">Card Title</h3>
  <p class="mb-4">Card description with some text.</p>
  <button class="px-4 py-2">Click Me</button>
</div>`}
        >
          <div class="pa-4 br-2 sb-2" style="background: var(--demo-card-bg);">
            <h3 class="mb-2">Card Title</h3>
            <p class="mb-4" style="color: var(--demo-text-muted);">
              Card description with some text.
            </p>
            <button
              class="px-4 py-2 br-2 e-p"
              style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
            >
              Click Me
            </button>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Button Group"
          description="Buttons with consistent spacing"
          code={`<div class="d-flex gx-2">
  <button class="px-4 py-2">Save</button>
  <button class="px-4 py-2">Cancel</button>
</div>`}
        >
          <div class="d-flex gx-2">
            <button
              class="px-4 py-2 br-2"
              style="background: var(--demo-btn-primary); color: var(--demo-dark-text); border: none;"
            >
              Save
            </button>
            <button
              class="px-4 py-2 br-2"
              style="background: var(--demo-btn-secondary); border: none;"
            >
              Cancel
            </button>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Stacked List"
          description="Items with consistent vertical spacing"
          code={`<div>
  <div class="pa-3 mb-2">Item 1</div>
  <div class="pa-3 mb-2">Item 2</div>
  <div class="pa-3">Item 3</div>
</div>`}
        >
          <div>
            <div class="pa-3 mb-2 br-2" style="background: var(--demo-blue);">
              Item 1
            </div>
            <div class="pa-3 mb-2 br-2" style="background: var(--demo-green);">
              Item 2
            </div>
            <div class="pa-3 br-2" style="background: var(--demo-yellow);">
              Item 3
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 Cheat Sheet</h2>

        <div class="d-flex gx-4 gy-4 df-fw">
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Sides</h4>
            <ul style="margin: 8px 0 0 16px; font-size: 0.875rem;">
              <li>
                <code>a</code> = All
              </li>
              <li>
                <code>t</code> = Top
              </li>
              <li>
                <code>b</code> = Bottom
              </li>
              <li>
                <code>l</code> = Left
              </li>
              <li>
                <code>r</code> = Right
              </li>
              <li>
                <code>x</code> = Left + Right
              </li>
              <li>
                <code>y</code> = Top + Bottom
              </li>
            </ul>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Values (× 4px)</h4>
            <ul style="margin: 8px 0 0 16px; font-size: 0.875rem;">
              <li>
                <code>0</code> = 0px
              </li>
              <li>
                <code>1</code> = 4px
              </li>
              <li>
                <code>2</code> = 8px
              </li>
              <li>
                <code>4</code> = 16px
              </li>
              <li>
                <code>8</code> = 32px
              </li>
              <li>
                <code>auto</code> = auto
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
