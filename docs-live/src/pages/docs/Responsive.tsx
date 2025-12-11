import { CodeDemo, TipBox, ClassTable } from '../../components/CodeDemo';

export function Responsive() {
	return (
		<div class="doc-page">
			<h1>📱 Responsive Design</h1>
			<p class="doc-intro">
				Make your website look great on phones, tablets, and desktops!
				Responsive design means your site adapts to any screen size.
			</p>

			{/* How it Works */}
			<section class="doc-section">
				<h2>🎯 How Responsive Classes Work</h2>
				<p>
					Add a <strong>breakpoint prefix</strong> to classes to make them apply only at certain screen sizes.
				</p>

				<div class="pa-4 br-2 mb-4" style="background: var(--demo-slate);">
					<h4 class="mb-2">The Pattern:</h4>
					<code class="ts-4">.[property]-[breakpoint]-[value]</code>
					<p class="mt-2">Example: <code>d-md-flex</code> = display flex on medium screens and up</p>

					<h4 class="mt-4 mb-2">Available Properties & Values:</h4>
					<ul style="margin-left: 20px;" class="mb-0">
						<li><strong>d</strong> (display): <code>none</code>, <code>block</code>, <code>flex</code>, <code>grid</code>, <code>inline</code>, <code>inline-block</code>, <code>inline-flex</code></li>
						<li><strong>col</strong> (columns): <code>1</code> - <code>12</code>, <code>auto</code></li>
					</ul>
				</div>

				<TipBox type="tip">
					<strong>Mobile-First:</strong> Start with the smallest screen, then add classes for larger ones.
					Classes without a prefix apply to ALL screen sizes!
				</TipBox>
			</section>

			{/* Breakpoints */}
			<section class="doc-section">
				<h2>📐 Breakpoints</h2>
				<p>Here are the screen size breakpoints:</p>

				<ClassTable classes={[
					{ class: '(no prefix)', description: 'All screens (mobile-first base)' },
					{ class: '-sm-', description: '≥576px - Small tablets, large phones' },
					{ class: '-md-', description: '≥768px - Tablets' },
					{ class: '-lg-', description: '≥992px - Laptops, small desktops' },
					{ class: '-xl-', description: '≥1200px - Large desktops' },
					{ class: '-xxl-', description: '≥1400px - Extra large desktops' },
				]} />

				<div class="pa-4 br-2" style="background: linear-gradient(90deg, var(--demo-red) 0%, var(--demo-yellow) 20%, var(--demo-green) 40%, var(--demo-blue) 60%, var(--demo-purple) 80%, var(--demo-pink) 100%);">
					<div class="d-flex dx-sb ta-c ts-6">
						<div>
							<strong>📱</strong>
							<br />0px
						</div>
						<div>
							<strong>sm</strong>
							<br />576px
						</div>
						<div>
							<strong>md</strong>
							<br />768px
						</div>
						<div>
							<strong>lg</strong>
							<br />992px
						</div>
						<div>
							<strong>xl</strong>
							<br />1200px
						</div>
						<div>
							<strong>xxl</strong>
							<br />1400px
						</div>
					</div>
				</div>
			</section>

			{/* Responsive Display */}
			<section class="doc-section">
				<h2>👁️ Responsive Display</h2>
				<p>Show or hide elements at different screen sizes:</p>

				<CodeDemo
					title="Mobile Menu Button"
					description="Only visible on mobile, hidden on tablets and up"
					code={`<!-- Mobile only -->
<button class="d-block d-md-none">☰ Menu</button>

<!-- Desktop only -->
<nav class="d-none d-md-flex gx-4">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`}
				>
					<div class="d-flex dx-sb dy-ce pa-3 br-2" style="background: var(--demo-dark-bg); color: var(--demo-dark-text);">
						<span class="td-b">Logo</span>

						{/* Mobile menu button */}
						<button class="d-block d-md-none pa-2 br-1" style="background: var(--demo-btn-secondary); border: none; color: var(--text);">
							☰ Menu
						</button>

						{/* Desktop nav */}
						<nav class="d-none d-md-flex gx-4">
							<a href="#" style="color: var(--demo-dark-text);">Home</a>
							<a href="#" style="color: var(--demo-dark-text);">About</a>
							<a href="#" style="color: var(--demo-dark-text);">Contact</a>
						</nav>
					</div>
				</CodeDemo>

				<TipBox type="info">
					<strong>Resize your browser</strong> to see the demo above change!
					On mobile you'll see the hamburger menu, on desktop you'll see the navigation links.
				</TipBox>
			</section>

			{/* Responsive Grid */}
			<section class="doc-section">
				<h2>📊 Responsive Grid</h2>
				<p>Make your columns stack on mobile and spread out on desktop:</p>

				<CodeDemo
					title="Responsive Cards"
					description="Stack on mobile, 2 columns on tablet, 3 on desktop"
					code={`<div class="row gx-4 gy-2">
  <div class="col-12 col-md-6 col-lg-4">Card 1</div>
  <div class="col-12 col-md-6 col-lg-4">Card 2</div>
  <div class="col-12 col-md-12 col-lg-4">Card 3</div>
</div>`}
				>
					<div class="row gx-2 gy-2">
						<div class="col-12 col-md-6 col-lg-4">
							<div class="pa-4 br-2 ta-c" style="background: var(--demo-blue);">
								<strong>Card 1</strong>
								<p class="ts-6 mb-0">col-12 col-md-6 col-lg-4</p>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<div class="pa-4 br-2 ta-c" style="background: var(--demo-green);">
								<strong>Card 2</strong>
								<p class="ts-6 mb-0">col-12 col-md-6 col-lg-4</p>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="pa-4 br-2 ta-c" style="background: var(--demo-yellow);">
								<strong>Card 3</strong>
								<p class="ts-6 mb-0">col-12 col-md-12 col-lg-4</p>
							</div>
						</div>
					</div>
				</CodeDemo>

				<div class="pa-4 br-2" style="background: var(--demo-slate);">
					<h4 class="mb-2">How it works:</h4>
					<ul style="margin-left: 20px;">
						<li><strong>Mobile (default):</strong> <code>col-12</code> = full width (stacked)</li>
						<li><strong>Tablet (md):</strong> <code>col-md-6</code> = half width (2 columns)</li>
						<li><strong>Desktop (lg):</strong> <code>col-lg-4</code> = one-third width (3 columns)</li>
					</ul>
				</div>
			</section>

			{/* Responsive Spacing */}
			<section class="doc-section">
				<h2>📏 Responsive Spacing</h2>
				<p>
					Currently, spacing classes don't have responsive variants, but here's a common pattern
					using custom CSS or display utilities:
				</p>

				<CodeDemo
					title="Responsive Layout Pattern"
					description="Different padding approach for mobile vs desktop"
					code={`<!-- Smaller padding on mobile, larger on desktop -->
<div class="pa-2" style="padding: 8px;">
  @media (min-width: 768px) {
    padding: 32px; /* Use custom CSS */
  }
</div>`}
				>
					<div class="pa-4 br-2" style="background: var(--demo-purple);">
						<p class="mb-0">Content with consistent padding (customize with CSS for responsive spacing)</p>
					</div>
				</CodeDemo>
			</section>

			{/* Common Patterns */}
			<section class="doc-section">
				<h2>🎨 Common Responsive Patterns</h2>

				<CodeDemo
					title="Responsive Header"
					description="Logo + hamburger on mobile, full nav on desktop"
					code={`<header class="d-flex dx-sb dy-ce pa-3">
  <div class="logo">Brand</div>

  <!-- Mobile: hamburger -->
  <button class="d-block d-lg-none">☰</button>

  <!-- Desktop: full nav -->
  <nav class="d-none d-lg-flex gx-4">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
</header>`}
				>
					<header class="d-flex dx-sb dy-ce pa-3 br-2" style="background: var(--demo-card-bg); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
						<div class="td-b ts-4" style="color: var(--primary);">Brand</div>
						<button class="d-block d-lg-none pa-2 br-1" style="background: var(--demo-btn-secondary); border: none;">☰</button>
						<nav class="d-none d-lg-flex gx-4">
							<a href="#" style="color: var(--text);">Home</a>
							<a href="#" style="color: var(--text);">About</a>
							<a href="#" style="color: var(--text);">Services</a>
							<a href="#" style="color: var(--text);">Contact</a>
						</nav>
					</header>
				</CodeDemo>

				<CodeDemo
					title="Responsive Sidebar Layout"
					description="Sidebar becomes top section on mobile"
					code={`<div class="row gx-4 gy-2">
  <!-- Sidebar (full width on mobile, 1/4 on desktop) -->
  <aside class="col-12 col-lg-3">
    Sidebar
  </aside>

  <!-- Main content (full width on mobile, 3/4 on desktop) -->
  <main class="col-12 col-lg-9">
    Main Content
  </main>
</div>`}
				>
					<div class="row gx-2 gy-2">
						<aside class="col-12 col-lg-3">
							<div class="pa-3 br-2" style="background: var(--demo-purple);">
								<strong>Sidebar</strong>
								<p class="ts-6 mb-0">Menu, filters, etc.</p>
							</div>
						</aside>
						<main class="col-12 col-lg-9">
							<div class="pa-3 br-2" style="background: var(--demo-green); min-height: 100px;">
								<strong>Main Content</strong>
								<p class="ts-6 mb-0">Your main content area</p>
							</div>
						</main>
					</div>
				</CodeDemo>

				<CodeDemo
					title="Responsive Image Gallery"
					description="1 column mobile, 2 tablet, 4 desktop"
					code={`<div class="row gx-2 gy-2">
  <div class="col-12 col-sm-6 col-lg-3">Image 1</div>
  <div class="col-12 col-sm-6 col-lg-3">Image 2</div>
  <div class="col-12 col-sm-6 col-lg-3">Image 3</div>
  <div class="col-12 col-sm-6 col-lg-3">Image 4</div>
</div>`}
				>
					<div class="row gx-2 gy-2">
						{[1, 2, 3, 4].map(n => (
							<div key={n} class="col-12 col-sm-6 col-lg-3">
								<div class="pa-4 br-2 ta-c" style={`background: var(--demo-${['blue', 'green', 'yellow', 'pink'][n-1]});`}>
									📷 {n}
								</div>
							</div>
						))}
					</div>
				</CodeDemo>
			</section>

			{/* Testing */}
			<section class="doc-section">
				<h2>🧪 Testing Responsive Design</h2>

				<div class="pa-4 br-2" style="background: var(--demo-slate);">
					<h4 class="mb-2">How to test:</h4>
					<ol style="margin-left: 20px;">
						<li><strong>Browser resize:</strong> Drag your browser window smaller/larger</li>
						<li><strong>DevTools:</strong> Press F12 → Click the phone/tablet icon</li>
						<li><strong>Real devices:</strong> Test on actual phones and tablets</li>
					</ol>
				</div>

				<TipBox type="tip">
					<strong>Pro tip:</strong> Always design for mobile first! Start with the smallest
					screen, then add classes for larger screens. This ensures your site works everywhere.
				</TipBox>
			</section>

			{/* Quick Reference */}
			<section class="doc-section">
				<h2>📚 Quick Reference</h2>

				<ClassTable classes={[
					{ class: '.d-none', description: 'Hidden on all screens' },
					{ class: '.d-sm-block', description: 'Visible on 576px+' },
					{ class: '.d-md-flex', description: 'Flex on 768px+' },
					{ class: '.d-lg-grid', description: 'Grid on 992px+' },
					{ class: '.col-sm-6', description: 'Half width on 576px+' },
					{ class: '.col-md-4', description: 'One-third on 768px+' },
					{ class: '.col-lg-3', description: 'One-quarter on 992px+' },
				]} />
			</section>
		</div>
	);
}
