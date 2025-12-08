import { CodeDemo, TipBox, ClassTable } from "../../components/CodeDemo";

export function DemoCard({ title, prefix, range, note }) {
  return (
    <div
      class="pa-4 br-4"
      style="background: var(--demo-slate); flex: 1; min-width: 150px; text-align:center"
    >
      <h4>
        {title} (<code>{prefix}</code>)
      </h4>
      {range}
      <br />
      <small>{note}</small>
    </div>
  );
}

export function Typography() {
  return (
    <div class="doc-page">
      <h1>✏️ Typography</h1>
      <p class="doc-intro">
        Make your text look awesome! Change sizes, alignment, and add styles
        like bold and italic.
      </p>

      {/* Text Sizes */}
      <section class="doc-section">
        <h2>📐 Text Sizes</h2>
        <p>
          Use <code>ts-*</code> (Text Size) classes to change font size:
        </p>

        <ClassTable
          classes={[
            {
              class: "ts-1",
              description:
                "Huge (Title) headlines, ideal for main page titles or hero sections",
            },
            {
              class: "ts-2",
              description:
                "Big (Article) headlines, perfect for article headings or prominent sections",
            },
            {
              class: "ts-3",
              description:
                "Medium-large (Section) titles, suitable for subsection headings",
            },
            {
              class: "ts-4",
              description:
                "Medium (Topic) titles, good for smaller section headings or emphasis",
            },
            {
              class: "ts-5",
              description:
                "Normal (Detail) text, for body content and regular paragraphs",
            },
            {
              class: "ts-6",
              description:
                "Small (Unit) text, ideal for captions, labels, or fine print",
            },
          ]}
        />

        <CodeDemo
          title="Text Size Scale"
          description="From biggest to smallest"
          code={`<p class="ts-1">Size 1 - Huge!</p>
<p class="ts-2">Size 2 - Big</p>
<p class="ts-3">Size 3 - Medium-large</p>
<p class="ts-4">Size 4 - Medium</p>
<p class="ts-5">Size 5 - Normal</p>
<p class="ts-6">Size 6 - Small</p>`}
        >
          <div>
            <p class="ts-1">Size 1 - Huge!</p>
            <p class="ts-2">Size 2 - Big</p>
            <p class="ts-3">Size 3 - Medium-large</p>
            <p class="ts-4">Size 4 - Medium</p>
            <p class="ts-5">Size 5 - Normal</p>
            <p class="ts-6">Size 6 - Small</p>
          </div>
        </CodeDemo>
      </section>

      {/* Text Alignment */}
      <section class="doc-section">
        <h2>↔️ Text Alignment</h2>
        <p>
          Use <code>ta-*</code> (Text Align) classes:
        </p>

        <ClassTable
          classes={[
            { class: "ta-l", description: "Text Align Left" },
            { class: "ta-c", description: "Text Align Center" },
            { class: "ta-r", description: "Text Align Right" },
          ]}
        />

        <CodeDemo
          title="Text Alignment"
          description="Left, center, and right alignment"
          code={`<p class="ta-l">Left aligned text</p>
<p class="ta-c">Center aligned text</p>
<p class="ta-r">Right aligned text</p>`}
        >
          <div class="pa-4 br-2" style="background: var(--demo-slate);">
            <p
              class="ta-l pa-2 mb-2 br-1"
              style="background: var(--demo-blue);"
            >
              Left aligned (ta-l)
            </p>
            <p
              class="ta-c pa-2 mb-2 br-1"
              style="background: var(--demo-green);"
            >
              Center aligned (ta-c)
            </p>
            <p class="ta-r pa-2 br-1" style="background: var(--demo-yellow);">
              Right aligned (ta-r)
            </p>
          </div>
        </CodeDemo>
      </section>

      {/* Text Decoration */}
      <section class="doc-section">
        <h2>✨ Text Decoration</h2>
        <p>
          Add style to your text with <code>td-*</code> (Text Decoration)
          classes:
        </p>

        <ClassTable
          classes={[
            { class: "td-b", description: "Bold text" },
            { class: "td-i", description: "Italic text" },
            { class: "td-u", description: "Underlined text" },
            { class: "td-s", description: "Strikethrough text" },
          ]}
        />

        <CodeDemo
          title="Text Decorations"
          description="Make text stand out!"
          code={`<p class="td-b">Bold text</p>
<p class="td-i">Italic text</p>
<p class="td-u">Underlined text</p>
<p class="td-s">Strikethrough text</p>`}
        >
          <div>
            <p class="td-b mb-2">Bold text (td-b)</p>
            <p class="td-i mb-2">Italic text (td-i)</p>
            <p class="td-u mb-2">Underlined text (td-u)</p>
            <p class="td-s">Strikethrough text (td-s)</p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Combine Decorations"
          description="You can use multiple at once!"
          code={`<p class="td-b td-i">Bold AND italic!</p>
<p class="td-b td-u">Bold AND underlined!</p>`}
        >
          <div>
            <p class="td-b td-i mb-2">Bold AND italic!</p>
            <p class="td-b td-u">Bold AND underlined!</p>
          </div>
        </CodeDemo>
      </section>

      {/* Text Transform */}
      <section class="doc-section">
        <h2>🔤 Text Transform</h2>
        <p>
          Change letter case with <code>tt-*</code> (Text Transform) classes:
        </p>

        <ClassTable
          classes={[
            { class: "tt-u", description: "UPPERCASE - all caps" },
            { class: "tt-l", description: "lowercase - all small" },
            {
              class: "tt-t",
              description: "Title Case - capitalize first letters",
            },
          ]}
        />

        <CodeDemo
          title="Text Transforms"
          description="Change how text appears"
          code={`<p class="tt-u">this becomes uppercase</p>
<p class="tt-l">THIS BECOMES LOWERCASE</p>
<p class="tt-t">this becomes title case</p>`}
        >
          <div>
            <p class="tt-u mb-2">this becomes uppercase (tt-u)</p>
            <p class="tt-l mb-2">THIS BECOMES LOWERCASE (tt-l)</p>
            <p class="tt-t">this becomes title case (tt-t)</p>
          </div>
        </CodeDemo>
      </section>

      {/* Text Truncate */}
      <section class="doc-section">
        <h2>✂️ Text Truncate</h2>
        <p>
          When text is too long, show "..." instead of wrapping to the next
          line:
        </p>

        <ClassTable
          classes={[
            { class: "tt-c", description: "Truncate text with ellipsis (...)" },
          ]}
        />

        <CodeDemo
          title="Text Truncation"
          description="Perfect for limited space like cards"
          code={`<div style="width: 200px;">
  <p class="tt-c">
    This is a very long text that will be truncated
  </p>
</div>`}
        >
          <div style="width: 200px; background: var(--demo-slate); padding: 8px; border-radius: 4px;">
            <p class="tt-c" style="margin: 0;">
              This is a very long text that will be truncated with ellipsis at
              the end
            </p>
          </div>
        </CodeDemo>

        <TipBox type="tip">
          <strong>Note:</strong> The container needs a fixed width for
          truncation to work!
        </TipBox>
      </section>

      {/* Common Patterns */}
      <section class="doc-section">
        <h2>🎨 Common Patterns</h2>

        <CodeDemo
          title="Page Title"
          description="Big centered headline"
          code={`<h1 class="ts-1 ta-c td-b">Welcome to My Site!</h1>
<p class="ts-5 ta-c">A subtitle goes here</p>`}
        >
          <div class="ta-c pa-4">
            <h1 class="ts-1 td-b mb-2">Welcome to My Site!</h1>
            <p class="ts-5" style="color: var(--demo-text-muted);">
              A subtitle goes here
            </p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Card Title + Description"
          description="Common card header pattern"
          code={`<div class="pa-4">
  <h3 class="ts-4 td-b mb-1">Card Title</h3>
  <p class="ts-6">Some description text here...</p>
</div>`}
        >
          <div class="pa-4 br-2 sb-6" style="background: var(--demo-card-bg);">
            <h3 class="ts-4 td-b mb-1">Card Title</h3>
            <p class="ts-6" style="color: var(--demo-text-muted);">
              Some description text that explains what this card is about.
            </p>
          </div>
        </CodeDemo>

        <CodeDemo
          title="Badge / Label"
          description="Small uppercase label"
          code={`<span class="ts-6 tt-u td-b px-2 py-1">New</span>`}
        >
          <div class="d-flex gx-2">
            <span
              class="ts-6 tt-u td-b px-2 py-1 br-1"
              style="background: var(--demo-green); color: var(--demo-text-green);"
            >
              New
            </span>
            <span
              class="ts-6 tt-u td-b px-2 py-1 br-1"
              style="background: var(--demo-blue); color: var(--demo-text-blue);"
            >
              Popular
            </span>
            <span
              class="ts-6 tt-u td-b px-2 py-1 br-1"
              style="background: var(--demo-red); color: var(--demo-text-red);"
            >
              Sale
            </span>
          </div>
        </CodeDemo>
      </section>

      {/* Quick Reference */}
      <section class="doc-section">
        <h2>📚 Quick Reference</h2>
        <div class="d-flex gx-4 gy-4 df-fw">
          <DemoCard
            title="Size"
            prefix="ts-*"
            range="1 - 6"
            note="1 = biggest, 6 = smallest"
          />
          <DemoCard
            title="Align"
            prefix="ta-*"
            range="l, c, r"
            note="Left, Center, Right"
          />
          <DemoCard
            title="Decorations"
            prefix="td-*"
            range="b, i, u, s"
            note="Bold, Italic, Underline, Strike"
          />
          <DemoCard
            title="Transform"
            prefix="tt-*"
            range="u, l, t, c"
            note="Upper, Lower, Title, Clip"
          />
        </div>
      </section>
    </div>
  );
}
