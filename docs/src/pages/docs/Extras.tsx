import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function Extras() {
  return (
    <div class="doc-page">
      <h1>✨ Extra Utilities</h1>
      <p class="doc-intro">
        Helpful utilities for cursors, dimensions, overflow, and positioning!
      </p>

      {/* Cursor */}
      <section class="doc-section">
        <h2>👆 Cursor & User Events</h2>
        <p>Change the mouse cursor and control user interactions:</p>

        <ClassTable
          classes={[
            {
              class: "e-p",
              description: "Cursor Pointer (hand) - for clickable items",
            },
            {
              class: "e-ns",
              description: "No Select - prevents text selection",
            },
            {
              class: "e-ne",
              description: "No Events - disables pointer events",
            },
          ]}
        />

        <CodeDemo
          title="Pointer Cursor"
          description="Shows users an element is clickable"
          code={`<div class="e-p">Click me!</div>`}
        >
          <div class="d-flex gx-4">
            <div
              class="pa-4 br-2"
              style="background: var(--demo-btn-secondary);"
            >
              Normal cursor
            </div>
            <div class="pa-4 br-2 e-p" style="background: var(--demo-blue);">
              Pointer cursor (e-p) - hover me!
            </div>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          <strong>When to use:</strong> Add <code>e-p</code> to any clickable
          element that isn't already a button or link. This helps users know
          they can interact with it!
        </TipBox>
      </section>

      {/* Dimensions */}
      <section class="doc-section">
        <h2>📐 Dimensions</h2>
        <p>Set width and height of elements:</p>

        <h3>Width (ew-*)</h3>
        <ClassTable
          classes={[
            {
              class: "ew-100p",
              description: "Width 100% (full width of parent)",
            },
            {
              class: "ew-100v",
              description: "Width 100dvw (full viewport width)",
            },
            { class: "ew-i", description: "Width inherit (same as parent)" },
          ]}
        />

        <h3>Height (eh-*)</h3>
        <ClassTable
          classes={[
            {
              class: "eh-100p",
              description: "Height 100% (full height of parent)",
            },
            {
              class: "eh-100v",
              description: "Height 100dvh (full viewport height)",
            },
            { class: "eh-i", description: "Height inherit (same as parent)" },
          ]}
        />

        <CodeDemo
          title="Full Width Element"
          description="Make an element span the entire parent width"
          code={`<div class="ew-100p">I take up all the space!</div>`}
        >
          <div style="background: var(--demo-slate); padding: 8px;">
            <div
              class="ew-100p pa-3 br-2 ta-c"
              style="background: var(--demo-blue);"
            >
              ew-100p (full width)
            </div>
          </div>
        </CodeDemo>

        <TipBox type="info">
          <strong>About dvh/dvw:</strong> These are "dynamic viewport" units
          that work better on mobile phones where the address bar can hide/show!
        </TipBox>
      </section>

      {/* Overflow */}
      <section class="doc-section">
        <h2>📜 Overflow</h2>
        <p>Control what happens when content is bigger than its container:</p>

        <ClassTable
          classes={[
            { class: "ox-h", description: "Overflow-X Hidden (horizontal)" },
            {
              class: "ox-a",
              description: "Overflow-X Auto (horizontal scroll)",
            },
            { class: "oy-h", description: "Overflow-Y Hidden (vertical)" },
            { class: "oy-a", description: "Overflow-Y Auto (vertical scroll)" },
          ]}
        />

        <CodeDemo
          title="Overflow Hidden"
          description="Content outside the box is clipped"
          code={`<div class="ox-h oy-h" style="width: 200px; height: 100px;">
  Very long content that doesn't fit...
</div>`}
        >
          <div class="d-flex gx-4">
            <div>
              <p class="mb-2 ts-6">
                <strong>Without overflow hidden:</strong>
              </p>
              <div
                class="pa-2 br-2 oy-a"
                style="width: 150px; height: 60px; background: var(--demo-red); border: 1px dashed var(--demo-text-red);"
              >
                This is a lot of text that overflows the container and spills
                outside the box!
              </div>
            </div>
            <div>
              <p class="mb-2 ts-6">
                <strong>With ox-h oy-h:</strong>
              </p>
              <div
                class="pa-2 br-2 ox-h oy-h"
                style="width: 150px; height: 60px; background: var(--demo-green); border: 1px dashed var(--demo-text-green);"
              >
                This is a lot of text that overflows the container and spills
                outside the box!
              </div>
            </div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Overflow Auto (Scrollable)"
          description="Shows scrollbars when content overflows"
          code={`<div class="oy-a" style="height: 100px;">
  <p>Line 1</p>
  <p>Line 2</p>
  <p>Line 3</p>
  <!-- More lines... -->
</div>`}
        >
          <div
            class="pa-2 br-2 oy-a"
            style="height: 100px; background: var(--demo-blue);"
          >
            <p class="mb-2">Line 1</p>
            <p class="mb-2">Line 2</p>
            <p class="mb-2">Line 3</p>
            <p class="mb-2">Line 4</p>
            <p class="mb-2">Line 5</p>
            <p class="mb-0">Line 6 (scroll to see me!)</p>
          </div>
        </CodeDemo>
      </section>

      {/* Position */}
      <section class="doc-section">
        <h2>📍 Position</h2>
        <p>Control how elements are positioned on the page:</p>

        <ClassTable
          classes={[
            {
              class: "dp-r",
              description: "Position Relative - normal flow, can offset",
            },
            {
              class: "dp-a",
              description: "Position Absolute - relative to parent",
            },
            {
              class: "dp-f",
              description: "Position Fixed - relative to viewport",
            },
            {
              class: "dp-s",
              description: "Position Sticky - sticks when scrolling",
            },
          ]}
        />

        <CodeDemo
          title="Relative + Absolute"
          description="Common pattern for overlays"
          code={`<div class="dp-r">
  <img src="photo.jpg" />
  <span class="dp-a" style="top: 0; right: 0;">
    Badge
  </span>
</div>`}
        >
          <div
            class="dp-r"
            style="width: 150px; height: 150px; background: var(--demo-blue); border-radius: 8px;"
          >
            <span
              class="dp-a pa-1 br-1 ts-6"
              style="top: 8px; right: 8px; background: var(--demo-red); color: var(--demo-dark-text);"
            >
              NEW
            </span>
            <div class="d-flex dx-ce dy-ce eh-100p">Image</div>
          </div>
        </CodeDemo>

        <TipBox type="info">
          <strong>How it works:</strong> Set the parent to <code>dp-r</code>,
          then the child with <code>dp-a</code> will position itself relative to
          that parent!
        </TipBox>
      </section>

      {/* Flex Alignment */}
      <section class="doc-section">
        <h2>📦 Flex Alignment</h2>
        <p>Align items within a flex container:</p>

        <h3>Justify Content (X-axis / horizontal)</h3>
        <ClassTable
          classes={[
            {
              class: "dx-fs",
              description: "Justify Content Flex-Start (left)",
            },
            { class: "dx-fe", description: "Justify Content Flex-End (right)" },
            { class: "dx-ce", description: "Justify Content Center" },
            { class: "dx-sb", description: "Justify Content Space-Between" },
            { class: "dx-sa", description: "Justify Content Space-Around" },
            { class: "dx-se", description: "Justify Content Space-Evenly" },
          ]}
        />

        <h3>Align Items (Y-axis / vertical)</h3>
        <ClassTable
          classes={[
            { class: "dy-fs", description: "Align Items Flex-Start (top)" },
            { class: "dy-fe", description: "Align Items Flex-End (bottom)" },
            { class: "dy-ce", description: "Align Items Center" },
            { class: "dy-st", description: "Align Items Stretch (default)" },
          ]}
        />

        <CodeDemo
          title="Centering with Flex"
          description="Center items both ways with dx-ce and dy-ce"
          code={`<div class="d-flex dx-ce dy-ce" style="height: 100px;">
  <div>Perfectly centered!</div>
</div>`}
        >
          <div
            class="d-flex dx-ce dy-ce br-2"
            style="height: 100px; background: var(--demo-purple);"
          >
            <div class="pa-3 br-2" style="background: var(--demo-card-bg);">
              Perfectly centered!
            </div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Space Between"
          description="Push items to opposite ends"
          code={`<div class="d-flex dx-sb">
  <div>Left</div>
  <div>Right</div>
</div>`}
        >
          <div
            class="d-flex dx-sb pa-3 br-2"
            style="background: var(--demo-green);"
          >
            <div class="pa-2 br-2" style="background: var(--demo-card-bg);">
              Left
            </div>
            <div class="pa-2 br-2" style="background: var(--demo-card-bg);">
              Right
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 Quick Reference</h2>

        <div class="d-flex gx-4 gy-4 df-fw">
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 150px;"
          >
            <h4>Events</h4>
            <code>e-p, e-ns, e-ne</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 150px;"
          >
            <h4>Dimensions</h4>
            <code>ew-100p, eh-100v</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 150px;"
          >
            <h4>Overflow</h4>
            <code>ox-h, oy-a</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 150px;"
          >
            <h4>Position</h4>
            <code>dp-r, dp-a, dp-f, dp-s</code>
          </div>
        </div>
      </section>
    </div>
  );
}
