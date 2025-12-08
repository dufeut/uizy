# Uizy CSS

<div align="center">
  
  <img height="140px" src="https://raw.githubusercontent.com/dufeut/uizy/main/docs/public/logo.png" alt="logo"/>

   <p><strong>A Lightweight CSS Micro Framework</strong></p>
   <p><code>43kb</code> minified | <code>5.79kb</code> gzipped</p>

[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![npm version](https://img.shields.io/npm/v/uizy.svg)](https://www.npmjs.com/package/uizy)

[Documentation](https://dufeut.github.io/uizy/) |
[GitHub](https://github.com/dufeut/uizy)

</div>

## Overview

Uizy CSS is a utility-first CSS framework that provides a collection of atomic CSS classes for rapid UI development. With a focus on lightweight design and intuitive naming conventions.

## Features

- **Lightweight**: (5kb gzipped)
- **Intuitive**: Simple abbreviated class names
- **No Dependencies**: Pure CSS solution
- **Responsive**: Built-in responsive utilities
- **Customizable**: Easy to extend and adapt

## Installation

### CDN

```html
<link href="https://unpkg.com/uizy@latest" rel="stylesheet" />
```

### NPM

```bash
npm install uizy
```

## Usage

Uizy CSS uses abbreviated class names for quick styling:

```html
<!-- Flex container with spacing and border -->
<div class="d-f dx-ce dy-ce p-3 bd-a br-2">
  <!-- Bold centered text with margin -->
  <p class="td-b ta-c mb-2">Hello World</p>
</div>
```

## Core Modules

Uizy CSS is organized into focused modules:

- **Core**: Display, positioning, and flex layouts (`d-f`, `dp-r`, `dx-ce`)
- **Borders**: Border styling and radius (`bd-a`, `br-2`)
- **Spacing**: Margin and padding utilities (`m-2`, `p-3`)
- **Text**: Typography utilities (`ts-1`, `td-b`, `ta-c`)
- **Shadows**: Shadow effects for depth
- **Rows**: Row-based layout utilities
- **Hide**: Visibility control (`d-n`, `d-hide`)

## License

BSD 3-Clause
