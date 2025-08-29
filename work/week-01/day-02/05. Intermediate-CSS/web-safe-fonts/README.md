<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">Web Safe Fonts</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand how to choose and implement web-safe fonts.

When choosing a font for our projects, we can use web-safe fonts that are virtually guaranteed to be available on all users' devices. This means that our website will look the same for everyone, regardless of their operating system or browser. Here are fonts that are available on the vast majority of browsers:

- Arial (sans-serif)
- Verdana (sans-serif)
- Tahoma (sans-serif)
- Trebuchet MS (sans-serif)
- Times New Roman (serif)
- Georgia (serif)
- Courier New (monospace)
- Brush Script MT (cursive)

To use a Web-safe font in CSS, we specify the font name (for example, `Arial`) in the [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) property.

```css
body {
  font-family: Arial, sans-serif;
}
```

By specifying a fallback font, such as `sans-serif`, we ensure that our text will still be readable even if the requested font isn't available.
