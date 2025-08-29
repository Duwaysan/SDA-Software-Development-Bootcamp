<img width="100%" src="https://i.imgur.com/CYx9Es5.png" />

# Intro to the CLI
![](https://i.imgur.com/3CsQsz3.png)

## About
The **command line interface** is one of the most powerful tools developers have to execute any operation that your computer is capable of.

Today we will walk through the follwing concepts:
  1. Define and explain the strengths and weaknesses of GUIs and CLIs
  2. Learn how to access the terminal and break down its components
  3. Describe the file system and how it relates to the CLI
  4. Introduce common commands and list unsafe ones
  5. Learn how to find more information on using commands

## Contents
- [CLI Explained](#cli-explained)
- [The Terminal and the Shell](#the-terminal-and-the-shell)
- [Opening A Terminal](#opening-a-terminal)
- [What Are Commands](#what-are-commands)
- [What Are Flags](#what-are-flags)
- [Navigating Your File System](#navigating-your-file-system)
- [Common Commands](#common-commands)
- [Common Flags](#common-flags)
- [CLI Shortcuts](#cli-shortcuts)

## CLI Explained
The majority of our interactions with computers is through a graphical user
interface, or a GUI. A GUI is a great tool -- it adds a level of user experience
that allowed computers to become more popular and mainstream.

The Command Line Interface (CLI) is a text-based way of interacting with your
computer, that gives you more abilities than a GUI has, but with a higher
learning curve.

The CLI works by typing commands (running programs) into a terminal and the
computer executes those commands or gives you a fairly descriptive error
regarding why it did not work.

While the GUI is perfect for the average computer user, there are drawbacks for
users like us. The CLI offers many benefits:
- **Power/Speed.** Most tasks can be completed faster with the cli. Features
  like tab completion, command history (hitting the up arrow in your terminal),
  piping contribute to this.
- **Precision.** Each command does only one thing and we can read them and
  understand what they do before we run them.
- **Repeatability / Scriptability.** These commands can be saved, reused by
  others.
- **Tools.** There are a lot of open source tools that you can use on the cli,
  you can install them with cli package managers like Advanced Packaging Tool
  (apt) on Linux or Homebrew on MacOS. Because each tool does one specific
  thing, it is possible to chain multiple tools together to automate processes.
- **Debugging.** The errors are better, the errors that you get from a GUI can
  be unhelpful while cli errors are generally more thought out and descriptive.


## The Terminal and the Shell
How do we get at this text-based interface from our GUI desktop? We run what's
called a terminal application (also often referred to as a terminal emulator).
The default on OSX is `Terminal.app`. When you open a new Terminal window, the
Terminal app will call a program called a **shell**.

A shell is a program that takes commands, passes them to the operating system
and returns any output or errors. The default shell used by terminal is called
**Bash** or **ZSH** (on MacOS Catalina or later). There are other shells but all
operate very similarly.

Let's fire up our terminals and get exploring!


## Opening A Terminal
- `⌘ (Command) + Space`, or open Spotlight
- type "Terminal"
- `Enter`

![](https://i.imgur.com/CvggrYa.png)

- Keep it locked in your dock. Right click on the icon, highlight options, check
  "Keep in Dock".

![](https://i.imgur.com/ZrPuVNq.png)

You should see something like the following prompt:

![Command Line Prompt](https://i.imgur.com/Jm3tVU0.png)

When terminal launches, it will start in your computer's home directory
(whatever you named your computer). Your home directory is denoted by the tilde
`~`.

The prompt is the shell asking for input; when you see `$ <something>` in
documentation, it generally means, input this command into a shell.

If you have a terminal open but do not see a prompt, that means that the shell
is not ready to receive input.

Typing a random string of characters and hitting enter will produce a message
`-bash: <your-random-string>: command not found`
![Command not found](https://i.imgur.com/U2VbnT8.png)


## What Are Commands
A command is an instruction given by the user to perform a specific task. Commands can be used to manage files, run programs, configure system settings, and much more.<br/>

## What Are Flags
Flags (also called options or switches) in a command-line interface (CLI) are special parameters that modify the behavior of a command. They are usually preceded by a dash (-) for single-letter flags or double dashes (--) for full-word options.<br/>


## Navigating Your File System
Part of using the terminal means learning how to navigate the file system and figuring out how to locate files and folders within this system. There are two ways in which we can refer to the location of an item. The way we describe this location is by providing the "path" to the resource. This path is essentially an "address" as to where to find the resource.


#### Types of Paths:
You can think of a path as being similar to an address. There are two types of
paths: Absolute and Relative

A **relative path** is similar to giving someone directions to a destination from
their current location. Where is General Assembly? Two blocks up 15th street
from where you are now.

An **absolute path** to General Assembly could be 1133 15th St NW,
8th Floor, Washington, DC 20005 or a longitude and latitude(38.9048728,
-77.0340283).

<div align="center">

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
<br/>
<br/>

## Time to Practice!
There are MANY more CLI commands to learn, more than we could cover in an entire
day.

Throughout this course, you'll find that the best way to learn a new skill is to
gain a foothold in the topic, then wrestle with the material on your own and
with the support your teammates and instructors to deepen your understanding.

Labs give us the opportunity to do so, and they will almost always ask you to
look up how to do things we didn't cover in the lecture. This is intentional and
will help grow your meta-developer skills -- belief in your ability to learn new
things and teach yourself, as well as improving your ability to Google and sift
through resources like MDN, W3 Schools, and Stack Overflow.

<h3>We will do the Star Wars lab in the current directory as in class pracice.</h3>
<br/>
<br/>


## Closing
The commands we've covered in this lesson will probably account for 80% of your
CLI usage. Regardless of how much experience with the command line you have
coming in to this class, your next step should be to get really comfortable with
it - we're going to spend a lot of time in the command line over the next 12
weeks. You can also make use of this [cheatsheet](https://git.generalassemb.ly/SEIR-Phoenix/CLI-Fundamentals#cheatsheet) to help you as you get accustomed to using the CLI.


## Additional Resources
- [Learn You Bash](https://github.com/denysdovhan/learnyoubash)
- [Command Line Power User](https://commandlinepoweruser.com/)
- [Awesome Bash](https://github.com/awesome-lists/awesome-bash)


## More Terminal Keyboard shortcuts
Reduce your reliance on the mouse and get in the habit of using these keyboard
shortcuts:

`⌘ K` Clear the Terminal window

`option arrow` Move cursor by word

`Ctrl A` Go to beginning of line

`Ctrl E` Go to end of line

`Ctrl K` Kill line to end

`Ctrl U` Kill line to beginning

`Ctrl Y` Paste whatever was killed using Ctrl+K or Ctrl+U

`cd -` toggle previous directory

There are also video tutorials [here](https://www.youtube.com/playlist?list=PLdnONIhPScSToZztXRHyKZTQEsE30luMx).

## FURTHER READING && DETAILS

| Lesson                                                                   | Video Time |                            Video                             | Skills                                                                                                                                               |
| ------------------------------------------------------------------------ | :--------: | :----------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Concepts](./concepts/README.md)                                         |   2 min    | [link](https://generalassembly.wistia.com/medias/nbzyi785zx) | CLI vs GUI basics and benefits (power, repeatability, precision, tools).                                                                             |
| [Fundamentals](./fundamentals/README.md)                                 |   6 min    | [link](https://generalassembly.wistia.com/medias/vfv990huj6) | Opening Terminal on macOS, Windows, and Ubuntu; the terminal interface; your first commands, understanding errors and prompts.                       |
| [The File System](./the-file-system/README.md)                           |   10 min   | [link](https://generalassembly.wistia.com/medias/qfgvgf3uux) | Understanding the file system; Root and Home directories; absolute paths; file and directory organization; parent-child relationship in directories. |
| [Navigating the File System](./navigating-the-file-system/README.md)     |   10 min   | [link](https://generalassembly.wistia.com/medias/jyaw9d7kde) | File system structure, `pwd`, `ls`, `cd`, command arguments, relative and absolute paths.                                                            |
| [Manipulating the File System](./manipulating-the-file-system/README.md) |   9 min    | [link](https://generalassembly.wistia.com/medias/cbo1s6gqvc) | Creating and deleting files and directories, `mkdir`, `touch`, `rm`, `rmdir`, tab completion, and directory structure.                               |
| [The Shell](./the-shell/README.md)                                       |   4 min    | [link](https://generalassembly.wistia.com/medias/sj436hzj32) | What is _the Shell_?                                                                                                                                 |
| [What is a Command?](./what-is-a-command/README.md)                      |   4 min    | [link](https://generalassembly.wistia.com/medias/5vzppgahqo) | Built-in commands, executable programs, functions and aliases.                                                                                       |
| [The `man` command](./the-man-command/README.md)                         |   2 min    | [link](https://generalassembly.wistia.com/medias/ajcvgx4gmk) | View the manual page for a command.                                                                                                                  |
| [Flags](./flags/README.md)                                               |   4 min    | [link](https://generalassembly.wistia.com/medias/f4q4yjo955) | How to use common flags.                                                                                                                             |
| **Total content**                                                        |   51 min   |                                                              |                                                                                                                                                      |


#### Renaming Files

- Guess what - there's no dedicated bash command to rename files and directories!

- Don't panic!  The `mv` command is very flexible!

- Here's how we can rename the `warm.pjs` file to `summer.pjs` from anywhere:
	
	```sh
	$ mv ~/drawers/pjs/warm.pjs ~/drawers/pjs/summer.pjs
	```
- Of course, you can actually move and rename simultaneously!


#### Moving Multiple Files

- To demonstrate moving multiple files, re-create the `dress.socks` file we just deleted from the `socks` directory.

- Now let's move all of the `.socks` files out of the `socks` folder into our _home_ folder. The following command assumes we're inside the `socks` folder:

	```sh
	$ mv *.socks ~
	```

- Now, without changing directories, return the socks files back to where they belong


#### Copying Files & Directories

- Use the `cp` command to copy files and directories.

- Here's an example of how to copy all **.js** files:

	```sh
	$ cp *.js ~/dest-folder
	```

- And entire directories by adding the `-R` option:

	```sh
	$ cp -R ./sample-code ~/dest-folder
	```

#### Command History & Clearing the Window

- Pressing the up and down arrows in Terminal will cycle through previously entered commands.  This can be a huge time saver!

- If you'd like to clear the Terminal window, simply press `cmd+k`.


## Using _VS Code_ to Open and Edit Files

### What is _VS Code_?

- _VS Code_ is a popular open-source text-editor maintained by Microsoft.

- It's very customizable and capable.

- VS Code's functionality can be extended using _extensions_, however, most useful features are built-in.

- To try it out, let's use VS Code to open and edit a file...

### Launch _VS Code_ via the `code` Command

- We want to be able to type in `code .` in Terminal and have VS Code open the current directory for editing.

- First, open VS Code's **Command Palette** by pressing `⇧⌘P`.

- Next, type "shell command" and select the `Shell Command: Install 'code' command in PATH` command.

- Restart Terminal for the new $PATH to take effect.

> For the above to work, VS Code must be installed in the **Applications** folder

### Edit a File in VS Code

- To edit a specific file in VS Code, we can simply type the file after `code`.

- Let's add an _alias_ (shortcut) command that will change to your class repo directory by simply typing `repo`.  We can do this by editing the hidden `.bash_profile` (if using **bash**) or `.zprofile` (if using **zsh**) file.

	```sh
	$ code ~/.bash_profile
	        -OR-
	$ code ~/.zprofile
	```

- Now add this line (preferably near other aliases)

	```sh
	alias repo='cd ~/code/<path to repo folder>'
	```

- Pressing `cmd-s` will save the file.

- Close Terminal then re-open it and type `repo` to test it out.