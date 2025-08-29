<h1>
  <span class="headline">Intro to CSS</span>
  <span class="subhead">Variables</span>
</h1>

**Learning objective:** By the end of this lesson, students will understand the application and use cases of CSS variables.

## You put variables in my CSS!

CSS variables, also known as [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), are a fantastic tool to help you write CSS that is clearer in its intent and more maintainable.

Say we're working for a company that wants to use its primary brand colors repeatedly throughout a website. Without CSS variables, that may look like this:

```css
h1 {
  color: #7289DA;
}

a {
  background-color: #7289DA;
  color: #FFFFFF;
}

button {
  background-color: #7289DA;
  color: #FFFFFF;
}

#comments {
  border: 2px solid #7289DA;
}

footer {
  background-color: #7289DA;
  color: #FFFFFF;
}
```

In other words, lots of repetition and lots of room for errors. It would be easy for us to make a mistake when applying this color. CSS variables let us avoid being repetitive with values.

Variables are inherited from ancestors. This means if you want a variable available everywhere in the `<body>` of a page, then you should define that variable in the `<body>` element. Applying it even higher, like on the `html` element, is also common. Let's define a variable:

```css
body {
  --brand-color: #7289DA;
}
```

This syntax defines a variable called `--brand-color`. The `--` at the start is required. You can't use special characters other than dashes `-` in the name of a variable. Lower kebab case is generally preferred but not strictly required.

The value `#7289DA` is assigned to this variable. Let's make use of it in our code from above!

```css
h1 {
  color: var(--brand-color);
}

a {
  background-color: var(--brand-color);
  color: #FFFFFF;
}

button {
  background-color: var(--brand-color);
  color: #FFFFFF;
}

#comments {
  border: 2px solid var(--brand-color);
}

footer {
  background-color: var(--brand-color);
  color: #FFFFFF;
}
```

Here, we can see that to apply the variable in our CSS, we use a special function in CSS: `var()` and write the variable name inside of it.

> 💡 CSS functions are independent of other languages. Check out [this MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions) for more.

Now that we've done that, we can be sure that our brand colors are being used uniformly throughout the site, and we have autocomplete in CSS to help us not make errors.

## Incoming rebrand

And it turns out we did that work just in time for an update to our brand colors - our new signature color is `#5865F2`. It's a good thing we set up our CSS variables. Now we only have to change this in one place.

```css
body {
  --brand-color: #5865F2;
}
```

Just like that, our site is a slightly different shade of blue/purple, and the rebranding is complete. Cheers!
