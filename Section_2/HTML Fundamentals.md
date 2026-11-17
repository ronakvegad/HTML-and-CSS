# HTML Basics: Modules 9 to 16

Notes + practice code. Open `index.html` in a browser to see every concept in action.

```
html-basics/
├── index.html
├── notes.md
└── images/
    └── logo.svg
```

---

## 9. Introduction to HTML

- **HTML** = HyperText Markup Language. It defines the **structure/content** of a web page (not the styling, that's CSS, and not the behaviour, that's JavaScript).
- Built from **elements**, made of tags:

```html
<p>Hello world</p>
```

`<p>` = opening tag, `Hello world` = content, `</p>` = closing tag.

- Some elements are **self-closing** (void): `<br>`, `<hr>`, `<img>`, `<meta>`.
- Browsers read the HTML file top to bottom and render it.

---

## 10. HTML Document Structure

Every HTML page follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- everything visible goes here -->
  </body>
</html>
```

| Part                     | Purpose                                           |
| ------------------------ | ------------------------------------------------- |
| `<!DOCTYPE html>`        | Tells browser to use HTML5                        |
| `<html lang="en">`       | Root element; `lang` helps SEO and screen readers |
| `<head>`                 | Info about the page (not displayed)               |
| `<meta charset="UTF-8">` | Supports all characters/emojis                    |
| `<meta name="viewport">` | Makes page work properly on mobile                |
| `<title>`                | Text shown in the browser tab                     |
| `<body>`                 | All visible content                               |

---

## 11. Text Elements

| Element           | Use                                                          |
| ----------------- | ------------------------------------------------------------ |
| `<h1>` to `<h6>`  | Headings (h1 = most important, use only **one h1** per page) |
| `<p>`             | Paragraph                                                    |
| `<br>`            | Line break                                                   |
| `<hr>`            | Horizontal line (thematic break)                             |
| `<strong>`        | Important text (bold)                                        |
| `<em>`            | Emphasis (italic)                                            |
| `<mark>`          | Highlighted text                                             |
| `<small>`         | Small print                                                  |
| `<sub>` / `<sup>` | Subscript / superscript                                      |
| `<blockquote>`    | Long quote                                                   |
| `<pre>`           | Keeps spacing and line breaks as written                     |
| `<code>`          | Inline code                                                  |

**Remember:** HTML collapses multiple spaces and line breaks into one space.

---

## 12. More Text Elements: Lists

```html
<ul>
  <li>Unordered (bullets)</li>
</ul>
<ol>
  <li>Ordered (numbers)</li>
</ol>
```

- `<ul>` = unordered list, `<ol>` = ordered list, `<li>` = list item.
- Lists can be **nested**: put a new `<ul>`/`<ol>` **inside** an `<li>`.
- Only `<li>` should be a direct child of `<ul>`/`<ol>`.

---

## 13. Images and Attributes

```html
<img src="images/logo.svg" alt="HTML5 logo" width="300" height="200" />
```

**Attributes** = extra info inside the opening tag, written as `name="value"`.

| Attribute         | Meaning                                                                  |
| ----------------- | ------------------------------------------------------------------------ |
| `src`             | Path/URL of the image (required)                                         |
| `alt`             | Description shown if image fails; used by screen readers (always add it) |
| `width`, `height` | Size in pixels                                                           |
| `title`           | Tooltip on hover                                                         |

**Paths:**

- Relative: `images/logo.svg` (from the current file)
- Parent folder: `../images/logo.svg`
- Absolute URL: `https://example.com/pic.png`

---

## 14. Hyperlinks

```html
<a
  href="https://developer.mozilla.org"
  target="_blank"
  rel="noopener noreferrer"
  >MDN</a
>
```

| Type           | Example                                                   |
| -------------- | --------------------------------------------------------- |
| External       | `<a href="https://google.com">`                           |
| Internal page  | `<a href="about.html">`                                   |
| Same-page jump | `<a href="#section-id">` (target needs `id="section-id"`) |
| Email          | `<a href="mailto:me@mail.com">`                           |
| Phone          | `<a href="tel:+911234567890">`                            |

- `target="_blank"` opens in a new tab. Add `rel="noopener noreferrer"` with it for security.
- You can wrap an `<img>` inside `<a>` to make an image clickable.
- Use meaningful link text ("Read the docs"), not "click here".

---

## 15. Structuring our Page

- `<div>` = generic **block** container (takes full width, starts on a new line).
- `<span>` = generic **inline** container (stays within the text line).
- Both have no meaning on their own. They're used to group things for CSS styling.
- Use `id` (unique, one per page) and `class` (reusable) to target elements later.

---

## 16. A Note on Semantic HTML

Semantic elements describe **what the content is**, not just how it looks. This helps accessibility, SEO and code readability.

| Element     | Use                                              |
| ----------- | ------------------------------------------------ |
| `<header>`  | Top of page/section (logo, title, nav)           |
| `<nav>`     | Navigation links                                 |
| `<main>`    | Main content (one per page)                      |
| `<section>` | Group of related content, usually with a heading |
| `<article>` | Self-contained content (blog post, card)         |
| `<aside>`   | Side content (sidebar, related links)            |
| `<footer>`  | Bottom of page/section (copyright, contacts)     |

**Prefer this:**

```html
<header>...</header>
<main>...</main>
<footer>...</footer>
```

**Over this:**

```html
<div class="header">...</div>
<div class="main">...</div>
<div class="footer">...</div>
```

---

## Quick Recap

1. HTML = structure, made of elements and attributes.
2. Every page: `DOCTYPE` > `html` > `head` + `body`.
3. Text: headings, `p`, `strong`, `em`, `br`, `hr`.
4. Lists: `ul`, `ol`, `li` (can be nested).
5. Images: `img` with `src` + `alt`.
6. Links: `a href`, with internal, external, mailto and tel variants.
7. `div`/`span` group things; semantic tags give meaning.
8. Use semantic elements instead of plain `div`s whenever one fits.
