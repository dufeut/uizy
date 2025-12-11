import { config, link } from "../../config";
import { docSections } from "../../store";
import Logo from "../../components/Logo";

export function Home() {
  return (
    <div class="home-page">
      {/* Hero Section */}
      <section class="hero">
        <h1
          class="hero-title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo height="128px" />
          Welcome to {config.name}!
        </h1>
        <p class="hero-subtitle">
          {config.tagline} – a <strong>micro</strong>, utility-first framework
          for modern UIs.
        </p>
        <div class="hero-buttons">
          <a href={link("/getting-started")} class="btn btn-primary">
            🚀 Get Started
          </a>
          <a href={config.github} target="_blank" class="btn btn-secondary">
            ⭐ GitHub
          </a>
        </div>
      </section>

      {/* What is it */}
      <section class="intro-section">
        <h2>🤔 What is {config.name}?</h2>
        <p>
          {config.name} is a <strong>utility-first CSS framework</strong> that
          makes styling super easy! Instead of writing CSS from scratch, you
          just add class names to your HTML.
        </p>

        <div class="comparison-box">
          <div class="comparison-item">
            <h4>❌ The Old Way (writing CSS)</h4>
            <pre class="code-block">{`.my-button {
  padding: 16px;
  margin-top: 8px;
  text-align: center;
  border-radius: 8px;
}`}</pre>
          </div>
          <div class="comparison-item">
            <h4>✅ The {config.shortName} Way (just add classes!)</h4>
            <pre class="code-block">{`<button class="pa-4 mt-2 ta-c br-2">
  Click me!
</button>`}</pre>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section class="quick-start">
        <h2>⚡ Quick Start</h2>
        <p>Add {config.name} to your project in seconds:</p>

        <div class="install-options">
          <div class="install-option">
            <h4>📦 NPM</h4>
            <pre class="code-block">npm install {config.npm}</pre>
          </div>
          <div class="install-option">
            <h4>🔗 CDN</h4>
            <pre class="code-block">{`<link\n  rel="stylesheet"\n  href="${config.cdn}"\n>`}</pre>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section class="sections-grid">
        <h2>📚 What You'll Learn</h2>
        <div class="grid">
          {docSections.map((section) => (
            <a
              key={section.id}
              href={link(`/${section.id}`)}
              class="section-card"
            >
              <span class="card-emoji">{section.emoji}</span>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section class="fun-facts">
        <h2>🌟 Why Love {config.name}?</h2>
        <div class="facts-grid">
          <div class="fact-card">
            <span class="fact-emoji">⚡</span>
            <h4>Easy to Remember</h4>
            <p>Simple class names.</p>
            <p>
              Text Align Center! is <code>.ta-c</code>
            </p>
          </div>
          <div class="fact-card">
            <span class="fact-emoji">📱</span>
            <h4>Works Everywhere</h4>
            <p>Built-in responsive classes for phones, tablets & desktops</p>
          </div>
          <div class="fact-card">
            <span class="fact-emoji">🎨</span>
            <h4>Customizable</h4>
            <p>Change colors and sizes with CSS variables</p>
          </div>
        </div>
      </section>
    </div>
  );
}
