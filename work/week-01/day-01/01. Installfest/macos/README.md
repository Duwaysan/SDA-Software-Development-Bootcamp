<img width="100%" src="https://i.imgur.com/CYx9Es5.png" />

# Installfest - MacOS

### A note on copying commands

When possible, ***please copy the commands from this page***. You will use most of the commands here once and never again. Typing them out will only introduce the possibility of you making errors. Certain commands will require you to alter portions of them - this is specifically called out when they appear. There are no bonus points for doing work already done for you.

### Copying text in code blocks

To copy text from code blocks, use your mouse to hover over the code block. A **Copy** button will appear in the upper right corner. Click this, and the text held in the code block will be put on your clipboard, ready to be pasted.

![A codebock shown in GitHub pages. The Copy button is being pointed at by a red arrow.](./assets/code-copy.png)

## What you need to begin *(you must read this, do not skip this, this is important)*

- ***A device running macOS 14 Sonoma or macOS 13 Ventura.***

  **[This Apple support article](https://support.apple.com/en-us/HT201475)** may be useful in helping you update your machine to one of these OSs.
- At least 20GB of free hard drive space.
- At least 8GB of RAM. 16GB of RAM or more is preferable and will improve your learning experience (particularly when screen sharing in Zoom).
- A user account with administrative privilege to your local installation of macOS.
- A fundamental understanding of macOS system administration and debugging.

## Checking your processor type

Check your processor type in macOS by selecting the Apple logo in the top left of your screen and navigating to the **About This Mac** option. Macs with an Apple Silicon processor will have a chip type of Apple, as shown on the left below. Macs with an Intel processor will have a processor type of Intel, shown on the right below.

![On the left, a Mac running macOS Sonoma 14.1.2 with an Apple Silicon chip. On the right, a Mac running macOS Sonoma 14.1.2 with an Intel chip.](./assets/apple-silicon-and-intel-chip.png)

For the purposes of this installfest, it will rarely matter which category you fall into, and when it does matter, it will be explicitly called out (like it is in the next section).

## Running applications built for Intel Macs on Macs equipped with Apple Silicon processors

If you are using a device equipped with an Apple Silicon chip, the first time you run an application that uses Intel-based features, you will see something like the prompt below telling you to install Rosetta. When this happens, select **Install**, and when the installation is complete, relaunch the application.

![The prompt for installing Rosetta.](./assets/apple-silicon-rosetta.png)

## 1. Rectangle

We highly recommend against using the built-in macOS window management features unless you have extensive experience using them and are already comfortable manipulating windows without a mouse. This is where Rectangle comes in.

Rectangle is an open-source window management tool that offers extensive customization - no more fiddling with window position in macOS! Install Rectangle from **[here](https://rectangleapp.com/)**. Once it is installed by moving it into the **`Applications`** directory, launch it with **Spotlight** (using **`⌘ Command + Space`**).

Because Rectangle is an application downloaded from the internet, you'll be prompted to allow it to open after you've installed it. Grant this permission.

You'll also be prompted to authorize Rectangle to control your window positions, as shown below. Allow this by clicking the **Open System Preferences** button in the dialog box.

![Rectangle, prompting for accessibility permission.](./assets/rectangle-authorization.png)

The System Settings app will open and take you to the **Privacy & Security** pane. Turn on the toggle next to the **Rectangle** app. You'll be prompted to allow the modification of your system settings - do so.

Below, you'll find the Privacy and Security pane after Rectangle has been given the appropriate system permissions.

![The Privacy and Security pane, after Rectangle has been given the appropriate system permissions.](./assets/rectangle-privacy-and-security.png)

Immediately after giving Rectangle the appropriate permissions, you will be asked which default shortcuts and behavior you prefer. Opt for the **Recommended** control scheme (the Spectacle scheme conflicts with multiple programs we use in class - that's no good).

Try getting familiar with Rectangle as you go through this document. The most useful commands for your use at first will likely be:

- **`Ctrl` + `⌥ Option` + `← Left Arrow`** to move windows to the left half of the screen
- **`Ctrl` + `⌥ Option` + `→ Right Arrow`** to move windows to the right half of the screen
- **`Ctrl` + `⌥ Option` + `↩ Return`** to maximize windows

Try these now!

This is only the beginning; after you've mastered these you can move on to the more advanced commands by exploring the app.

## 2. Discord

If you do **not** already have Discord installed:

We will be using Discord to communicate throughout the course. Download the app **[here](https://discord.com/download)** and install it. Please do not use the in-browser version of Discord, as it makes managing notifications unnecessarily difficult and makes it easy to miss important class information - the app is the way to go.

Because Discord is an application downloaded from the internet, you may be prompted to allow it to open after you've installed it. Grant this permission.

You will also be prompted to allow access to the Downloads folder. Grant Discord this permission by selecting **OK**.

When macOS prompts you to accept notifications from Discord ensure that you do so. This will allow you to receive message notifications.


## 3. Launch the Terminal application

To quickly launch applications, press **`⌘ Command + Space`** to launch Spotlight and type **`Terminal`**, then select the Terminal application by pressing **`Enter`** or **`Return`** when it appears. Get used to doing this often; it's the fastest way to start applications on the Mac!

![Launching the Terminal application using Spotlight. Get used to seeing this often; it's the fastest way to start applications on the Mac!](./assets/terminal-spotlight.png)

The Terminal application should start!

## 4. Zsh

Now that we're here, we can check to see what the default Shell is. The Shell is a program that lets us run commands that the computer can understand in the Terminal app. We will use Zsh as the default shell. Check if Zsh is already your default shell by running this command:

```bash
echo $0
```

To run a command, paste (or type) it into your terminal, confirm it matches what you intended, and press the **`Return`** key.

If this command outputs `-zsh` as shown below, please skip to the **Xcode Command Line Tools** section below.

![-zsh is shown as teh output of this command.](./assets/zsh.png)

### If Zsh is not your Mac's default shell

If the `echo $0` command outputs anything other than `-zsh`, you will need to make Zsh your default shell with this command:

```bash
chsh -s $(which zsh)
```

After you have done that, end your terminal session by closing the terminal window.

Open a new terminal window. You may be prompted to run a configuration setup for new users. If you are, populate the **`~/.zshrc`** with the configuration recommended by the system administrator.

After doing that, rerun this command:

```bash
echo $0
```

It should now output `-zsh`. If it does not, reach out to your installfest point of contact before continuing.

## 5. Oh My Zsh

We will also install Oh My Zsh - an open-source, community-driven framework for managing your Zsh configuration. Use this command:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Upon successfully installing Oh My Zsh, you should be greeted with the following screen:

![A successful installation of Oh My Zsh](./assets/oh-my-zsh-success.png)

Note that your prompt has now changed to simply be `~`. This is the desired outcome!

## 6. Xcode command line developer tools

We do not use Xcode in class, but some other command line applications that we use do require some Xcode libraries. Install them with this command in a terminal:

```bash
xcode-select --install
```

You should be prompted with the below dialog box. Select **Install**. You must also agree to the Command Line Tools License Agreement when prompted.

![Screen Shot 2021-09-22 at 11.08.05 PM.png](./assets/xcode-cli-tools-install.png)

This will begin a large (>1GB) download. Please wait for it to complete before moving on.

Under certain circumstances, you may be prompted to download these tools again, even after you've done this process once. If you are, go ahead and allow it, but if you are continually asked to install these tools, reach out to your installfest point of contact for a solution - fixing this may involve downloading Xcode from the Mac App Store.

## 7. Visual Studio Code

We will use VS Code as our editor in class. Download VS Code [**here**](https://code.visualstudio.com/).

### Moving Visual Studio Code to the Applications directory is *extremely important!*

***Extremely important:*** To ensure you can properly execute code, be sure that **Visual Studio Code** is in your Mac's **`Applications`** directory. ***It will not be placed in the Applications directory by default!*** Open the **Finder** application and navigate to the **`Downloads`** directory. With it open, drag the freshly downloaded **Visual Studio Code** application into the **`Applications`** directory.

### Install the `code` Command in your PATH

Do not complete this step until you have manually moved the **Visual Studio Code** application to your `Applications` directory!

1. Launch VS Code using spotlight (**`⌘ Command + Space`** - then start typing **Visual Studio Code** until you see the app, then press `↩ Return`). When the app launches, you'll be prompted to confirm the action since you downloaded it from the internet.
2. Type **`⌘ Command  + Shift + P`** to open the command palette.
3. Start typing **shell command**, and when you see the **Shell Command: Install 'code' command in PATH** command, select it! Here's an example of what this will look like:

   ![The command palette, with the Shell Command: Install 'code' command in PATH option highlighted.](./assets/vsc-code-command.png)

4. You may see a dialog box that reads, "Code will now prompt with 'osascript' for Administrator privileges to install the shell command." Select **OK** if you are.
5. You may be prompted to enter your user account password to continue. Do so if you are.
6. You'll be shown: **Shell command 'code' successfully installed in PATH.** Select **OK**.
7. Quit both VS Code and the Terminal application.
8. Relaunch Terminal

Check [**this link**](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

## 8. `~/code` directory

You'll need somewhere on your computer to put all of your work in the course - that's what the `~/code` directory will be for you! All course content assumes you will have this directory, so let's create it now with this command in a terminal:

```bash
mkdir ~/code
```

## 9. Homebrew

Homebrew is a package manager we will use to install various command-line tools in our class. Learn more [**here**](https://brew.sh).

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

You will be prompted to enter the user password for your device. Do so. It will not be displayed on the screen in any form as you type it - this is common for command-line password entry. After entering it, you will be prompted to allow the script to install various applications and create multiple directories, as shown in the screenshot below. Press **`↩ Return`** to allow this.

If you are prompted to install any Xcode tools, say yes.

Note that if you are using a Mac with an Apple Silicon chip, your directory names may differ from those in this screenshot (likely starting with **`/opt/homebrew`**). That's just fine!

![Homebrew, confirming its install directive.](./assets/homebrew-confirm-install.png)

### Next Steps *very important - you're not done yet!*

![Homebrew's not done with you yet! Check the next steps.](./assets/homebrew-next-steps.png)

After completing the installation, you will likely be prompted to enter further commands found in the **Next steps** section in your terminal to finalize the installation. ***You must complete the actions in this prompt before proceeding.***

In the above output, we are told to **Run these two commands in your terminal to add Homebrew to your PATH:**

![Run these commands! (but not exactly, yours will be different!)](./assets/homebrew-next-steps-commands.png)

If you have a similar message, you ***must*** run the commands that are displayed in your terminal (feel free to copy and paste them!). **Do not enter the commands shown above. They will not work. You must copy the commands listed in your own terminal and run them.**

If no commands are shown under the next steps, you may continue.

## 10. Python

Python is an extremely popular programming language with a simple syntax. It is a natural choice for developers to have in their toolbox. Python must be installed on your machine to execute programs written with it.

macOS comes with Python 3 pre-installed. However, we want to avoid using the system's built-in version, which can lead to difficult-to-debug errors and potential system issues!

Let's have Homebrew install version 3.11 of Python by running this command in your Terminal application:

```bash
brew install python@3.11
```

This may take a moment.

> 💔 If you encounter any errors, check out the **Handling errors 💔** subsection below. It may not be immediately apparent that an error has occurred by looking at the end of the output - scroll through the entire output of the command and look for any lines that start with red text reading **Error:**. Once you have successfully installed Python, move on with the below steps.

One last step - let's use this command in the Terminal to make sure the `python` and `python3` commands are using the version of Python that Homebrew just installed:

```bash
cat << EOF >> ~/.zshrc

export PATH="$(brew --prefix python)/libexec/bin:\$PATH"
EOF
```

There is no output from this command.

***Close the Terminal application entirely after running this command.***

***Open the Terminal application.***

### Test the installation

Test your Python installation by running the below commands in your Terminal.

#### `python3` version

```bash
python3 --version
```

This command should output a version number ***starting*** with `Python 3.11`.

#### `python3` directory

```bash
which python3
```

This command should output a file path ***ending*** with `/python@3.11/libexec/bin/python3`.

#### Next steps

Continue to the **PostgreSQL** section below if you don't have any errors or discrepancies. Check out the **Handling errors** section if you ran into any problems problems.

### Handling errors 💔

#### Install errors

You may receive the following error after running `bash install python@3.11`:

```plaintext
Error: python@3.11: the bottle needs the Apple Command Line Tools to be installed.
  You can install them, if desired, with:
    xcode-select --**install**
```

You may see this error even if you have previously installed the Apple Command Line Tools. This error also occurs when you haven't agreed to the Xcode Command Line Tools licensing agreement after a macOS update. Regardless, the fix is the same - run the command they suggest in your Terminal:

```bash
xcode-select --install
```

Retry the installation after running this command and following the prompts.

#### Wrong version number output by `which python`

If the `which python` command outputs a file path ***ending*** with `/libexec/bin/python3` but is preceeded by a different version of python (for example: `/python@3.12/libexec/bin/python3` or `/python@3.10/libexec/bin/python3`) then you have already installed Python using Homebrew in the past and Homebrew is using that previous installation as the default version that it tracks.

To resolve this, open your `~/.zshrc` file in VS Code by running this command in your terminal:

```bash
code ~/.zshrc
```

At the end of the file you should see a line of text reading something like: `export PATH="/opt/homebrew/opt/python@X.XX/libexec/bin:$PATH"` where `python@X.XX` is the version of python Homebrew is tracking (for example `python@3.12` or `python@3.10`). Change ***only*** the version number here - it should be `python@3.11`. ***Do not modify any of the other text on this line, only the version number.***

Ensure the file is saved, then close the `~/.zshrc` file. Quit your Terminal application entirely. Start a new terminal session. Run this command:

```bash
which python3
```

It should output a file path ***ending*** with `/python@3.11/libexec/bin/python3`.

#### Other errors

Contact your instructor for assistance if you encounter other errors while installing Python.

## 11. Install Pipenv

### What is a virtual environment?

A virtual environment is a self-contained directory that you create using a tool like Pipenv, which contains a Python interpreter and all the libraries and dependencies needed for a particular project.

It allows you to isolate your project's dependencies from other projects on your system, preventing conflicts such as different versions of the same library used in different projects and ensuring that your project runs consistently across different environments.

Virtual environments provide a clean and isolated environment where you can install these dependencies without affecting other projects.

By creating a virtual environment for each project, you can:

- Install dependencies locally within the environment.
- Install additional packages required for your project, such as database drivers, middleware, or third-party packages.
- Ensure your project remains compatible with specific versions frameworks and other dependencies.
- Easily manage and update dependencies without worrying about conflicts with other projects.

### Install Pipenv

Install [Pipenv](https://pypi.org/project/pipenv/) using pip:

```bash
pip install pipenv --user
```

If you encounter any errors, check out the **Handling errors 💔** subsection below. Otherwise, continue to the **Add Pipenv to your PATH** section.

#### Handling errors 💔

You may encounter an error that starts with the following text:

```plaintext
error: externally-managed-environment
```

If this is the case, use this command to install Pipenv instead:

```bash
pip install pipenv --user --break-system-packages
```

If you still have an error or encounter any other error, reach out to your instructor for assistance.

### Add Pipenv to your PATH

Run this command in your Terminal so that you can run `pipenv`:

```bash
cat << EOF >> ~/.zshrc

export PATH="$(python3 -m site --user-base)/bin:\$PATH"
EOF
```

There is no output from this command.

***Close the Terminal application entirely after running this command.***

***Open the Terminal application.***

Confirm that `pipenv` was installed correctly with this command in your Terminal:

```bash
pipenv --version
```

If this doesn't return a version number, contact your instructor for assistance.

## 12. PostgreSQL

PostgreSQL is a popular and robust Relational Database Management System (RDBMS).

Install PostgreSQL version 16 using Homebrew with this command in your Terminal:

```bash
brew install postgresql@16
```

To ensure you can access the `psql` command, run this command:

```bash
brew link postgresql@16
```

Start the Postgres service with this command:

```bash
brew services start postgresql@16
```

Then, run the following command to create a new database named the same as the current system user. This will ensure that all `psql` commands work as intended:

```bash
createdb
```

You may get an error after running this command, see the **Handling errors** section for more details.

### Handling errors 💔

#### `createdb` error

You may see a message that says `createdb: error: database creation failed: ERROR: database "your-username" already exists`. That is fine though, as long as your actual username appears in quotes in place of `your-username` then you won't encounter any future errors.

## 13. Node.js

Use this command to install `nvm`, which we will use to install Node.js. `nvm` stands for [Node Version Manager](https://github.com/nvm-sh/nvm) and can be used to swap between different versions of Node.js quickly. We won't swap between different versions in the course, but it's still a handy tool for managing our Node.js install and can help you manage your Node.js installation post-course. Get `nvm` with this command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

You may see this prompt part way through the install process:

![Error message reads: (Head detached at FETCH_HEAD). That can't be good!](./assets/nvm-head-detached.bmp)

If you do, just hit **`q`** - that will exit this screen and return you to the below install process. If you don't get this error, that's great; continue until you see the completed installation of `nvm`:

![The completed installation of `nvm`.](./assets/nvm-install-complete.png)

**Restart the Terminal application now.**

After starting up the Terminal again, run this command to check the version of `nvm`:

```bash
nvm --version 
```

If you do not get a version number, check out the **Handling errors 💔** subsection below; otherwise, continue.

Use nvm to install node version 20 with this command:

```bash
nvm install 20
```

![A successful install of node v20.11.0](./assets/node-install-complete.png)

A successful install of node v20.11.0. Your version may be slightly different from this, but as long as it starts with 20 everything is ok!

### Handling errors 💔

#### command not found: nvm error

Copy this command block and run it in the terminal, which will point to the nvm directory in your **`~/.zshrc`** file:

```bash
cat << EOF >> ~/.zshrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF

```

Restart your terminal. You should now be able to run the `nvm --version` command and get a version number in response. If you do not, alert your installfest point of contact.

### NPM config

Run this command to disable `npm` update notifications since this process is managed by `nvm`:

```bash
npm config set update-notifier false
```

There will be no output after running this command.

# 14. Install Git (MAC)

Git is the version control software we will be using - it's an extremely popular tool among developers used to track changes to work (done in repositories) through time. We'll be covering Git much more in-depth later,

```bash
brew install git
```

## Personal GitHub Account

If you have **not** created a **personal** github account at [GitHub](http://github.com/), then do that first! 

Once created, you can proceed...

## GitHub Enterprise (GHE)

In addition to using GitHub, you'll use General Assembly's private GitHub Enterprise instance (commonly abbreviated as GHE) throughout the course. If you think of GitHub as a social media platform for developers worldwide, you can think of GitHub Enterprise as a social media platform just for developers at General Assembly.

You can sign up for an account here: **[http://git-invite.generalassemb.ly/]( http://git-invite.generalassemb.ly/)**

You may use the same username for both GH & GHE accounts; however, it's recommended that you distinguish between the two by appending **-ga** to your GH username, for example: **YourGitHubUsername-ga**

### What's the difference between GH and GHE? Why does this matter?

While they are very similar, these are two separate and distinct entities that are fully split and unaware of one another's existence.

You'll make all of your public contributions on GitHub, while your course materials, templates, labs, and more will come from GitHub Enterprise to protect General Assembly intellectual property.

<img src="./assets/installfest-github-pat-config-logo.png" width="400" align="center"/>

## Github Personal Access Token
GitHub deprecated the use of password authentication via the command line in 2021, as detailed in **[this GitHub blog post](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)**.

In order to create a secure connection between our local machine and our github respositories, GitHub offers three different ways to create that secure connection.
Of the three we will use a **Personal Access Token (PAT)**<br/>

### Personal Access Token:
To create a personal access token, we will need to visit 
    
On the **Personal access tokens (classic)** page, click **Generate new token** and then **Generate new token (classic)** as shown below.
    
![The Personal access token page in Developer Settings. Note the Generate new token button towards the top right of the page has been selected and the Generate new token (classic) option is highlighted.](./assets/landing.png)
    
You will be taken to a page prompting you to create a **New personal access token (classic)**. Provide these details:

- Fill the **Note** field with a descriptive name of the device you are using the token with (we've used the name **2023 MacBook Pro** in the screenshot below, but you should use a name matching your own device). 
- Change the default expiration date. If you set an expiration date, we recommend setting a custom expiration date for one year from today’s date (the maximum time allowed), but you may choose to set it to never expire. 
- Select the **repo** and **user** scopes. You'll note that when you select these scopes, all of their sub-scopes are also selected - ensure your selections match what is in the screenshot below. When you have done so, click the **Generate token** button.
    
![The GitHub New personal access token (classic) page. A note is provided describing the device the token is for (2023 MacBook Pro). The token has been set to never expire. The repo and user scopes are both selected. Finally, the Generate token button is highlighted.](./assets/creation.png)
    
You will be taken back to the **Personal access tokens** page, and the token you just created will be visible:
    
![A newly created Personal Access Token!](./assets/created.png)
    
Click the copy button to copy the newly created token.

You will only see the token on this page ***ONCE***. You ***MUST*** copy it now and paste it in a secure and private place where you can easily access it later when you need it. Treat this token as you would a password! The token will be used in place of a password to interact with GitHub on the command line!

Using multiple machines? It is best practice to create a new token for each device requiring command-line access to GitHub. This way, if you need to revoke access to any single device, none of your other devices are impacted.

***Place the token in a secure place! The next time you interact with GitHub on the command line, you will be asked to provide a username and password. Use this token in place of a password.***

**YOU WILL NEED TO DO THE PERSONAL ACCESS TOKEN FOR ALL GITHUB ACCOUNTS**

## Git Config

With Git installed, we can now make some configuration changes to make it a more effective tool. Complete all of the following configuration steps.

Use the below command to add a user name to Git, which will be used to identify your commits. Replace `User Name` with the name you would like displayed on your commits. Make sure you leave the quotes surrounding your username.There will not be any output from this command.

```bash
git config --global user.name "User Name"
```

Next, use the below command to add an email to Git, which will be used to identify your commits. Replace `user@email.com` with the email address associated with your **[`https://github.com`](https://github.com)** account (***NOT your GitHub Enterprise account at [`https://git.generalassemb.ly`](https://git.generalassemb.ly)***). **The email you provide MUST match the email address associated with your GitHub account.** Ensure you leave the quotes surrounding your email. There will not be any output from this command. If you don't have a **[`https://github.com`](https://github.com)** account yet, create one before you run this.

```bash
git config --global user.email "user@email.com"
```

Set the default branch name to `main` with the below command. There will not be any output from this command.

```bash
git config --global init.defaultBranch main
```

Set the default Git editor to VS Code with the below command. There will not be any output from this command.

```bash
git config --global core.editor "code --wait"
```

By default, Git will ask for a new commit message when commits are brought into a Git repo. The following command will force the default commit message for all those commits instead of prompting you to add a commit message. While this isn't a Git command, we're still tackling it as part of this section since it changes Git's behavior. There will not be any output from this command.

```bash
echo "export GIT_MERGE_AUTOEDIT=no" >> ~/.zshrc
```

Turn off rebasing as the default behavior when pulling from a repo with the below command. There will not be any output from this command.

```bash
git config --global pull.rebase false
```

## OH WOW YOU DID IT!
You are now set up to start developing in macOS! Be very proud of yourself; that was quite the process!

