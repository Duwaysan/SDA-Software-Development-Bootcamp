<img width="100%" src="https://i.imgur.com/CYx9Es5.png" width="900" />

# (CLI) Command Line Interface Resource Page

- Please use this page as a starting point to build resources for all things CLI.
- Feel free to add your own links and resources over time to this page and associated folders.
- Don't forget to check the current folder for other cheatsheets and related resources.

## Resource Explanation
A **Command Line Interface (CLI)** is a text-based interface that allows users to interact with a computer's operating system or software by typing commands into a terminal or command prompt.

A **shell** is a program that acts as a command-line interface (CLI) environment, allowing users to interact with the operating system. This program accepts commands that are built into the operating system on your machine, as well as, it's own set of commands specific to the shell / program.

## Contents

<!-- no toc -->
- [Contents](#contents)
- [Key Features of CLI](#key-features-of-cli)
- [Example CLIs](#example-clis)
- [What Is A Shell](#what-is-a-shell)
- [BASH and ZSH Explained](#bash-and-zsh-explained)
- [Common Bash and Zsh Commands](#common-bash-and-zsh-commands)
- [Flags](#flags)
- [External Resources](#external-resources)

## Key Features of CLI
<table>
    <tbody>
        <tr>
            <td><strong>Text-Based:</strong></td>
            <td>Unlike graphical user interfaces (GUIs), CLIs require users to type commands.</td>
        </tr>
        <tr>
            <td><strong>Efficient for Power Use</strong>rs:</td>
            <td> Allows advanced users to execute tasks quickly using commands and scripts.</td>
        </tr>
        <tr>
            <td><strong>Automation-Friendly:</strong></td>
            <td> Useful for scripting and automating repetitive tasks.</td>
        </tr>
        <tr>
            <td><strong>Lightweight:</strong></td>
            <td> Consumes fewer system resources than GUIs.</td>
        </tr>
    </tbody>
</table>

## Example CLIs
<table border="1">
    <tr>
        <th>CLI Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Command Prompt (cmd)</td>
        <td>The default CLI for Windows, used for executing batch commands.</td>
    </tr>
    <tr>
        <td>PowerShell</td>
        <td>A more powerful Windows CLI with scripting capabilities and automation features.</td>
    </tr>
    <tr>
        <td>Bash</td>
        <td>The default shell for Linux/macOS and WSL; widely used for scripting and system management.</td>
    </tr>
    <tr>
        <td>Zsh</td>
        <td>An enhanced shell with better autocomplete and customization features.</td>
    </tr>
    <tr>
        <td>Fish</td>
        <td>A user-friendly shell with autosuggestions and syntax highlighting.</td>
    </tr>
    <tr>
        <td>Git CLI</td>
        <td>A command-line interface for version control using Git.</td>
    </tr>
    <tr>
        <td>Node.js CLI</td>
        <td>Used for running JavaScript code and managing Node.js packages (`npm`).</td>
    </tr>
    <tr>
        <td>Python CLI</td>
        <td>Runs Python scripts and manages packages using `pip`.</td>
    </tr>
    <tr>
        <td>MySQL CLI</td>
        <td>Used to interact with MySQL databases from the command line.</td>
    </tr>
    <tr>
        <td>Docker CLI</td>
        <td>Manages Docker containers and images using terminal commands.</td>
    </tr>
</table>

## What Is A Shell
A shell is a command-line interface (CLI) or program that allows users to interact with an operating system. It serves as an intermediary between the user and the system, enabling users to enter commands to perform tasks such as navigating directories, managing files, running programs, and automating tasks through scripts.

Key Roles of a Shell:
Command Interpreter:
A shell interprets and executes the commands entered by the user. These commands can be simple (like ls to list files) or complex (like running a script or managing system processes).
User Interface:
The shell acts as the primary interface through which users interact with the underlying operating system, typically in a text-based environment.
Scripting:
A shell also allows users to create scripts — sequences of commands saved in a file that can be executed automatically. These scripts can perform a wide range of tasks, from simple file management to complex system administration.
Types of Shells:
There are different types of shells, each with unique features and functionalities. Some popular shells include:

Bash (Bourne Again Shell): Common on Linux systems and macOS (previously the default on macOS before Zsh).
Zsh (Z Shell): Known for its advanced features, like enhanced autocompletion and more customization options.
Fish (Friendly Interactive Shell): A user-friendly shell with syntax highlighting, autosuggestions, and an intuitive design.
C Shell (csh): A shell with C-like syntax, once popular on older systems.
Korn Shell (ksh): A shell that incorporates features from both the Bourne shell and C shell.
Functions of a Shell:
Command Execution:

Executes commands entered by the user.
File Management:

Lets you create, delete, move, copy, and manage files and directories.
Environment Variables:

Manages variables (e.g., paths to executable programs) that affect how the system behaves.
Automation:

Allows automation of tasks through shell scripts that contain a series of commands.
Job Control:

Manages running processes and tasks (e.g., running commands in the background or foreground).
Pipes and Redirection:

Shells enable users to chain commands together using pipes (e.g., ls | grep 'file') and redirect input/output between commands and files.
How a Shell Works:
User Input: The user types a command in the shell.
Parsing: The shell processes the command to understand what it needs to do.
Execution: The shell calls the system’s kernel to carry out the command (e.g., creating files, executing programs, etc.).
Output: The shell displays the result of the command or provides feedback (like an error message).

## BASH and ZSH Explained
Bash and Zsh are both shells used in Unix-like operating systems, such as Linux and macOS, to interact with the system via the command line. 

Bash (Bourne Again Shell)
Bash is a widely used Unix shell and command-line interpreter. It was created as a free and open-source replacement for the original Bourne Shell (sh). Bash is the default shell on many Linux distributions and was the default shell on macOS before the introduction of Zsh in macOS Catalina.

Key Features of Bash:

Command-line interface for interacting with the system.
Supports scripting for automating tasks.
Built-in support for functions, loops, and conditional statements.
Provides job control, history, and completion features.
Compatible with many Unix-like systems.
Zsh (Z Shell)
Zsh is another powerful shell for Unix-based systems, and it is known for being highly customizable and feature-rich. Zsh incorporates features from other shells, including Bash, and adds additional functionalities, making it a popular choice for advanced users.

Key Features of Zsh:

Autocompletion: Zsh has enhanced auto-completion capabilities compared to Bash.
Themeable Prompt: It allows easy customization of the shell prompt with various themes and plugins.
Better Globbing: More powerful pattern matching and filename expansion than Bash.
Extended Scripting: Adds more advanced scripting features like built-in modules and arrays.
Better Support for Plugins: With frameworks like Oh My Zsh, Zsh can be easily extended with plugins.
Comparison:
Bash is known for its stability, simplicity, and wide compatibility, making it a default choice for many systems.
Zsh offers more advanced features and flexibility, especially for power users who like to customize their environment and workflows.

## Common Bash and Zsh Commands
<table border="1">
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">File and Directory Commands</th>
    </tr>
    <tr>
        <td>ls</td>
        <td>Lists the contents of a directory.</td>
    </tr>
    <tr>
        <td>cd</td>
        <td>Changes the current working directory.</td>
    </tr>
    <tr>
        <td>pwd</td>
        <td>Prints the current working directory.</td>
    </tr>
    <tr>
        <td>mkdir</td>
        <td>Creates a new directory.</td>
    </tr>
    <tr>
        <td>rmdir</td>
        <td>Removes an empty directory.</td>
    </tr>
    <tr>
        <td>rm</td>
        <td>Removes files or directories.</td>
    </tr>
    <tr>
        <td>cp</td>
        <td>Copies files or directories.</td>
    </tr>
    <tr>
        <td>mv</td>
        <td>Moves or renames files or directories.</td>
    </tr>
    <tr>
        <td>touch</td>
        <td>Creates an empty file or updates the timestamp of a file.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">File Permissions</th>
    </tr>
    <tr>
        <td>chmod</td>
        <td>Changes file or directory permissions.</td>
    </tr>
    <tr>
        <td>chown</td>
        <td>Changes file or directory ownership.</td>
    </tr>
    <tr>
        <td>chgrp</td>
        <td>Changes the group ownership of a file or directory.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">Process Management</th>
    </tr>
    <tr>
        <td>ps</td>
        <td>Displays information about running processes.</td>
    </tr>
    <tr>
        <td>top</td>
        <td>Displays running processes in real time.</td>
    </tr>
    <tr>
        <td>kill</td>
        <td>Sends a signal to terminate a process.</td>
    </tr>
    <tr>
        <td>bg</td>
        <td>Resumes a stopped job in the background.</td>
    </tr>
    <tr>
        <td>fg</td>
        <td>Brings a background job to the foreground.</td>
    </tr>
    <tr>
        <td>jobs</td>
        <td>Displays the list of jobs running in the background.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">File Searching</th>
    </tr>
    <tr>
        <td>find</td>
        <td>Searches for files in a directory hierarchy.</td>
    </tr>
    <tr>
        <td>locate</td>
        <td>Finds files by name using a database.</td>
    </tr>
    <tr>
        <td>grep</td>
        <td>Searches for patterns within files.</td>
    </tr>
    <tr>
        <td>which</td>
        <td>Displays the full path of a command.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">System Information</th>
    </tr>
    <tr>
        <td>df</td>
        <td>Displays disk space usage for file systems.</td>
    </tr>
    <tr>
        <td>du</td>
        <td>Shows the disk usage of files and directories.</td>
    </tr>
    <tr>
        <td>free</td>
        <td>Displays information about memory usage.</td>
    </tr>
    <tr>
        <td>uptime</td>
        <td>Shows how long the system has been running.</td>
    </tr>
    <tr>
        <td>top</td>
        <td>Displays real-time system resource usage (CPU, memory, etc.).</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">File Compression</th>
    </tr>
    <tr>
        <td>tar</td>
        <td>Archives files or extracts files from an archive.</td>
    </tr>
    <tr>
        <td>gzip</td>
        <td>Compresses files using the Gzip format.</td>
    </tr>
    <tr>
        <td>gunzip</td>
        <td>Decompresses files compressed with Gzip.</td>
    </tr>
    <tr>
        <td>zip</td>
        <td>Compresses files into a ZIP archive.</td>
    </tr>
    <tr>
        <td>unzip</td>
        <td>Extracts files from a ZIP archive.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">Networking</th>
    </tr>
    <tr>
        <td>ping</td>
        <td>Tests network connectivity to a host.</td>
    </tr>
    <tr>
        <td>ifconfig</td>
        <td>Displays or configures network interfaces.</td>
    </tr>
    <tr>
        <td>netstat</td>
        <td>Displays network connections, routing tables, etc.</td>
    </tr>
    <tr>
        <td>scp</td>
        <td>Securely copies files between hosts over SSH.</td>
    </tr>
    <tr>
        <td>ssh</td>
        <td>Connects to a remote machine via SSH (Secure Shell).</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">Shell Customization (Zsh-specific)</th>
    </tr>
    <tr>
        <td>alias</td>
        <td>Creates a shortcut for a command in Zsh.</td>
    </tr>
    <tr>
        <td>autoload</td>
        <td>Automatically loads Zsh functions when needed.</td>
    </tr>
    <tr>
        <td>source</td>
        <td>Runs commands from a file in the current shell session (both Bash and Zsh).</td>
    </tr>
    <tr>
        <td>setopt</td>
        <td>Sets options in Zsh to modify its behavior.</td>
    </tr>
    <tr>
        <td>unsetopt</td>
        <td>Unsets options in Zsh to modify its behavior.</td>
    </tr>
    <tr>
        <th colspan="2" style="background-color: #666; text-align: left;">Command History</th>
    </tr>
    <tr>
        <td>history</td>
        <td>Displays the command history.</td>
    </tr>
    <tr>
        <td>!!</td>
        <td>Executes the last command from history.</td>
    </tr>
    <tr>
        <td>!<number></td>
        <td>Executes a command from history using its number.</td>
    </tr>
</table>


## Flags

A flag (or option/switch) in a command-line interface (CLI) is a modifier used to change the behavior of a command. Flags are typically preceded by a dash (-) or double dash (--) and provide additional instructions to a command.

<div align="center">

### How Flags Work
</div>

#### Single-character flags: 

Use a single dash (-) followed by a letter.<br/>
Example: ls -l → Lists files in long format.

#### Multiple single-character flags: 

Can be combined after a single dash.<br/>
Example: ls -lah → Combines -l, -a, and -h.


#### Full-word flags: 

Use a double dash (--) followed by a word.<br/>
Example: grep --ignore-case → Case-insensitive search.

<br/>
<table border="1">
    <tr>
        <th>Flag</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">List Commands</th>
    </tr>
    <tr>
        <td>-l</td>
        <td>Lists files in long format with details.</td>
        <td><code>ls -l</code></td>
    </tr>
    <tr>
        <td>-a</td>
        <td>Shows hidden files (those starting with ".").</td>
        <td><code>ls -a</code></td>
    </tr>
    <tr>
        <td>-h</td>
        <td>Displays human-readable sizes (e.g., KB, MB).</td>
        <td><code>ls -lh</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">File Manipulation</th>
    </tr>
    <tr>
        <td>-r</td>
        <td>Recursively applies the command to subdirectories.</td>
        <td><code>rm -r folder_name</code></td>
    </tr>
    <tr>
        <td>-f</td>
        <td>Forces execution without prompting for confirmation.</td>
        <td><code>rm -rf folder_name</code></td>
    </tr>
    <tr>
        <td>-i</td>
        <td>Interactive mode; asks for confirmation before deleting.</td>
        <td><code>rm -i file.txt</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">File Searching</th>
    </tr>
    <tr>
        <td>-name</td>
        <td>Searches for files by name.</td>
        <td><code>find . -name "file.txt"</code></td>
    </tr>
    <tr>
        <td>-type</td>
        <td>Specifies file type (e.g., f = file, d = directory).</td>
        <td><code>find / -type d -name "docs"</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Grep Search</th>
    </tr>
    <tr>
        <td>-i</td>
        <td>Ignores case when searching for patterns.</td>
        <td><code>grep -i "hello" file.txt</code></td>
    </tr>
    <tr>
        <td>-v</td>
        <td>Inverts the match (shows non-matching lines).</td>
        <td><code>grep -v "error" log.txt</code></td>
    </tr>
    <tr>
        <td>-c</td>
        <td>Counts the number of matches.</td>
        <td><code>grep -c "success" log.txt</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">File Permissions</th>
    </tr>
    <tr>
        <td>-R</td>
        <td>Recursively applies changes to all files in a directory.</td>
        <td><code>chmod -R 755 myfolder</code></td>
    </tr>
    <tr>
        <td>-v</td>
        <td>Verbose mode; shows detailed output.</td>
        <td><code>chmod -v 777 script.sh</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Disk & System Info</th>
    </tr>
    <tr>
        <td>-h</td>
        <td>Human-readable output (applies to many commands).</td>
        <td><code>df -h</code> (disk usage)</td>
    </tr>
    <tr>
        <td>-s</td>
        <td>Summarizes disk usage.</td>
        <td><code>du -sh folder_name</code></td>
    </tr>
    <tr>
        <td>-m</td>
        <td>Displays memory in MB.</td>
        <td><code>free -m</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Process Management</th>
    </tr>
    <tr>
        <td>-u</td>
        <td>Shows user-related processes.</td>
        <td><code>ps -u username</code></td>
    </tr>
    <tr>
        <td>-aux</td>
        <td>Displays all running processes with details.</td>
        <td><code>ps aux</code></td>
    </tr>
    <tr>
        <td>-9</td>
        <td>Forcefully kills a process.</td>
        <td><code>kill -9 PID</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Networking</th>
    </tr>
    <tr>
        <td>-t</td>
        <td>Shows active TCP connections.</td>
        <td><code>netstat -t</code></td>
    </tr>
    <tr>
        <td>-n</td>
        <td>Displays IPs instead of hostnames.</td>
        <td><code>netstat -tn</code></td>
    </tr>
    <tr>
        <td>-p</td>
        <td>Shows processes using ports.</td>
        <td><code>netstat -tp</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Archive & Compression</th>
    </tr>
    <tr>
        <td>-c</td>
        <td>Creates an archive.</td>
        <td><code>tar -cvf archive.tar folder_name</code></td>
    </tr>
    <tr>
        <td>-x</td>
        <td>Extracts an archive.</td>
        <td><code>tar -xvf archive.tar</code></td>
    </tr>
    <tr>
        <td>-z</td>
        <td>Compresses using gzip.</td>
        <td><code>tar -czvf archive.tar.gz folder_name</code></td>
    </tr>
    <tr>
        <th colspan="3" style="background-color: #666; text-align: left;">Miscellaneous</th>
    </tr>
    <tr>
        <td>--version</td>
        <td>Shows version information.</td>
        <td><code>bash --version</code></td>
    </tr>
    <tr>
        <td>--help</td>
        <td>Displays help for a command.</td>
        <td><code>ls --help</code></td>
    </tr>
</table>



## External Resources

<table>
    <thead><tr><th>Link</th><th>Purpose</th></tr></thead>
    <tr>
        <td>
            <a href="https://www.atlassian.com/git/tutorials/using-branches">Atlassian - Git Branching
            </a>
        </td>
        <td>• Tutorial to deep dive into branching w/ Git</td>
    </tr>
    <tr>
        <td>
            <a href="https://www.atlassian.com/git/tutorials/comparing-workflows">Atlassian - Workflows
            </a>
        </td>
        <td>• A Git workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner
        </td>
    </tr>
</table>





  <h2>Common Flags for Both Zsh and Bash</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-c</td>
        <td>Run commands passed as a string.</td>
        <td><code>bash -c "echo Hello"</code></td>
      </tr>
      <tr>
        <td>-i</td>
        <td>Start an interactive shell.</td>
        <td><code>bash -i</code></td>
      </tr>
      <tr>
        <td>-l</td>
        <td>Start a login shell (reads login-specific config files).</td>
        <td><code>bash -l</code></td>
      </tr>
      <tr>
        <td>-v</td>
        <td>Verbose mode; prints each command before executing it.</td>
        <td><code>bash -v script.sh</code></td>
      </tr>
      <tr>
        <td>-x</td>
        <td>Debug mode; prints commands as they are executed.</td>
        <td><code>bash -x script.sh</code></td>
      </tr>
      <tr>
        <td>-e</td>
        <td>Exit immediately if any command fails.</td>
        <td><code>bash -e script.sh</code></td>
      </tr>
      <tr>
        <td>-n</td>
        <td>Read commands but don't execute them (syntax check).</td>
        <td><code>bash -n script.sh</code></td>
      </tr>
      <tr>
        <td>-f</td>
        <td>Disable filename expansion (globbing).</td>
        <td><code>bash -f</code></td>
      </tr>
      <tr>
        <td>-u</td>
        <td>Treat unset variables as an error.</td>
        <td><code>bash -u script.sh</code></td>
      </tr>
      <tr>
        <td>-o</td>
        <td>Set various shell options. For example, <code>set -o noclobber</code> prevents overwriting files with <code>></code>.</td>
        <td><code>set -o noclobber</code></td>
      </tr>
      <tr>
        <td>--version</td>
        <td>Display version information for the shell.</td>
        <td><code>bash --version</code></td>
      </tr>
      <tr>
        <td>--help</td>
        <td>Display a help message with available options.</td>
        <td><code>bash --help</code></td>
      </tr>
    </tbody>
  </table>

  <h2>Zsh-Specific Flags</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-A</td>
        <td>Append a value to an array.</td>
        <td><code>set -A array value</code></td>
      </tr>
      <tr>
        <td>-D</td>
        <td>Enable debugging mode for Zsh scripts.</td>
        <td><code>zsh -D</code></td>
      </tr>
      <tr>
        <td>-G</td>
        <td>Enable globbing (filename matching) for all files.</td>
        <td><code>zsh -G</code></td>
      </tr>
      <tr>
        <td>-L</td>
        <td>Enable "lock" to prevent overwriting function definitions.</td>
        <td><code>zsh -L</code></td>
      </tr>
      <tr>
        <td>-T</td>
        <td>Turn off tracing (useful for debugging).</td>
        <td><code>zsh -T</code></td>
      </tr>
      <tr>
        <td>-X</td>
        <td>Turn off extended globbing (used for complex matching patterns).</td>
        <td><code>zsh -X "*.txt"</code></td>
      </tr>
      <tr>
        <td>-M</td>
        <td>Load modules in Zsh.</td>
        <td><code>zsh -M module_name</code></td>
      </tr>
    </tbody>
  </table>

  <h2>Bash-Specific Flags</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Flag</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-s</td>
        <td>Read commands from standard input (e.g., piped commands).</td>
        <td><code>echo "echo Hello" | bash -s</code></td>
      </tr>
      <tr>
        <td>-r</td>
        <td>Restrict shell's built-in commands and functions.</td>
        <td><code>bash -r</code></td>
      </tr>
      <tr>
        <td>-p</td>
        <td>Run the shell in a privileged environment (e.g., restricted permissions).</td>
        <td><code>bash -p</code></td>
      </tr>
      <tr>
        <td>-S</td>
        <td>Enable the "set -S" option for error messages with invalid options.</td>
        <td><code>bash -S</code></td>
      </tr>
    </tbody>
  </table>

  <h2>Setting Shell Options in Both Bash and Zsh</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>set -o noclobber</td>
        <td>Prevent overwriting files with <code>></code> (redirection).</td>
        <td><code>set -o noclobber</code></td>
      </tr>
      <tr>
        <td>set -o errexit</td>
        <td>Exit immediately if a command fails (non-zero exit status).</td>
        <td><code>set -o errexit</code></td>
      </tr>
      <tr>
        <td>set -o nounset</td>
        <td>Treat unset variables as an error (i.e., show an error message).</td>
        <td><code>set -o nounset</code></td>
      </tr>
      <tr>
        <td>set -o pipefail</td>
        <td>Causes a pipeline to fail if any command in the pipeline fails.</td>
        <td><code>set -o pipefail</code></td>
      </tr>
    </tbody>
  </table>