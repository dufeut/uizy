import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function Customization() {
  return (
    <div class="doc-page">
      <h1>🎨 Customization</h1>
      <p class="doc-intro">
        Make Uizy CSS your own! Customize colors, spacing, fonts, and more using
        CSS variables.
      </p>

      {/* How it Works */}
      <section class="doc-section">
        <h2>🎯 How CSS Variables Work</h2>
        <p>
          Uizy CSS uses <strong>CSS Custom Properties</strong> (also called CSS
          variables) that you can override to customize the framework without
          touching the source code.
        </p>

        <div class="pa-4 br-2 mb-4" style="background: var(--demo-slate);">
          <h4 class="mb-2">The Pattern:</h4>
          <code class="ts-5">--variable-name: value;</code>
          <p class="mt-2 mb-0">
            Override these in your own CSS file to customize it!
          </p>
        </div>

        <TipBox type="tip">
          <strong>Best Practice:</strong> Create a separate CSS file (like{" "}
          <code>custom.css</code>) for your overrides and load it <em>after</em>{" "}
          Uizy CSS.
        </TipBox>
      </section>

      {/* Font Family */}
      <section class="doc-section">
        <h2>🔤 Font Family</h2>
        <p>Change the default font for your entire site:</p>

        <ClassTable
          classes={[
            { class: "--font-family", description: "Base font for all text" },
          ]}
        />

        <CodeDemo
          title="Custom Font"
          description="Use your own font family"
          code={`:root {
  --font-family: "Inter", "Segoe UI", sans-serif;
}

/* Or use a Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

:root {
  --font-family: "Poppins", sans-serif;
}`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-card-bg);">
            <p class="mb-2">
              <strong>Default:</strong> "Roboto", "Arial", sans-serif
            </p>
            <p class="mb-0" style="color: var(--demo-text-muted);">
              Change this to use any font you want across your site.
            </p>
          </div>
        </CodeDemo>
      </section>

      {/* Text Sizes */}
      <section class="doc-section">
        <h2>📝 Text Sizes</h2>
        <p>
          Customize the typography scale used by <code>ts-*</code> classes:
        </p>

        <ClassTable
          classes={[
            {
              class: "--ts-1",
              description: "Largest text (default: 3rem / 48px)",
            },
            {
              class: "--ts-2",
              description: "Very large (default: 2.25rem / 36px)",
            },
            { class: "--ts-3", description: "Large (default: 1.5rem / 24px)" },
            {
              class: "--ts-4",
              description: "Medium-large (default: 1.25rem / 20px)",
            },
            { class: "--ts-5", description: "Normal (default: 1rem / 16px)" },
            {
              class: "--ts-6",
              description: "Small (default: 0.875rem / 14px)",
            },
          ]}
        />

        <CodeDemo
          title="Custom Text Scale"
          description="Make your headings bigger or smaller"
          code={`:root {
  --ts-1: 4rem;     /* Make h1 even bigger */
  --ts-2: 3rem;
  --ts-3: 2rem;
  --ts-4: 1.5rem;
  --ts-5: 1rem;
  --ts-6: 0.75rem;  /* Smaller caption text */
}`}
        >
          <div class="d-flex gx-4 gy-4 df-fw dy-fe">
            <div class="ta-c">
              <span class="ts-1">Aa</span>
              <p class="ts-6 mb-0">ts-1</p>
            </div>
            <div class="ta-c">
              <span class="ts-2">Aa</span>
              <p class="ts-6 mb-0">ts-2</p>
            </div>
            <div class="ta-c">
              <span class="ts-3">Aa</span>
              <p class="ts-6 mb-0">ts-3</p>
            </div>
            <div class="ta-c">
              <span class="ts-4">Aa</span>
              <p class="ts-6 mb-0">ts-4</p>
            </div>
            <div class="ta-c">
              <span class="ts-5">Aa</span>
              <p class="ts-6 mb-0">ts-5</p>
            </div>
            <div class="ta-c">
              <span class="ts-6">Aa</span>
              <p class="ts-6 mb-0">ts-6</p>
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Spacing */}
      <section class="doc-section">
        <h2>📏 Spacing</h2>
        <p>
          Spacing is based on a 4px scale. The <code>--spacer</code> variable
          controls the base unit.
        </p>

        <ClassTable
          classes={[
            {
              class: "--spacer",
              description: "Base spacing unit (default: 4px)",
            },
            {
              class: "--sp-0 to --sp-24",
              description: "Generated spacing values (0 to 24 × base)",
            },
          ]}
        />

        <CodeDemo
          title="Spacing Scale"
          description="How spacing values are calculated"
          code={`:root {
  --spacer: 4px;   /* Default base unit */

  /* Generated automatically: */
  --sp-0: 0px;     /* 0 × 4 */
  --sp-1: 4px;     /* 1 × 4 */
  --sp-2: 8px;     /* 2 × 4 */
  --sp-4: 16px;    /* 4 × 4 */
  --sp-8: 32px;    /* 8 × 4 */
}

/* Change base to 8px for larger spacing */
:root {
  --spacer: 8px;
}`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-slate);">
            <p class="mb-2">
              <strong>Formula:</strong> <code>--sp-N = N × --spacer</code>
            </p>
            <p class="mb-0">
              So <code>pa-4</code> means padding of <code>var(--sp-4)</code> =
              16px
            </p>
          </div>
        </CodeDemo>

        <TipBox type="info">
          <strong>Note:</strong> The spacing values (--sp-*) are generated at
          build time from the base unit. To change the entire scale, you'd need
          to rebuild Uizy CSS with a different <code>$spacer-base</code> value.
        </TipBox>
      </section>

      {/* Border Radius */}
      <section class="doc-section">
        <h2>🔵 Border Radius</h2>
        <p>Customize how rounded your corners are:</p>

        <ClassTable
          classes={[
            { class: "--br-0", description: "No rounding (default: 0)" },
            {
              class: "--br-1",
              description: "Slight rounding (default: 0.125rem / 2px)",
            },
            {
              class: "--br-2",
              description: "Medium rounding (default: 0.25rem / 4px)",
            },
            {
              class: "--br-3",
              description: "More rounding (default: 0.5rem / 8px)",
            },
            {
              class: "--br-4",
              description: "Heavy rounding (default: 1rem / 16px)",
            },
            { class: "--br-100p", description: "Circle (default: 100%)" },
            { class: "--br-pill", description: "Pill shape (default: 9999px)" },
          ]}
        />

        <CodeDemo
          title="Custom Border Radius"
          description="Make corners sharper or rounder"
          code={`:root {
  /* Sharper corners */
  --br-1: 1px;
  --br-2: 2px;
  --br-3: 4px;
  --br-4: 6px;
}

/* Or rounder corners */
:root {
  --br-1: 4px;
  --br-2: 8px;
  --br-3: 12px;
  --br-4: 20px;
}`}
        >
          <div class="d-flex gx-3 df-fw">
            <div
              class="pa-4 ta-c br-1"
              style="background: var(--demo-blue); width: 80px;"
            >
              br-1
            </div>
            <div
              class="pa-4 ta-c br-2"
              style="background: var(--demo-green); width: 80px;"
            >
              br-2
            </div>
            <div
              class="pa-4 ta-c br-3"
              style="background: var(--demo-yellow); width: 80px;"
            >
              br-3
            </div>
            <div
              class="pa-4 ta-c br-4"
              style="background: var(--demo-purple); width: 80px;"
            >
              br-4
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Border Width */}
      <section class="doc-section">
        <h2>📐 Border Width</h2>
        <p>Customize border thickness:</p>

        <ClassTable
          classes={[
            { class: "--bw-0", description: "No border (default: 0)" },
            { class: "--bw-1", description: "Thin (default: 0.125rem / 2px)" },
            { class: "--bw-2", description: "Medium (default: 0.25rem / 4px)" },
            { class: "--bw-3", description: "Thick (default: 0.4rem / 6px)" },
            {
              class: "--bw-4",
              description: "Very thick (default: 0.525rem / 8px)",
            },
            {
              class: "--bw-5",
              description: "Extra thick (default: 0.65rem / 10px)",
            },
            {
              class: "--border-color",
              description: "Default border color (default: currentColor)",
            },
          ]}
        />

        <CodeDemo
          title="Custom Border Settings"
          description="Change border thickness and default color"
          code={`:root {
  /* Thinner borders */
  --bw-1: 1px;
  --bw-2: 2px;
  --bw-3: 3px;

  /* Default border color */
  --border-color: #e5e7eb;
}`}
        >
          <div class="d-flex gx-4 gy-4 df-fw">
            <div
              class="pa-3 br-2 bd-a bw-1"
              style="border-color: var(--primary);"
            >
              bw-1
            </div>
            <div
              class="pa-3 br-2 bd-a bw-2"
              style="border-color: var(--primary);"
            >
              bw-2
            </div>
            <div
              class="pa-3 br-2 bd-a bw-3"
              style="border-color: var(--primary);"
            >
              bw-3
            </div>
          </div>
        </CodeDemo>
      </section>

      {/* Shadows */}
      <section class="doc-section">
        <h2>🌑 Shadows</h2>
        <p>Customize shadow appearance:</p>

        <ClassTable
          classes={[
            {
              class: "--shadow-color",
              description: "RGB values for shadow (default: 0, 0, 0)",
            },
            {
              class: "--shadow-opacity-1",
              description: "First shadow layer opacity (default: 0.2)",
            },
            {
              class: "--shadow-opacity-2",
              description: "Second shadow layer opacity (default: 0.14)",
            },
            {
              class: "--shadow-opacity-3",
              description: "Third shadow layer opacity (default: 0.12)",
            },
          ]}
        />

        <CodeDemo
          title="Custom Shadow Color"
          description="Change shadow color with RGB values"
          code={`:root {
  /* Default black shadow */
  --shadow-color: 0, 0, 0;
}

/* Purple shadows */
.purple-shadow {
  --shadow-color: 99, 102, 241;
}

/* Blue shadows */
.blue-shadow {
  --shadow-color: 59, 130, 246;
}`}
        >
          <div class="d-flex gx-4 gy-4 df-fw" style="padding: 16px;">
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
              style="background: var(--demo-card-bg); --shadow-color: 59, 130, 246;"
            >
              Blue
            </div>
            <div
              class="pa-4 br-2 sb-8 ta-c"
              style="background: var(--demo-card-bg); --shadow-color: 239, 68, 68;"
            >
              Red
            </div>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Shadow Intensity"
          description="Make shadows lighter or darker"
          code={`:root {
  /* Lighter shadows */
  --shadow-opacity-1: 0.1;
  --shadow-opacity-2: 0.07;
  --shadow-opacity-3: 0.06;
}

/* Or darker shadows */
:root {
  --shadow-opacity-1: 0.3;
  --shadow-opacity-2: 0.2;
  --shadow-opacity-3: 0.15;
}`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-slate);">
            <p class="mb-0">
              Adjust the three opacity values to control how strong or subtle
              your shadows appear.
            </p>
          </div>
        </CodeDemo>
      </section>

      {/* Gap */}
      <section class="doc-section">
        <h2>📦 Gap (Flexbox/Grid)</h2>
        <p>Customize the gap scale for flex and grid layouts:</p>

        <ClassTable
          classes={[
            { class: "--gap", description: "Base gap unit (default: 4px)" },
            {
              class: "--gap-0 to --gap-16",
              description: "Generated gap values (0 to 16 × base)",
            },
          ]}
        />

        <CodeDemo
          title="Gap Scale"
          description="How gap values work"
          code={`:root {
  --gap: 4px;      /* Base unit */

  /* Generated automatically: */
  --gap-0: 0px;    /* 0 × 4 */
  --gap-1: 4px;    /* 1 × 4 */
  --gap-2: 8px;    /* 2 × 4 */
  --gap-4: 16px;   /* 4 × 4 */
}`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-slate);">
            <p class="mb-0">
              <code>gx-4</code> uses <code>var(--gap-4)</code> for column-gap
              (16px by default)
            </p>
          </div>
        </CodeDemo>
      </section>

      {/* Complete Example */}
      <section class="doc-section">
        <h2>🌟 Complete Example</h2>
        <p>
          Here's a complete customization file you can use as a starting point:
        </p>

        <CodeDemo
          title="custom.css"
          description="Full customization example"
          code={`/* custom.css - Load this AFTER */

:root {
  /* Typography */
  --font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --ts-1: 3.5rem;
  --ts-2: 2.5rem;
  --ts-3: 1.75rem;
  --ts-4: 1.25rem;
  --ts-5: 1rem;
  --ts-6: 0.875rem;

  /* Border Radius - More rounded */
  --br-1: 4px;
  --br-2: 8px;
  --br-3: 12px;
  --br-4: 16px;

  /* Border Width - Thinner */
  --bw-1: 1px;
  --bw-2: 2px;
  --bw-3: 3px;
  --border-color: #e2e8f0;

  /* Shadows - Slightly lighter */
  --shadow-opacity-1: 0.15;
  --shadow-opacity-2: 0.1;
  --shadow-opacity-3: 0.08;
}`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-card-bg);">
            <p class="mb-2">
              <strong>Load order:</strong>
            </p>
            <ol style="margin-left: 20px;">
              <li>Uizy CSS (base framework)</li>
              <li>Your custom.css (overrides)</li>
            </ol>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 All CSS Variables</h2>

        <div class="d-flex gx-4 gy-4 df-fw">
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Typography</h4>
            <code>--font-family</code>
            <br />
            <code>--ts-1 to --ts-6</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Spacing</h4>
            <code>--spacer</code>
            <br />
            <code>--sp-0 to --sp-24</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Borders</h4>
            <code>--br-0 to --br-pill</code>
            <br />
            <code>--bw-0 to --bw-5</code>
            <br />
            <code>--border-color</code>
          </div>
          <div
            class="pa-4 br-2"
            style="background: var(--demo-slate); flex: 1; min-width: 200px;"
          >
            <h4>Shadows</h4>
            <code>--shadow-color</code>
            <br />
            <code>--shadow-opacity-*</code>
          </div>
        </div>

        <TipBox type="tip">
          <strong>Pro tip:</strong> You can scope CSS variables to specific
          elements! Set <code>--shadow-color</code> on a <code>.card</code>{" "}
          class to give all cards colored shadows.
        </TipBox>
      </section>
    </div>
  );
}
