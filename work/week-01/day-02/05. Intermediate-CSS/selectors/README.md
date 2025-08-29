<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">Selectors</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to target specific elements on a page with attribute selectors, pseudo-classes, pseudo-elements, and uncommon combinators.

## Attribute selectors

[Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) allow us to target elements based on their attributes. For example, we can use the following attribute selector to target all `<input>` elements with a value of `"number"` on the `type` attribute:

```css
input[type='number'] {
  ...;
} /* Targets checkbox inputs */
```

## Pseudo-classes

[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) allow us to target elements based on their position in the document and their state. For example, whether or not an `<input type="checkbox">` is checked.

Some common pseudo-classes are:

- `:active` - Targets elements in their active state, such as clicked links.
- `:disabled` - Targets disabled form elements like input fields.
- `:empty` - Targets elements with no children or text content.
- `:first-child` - Targets the first child element of a parent.
- `:nth-child` - Targets elements based on their position within a parent.
- `:nth-of-type` - Targets elements of a specific type based on their position within a parent.
- `:focus` - Targets elements being focused on by a user, like when an input field is selected.
- `:hover` - Targets elements when the mouse cursor hovers over them.

### 🎓 You Do

Use the `:hover` pseudo-class to change the cursor to the little hand-pointer when it's over any elements nested inside the `ul.top-level-list`.

## Pseudo-elements

Pseudo-elements style specified parts of an element.

Here are some examples:

- `p::first-letter` - Style the first letter of all `<p>` elements.
- `p::first-line` - Style the first line of all `<p>` elements.
- `::selection` - Style the part of an element selected by the user.
- `.special::before` - Add content *before* all elements with a class of `.special`.
- `.special::after` - Add content *after* all elements with a class of `.special`.

> 🚨 You probably shouldn't try to memorize any of these at this point. Knowing these expanded tools exist is enough; Google or an AI assistant can help you fill in the gaps. You will remember what you use on the job regularly.

### 🎓 You Do

Use the `::first-letter` pseudo-element to set the size of the "C" in "Comments" to be `60px`.

And here's a link to learn more about [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

## Uncommon combinators

Three of the less common combinators are:

### Child selector (`>`)

The *child selector* is similar to the *descendant selector*, except that it only matches elements that are direct children, that is, nested only one level deep:

```css
/* Selects all <li> tags that are direct children of a <ul.top-level-list> */

.top-level-list > li {
  border: solid 1px orange;
}
```

After adding this, you'll notice that the `<li>` elements that are not direct children of the `<ul.top-level-list>` do not have individual borders.

### Adjacent sibling selector (`+`)

```css
div + div {
  color: green;
}
```

This would select `<div>` tags only if they were preceded **immediately** by another `<div>` at the same level (sibling) and give them a color of green. After adding this, you'll notice that the text inside the `<p>` element that is the direct child of the third `<div>` is colored green. This is because of *inheritance*, which you can learn about more in the `Inheritance` lesson.

### General sibling selector (`~`)

Similar to the *adjacent sibling selector*, it selects all instances of the second element that appear after the first element at the same level:

```css
input ~ input {
  border: 1px solid red;
}
```

This would target all `<input>` tags that are siblings following an `<input>`.
