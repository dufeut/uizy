import { config, link } from '../../config';
import { CodeDemo, TipBox, ClassTable } from '../../components/CodeDemo';

export function GettingStarted() {
	return (
		<div class="doc-page">
			<h1>🚀 Getting Started</h1>
			<p class="doc-intro">
				Let's get {config.name} set up in your project! It only takes a minute.
			</p>

			{/* Installation */}
			<section class="doc-section">
				<h2>📦 Installation</h2>
				<p>Choose the method that works best for you:</p>

				<h3>Option 1: CDN (Easiest!)</h3>
				<p>Just add this line to your HTML file's <code>&lt;head&gt;</code>:</p>
				<CodeDemo
					title="CDN Link"
					code={`<link rel="stylesheet" href="${config.cdn}">`}
				>
					<div class="preview-box">
						<code>&lt;link rel="stylesheet" href="{config.cdn}"&gt;</code>
					</div>
				</CodeDemo>

				<h3>Option 2: NPM</h3>
				<p>If you're using a build tool like Vite or Webpack:</p>
				<CodeDemo
					title="NPM Install"
					code={`npm install ${config.npm}`}
				>
					<div class="preview-box">
						<code>npm install {config.npm}</code>
					</div>
				</CodeDemo>

				<p>Then import it in your JavaScript/TypeScript:</p>
				<CodeDemo
					title="Import in JS"
					code={`import '${config.npm}';`}
				>
					<div class="preview-box">
						<code>import '{config.npm}';</code>
					</div>
				</CodeDemo>
			</section>

			{/* How Classes Work */}
			<section class="doc-section">
				<h2>🎯 How Classes Work</h2>
				<p>
					{config.name} uses short class names that tell you exactly what they do.
					Here's the pattern:
				</p>

				<div class="pattern-box">
					<code class="pattern">[property]-[value]</code>
				</div>

				<TipBox type="tip">
					<strong>Example:</strong> <code>ta-c</code> means <strong>T</strong>ext
					<strong>A</strong>lign - <strong>C</strong>enter
				</TipBox>

				<h3>Common Abbreviations</h3>
				<ClassTable classes={[
					{ class: 'pa-*', description: 'Padding All sides' },
					{ class: 'ma-*', description: 'Margin All sides' },
					{ class: 'ta-*', description: 'Text Align' },
					{ class: 'd-*', description: 'Display' },
					{ class: 'br-*', description: 'Border Radius' },
					{ class: 'ts-*', description: 'Text Size' },
				]} />
			</section>

			{/* First Example */}
			<section class="doc-section">
				<h2>✨ Your First {config.shortName} Code</h2>
				<p>Let's create a simple card using only utility classes!</p>

				<CodeDemo
					title="A Simple Card"
					description="No CSS file needed - just classes!"
					code={`<div class="pa-4 br-2 sb-4">
  <h2 class="ts-4 ta-c">Hello World!</h2>
  <p class="mt-2 ta-c">This card uses only utility classes.</p>
</div>`}
				>
					<div class="pa-4 br-2 sb-4" style="background: var(--demo-card-bg);">
						<h2 class="ts-4 ta-c">Hello World!</h2>
						<p class="mt-2 ta-c">This card uses only utility classes.</p>
					</div>
				</CodeDemo>

				<TipBox type="info">
					<strong>What each class does:</strong>
					<ul style="margin: 8px 0 0 16px;">
						<li><code>pa-4</code> - Padding of 16px on all sides</li>
						<li><code>br-2</code> - Border radius (rounded corners)</li>
						<li><code>sb-4</code> - A nice drop shadow (bottom)</li>
						<li><code>ts-4</code> - Text size 4 (1.25rem)</li>
						<li><code>ta-c</code> - Text align center</li>
						<li><code>mt-2</code> - Margin top of 8px</li>
					</ul>
				</TipBox>
			</section>

			{/* Responsive */}
			<section class="doc-section">
				<h2>📱 Responsive Classes</h2>
				<p>
					Make your site look great on all devices! Add a breakpoint prefix to any class:
				</p>

				<ClassTable classes={[
					{ class: 'd-none', description: 'Hidden on all screens' },
					{ class: 'd-sm-block', description: 'Visible on small screens and up (576px+)' },
					{ class: 'd-md-flex', description: 'Flex on medium screens and up (768px+)' },
					{ class: 'd-lg-grid', description: 'Grid on large screens and up (992px+)' },
				]} />

				<CodeDemo
					title="Responsive Example"
					description="This element is hidden on mobile, visible on tablets and up"
					code={`<div class="d-none d-md-block">
  I only show on tablets and larger!
</div>`}
				>
					<div class="d-none d-md-block pa-3 br-2" style="background: var(--demo-blue);">
						I only show on tablets and larger! (768px+)
					</div>
					<div class="d-block d-md-none pa-3 br-2" style="background: var(--demo-yellow);">
						(You're on mobile - resize to see the other text!)
					</div>
				</CodeDemo>
			</section>

			{/* Next Steps */}
			<section class="doc-section">
				<h2>🎉 You're Ready!</h2>
				<p>
					That's all you need to get started! Explore the sidebar to learn about
					all the utility classes available.
				</p>

				<div class="next-links">
					<a href={link("/display")} class="next-link">
						<span>👁️</span>
						<span>Learn Display Utilities →</span>
					</a>
					<a href={link("/spacing")} class="next-link">
						<span>📏</span>
						<span>Learn Spacing →</span>
					</a>
				</div>
			</section>
		</div>
	);
}
