# Uizy

<div align="center">

  <img height="140px" src="https://raw.githubusercontent.com/dufeut/uizy/main/docs/static/img/logo.png" alt="logo"/>

   <p><strong>Small footprint, big impact – the micro CSS framework for UIs.</strong></p>
   <p><code>~6kb</code> gzipped JS + <code>~6.5kb</code> gzipped CSS</p>

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![npm version](https://img.shields.io/npm/v/@dufeut/uizy.svg)](https://www.npmjs.com/package/@dufeut/uizy)

[Documentation](https://dufeut.github.io/uizy/) |
[GitHub](https://github.com/dufeut/uizy)

</div>

## Installation

```bash
npm install @dufeut/uizy
```

```js
import uizy from "@dufeut/uizy";
import "@dufeut/uizy/index.css";
```

Or via CDN:

```html
<script src="https://unpkg.com/@dufeut/uizy/dist/uizy.iife.js"></script>
<link href="https://unpkg.com/@dufeut/uizy/dist/index.css" rel="stylesheet" />
```

## Quick Start

```js
uizy.start({
  layout: { layout: { header: 56, footer: 48, left: 240 } },
  theme: { colors: { primary: "#6b08a5", accent: "#1eadff" } },
  components: {
    button: () => "px-4 py-2 br-1 e-p",
  },
  stores: {
    counter: { value: uizy.store.atom(0) },
  },
  onReady: () => console.log("Ready!"),
});
```

```html
<uizy-app>
  <uizy-header>Header</uizy-header>
  <uizy-drawer open>Sidebar</uizy-drawer>
  <uizy-main clip-top clip-left>
    <ui-box use="button" :click="console.log('clicked')">Click me</ui-box>
    <ui-box :text="counter.value"></ui-box>
  </uizy-main>
  <uizy-footer>Footer</uizy-footer>
</uizy-app>
```

## Features

- **Utility CSS** – Atomic classes for rapid styling
- **Web Components** – `<uizy-app>`, `<uizy-header>`, `<uizy-drawer>`, `<ui-box>`
- **Reactive State** – Built-in [nanostores](https://github.com/nanostores/nanostores) integration
- **Components & Actions** – Register reusable styles and event handlers
- **Directives** – Custom attributes with modifiers (`:tooltip.top="text"`)
- **Plugins** – Namespace and bundle related functionality
- **Responsive** – Mobile-first breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`)

## License

BSD 3-Clause
