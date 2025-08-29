<h1>
  <span class="prefix"></span>
  <span class="headline">Intro to the CLI</span>
</h1>

## About

This module provides a beginner-friendly guide to using the Command Line Interface (CLI), teaching students how to navigate and manipulate their computer's file system with text commands. It starts with understanding what the CLI is and its utility, then progresses to navigating through folders, checking folder contents, creating new folders and files, and safely deleting unnecessary items.

## Content

| Lesson                                                                   | Video Time |                            Video                             | Skills                                                                                                                                               |
| ------------------------------------------------------------------------ | :--------: | :----------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Concepts](./concepts/README.md)                                         |   2 min    | [link](https://generalassembly.wistia.com/medias/nbzyi785zx) | CLI vs GUI basics and benefits (power, repeatability, precision, tools).                                                                             |
| [Fundamentals](./fundamentals/README.md)                                 |   6 min    | [link](https://generalassembly.wistia.com/medias/vfv990huj6) | Opening Terminal on macOS, Windows, and Ubuntu; the terminal interface; your first commands, understanding errors and prompts.                       |
| [The File System](./the-file-system/README.md)                           |   10 min   | [link](https://generalassembly.wistia.com/medias/qfgvgf3uux) | Understanding the file system; Root and Home directories; absolute paths; file and directory organization; parent-child relationship in directories. |
| [Navigating the File System](./navigating-the-file-system/README.md)     |   10 min   | [link](https://generalassembly.wistia.com/medias/jyaw9d7kde) | File system structure, `pwd`, `ls`, `cd`, command arguments, relative and absolute paths.                                                            |
| [Manipulating the File System](./manipulating-the-file-system/README.md) |   9 min    | [link](https://generalassembly.wistia.com/medias/cbo1s6gqvc) | Creating and deleting files and directories, `mkdir`, `touch`, `rm`, `rmdir`, tab completion, and directory structure.                               |
| [The Shell](./the-shell/README.md)                                       |   4 min    | [link](https://generalassembly.wistia.com/medias/sj436hzj32) | What is the Shell?                                                                                                                                   |
| [What is a Command?](./what-is-a-command/README.md)                      |   4 min    | [link](https://generalassembly.wistia.com/medias/5vzppgahqo) | Built-in commands, executable programs, functions and aliases.                                                                                       |
| [The `man` command](./the-man-command/README.md)                         |   2 min    | [link](https://generalassembly.wistia.com/medias/ajcvgx4gmk) | View the manual page for a command.                                                                                                                  |
| [Flags](./flags/README.md)                                               |   4 min    | [link](https://generalassembly.wistia.com/medias/f4q4yjo955) | How to use common flags.                                                                                                                             |
| **Total content**                                                        |   51 min   |                                                              |                                                                                                                                                      |

## Common Commands
</div>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
PRINT WORKING DIRECTORY
</div>

<table>
    <tbody>
        <tr>
            <td><strong>name</strong></td>
            <td>PRINT WORKING DIRECTORY</td>
        </tr>
        <tr>
            <td><strong>command</strong></td>
            <td><code>pwd</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>
              - will print the current working directory<br/>
            </td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><img src="https://i.imgur.com/4aaT88x.png" /></td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
LIST CONTENTS
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>ls</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>
              - Lists the contents of the current directory<br/>
              - will show you all non-hidden, child, directories in the currentdirectory / location<br/>
              - will show all non-hidden files in the current directory<br/>
            </td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><img src="https://i.imgur.com/H2RTUny.png" /></td>
        </tr>
        <tr>
            <td><strong>common flags</strong></td>
            <td>
              <div><code>ls -a</code> - list content including hidden files and directories.</div>
              <div><code>ls -l</code> - list content and give meta information about each item</div>
            </td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
CHANGE DIRECTORY
</div>

<table>
    <tbody>
        <tr>
            <td><strong>name</strong></td>
            <td>Change Directory</td>
        </tr>
        <tr>
            <td><strong>command</strong></td>
            <td><code>cd</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>to navigate to other directories _relative_ to the current working directory.
            </td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><img src="https://i.imgur.com/H2RTUny.png" /></td>
        </tr>
        <tr>
            <td><strong>common flags</strong></td>
            <td>
              <div><code>ls -a</code> - list content including hidden files and directories.</div>
              <div><code>ls -l</code> - list content and give meta information about each item</div>
            </td>
        </tr>
        <tr>
          <td><strong>other examples</strong>
          </td>
          <td>
              <li>`cd some_directory` - navigates into a child directory called "some_directory".</li>
              <li> `cd ..` - navigates into the parent of the current directory</li>
              <li>`..` is shorthand for parent</li>
              <li>`cd` or `cd ~` will take you back home / root directory</li>
          </td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
CREATE A NEW DIRECTORY
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>mkdir</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>makes a new directory (folder)</td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><code>mkdir directory_name</code> makes a directory called "directory_name"</td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
CREATE A NEW FILE
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>touch</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>creates an empty file</td>
        </tr>
        <tr>
            <td><strong>note:</strong></td>
            <td>A file typically will have a **file extension** like <code>.txt</code> whereas a
  directory will not.</td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><code>touch file.txt</code> makes a directory called "directory_name"</td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
REMOVE
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>rm</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>will delete both files and directories in the current directory</td>
        </tr>
        <tr>
            <td><strong>note:</strong></td>
            <td>
              <li>there is no trash to recover removed items from so use with caution.</li>
              <li>will only remove a folder with a <code>-r</code> flag (recursive)</li>
            </td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><code>rm -r ./folder_name</code> deletes a directory called "folder_name"</td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>


<div style="background-color: grey; height: 25px; padding-left: 10px;">
REMOVE DIRECTORY
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>rmdir</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>Deletes a folder with no confirmation.</td>
        </tr>
        <tr>
            <td><strong>note:</strong></td>
            <td>❌ Fails if non_empty_folder contains files.</td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><code>rm ./folder_name</code> deletes a directory called "folder_name"</td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

<div style="background-color: grey; height: 25px; padding-left: 10px;">
REMOVE RECURSIVELY AND FORCEFULLY
</div>

<table>
    <tbody>
        <tr>
            <td><strong>command</strong></td>
            <td><code>rm -rf</code></td>
        </tr>
        <tr>
            <td><strong>purpose</strong></td>
            <td>deletes files and folders recursively and by force.</td>
        </tr>
        <tr>
            <td><strong>note:</strong></td>
            <td>this cannot be undone! Use it carefully</td>
        </tr>
        <tr>
            <td><strong>examples</strong></td>
            <td><code>rm -rf .git</code> deletes a file called ".git"</td>
        </tr>
    </tbody>
</table>

---
<br/>
<br/>

## Common Flags
Flags are extra options you can optionally add to commands. They modify the behavior of the command.

- In the `rm -rf` command above, there are two flags:
  - `-r`: recursive, delete all nested files and directories
  - `-f`: force, ignore permissions and do not ask for confirmation
- In the `ls -a` command from earlier `-a` is a flag that modifie sthe behavior of the `ls` command to display hidden files.
<br/>
<br/>


## CLI Shortcuts
In the long term, reduce your reliance on the mouse. Some CLI keyboardshortcuts:
- `⌘K` Clear the Terminal window
- `option arrow` Move cursor by word
- `letter [TAB button]`
  - autocompletes (case-sensitive)
- up / down arrows
  - cycle command history


