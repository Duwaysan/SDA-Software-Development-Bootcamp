<h1>
  <span class="headline">Intro to CSS</span>
  <span class="subhead">Shorthand Properties</span>
</h1>

**Learning objective:** By the end of this lesson, students should be able to utilize shorthand properties in CSS, setting multiple values to impact styling from a top-down, clockwise approach.

We've already seen some shorthand properties like `border`, but many other shorthand properties exist and have some fun tricks for working with them.

We've already seen this shorthand property as well - `padding`. When we supply a single value as the `padding`, it gets applied to all four sides:

```css
p {
  /* all four sides */
  padding: 2px;
}
```

We've seen this behavior before. Where it gets interesting is if we add more values.

When we use two values, the first applies to the top and bottom, and the second applies to the left and right:

```css
p {
  /* top and bottom | right and left */
  padding: 2px 4px;
}
```

One element where this is useful is for buttons that typically have more padding on the right and left than on the top and bottom.

With three values, they are applied to the top, left + right, and bottom, respectively:

```css
p {
  /* top | right and left | bottom */
  padding: 2px 1px 4px;
}
```

This is useful for headers that might have more padding above them than below them.

Lastly, four separate values affect the top, right, bottom, and left margins in that order:

```css
p {
  /* top | right | bottom | left */
  padding: 2px 1px 4px 7px;
}
```

This is the go-to method for giving unique padding to each side of an element (not extremely common, but useful in a pinch).

You might think you'll never be able to remember these variations, but it might help to recognize that they all generally work ***from the top, moving clockwise***.

- With two values from the top (and bottom) to the right (and left).
- With three values from the top to the right (and left) to the bottom.
- With four values from the top to the right to the bottom to the left.

There are many other shorthand properties, and this is just the beginning. Understanding shorthand properties can help you write more concise code.
