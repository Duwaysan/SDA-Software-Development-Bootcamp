<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">Relative Units</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use relative units to specify element sizes in CSS.

## Relative units

We use CSS units to specify the size of elements in CSS stylesheets. Relative units are based on the size of another element on the page. Some examples of relative units include:

- `em`: Ems are based on the font size of the parent element. `2em` is twice the font size of the parent element. If the parent's font size is `12px`, then `2em` is `24px`.
- `rem`: Rems are similar to ems, but they are based on the [root element's](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) font size.
- `%`: Percentages are based on the size of the parent (container) element and, as a result, are always relative to the size of that element. For example, an element with a width of `50%` that is inside of an element that has a width of 200px will have a final width of 100px.
- `vw` - 1% of the viewport's width.
- `vh` - 1% of the viewport's height.

**Relative units** are valuable when you want elements to adapt and scale proportionally in response to changes in the parent or root elements. For example, when setting font sizes, using relative units like `ems` or `rems` makes the text size relative to the parent element or the root element (usually the `<html>` element). This approach ensures that text remains readable and visually consistent across various screen sizes and devices.

## Which units to use

The CSS unit we should use depends on the specific property we are styling. For example, if we were styling the width of an element, we could use `%` so that the element always takes up the same amount of its available container.

For font size, `rem` is an excellent option. `rem` is predictable - the value will always be based on the same root value. Note that `rem` is based on the root element's font-size, which defaults to `16px`.

For example:

- 1rem = 16px
- 1.5rem = 24px
- 0.5rem = 8px

Unlike `px` units, `rem` is responsive. As the root font size changes, all the relative values will change accordingly. This has big implications for accessibility - suppose a user were to change their preferred font size to 18 in their browser settings. Now, `1rem` equals `18px`s, and so forth:

- 1rem = 18px
- 1.5rem = 27px
- 0.5rem = 9px

The font size of any element using the same value for `rem` will be consistent across the page.

Here are some examples of how to use relative units:

```css
/* Set the width of an element to the entire width of the viewport */
div {
  width: 100vw;
}

/* Set the font size of an element to 2 times the root font size */
p {
  font-size: 2rem;
}

/* Set the margin of an element to 10% of its container element */
input {
  margin: 10%;
}
```

### Pitfalls when specifying height and width

`min-height` and `min-width` are CSS properties rather than units, but they are often used in conjunction with relative units to help build responsive layouts.

They prevent the height or width of an element from becoming smaller than whatever value is specified.

For example, `min-height` always overrides height. The following code styles a `div` which, at minimum, is `100px` tall but can expand up to `100%` of the available height of the container:

```css
div {
  /* div takes up the full height of the container element */
  height: 100%;
  /* min-height specifies that the div will be at minimum 100px tall */ 
  min-height: 100px; 
}
```
