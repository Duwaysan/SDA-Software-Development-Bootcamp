<h1>
  <span class="headline">Intro to HTML</span>
  <span class="subhead">Boilerplate</span>
</h1>

**Learning objective:** By the end of this lesson, learners will be able to generate a foundational HTML boilerplate and modify its title element to set up a web page.

## HTML boilerplate

HTML boilerplate is the markup that exists on every web page. In other words, it's the starting point for any work.

We've already discovered how to add this boilerplate - type a `!` in the `index.html` file and press `Tab` to create it. Below is the result of that. Note that our current HTML has a little more right now, but focus on these parts for now:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    
</body>
</html>
```

The first line, `<!DOCTYPE html>` indicates to a browser that this will be an HTML file.

The second line, `<html lang="en">`, is the ***root*** element. Like the root of a family tree, this element is the ancestor of every other element. All other elements will be descendants of this element. `lang="en"` indicates that most of the content on this page will be written in English.

All elements inside of the `<head>` element hold information about the document (metadata) or are resources related to this document.

The first `<meta>` element informs the browser of the type of text that will appear on the page using the `charset` attribute. The second `<meta>` element will help mobile browsers display this content appropriately using the `name` and `content` attributes. Do not alter these elements.

The `<title>` element holds the text that will be shown in the tab for the page.

Anything we want to appear on the page goes into the `<body>` element. This is where we've written everything in this document so far.

## Updating the title

Update the `<title>`, change the text between the opening and closing `<title>` tags from `Document` to `Intro to HTML` as follows:

```html
<title>Intro to HTML</title>
```
