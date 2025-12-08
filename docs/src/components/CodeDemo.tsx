import { useState } from "preact/hooks";

interface CodeDemoProps {
  title: string;
  description?: string;
  code: string;
  children: any;
}

export function CodeDemo({
  title,
  description,
  code,
  children,
}: CodeDemoProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div class="code-demo">
      <div class="demo-header">
        <h3 class="demo-title">{title}</h3>
        {description && <p class="demo-description">{description}</p>}
      </div>

      {/* Live Preview */}
      <div class="demo-preview">{children}</div>

      {/* Code Controls */}
      <div class="demo-controls">
        <button
          class={`demo-btn ${showCode ? "active" : ""}`}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "👁️ Hide Code" : "💻 Show Code"}
        </button>
        <button class="demo-btn" onClick={copyCode}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>

      {/* Code Block */}
      {showCode && (
        <pre class="demo-code">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

// Simple info box for tips
export function TipBox({
  children,
  type = "tip",
}: {
  children: any;
  type?: "tip" | "warning" | "info";
}) {
  const icons = {
    tip: "💡",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <div class={`tip-box tip-${type}`}>
      <span class="tip-icon">{icons[type]}</span>
      <div class="tip-content">{children}</div>
    </div>
  );
}

// Class reference table
interface ClassRef {
  class: string;
  description: string;
}

export function ClassTable({ classes }: { classes: ClassRef[] }) {
  return (
    <div class="class-table-wrapper">
      <table class="class-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((item) => (
            <tr key={item.class}>
              <td>
                <code>{item.class}</code>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
