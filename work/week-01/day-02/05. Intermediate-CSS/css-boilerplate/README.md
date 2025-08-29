<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">CSS Boilerplate</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to explain what CSS boilerplate is and why it's useful.

## CSS Boilerplate

CSS boilerplate refers to a set of pre-defined CSS rules and styles commonly used as a starting point in web development. CSS boilerplate provides a consistent and normalized foundation for styling web pages, making it easier to create cross-browser and cross-platform compatible designs. It is typically used to normalize the behavior of different browsers and provide a basic set of styles for common HTML elements.

Some of the most common CSS boilerplate rule sets include:

- **Resetting CSS**: This removes all CSS styling built into browsers. This lets you start from nothing and build from there. A side effect is that all browsers will display your web page identically.

- **Normalizing CSS**: This aims to make the existing built-in browser styling consistent across all browsers and platforms. This prevents unexpected differences in the appearance of your web page on different devices and browsers.

- **Basic styles for common HTML elements**: This provides a basic set of styles for common HTML elements, such as headings, paragraphs, and lists. This can save you time from having to write these styles yourself.

Here is an example that you could use in your work:

```css
* {
  box-sizing: border-box
}

body {
  background-color: gray;
  /* Use a system font; if none are available, use an available sans-serif font */
  font-family: system-ui, sans-serif;
  /* Ensures full height compatibility across devices */
  min-height: 100dvh;
  margin: 0;
}
```

If you're curious about `dvh`, check out [this article](https://ishadeed.com/article/new-viewport-units/) for more details.
