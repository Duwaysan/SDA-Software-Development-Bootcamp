<h1>
  <span class="headline">Intro to CSS</span>
  <span class="subhead">Common Properties</span>
</h1>

**Learning objective:** By the end of this lesson, students will learn how to apply and manipulate common CSS properties, including font attributes and color, to control the appearance and layout of HTML elements.

CSS properties are used to control the appearance and behavior of HTML elements. There are many different CSS properties, but some of the most common ones are font properties, color, and background.

## Font properties

[Font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) properties let us control the appearance of text on a web page. Some of the most common are:

- `font-family`: Specifies the font family of the text. When multiple fonts are specified, the first available font is used.
- `font-size`: Specifies the size of the text.
- `font-weight`: Specifies the weight of the text (for example, light, normal, or bold).
- `font-style`: Specifies the style of text (for example, italic or normal).
- `text-align`: Specifies the alignment of the text (for example, left, center, right, or justified)

Let's try styling our `<h2>` elements:

```css
h2 {
  font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
}
```

## `color`

We've already seen how the [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) property allows us to specify the color of fonts.

There are three common ways to specify color values in CSS:

- [hexadecimal](https://www.freecodecamp.org/news/how-hex-code-colors-work-how-to-choose-colors-without-a-color-picker/) values: `#FF0000`
- RGB values: `rgb(255, 0, 0)`
- Color name: `red`

All three of the example values above will give us the same color!

Any of the three methods is acceptable for declaring a color value, but there are advantages to using RGB or hex codes, namely precision and range.

Hex codes and RGB values give us variety and precision that color names can't. One of the reasons for this is that once you deviate from basic colors like red, green, blue, and so on, color names can be subjective. There are only [140 predefined color keywords](http://web.simmons.edu/~grovesd/comm244/notes/week3/css3-color-names) in CSS, but over 16 million possible hex/RGB color combinations exist.

## 🎓 You Do

Take a few minutes and visit one of the following resources and learn more about a couple of properties of your choosing:

- [CSS-Tricks](https://css-tricks.com/almanac/properties/) - one of the best sites for all things CSS
- [codrops](https://tympanus.net/codrops/css_reference/#section_css-property)

After you've learned about that property, apply it in your code.

### Practice

Now that you've learned about some common properties, let's get some more practice.

- Set the margin on `<body>` element to 0 on all four sides. This is a common reset we do on all our pages because most browsers give a margin to the body element, which we usually do not want.
- Also, give the background of the `<body>` element a color of `lightgray`.
- Set the margin on the `<ul>` elements to 0 on all four sides.
- Set the text color of all `<div>` elements to `blue`.
