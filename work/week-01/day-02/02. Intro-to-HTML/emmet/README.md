<h1>
  <span class="headline">Intro to HTML</span>
  <span class="subhead">Emmet</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to utilize Emmet abbreviations in VS Code to expedite the generation of HTML and CSS code structures.

## What is Emmet and why use it?

Emmet is a plugin in VS Code that enhances HTML and CSS development by allowing you to write abbreviations that expand into complete code snippets. It employs a unique abbreviation syntax, influenced by CSS selectors, to produce code with minimal keystrokes.

Emmet can help you generate boilerplate code quickly and efficiently.

## How Emmet Works

1. **Abbreviation**: Type an Emmet abbreviation. For example, `ul>li*5` is an abbreviation to create an unordered list element (`<ul>`) indicated by `ul` with five list item (`<li>`) children as indicated by `>li*5`. The `>` indicates that the element that follows it will be a child of the `<ul>`, the `*5` indicates that there should be five of the element that preceeds it.

2. **Expansion**: Press the `Tab` key or another designated trigger to expand the abbreviation into full code. Using the previous example, `ul>li*5` will expand to:

   ```html
   <ul>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
   ```

### Additional features

- **Code Wrapping:** You can select code and use Emmet to wrap it with new elements.
- **Lorem Ipsum Generator:** Use `lorem` to insert placeholder text.
- **Attribute Generation:** You can include attributes within your Emmet abbreviation, like `a[target=_blank]`.
