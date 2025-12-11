import { CodeDemo, TipBox, ClassTable } from '../../components/CodeDemo';

export function Display() {
	return (
		<div class="doc-page">
			<h1>👁️ Display Utilities</h1>
			<p class="doc-intro">
				Control how elements appear on the screen - show them, hide them, or change their layout behavior!
			</p>

			{/* Basic Display */}
			<section class="doc-section">
				<h2>🎯 Basic Display Classes</h2>
				<p>These classes control the <code>display</code> property:</p>

				<ClassTable classes={[
					{ class: 'd-none', description: 'Hides the element completely' },
					{ class: 'd-block', description: 'Shows as a block (takes full width)' },
					{ class: 'd-inline', description: 'Shows inline (like text)' },
					{ class: 'd-inline-block', description: 'Inline but can have width/height' },
					{ class: 'd-flex', description: 'Enables flexbox layout' },
					{ class: 'd-inline-flex', description: 'Inline flexbox' },
					{ class: 'd-grid', description: 'Enables CSS grid layout' },
				]} />

				<CodeDemo
					title="Show vs Hide"
					description="Toggle visibility with d-none and d-block"
					code={`<!-- Hidden -->
<div class="d-none">You can't see me!</div>

<!-- Visible -->
<div class="d-block">I'm visible!</div>`}
				>
					<div class="demo-container">
						<div class="d-block pa-3 br-2 mb-2" style="background: var(--demo-green);">
							I'm visible! (d-block)
						</div>
						<div class="pa-3 br-2" style="background: var(--demo-red);">
							The hidden element would be here (d-none)
						</div>
					</div>
				</CodeDemo>
			</section>

			{/* Flex */}
			<section class="doc-section">
				<h2>📦 Flexbox Made Easy</h2>
				<p>
					Flexbox is super useful for layouts! Use <code>d-flex</code> to enable it:
				</p>

				<CodeDemo
					title="Flexbox Row"
					description="Items automatically line up in a row"
					code={`<div class="d-flex gx-2">
  <div class="pa-3 br-2">Item 1</div>
  <div class="pa-3 br-2">Item 2</div>
  <div class="pa-3 br-2">Item 3</div>
</div>`}
				>
					<div class="d-flex gx-2">
						<div class="pa-3 br-2" style="background: var(--demo-blue);">Item 1</div>
						<div class="pa-3 br-2" style="background: var(--demo-blue);">Item 2</div>
						<div class="pa-3 br-2" style="background: var(--demo-blue);">Item 3</div>
					</div>
				</CodeDemo>

				<TipBox type="tip">
					<strong>Pro tip:</strong> Use <code>gx-*</code> (column-gap) and <code>gy-*</code> (row-gap) classes to add space between flex items!
					<code>gx-1</code> = 4px, <code>gx-2</code> = 8px, etc.
				</TipBox>
			</section>

			{/* Responsive Display */}
			<section class="doc-section">
				<h2>📱 Responsive Display</h2>
				<p>
					This is where it gets cool! Add breakpoint prefixes to show/hide on different screens:
				</p>

				<ClassTable classes={[
					{ class: 'd-sm-*', description: 'Small screens and up (576px+)' },
					{ class: 'd-md-*', description: 'Medium screens and up (768px+)' },
					{ class: 'd-lg-*', description: 'Large screens and up (992px+)' },
					{ class: 'd-xl-*', description: 'Extra large screens (1200px+)' },
				]} />

				<CodeDemo
					title="Mobile-Only Element"
					description="This shows only on mobile phones"
					code={`<!-- Shows on mobile, hidden on tablets and up -->
<div class="d-block d-md-none">
  📱 Mobile only!
</div>`}
				>
					<div class="demo-container">
						<div class="d-block d-md-none pa-3 br-2" style="background: var(--demo-yellow);">
							📱 I only show on mobile! (under 768px)
						</div>
						<div class="d-none d-md-block pa-3 br-2" style="background: var(--demo-blue);">
							💻 I only show on tablet/desktop! (768px+)
						</div>
					</div>
				</CodeDemo>

				<CodeDemo
					title="Desktop Navigation Example"
					description="Common pattern: hamburger on mobile, full nav on desktop"
					code={`<!-- Mobile hamburger menu -->
<button class="d-block d-md-none">☰ Menu</button>

<!-- Desktop navigation -->
<nav class="d-none d-md-flex gx-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`}
				>
					<div class="demo-container">
						<button class="d-block d-md-none pa-2 br-2">☰ Menu</button>
						<nav class="d-none d-md-flex gx-4">
							<a href="#" style="color: var(--primary);">Home</a>
							<a href="#" style="color: var(--primary);">About</a>
							<a href="#" style="color: var(--primary);">Contact</a>
						</nav>
					</div>
				</CodeDemo>
			</section>

			{/* Common Patterns */}
			<section class="doc-section">
				<h2>🎨 Common Patterns</h2>

				<CodeDemo
					title="Centered Content"
					description="Center items horizontally and vertically"
					code={`<div class="d-flex dx-ce dy-ce" style="height: 100px;">
  <span>I'm centered!</span>
</div>`}
				>
					<div class="d-flex dx-ce dy-ce br-2" style="height: 100px; background: var(--demo-purple);">
						<span>I'm centered!</span>
					</div>
				</CodeDemo>

				<CodeDemo
					title="Space Between"
					description="Push items to opposite ends"
					code={`<div class="d-flex dx-sb dy-ce">
  <span>Left</span>
  <span>Right</span>
</div>`}
				>
					<div class="d-flex dx-sb dy-ce pa-3 br-2" style="background: var(--demo-green);">
						<span>Left</span>
						<span>Right</span>
					</div>
				</CodeDemo>

				<TipBox type="info">
					<strong>Flex alignment classes:</strong>
					<ul style="margin: 8px 0 0 16px;">
						<li><code>dx-ce</code> - Justify Content Center (X-axis)</li>
						<li><code>dx-sb</code> - Justify Content Space-Between</li>
						<li><code>dy-ce</code> - Align Items Center (Y-axis)</li>
						<li><code>dy-fs</code> - Align Items Flex-Start</li>
					</ul>
				</TipBox>
			</section>

			{/* Complete Reference */}
			<section class="doc-section">
				<h2>📚 Quick Reference</h2>

				<h3>All Display Values</h3>
				<ClassTable classes={[
					{ class: 'd-none', description: 'display: none' },
					{ class: 'd-block', description: 'display: block' },
					{ class: 'd-inline', description: 'display: inline' },
					{ class: 'd-inline-block', description: 'display: inline-block' },
					{ class: 'd-flex', description: 'display: flex' },
					{ class: 'd-inline-flex', description: 'display: inline-flex' },
					{ class: 'd-grid', description: 'display: grid' },
				]} />

				<h3>Breakpoint Prefixes</h3>
				<ClassTable classes={[
					{ class: '(no prefix)', description: 'All screen sizes' },
					{ class: '-sm-', description: '≥576px (small tablets)' },
					{ class: '-md-', description: '≥768px (tablets)' },
					{ class: '-lg-', description: '≥992px (laptops)' },
					{ class: '-xl-', description: '≥1200px (desktops)' },
				]} />
			</section>
		</div>
	);
}
