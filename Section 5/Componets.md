# Section Notes: Elements, Components, Accordion, Carousel

Covers lectures 86 to 90.

---

## 1. Elements vs Components

- **Element** = a single HTML piece (`<button>`, `<input>`, `<img>`).
- **Component** = a group of elements working together (card, accordion, carousel).
- Components are **reusable**: build once, use many times.

## 2. Web Design Rules #10 (Part 1): Elements and Components

1. **Keep elements consistent**: same button style everywhere.
2. **Give feedback**: hover, focus, active states so users know what is clickable.
3. **Show state clearly**: open/closed, selected/unselected, disabled.
4. **Keep it simple**: no extra decoration, use clear labels.
5. **Make them accessible**: use real `<button>`, keyboard focus, good contrast.
6. **Use the same spacing and sizing** (padding, radius, font-size).

## 3. Accordion

**Idea:** a list of headers. Click one, its panel opens. Others close.

**HTML structure**

```
.accordion
  .item
    button.header
    .panel
```

**CSS trick:** panel has `max-height: 0; overflow: hidden;` so it is hidden, and
`transition: max-height` makes it slide open smoothly.

**JS logic**

1. Click header
2. Close all items
3. If the clicked one was closed, open it with `panel.scrollHeight`

`scrollHeight` = the real height of the content, used to know how far to open.

## 4. Carousel

**Idea:** slides sit side by side in a row. We move the row left or right.

**HTML structure**

```
.carousel      (overflow: hidden, shows one slide only)
  .track       (display: flex, holds all slides)
    .slide x3  (min-width: 100%)
  buttons prev / next
```

**CSS trick:** each slide is `min-width: 100%`, so one fills the view.
Moving the track with `transform: translateX(-100%)` shows the next slide.

**JS logic**

- Keep a `current` index.
- Next: `current + 1`, Prev: `current - 1`.
- `(index + total) % total` makes it loop back to start or end.
- Apply `translateX(-current * 100%)` on the track.

## 5. Topics Still Left (not in this demo)

- Carousel Part 2: dots, autoplay, keyboard and touch support
- Accordion Part 2: ARIA attributes, smoother polish
- Tables, pagination, hero section, app layout (lectures 92 to 98)
