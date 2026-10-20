# CSS Grid Fundamentals: Quick Demo Sheet

Grid = **2D layout** (rows and columns together). Flexbox is 1D (row _or_ column).

---

## 1. Core Concepts

| Term               | Meaning                                       |
| ------------------ | --------------------------------------------- |
| **Grid container** | Element with `display: grid`                  |
| **Grid items**     | Direct children of the container              |
| **Tracks**         | Rows and columns                              |
| **Lines**          | Numbered dividers between tracks (start at 1) |
| **Cell / Area**    | One slot / a rectangle of several cells       |
| **Gap**            | Space between tracks                          |

## 2. Basic Setup

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 3 columns */
  grid-template-rows: auto 100px; /* 2 rows */
  gap: 16px; /* row-gap + column-gap */
}
```

## 3. The `fr` Unit and `repeat()`

```css
grid-template-columns: 1fr 2fr 1fr; /* 1:2:1 share of free space */
grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
grid-template-columns: repeat(4, 100px); /* 4 fixed columns */
```

## 4. Sizing Helpers

```css
minmax(200px, 1fr)   /* at least 200px, grows up to 1fr */
auto                 /* fits content */
min-content / max-content
fit-content(300px)
```

## 5. Responsive Without Media Queries

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

- `auto-fit`: stretches items to fill the row
- `auto-fill`: keeps empty column slots

## 6. Placing Items

```css
.item-a {
  grid-column: 1 / 3;
} /* from line 1 to line 3 */
.item-b {
  grid-column: span 2;
} /* span 2 columns */
.item-c {
  grid-row: 1 / -1;
} /* first to last line */
```

## 7. Named Areas (most readable)

```css
.layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
}
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

## 8. Alignment

```css
/* whole grid inside container */
justify-content: center; /* horizontal */
align-content: center; /* vertical */

/* items inside their cells */
justify-items: center;
align-items: center;

/* shortcut for both */
place-items: center;

/* single item override */
.item {
  justify-self: end;
  align-self: start;
}
```

## 9. Implicit Grid

Items beyond your defined tracks create extra ones. Control them with:

```css
grid-auto-rows: minmax(100px, auto);
grid-auto-flow: row; /* or column / dense */
```

---

## Mini Demo: Page Layout

```html
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">
    <div class="cards">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </main>
  <footer class="footer">Footer</footer>
</div>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: system-ui;
}

.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100vh;
  gap: 8px;
}
.header {
  grid-area: header;
  background: #6c5ce7;
  color: #fff;
}
.sidebar {
  grid-area: sidebar;
  background: #dfe6e9;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
  background: #2d3436;
  color: #fff;
}

.header,
.sidebar,
.footer {
  display: grid;
  place-items: center;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  padding: 12px;
}
.cards div {
  background: #a29bfe;
  padding: 24px;
  text-align: center;
  border-radius: 8px;
}

/* stack on mobile */
@media (max-width: 600px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "sidebar" "footer";
  }
}
```

---

## Grid vs Flexbox

| Use **Grid** when             | Use **Flexbox** when         |
| ----------------------------- | ---------------------------- |
| Whole page or section layouts | Navbars, button rows         |
| Rows _and_ columns must align | Items flow in one direction  |
| Layout first, content fits in | Content first, layout adapts |

They work great together: Grid for the page, Flexbox inside the components.

---

## Useful Tools

| Tool                                               | What it's for                                                    |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| **DevTools Grid Inspector**                        | Toggle the grid overlay (Chrome/Firefox, click the `grid` badge) |
| **CSS Grid Garden**                                | Game to learn grid                                               |
| **CSS-Tricks: Complete Guide to Grid**             | Visual cheat sheet                                               |
| **Grid Generator (cssgrid-generator.netlify.app)** | Drag-and-drop layout to CSS                                      |
| **MDN Grid docs**                                  | Full reference                                                   |
| **Can I Use**                                      | Browser support (Grid is widely supported)                       |

---

## Quick Rules of Thumb

- Use `fr` and `minmax()` instead of fixed pixel widths
- `repeat(auto-fit, minmax(...))` gives responsive grids with zero media queries
- Use `grid-template-areas` for page layouts, it reads like a diagram
- Use `gap`, not margins, for spacing between items
- Open the DevTools grid overlay whenever something lines up weirdly
