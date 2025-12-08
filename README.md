# Uizy

<div align="center">

  <img height="140px" src="https://raw.githubusercontent.com/dufeut/uizy/main/docs/public/logo.png" alt="logo"/>

   <p><strong>Small footprint, big impact – the micro CSS framework for UIs.</strong></p>
   <p><code>~43kb</code> minified | <code>~5.8kb</code> gzipped</p>

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![npm version](https://img.shields.io/npm/v/uizy.svg)](https://www.npmjs.com/package/uizy)

[Documentation](https://dufeut.github.io/uizy/) |
[GitHub](https://github.com/dufeut/uizy)

</div>

## Installation

### CDN

```html
<link href="https://unpkg.com/uizy@latest" rel="stylesheet" />
```

### NPM

```bash
npm install uizy
```

```js
import "uizy";
```

## Usage

```html
<div class="d-flex dx-ce dy-ce pa-3 br-2">
  <p class="td-b ta-c mb-2">Hello World</p>
</div>
```

## Features

- **Lightweight** – ~5.8kb gzipped
- **Utility-first** – Compose UIs with atomic classes
- **Responsive** – Mobile-first breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`)
- **Customizable** – CSS variables for runtime theming
- **No dependencies** – Pure CSS

## Layout System

Build complete app layouts with fixed positioning:

```html
<div class="layout-system-bar">System Status</div>
<header class="layout-header">Header</header>
<aside class="layout-left layout-drawer layout-drawer--left">Sidebar</aside>
<main class="layout-main layout-clip-top layout-clip-bottom layout-clip-left">Content</main>
<footer class="layout-footer">Footer</footer>
```

| Class | Description |
|-------|-------------|
| `layout-system-bar` | Fixed top bar |
| `layout-header` | Fixed header below system bar |
| `layout-footer` | Fixed footer |
| `layout-left` / `layout-right` | Fixed sidebars |
| `layout-main` | Main content area |
| `layout-drawer` | Slide-in animation |
| `layout-drawer--left` / `layout-drawer--right` | Drawer direction |
| `layout-drawer--open` | Show drawer |
| `layout-clip-top` | Position below header |
| `layout-clip-bottom` | Position above footer |
| `layout-clip-left` / `layout-clip-right` | Margin for sidebars |
| `layout-overlay` | Dark backdrop |

Configure via CSS variables:

```css
:root {
  --layout-header-height: 56px;
  --layout-footer-height: 48px;
  --layout-left-width: 240px;
  --layout-right-width: 280px;
  --layout-drawer-speed: 0.25s;
}
```

## License

BSD 3-Clause
