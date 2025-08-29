<h1>
  <span class="headline">Intro to CSS</span>
  <span class="subhead">Selectors</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to target specific HTML elements with CSS element, id, class, and combinator selectors, to style HTML elements with greater specificity.

## What selectors do

We've already used element selectors like `p` and `h2` to target specific HTML elements on a web page. This allowed us to style those elements in any way we wanted. ID and class selectors let us narrow down the elements we want to select. For example, instead of selecting every `<div>` in our HTML, we can select only the `<div>` elements that have specific `id` or `class` attributes.

## Class selector

We use the class selector to grab one of the values within the `class` attribute. A single element can belong to multiple classes because the `class` attribute accepts multiple space-separated values! The same class can be used for multiple elements; for example, multiple elements have both the `important` and `super-cool` classes in our starter code.

Add a `.` period followed by the class name to use a class selector.

```css
.important {
  color: red;
  font-weight: bold;
}
```

The class selector has a greater specificity than the element selector. If there are conflicts between the rule of an element selector and a class selector, the class selector will be used.

## 🎓 You Do

Target the elements with the class name `super-cool`, and give them a border that is solid, 2px wide, and pink in color.

Note how the styling from both the `.important` and the `.super-cool` rules are applied to the div with both class names! What happens when you use conflicting declarations, like adding a `color: blue;` to the `.super-cool` rule?

Play around with the order of these rules in your CSS document, and try switching the order of the class names to `"super-cool important"` in the `div` element's `class` attribute. When is order important? When is it not? Explore these mechanics a bit on your own.

## ID selector

ID selectors are the most specific type of selector. They target elements with a specific `id` attribute.

Add the `#` symbol followed by the `id` value to use an `id` selector.

Let's change our `<p>` tag with the `id` of `about`:

```css
#about {
  font-style: italic;
  color: hotpink;
}
```

The ID selector is more specific than the class and element selector. If there are conflicts between a rule using either of those selectors and the ID selector, the ID selector will be used.

> 🚨 An element's ID should always be unique. An element should only ever have a single ID.

## Combinators

Combinators provide a powerful way to select elements based on their relationship to other elements.

The most common combinator is the descendant selector, but there are many more.

We use the descendant selector to target elements nested within another element, ***regardless of the depth of the nesting***.

A descendant selector is defined by using a space character between two other selectors:

```css
/* This will match all <p> tags nested anywhere within an <div> tag */
div p { ... }
```

Note that this rule does not target `<div>` elements, only `<p>` elements. The last item in the combinator receives the styling.
