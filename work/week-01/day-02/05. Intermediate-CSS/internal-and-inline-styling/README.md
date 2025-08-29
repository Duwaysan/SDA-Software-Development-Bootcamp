<h1>
  <span class="headline">Intermediate CSS</span>
  <span class="subhead">Internal and Inline Styling</span>
</h1>

**Learning objective:** By the end of this lesson, learners will be able to differentiate between inline and internal styles in CSS and describe their use cases in web design.

So far, we've discussed adding external stylesheets to webpages by adding a link to them in a `<link>` tag. There are two additional ways to add styling to a web page:

- Inline styles
- Internal stylesheets

These techniques are not mutually exclusive; you can use one or more on the same webpage.

## Inline styles

An inline style can apply styling to a single element using the `style` attribute.

To demonstrate inline styling, let's use it to change the color of the font of an `h1` element:

```html
<h1 style="color: green">Intro to CSS</h1>
<h2>Three Ways to Add Styles</h2>
```

Using inline styles breaks our separation of concerns by mixing content with styling; therefore, avoid using this technique unless there's a good reason to do so - for example, when testing or debugging styles.

## Internal Stylesheets

The next technique available to add styling is internal stylesheets.

An internal stylesheet is created by using a `<style>` element nested within the document's `<head>` element:

```html
<head>
  <meta charset="UTF-8">
  <title>Intermediate CSS</title>
  <!-- bring in an external stylesheet -->
  <link rel="stylesheet" href="./css/style.css">
  <!-- inline stylesheet -->
  <style>
    h1, h2 {
      color: red;
    }
  </style>
</head>
```

Inline stylesheets are not the preferred method to add styles to your web page.

## Precedence

When multiple CSS styles are defined for a single element, browsers use a mechanism called ***precedence*** to determine which one to apply.

Inline styles have the highest precedence, followed by internal stylesheets and then external stylesheets added with at `<link>` tag.

This hierarchy means that if more than one type of stylesheet is used, any inline styles will override those defined in internal or external stylesheets.

One exception to this rule, however, is the `!important` declaration. It overrides any other style, regardless of the stylesheet precedence.

> ⚠ Use the `!important` declaration sparingly. Overuse can make it challenging to maintain and debug your CSS.

Take a moment and think about this question:

> ❓ In the following code, which rule will take precedence?

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./css/style.css">
  <style>
    p {
      color: red !important;
    }
  </style>
</head>
<body>
  <p style="color: blue">This is a paragraph.</p>
</body>
</html>
```
