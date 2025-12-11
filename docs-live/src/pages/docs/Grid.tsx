import { CodeDemo, TipBox, ClassTable } from '../../components/CodeDemo';

export function Grid() {
	return (
		<div class="doc-page">
			<h1>📊 Grid System</h1>
			<p class="doc-intro">
				Create beautiful layouts with rows and columns! The grid has 12 columns,
				making it easy to divide your page into sections.
			</p>

			{/* How it Works */}
			<section class="doc-section">
				<h2>🎯 How it Works</h2>
				<p>
					Think of the page as divided into <strong>12 equal parts</strong>.
					You can make elements take up any number of those parts!
				</p>

				<div class="grid-visual">
					<div class="d-flex gx-1 mb-4">
						{[...Array(12)].map((_, i) => (
							<div key={i} class="pa-2 ta-c br-1" style="flex: 1; background: var(--demo-blue); font-size: 0.75rem;">
								{i + 1}
							</div>
						))}
					</div>
				</div>

				<TipBox type="tip">
					<strong>Remember:</strong> Column numbers must add up to 12 (or less) for a single row!
				</TipBox>
			</section>

			{/* Basic Usage */}
			<section class="doc-section">
				<h2>📦 Basic Columns</h2>
				<p>Use <code>.row</code> for the container and <code>.col-*</code> for columns:</p>

				<ClassTable classes={[
					{ class: 'row', description: 'Container for columns (uses flexbox)' },
					{ class: 'col-1 to col-12', description: 'Column width (1-12 parts)' },
					{ class: 'col-6', description: 'Half width (6/12 = 50%)' },
					{ class: 'col-4', description: 'One third (4/12 = 33.33%)' },
					{ class: 'col-3', description: 'One quarter (3/12 = 25%)' },
				]} />

				<CodeDemo
					title="Two Equal Columns"
					description="Each column takes half the width (6 + 6 = 12)"
					code={`<div class="row gx-2">
  <div class="col-6">Left Half</div>
  <div class="col-6">Right Half</div>
</div>`}
				>
					<div class="row gx-2">
						<div class="col-6">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-blue);">Left Half (col-6)</div>
						</div>
						<div class="col-6">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-green);">Right Half (col-6)</div>
						</div>
					</div>
				</CodeDemo>

				<CodeDemo
					title="Three Equal Columns"
					description="Each column takes one third (4 + 4 + 4 = 12)"
					code={`<div class="row gx-2">
  <div class="col-4">Column 1</div>
  <div class="col-4">Column 2</div>
  <div class="col-4">Column 3</div>
</div>`}
				>
					<div class="row gx-2">
						<div class="col-4">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-yellow);">col-4</div>
						</div>
						<div class="col-4">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-pink);">col-4</div>
						</div>
						<div class="col-4">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-purple);">col-4</div>
						</div>
					</div>
				</CodeDemo>

				<CodeDemo
					title="Mixed Widths"
					description="Sidebar + Main content layout (4 + 8 = 12)"
					code={`<div class="row gx-2">
  <div class="col-4">Sidebar</div>
  <div class="col-8">Main Content</div>
</div>`}
				>
					<div class="row gx-2">
						<div class="col-4">
							<div class="pa-3 br-2" style="background: var(--demo-purple);">
								<strong>Sidebar</strong>
								<p style="font-size: 0.875rem;">Navigation, filters, etc.</p>
							</div>
						</div>
						<div class="col-8">
							<div class="pa-3 br-2" style="background: var(--demo-green);">
								<strong>Main Content</strong>
								<p style="font-size: 0.875rem;">Your main page content goes here!</p>
							</div>
						</div>
					</div>
				</CodeDemo>
			</section>

			{/* Responsive Grid */}
			<section class="doc-section">
				<h2>📱 Responsive Grid</h2>
				<p>
					Make your grid adapt to different screen sizes with breakpoint prefixes!
				</p>

				<ClassTable classes={[
					{ class: 'col-sm-*', description: 'Small screens (576px+)' },
					{ class: 'col-md-*', description: 'Medium screens (768px+)' },
					{ class: 'col-lg-*', description: 'Large screens (992px+)' },
					{ class: 'col-xl-*', description: 'Extra large screens (1200px+)' },
				]} />

				<CodeDemo
					title="Responsive Cards"
					description="Stack on mobile, side-by-side on tablet, three columns on desktop"
					code={`<div class="row gx-2 gy-2">
  <div class="col-12 col-md-6 col-lg-4">Card 1</div>
  <div class="col-12 col-md-6 col-lg-4">Card 2</div>
  <div class="col-12 col-md-12 col-lg-4">Card 3</div>
</div>`}
				>
					<div class="row gx-2 gy-2">
						<div class="col-12 col-md-6 col-lg-4">
							<div class="pa-3 br-2" style="background: var(--demo-blue);">
								<strong>Card 1</strong>
								<p style="font-size: 0.875rem;">Full width on mobile</p>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-4">
							<div class="pa-3 br-2" style="background: var(--demo-green);">
								<strong>Card 2</strong>
								<p style="font-size: 0.875rem;">Half on tablet</p>
							</div>
						</div>
						<div class="col-12 col-md-12 col-lg-4">
							<div class="pa-3 br-2" style="background: var(--demo-yellow);">
								<strong>Card 3</strong>
								<p style="font-size: 0.875rem;">Third on desktop</p>
							</div>
						</div>
					</div>
				</CodeDemo>

				<TipBox type="info">
					<strong>Mobile-First:</strong> Start with <code>col-12</code> (full width),
					then add larger breakpoints. This ensures your site looks good on phones first!
				</TipBox>
			</section>

			{/* Gap */}
			<section class="doc-section">
				<h2>📏 Grid Gaps</h2>
				<p>Control the space between columns with <code>gx-*</code> (column-gap) and <code>gy-*</code> (row-gap) classes:</p>

				<ClassTable classes={[
					{ class: 'gx-0', description: 'No column gap' },
					{ class: 'gx-1', description: '4px column gap' },
					{ class: 'gx-2', description: '8px column gap' },
					{ class: 'gx-4', description: '16px column gap' },
					{ class: 'gy-*', description: 'Row gap (for wrapped rows)' },
				]} />

				<CodeDemo
					title="Different Gap Sizes"
					description="Compare no gap vs large gap"
					code={`<!-- No gap -->
<div class="row gx-0">...</div>

<!-- Large gap -->
<div class="row gx-4">...</div>`}
				>
					<div class="mb-4">
						<p class="mb-2" style="font-size: 0.875rem;"><strong>No gap (gx-0):</strong></p>
						<div class="row gx-0">
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-red);">A</div>
							</div>
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-yellow);">B</div>
							</div>
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-green);">C</div>
							</div>
						</div>
					</div>
					<div>
						<p class="mb-2" style="font-size: 0.875rem;"><strong>Large gap (gx-4):</strong></p>
						<div class="row gx-4">
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-red);">A</div>
							</div>
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-yellow);">B</div>
							</div>
							<div class="col-4">
								<div class="pa-2 br-2 ta-c" style="background: var(--demo-green);">C</div>
							</div>
						</div>
					</div>
				</CodeDemo>
			</section>

			{/* Real Example */}
			<section class="doc-section">
				<h2>🌟 Real-World Example</h2>
				<p>Here's a complete page layout using the grid system:</p>

				<CodeDemo
					title="Blog Layout"
					description="Header, sidebar + content, and footer"
					code={`<div class="row gx-4 gy-2">
  <!-- Header (full width) -->
  <div class="col-12">
    <header>My Blog</header>
  </div>

  <!-- Sidebar -->
  <div class="col-12 col-md-4">
    <aside>Categories, Tags...</aside>
  </div>

  <!-- Main Content -->
  <div class="col-12 col-md-8">
    <main>Blog posts go here!</main>
  </div>

  <!-- Footer (full width) -->
  <div class="col-12">
    <footer>© 2024</footer>
  </div>
</div>`}
				>
					<div class="row gx-2 gy-2">
						<div class="col-12">
							<div class="pa-3 br-2 ta-c" style="background: var(--demo-btn-primary); color: var(--demo-dark-text);">
								<strong>Header</strong> - My Blog
							</div>
						</div>
						<div class="col-12 col-md-4">
							<div class="pa-3 br-2" style="background: var(--demo-purple); min-height: 100px;">
								<strong>Sidebar</strong>
								<ul style="font-size: 0.875rem; margin: 8px 0 0 16px;">
									<li>Categories</li>
									<li>Tags</li>
									<li>Archives</li>
								</ul>
							</div>
						</div>
						<div class="col-12 col-md-8">
							<div class="pa-3 br-2" style="background: var(--demo-green); min-height: 100px;">
								<strong>Main Content</strong>
								<p style="font-size: 0.875rem;">Blog posts go here!</p>
							</div>
						</div>
						<div class="col-12">
							<div class="pa-2 br-2 ta-c" style="background: var(--demo-dark-bg); color: var(--demo-dark-text); font-size: 0.875rem;">
								Footer - © 2024
							</div>
						</div>
					</div>
				</CodeDemo>
			</section>
		</div>
	);
}
