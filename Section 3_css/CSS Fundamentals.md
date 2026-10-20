# CSS Fundamentals: Quick Demo Sheet

A compact tour of the core pieces. Each section has a tiny example you can paste into an `.html` file and play with.

---

## 1. Adding CSS

```html
<link rel="stylesheet" href="style.css" />
<!-- external (best) -->
<style>
  p {
    color: teal;
  }
</style>
<!-- internal -->
<p style="color: teal;">Hi</p>
<!-- inline (avoid) -->
```

## 2. Selectors

```css
p {
} /* element */
.card {
} /* class */
#header {
} /* id */
nav a {
} /* descendant */
ul > li {
} /* direct child */
a:hover {
} /* pseudo-class */
p::first-line {
} /* pseudo-element */
input[type="text"] {
} /* attribute */
```

**Specificity (low to high):** element < class < id < inline < `!important`

## 3. Box Model

Every element = **content + padding + border + margin**

```css
* {
  box-sizing: border-box;
} /* always do this */

.box {
  width: 300px;
  padding: 16px;
  border: 2px solid #333;
  margin: 20px auto; /* centers horizontally */
}
```

## 4. Units & Colors

| Type     | Examples         | Use for                |
| -------- | ---------------- | ---------------------- |
| Absolute | `px`             | borders, fine details  |
| Relative | `rem`, `em`, `%` | fonts, spacing, widths |
| Viewport | `vw`, `vh`       | full-screen sections   |

```css
color: red;
color: #1e90ff;
color: rgb(30 144 255);
color: hsl(210 100% 56%);
```

## 5. Typography

```css
body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #222;
}
h1 {
  font-weight: 700;
  letter-spacing: -0.5px;
  text-align: center;
}
```

## 6. Display & Position

```css
display: block | inline | inline-block | flex | grid | none;

position: static; /* default */
position: relative; /* offset from itself */
position: absolute; /* relative to nearest positioned parent */
position: fixed; /* stuck to viewport */
position: sticky; /* sticks on scroll */
```

## 7. Flexbox (1D layout)

```css
.row {
  display: flex;
  justify-content: space-between; /* main axis */
  align-items: center; /* cross axis */
  gap: 16px;
  flex-wrap: wrap;
}
.row > .item {
  flex: 1;
} /* equal widths */
```

## 8. Grid (2D layout)

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

## 9. Responsive Design

```css
/* mobile-first */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 960px;
    margin: auto;
  }
}
```

Don't forget in HTML: `<meta name="viewport" content="width=device-width, initial-scale=1">`

## 10. Variables, Transitions, Animations

```css
:root {
  --brand: #6c5ce7;
  --radius: 8px;
}

.btn {
  background: var(--brand);
  border-radius: var(--radius);
  transition: transform 0.2s ease;
}
.btn:hover {
  transform: translateY(-2px);
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hero {
  animation: fade 1s ease-in;
}
```

---

## Mini Demo: A Card

```html
<div class="card">
  <h2>Hello CSS</h2>
  <p>Box model, flexbox, variables, hover. All in one.</p>
  <button class="btn">Click me</button>
</div>
```

```css
:root {
  --brand: #6c5ce7;
}
* {
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  font-family: system-ui;
  background: #f4f4f8;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: min(90%, 320px);
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.1);
}
.btn {
  padding: 10px 16px;
  border: 0;
  border-radius: 8px;
  background: var(--brand);
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
}
```

---

## Useful Tools

| Tool                             | What it's for                              |
| -------------------------------- | ------------------------------------------ |
| **Browser DevTools** (F12)       | Inspect and live-edit CSS, debug box model |
| **MDN Web Docs**                 | Best CSS reference                         |
| **Can I Use**                    | Check browser support for features         |
| **Flexbox Froggy / Grid Garden** | Games to learn flex and grid               |
| **CSS-Tricks guides**            | Visual flexbox/grid cheat sheets           |
| **Autoprefixer**                 | Adds vendor prefixes automatically         |
| **Sass / SCSS**                  | CSS with nesting, mixins, variables        |
| **Tailwind CSS**                 | Utility-first framework                    |
| **Bootstrap**                    | Ready-made components and grid             |

---

## Quick Rules of Thumb

- Use `box-sizing: border-box` globally
- Style with **classes**, not ids
- Go **mobile-first**
- Flexbox for rows/columns, Grid for full layouts
- Use `rem` for font sizes, `var(--x)` for repeated values
- Check DevTools before guessing why something looks off
