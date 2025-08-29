<h1>
  <span class="headline">Intro to CSS</span>
  <span class="subhead">Multiple Stylesheets</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use multiple stylesheets to organize and manage CSS code.

## Why use multiple stylesheets?

When creating larger projects - especially ones with multiple pages - our CSS can quickly get messy if we only use one stylesheet.

Instead, we can create a separate stylesheet for each page or section of our web app, allowing us to keep things tidy and easily accessible.

The most significant benefits of using multiple stylesheets are:

- **Organization**
- **Maintenance**: Using multiple stylesheets can make it easier to maintain your CSS code. This is because you can isolate changes to specific stylesheets, making it less likely that you will accidentally break something when you make a change.

To use multiple stylesheets, add a `<link>` element to the `<head>` section of your HTML code for each stylesheet that you want to use.

An example of what that might look like:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="global.css">
  <link rel="stylesheet" href="store-page.css">
</head>
<body>
  <!-- body content -->
</body>
</html>
```

You'd put styles that apply globally throughout your site in the `global.css` file - like nav bar or button styling.

Then, your other style sheets, such as `store-page.css` above, would handle styling specific to certain pages.

## Order of precedence

When a browser loads multiple stylesheets for a web page, it will apply the styles in the order that the stylesheets are linked in the `<head>` section of the HTML code. This means that the styles in the later stylesheets will override the styles in the earlier stylesheets.
