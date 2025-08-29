<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">Margin Collapsing</span>
</h1>

**Learning objective:** By the end of this lesson, learners will understand the phenomenon of margin collapsing in CSS, including its causes and implications on the design layout.

Margin collapsing is a behavior that occurs when the margins of adjacent block-level elements overlap. This can cause the margins to merge, resulting in a smaller margin than expected.

Margin collapsing only occurs between vertically adjacent block-level elements. Inline elements do not collapse their margins.

Let's see a demonstration of this with 2 `<p>` elements:

```html
<p id="first">First paragraph</p>
<p id="second">Second paragraph</p>
```

and some styling to go with them:

```css
#first {
  margin-bottom: 16px;
}

#second {
  margin-top: 16px;
}
```

This is the simplest example of margin collapsing that we can have. Because the margin below the first paragraph is 16px and the margin above the second paragraph is 16px, the actual amount of space between the two elements is 16px.

Instead of the margins being added together, they overlap or, more technically, collapse. Let's take this a little further by changing our CSS:

```css
#first {
  margin-bottom: 24px;
}

#second {
  margin-top: 16px;
}
```

In this code, we've made the bottom margin of the first paragraph 24px and kept the top margin of the second paragraph 16px.

Now, the actual space between elements is 24px - the margins are still collapsing instead of being added together. The bottom margin of the first element is used because it has the largest space between the two elements.

Note that if we insert a block element or an inline element without margins between these two elements, the margins will no longer collapse. Here's an example:

```html
<p id="first">First paragraph</p>
<div id="between">A div element with no margin</div>
<p id="second">Second paragraph</p>
```

and some styling:

```css
#between {
  margin: 0;
}
```

There should now be a 24px margin below the first paragraph and a 16px margin above the second paragraph.

## How to prevent margin collapsing

There are a few ways to prevent margin collapsing:

- **Add padding**: Adding padding to the parent element will create a space between the parent element and its children, preventing their margins from collapsing.
- **Use flexbox or grid**: CSS flexbox and grid layouts provide more control over the layout of your elements and can be used to prevent margin collapsing.
