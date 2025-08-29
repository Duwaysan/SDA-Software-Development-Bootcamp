<img width="100%" src="https://i.imgur.com/CYx9Es5.png" width="900" /><br/>

<div align="center">
<img src="https://i.imgur.com/9KG4ZzU.png" style="max-width: 350px;"/><br/><br/>

# Markdown Resource Page
</div>

- Please use this page as a starting point to build resources for all things Markdown.<br/><br/>
  
- Feel free to add your own links and resources over time to this page and associated folders.<br/><br/>

- Don't forget to check the current folder for other cheatsheets and related resources.

## Resource Explanation
**Markdown** is a lightweight markup language used to format plain text. It allows you to add elements like headings, bold text, lists, and links using simple symbols instead of complex formatting codes. Markdown is widely used for documentation, wikis, README files, blogs, and writing content for the web.

## Contents

<!-- no toc -->
- [Contents](#contents)
- [Cheat Sheet](#cheat-sheet)
- [Where is Markdown Used](#where-is-markdown-used)
- [Markdown in VSCode](#markdown-in-vscode)
- [External Resources](#external-resources)


## Cheat Sheet

<table border="1" cellspacing="0" cellpadding="5">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Markdown Syntax</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Headings</td>
        </tr>
        <tr>
            <td><strong>Headings</strong></td>
            <td># H1 <br> ## H2 <br> ### H3</td>
            <td>
                <h1>H1 Heading</h1>
                <h2>H2 Heading</h2>
                <h3>H3 Heading</h3>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Text Formatting</td>
        </tr>
        <tr>
            <td><strong>Bold</strong></td>
            <td>**bold** or __bold__</td>
            <td><strong>bold</strong></td>
        </tr>
        <tr>
            <td><strong>Italic</strong></td>
            <td>*italic* or _italic_</td>
            <td><em>italic</em></td>
        </tr>
        <tr>
            <td><strong>Bold + Italic</strong></td>
            <td>***bold & italic***</td>
            <td><strong><em>bold & italic</em></strong></td>
        </tr>
        <tr>
            <td><strong>Strikethrough</strong></td>
            <td>~~strikethrough~~</td>
            <td><s>strikethrough</s></td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Lists</td>
        </tr>
        <tr>
            <td><strong>Unordered List</strong></td>
            <td>- Item 1 <br> - Item 2</td>
            <td>
                    <li>Item 1</li>
                    <li>Item 2</li>
            </td>
        </tr>
        <tr>
            <td><strong>Ordered List</strong></td>
            <td>1. First item <br> 2. Second item</td>
            <td>
                1. First item<br/>
                2. Second item
            </td>
        </tr>
        <tr>
            <td><strong>Nested List</strong></td>
            <td>- Item 1 <br>&nbsp;&nbsp;&nbsp;- Subitem 1</td>
            <td>
                <ul>
                    <li>Item 1
                        <ul>
                            <li>Subitem 1</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Links and Images</td>
        </tr>
        <tr>
            <td><strong>Link</strong></td>
            <td>[Google](https://google.com)</td>
            <td><a href="https://google.com">Google</a></td>
        </tr>
        <tr>
            <td><strong>Image</strong></td>
            <td>![Alt Text](image.jpg)</td>
            <td><img src="" alt="Alt Text" width="100"></td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Code</td>
        </tr>
        <tr>
            <td><strong>Inline Code</strong></td>
            <td>`code`</td>
            <td><code>code</code></td>
        </tr>
        <tr>
            <td><strong>Code Block</strong></td>
            <td>
                ```python<br>
                print("Hello World")<br>
                ```
            </td>
            <td>
                <pre><code>print("Hello World")</code></pre>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Blockquotes</td>
        </tr>
        <tr>
            <td><strong>Blockquote</strong></td>
            <td>> This is a quote</td>
            <td>
                <blockquote>This is a quote</blockquote>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Horizontal Rule</td>
        </tr>
        <tr>
            <td><strong>Horizontal Line</strong></td>
            <td>---</td>
            <td><hr></td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Tables</td>
        </tr>
        <tr>
            <td><strong>Table</strong></td>
            <td>
                | Column 1 | Column 2 |<br>
                |----------|----------|<br>
                | Data 1   | Data 2   |
            </td>
            <td>
                <table border="1">
                    <tr><th>Column 1</th><th>Column 2</th></tr>
                    <tr><td>Data 1</td><td>Data 2</td></tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Task Lists</td>
        </tr>
        <tr>
            <td><strong>Task List</strong></td>
            <td>
                - [x] Task 1 <br>
                - [ ] Task 2
            </td>
            <td>
                <input type="checkbox" checked> Task 1<br/>
                <input type="checkbox"> Task 2<br/>
            </td>
        </tr>
        <tr>
            <td colspan="3" style="background-color: #666; text-align: left;">Escaping Characters</td>
        </tr>
        <tr>
            <td><strong>Escaping Characters</strong></td>
            <td>\*Not Italic\*</td>
            <td>*Not Italic*</td>
        </tr>
    </tbody>
</table>


## Where is Markdown Used


<table border="1" cellspacing="0" cellpadding="5">
    <thead>
        <tr>
            <th>Category</th>
            <th>Use Cases</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Documentation & Technical Writing</td>
        </tr>
        <tr>
            <td><strong>Documentation & Technical Writing</strong></td>
            <td>
                - GitHub README files (`README.md`) <br>
                - Software documentation (e.g., API docs, project guides) <br>
                - Open-source project documentation <br>
                - Technical blogs and articles
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Version Control & Collaboration</td>
        </tr>
        <tr>
            <td><strong>Version Control & Collaboration</strong></td>
            <td>
                - GitHub, GitLab, Bitbucket (Markdown in issues, pull requests, wikis) <br>
                - Jupyter Notebooks (for documenting code and results) <br>
                - Wikis & internal documentation (e.g., Confluence, Notion)
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Blogging & Content Creation</td>
        </tr>
        <tr>
            <td><strong>Blogging & Content Creation</strong></td>
            <td>
                - Static site generators (e.g., Jekyll, Hugo, Gatsby) <br>
                - Ghost blogging platform <br>
                - Dev.to, Hashnode, and other developer blogging platforms
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Communication & Note-Taking</td>
        </tr>
        <tr>
            <td><strong>Communication & Note-Taking</strong></td>
            <td>
                - Slack, Discord, and Mattermost (Markdown in messages) <br>
                - Obsidian, Notion, Evernote (note-taking & knowledge management) <br>
                - Google Docs (via Markdown plugins)
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Writing & Publishing</td>
        </tr>
        <tr>
            <td><strong>Writing & Publishing</strong></td>
            <td>
                - Pandoc (converting Markdown to PDF, Word, HTML, etc.) <br>
                - LaTeX integration (for writing academic papers)
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Code & Development</td>
        </tr>
        <tr>
            <td><strong>Code & Development</strong></td>
            <td>
                - README files in repositories <br>
                - Commenting in code documentation <br>
                - Developer blogs & tutorials
            </td>
        </tr>
        <tr>
            <td colspan="2" style="background-color: #666; text-align: left;">Benefits of Markdown</td>
        </tr>
    </tbody>
</table>

## Markdown in VSCode

VS Code has a built-in markdown preview.  when a `*.md` file is open in the editor, click the preview button in the top right:

<img src="https://i.imgur.com/O1b6hRO.png">

This will split the screen as follows:

<img src="https://i.imgur.com/Xt1qk0w.png">

## External Resources

<table>
	<thead><tr><th>Link</th><th>Purpose</th></tr></thead>
	<tr>
		<td>
            <a href="https://guides.github.com/features/mastering-markdown/">GitHub Guide - Mastering Markdown</a>
        </td>
		<td>• Mastering markdown in github.</td>
	</tr>
	<tr>
		<td>
            <a href="http://markdowntutorial.com/">Markdown Tutorial</a>
        </td>
		<td>• Markdown tutorial to go through.
        </td>
	</tr>
	<tr>
		<td>
            <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheatsheet</a>
        </td>
		<td>• Another cheatsheet to use.
        </td>
	</tr>
	<tr>
		<td>
            <a href="http://macdown.uranusjr.com/">MacDown</a>
        </td>
		<td>• Free, dedicated markdown editor that can be installed.
        </td>
	</tr>
    	<tr>
		<td>
            <a href="https://github.com/ikatyang/emoji-cheat-sheet">Markdown Emojis</a>
        </td>
		<td>• Markdown Emoji Cheatsheet in GitHub.
        </td>
	</tr>
	</tr>
    	<tr>
		<td>
            <a href="https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#smileys--emotion">Markdown Emojis</a>
        </td>
		<td>• Markdown Emoji Cheatsheet in GitHub #2.
        </td>
	</tr>
	</tr>
    	<tr>
		<td>
            <a href="https://dev.to/envoy_/150-badges-for-github-pnk">Markdown Badges</a>
        </td>
		<td>• Markdown Badge Creating Cheatsheet in GitHub #2.
        </td>
	</tr>
</table>
