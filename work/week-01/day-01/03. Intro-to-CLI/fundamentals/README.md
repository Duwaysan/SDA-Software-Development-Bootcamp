<h1>
  <span class="headline">Intro to the CLI</span>
  <span class="subhead">Fundamentals</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to open their OS's terminal application, learn about shells, understand and run basic commands, .

## The Terminal

How you open your terminal application will depend upon your OS.

### macOS

In macOS, use Spotlight to search for and open Terminal. Press `⌘ Command` + `Space` to open Spotlight and search for `Terminal`. Press `Enter` to open it.

### Ubuntu

Ubuntu is cool and has a built-in keyboard shortcut to launch the Terminal application: `Ctrl` + `Alt` + `T`.

You can search for `Terminal` on your system and launch the Terminal app that way.

A quick note on the Ubuntu Terminal - copying and pasting uses a different keyboard combination in the terminal.

To copy from the Ubuntu terminal, use `Ctrl` + `Shift` + `C`. To paste text in the Ubuntu terminal, use `Ctrl` + `Shift` + `V`.

### The Command Line Interface

Regardless of your operating system, when your terminal application launches, you should see a window similar to the following:

![The terminal app in macOS](./assets/terminal.png)

Note that this terminal is running Oh My Zsh. If you have not installed Oh My Zsh, it will look different. The concepts and commands discussed in this lecture will be identical, even if you have not installed Oh My Zsh.

Here, you'll see the *prompt*. Let's dissect it:

![The anatomy of the command line. The ➜ is denoted with 1. The ~ is denoted with 2. The █ is denoted with 3.](./assets/command-line-anatomy.png)

1. The arrow `➜` indicates that the computer is ready to receive input. We can type commands on this line, and they can be executed.
2. The tilde `~` indicates our current location in the file system. We'll cover this more soon.
3. The cursor `█`. When you start typing, this is where the text will appear and is how we write commands to be executed.
4. The **command line** is the space where the cursor is / where the commands are typed in.

> 📚 The *prompt* is a sequence of characters used in a command-line interface to indicate readiness to accept commands.

## The Shell

So far we've learned about the:
- **The Terminal:** A program that provides a graphical interface to type commands and output the results of running those commands and...
- **Command line:** The space where we input text commands

The third component in this is the **shell**. The **shell** is the program that runs in the terminal and takes your executed commands and decides what to do with them. When there are results to show the user, the shell sends that information to be displayed to the user inside the terminal. The shell acts as an intermediary between the user and the system.

Here's a step-by-step walkthrough of a potential interaction loop:

1. You open a terminal application on your computer. A graphical interface is displayed for you to type and view text.
2. Inside the terminal is a shell. It waits to receive executed commands.
3. You type a command on the command line and then execute the command by pressing `Enter`.
4. The shell processes the command. Depending on the command, it might handle it directly or call on the OS or another external program to execute it.
5. The results are displayed back in the terminal for the user to see.

There are a variety of shells available, in this course we will use Zsh.

## Commands

This question is harder to answer than you might initially hope, but in short, a command is anything you can execute directly from the command line.

What makes this difficult to define is that there are four main types of commands you might use:

- **Built-in Commands:** These are commands directly integrated into the shell. For example, when you run `cd`, the shell handles these commands internally without invoking external programs.
- **Executable Programs:** These commands correspond to external apps or scripts on the system. The `ls` command is an example of this, along with any other application run from the terminal. When these apps are run, the shell spawns a new process to execute this external program.
- **Functions:** These are user-defined, callable mini-scripts, typically set in shell configuration files. Once a function is defined, it can be executed directly like any other command.
- **Aliases:** These are user-defined shortcuts for other commands. They're a way to reduce typing, standardize complex commands, or even correct common typos. When an alias is defined, it acts as a substitute for another command.

The varying types of commands add some complexity to working with them. For example, the `man` command won't be able to tell you anything about functions or aliases. This can make the behaviors of some commands feel inconsistent.

Another thing that may make commands feel inconsistent is also one of the things that makes the command line feel powerful - anyone can write a command. But, because anyone can write commands, they may not consistently follow the best possible practices, such as writing help documentation for that command.

## Your first command

Since the computer is ready to receive input, let's type in a command:

```bash
whoami
```

Notice that we have control over when this command is executed. If you make a typo, there's still time to go back and fix it. Use your keyboard's arrow keys for this though; clicking with the mouse doesn't work here!

No typos? All ready to run this? Hit `Enter`!

![The whoami command successfully running and printing student](./assets/whoami.png)

This command has a simple job - print the username of the user that runs this command. In the screenshot above, the username is `student`. Yours will likely be different!

After that command finished executing, we were greeted by the prompt once again, and we're free to type more commands!

Let's try an invalid command, just to see what happens:

```bash
blahblah
```

Again, after you've typed this in, hit `Enter` to execute it.

![Oh no, blahblah isn't a valid command!](./assets/blahblah.png)

Our first error! And it's pretty self-explanatory - `zsh: command not found: blahblah`.

We purposefully ran a command we knew was invalid, so it makes sense that it wasn't found. When you see this error, you're trying to run an invalid command!

> 🧠 Notice that the arrow `➜` at the start of the line after we received our error is red. All that this means is that the last command we ran failed in some way; we can still write and execute commands on this line.
