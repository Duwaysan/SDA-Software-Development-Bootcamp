<h1>
  <span class="headline">Intro to HTML</span>
  <span class="subhead">Why <code>index.html</code>?</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to explain the significance of naming the main HTML file as index.html, and describe its impact on server behavior and user experience.

## Why Do We Name HTML Files `index`?

Most websites and applications have a default HTML file named `index.html`.

The practice of naming the main HTML file as `index.html` is rooted in web server standards. When a user navigates to a directory on a website, the web server searches for a default file to display. This file is most commonly `index.html`, but variations like `index.php` or `index.htm` also exist.

### Historical Context

In the early stages of the web, directories would often list files openly. To create a more user-friendly experience, web administrators began using an `index` file as a welcoming or landing page for each directory.

### Server Behavior

When a URL directs to a directory rather than a specific file, the web server will automatically look for a default file in that directory to display. `index.html` is widely recognized as that default file.

### Advantages

1. **User Experience**: Simplifies user access by allowing them to just type the domain or directory URL, without needing to remember a specific file name.
2. **Simplicity**: Makes server configuration easier, as most server software defaults to using `index.html` as the initial access point.
3. **SEO Benefits**: This standard practice is well-recognized by search engines, offering potential SEO advantages.

### Alternative Names

While `index.html` is the industry standard, some web servers allow for different default file names, configurable via server settings.
