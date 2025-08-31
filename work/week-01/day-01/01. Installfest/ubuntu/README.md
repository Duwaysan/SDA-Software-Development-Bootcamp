<img width="100%" src="https://i.imgur.com/CYx9Es5.png" />

# Installfest - Ubuntu

### A note on copying commands

When possible, ***please copy the commands from this page***. You will use most of the commands here once and never again. Typing them out will only introduce the possibility of you making errors. Certain commands will require you to alter portions of them - this is specifically called out when they appear. 

### Copying text in code blocks

To copy text from code blocks, use your mouse to hover over the code block. A **Copy** button will appear in the upper right corner. Click this, and the text held in the code block will be put on your clipboard, ready to be pasted. By default, you'll need to use **`Ctrl` + `Shift` + `V`** to paste into the Ubuntu terminal.

![A codebock shown in GitHub pages. The Copy button is being pointed at by a red arrow.](./assets/code-copy.png)

## 1. Check Ubuntu is Up-To-Date

### Launch the Terminal application

To quickly launch applications, press the **`Super`** key (this is the name of the **`Windows`** key on your keyboard in Ubuntu) to launch System Search view and type **`Terminal`**. Select the Terminal application by pressing **`Enter`** when it appears. Get used to doing this often; it's the fastest way to start applications on Ubuntu!

![Launching the Terminal application using Spotlight. Get used to seeing this often; it's the fastest way to start applications on the Mac!](./assets/terminal-system-search.png)

The Terminal application should start!

### Update and Upgrade Ubuntu

Your Linux installation will **not** automatically perform updates, so run this command now to update manually:

```bash
sudo apt update && sudo apt upgrade
```

To run a command, paste (or type) it into your terminal, confirm it matches what you intended, and press the **`Enter`** key.

You'll be prompted for your user password and to accept the changes to be made. Do so. As you type your password in, you'll notice it doesn't appear in the terminal. This is normal for password entry; keep typing it in and hit **`Enter`** when you're done.

![The output of the command to update Ubuntu packages.](./assets/update-and-upgrade.png)

Above, you can see a potential output of the command to update Ubuntu packages. Your output may be different from this, but that's ok!

## 2. Discord

If you do **not** already have Discord:

We will be using Discord to communicate throughout the course. Download the app **[here](https://discord.com/download)** and install it. Please do not use the in-browser version of Discord, as it makes managing notifications unnecessarily difficult and makes it easy to miss important class information - the app is the way to go.

Because Discord is an application downloaded from the internet, you may be prompted to allow it to open after you've installed it. Grant this permission.

You will also be prompted to allow access to the Downloads folder. Grant Discord this permission by selecting **OK**.

When macOS prompts you to accept notifications from Discord ensure that you do so. This will allow you to receive message notifications.

## 3. Visual Studio Code

We will use VS Code as our code editor in class. Download and install the `.deb` package for VS Code **[here](https://code.visualstudio.com/)**.

### Install the `code` Command in your PATH

1. Launch VS Code using spotlight (**`⌘ Command + Space`** - then start typing **Visual Studio Code** until you see the app, then press `↩ Return`). When the app launches, you'll be prompted to confirm the action since you downloaded it from the internet.
2. Type **`⌘ Command  + Shift + P`** to open the command palette.
3. Start typing **shell command**, and when you see the **Shell Command: Install 'code' command in PATH** command, select it! Here's an example of what this will look like:

   ![The command palette, with the Shell Command: Install 'code' command in PATH option highlighted.](./assets/vsc-code-command.png)
4. You may be prompted to enter your user account password to continue. Do so if you are.
5. You'll be shown: **Shell command 'code' successfully installed in PATH.** Select **OK**.
6. Quit both VS Code and the Terminal application.
7. Relaunch Terminal

Check [**this link**](https://code.visualstudio.com/docs/setup/mac) for troubleshooting if you run into issues.

## 4. CURL

Since you already have the terminal open, take the opportunity to install `curl`, which will let you install applications with just a URL, as you'll see us do soon. Use this command:

```bash
sudo apt install curl
```

## 5. Zsh

Bash is Ubuntu's default shell (command interpreter), but Z shell is more commonly used in modern systems by default, so that's what we will use. Install it with this command, and accept the changes to be made by entering **`Y`** when prompted to continue:

```bash
sudo apt install zsh
```

Verify the installation with this command:

```bash
zsh --version
```

The version number should be 5.8 or greater

Make Zsh the default shell with this command:

```bash
chsh -s $(which zsh)
```

You may be prompted to provide your password. Do so!

End your terminal session by closing the terminal window. Log out of your account, then log back in.

Open a new terminal window. As shown below, you should be prompted to run a configuration setup for new users:

![The terminal after installing `zsh`.](./assets/zsh-first-launch.png)

Enter `2` to accept the default configuration.

Your terminal prompt should look a little different now!

![zsh in action!](./assets/zsh-in-action.png)

Let's confirm it worked with this command:

```bash
echo $SHELL
```

This should print **`/usr/bin/zsh`**.

## 6. Oh My Zsh

We will also install Oh My Zsh - an "open-source, community-driven framework for managing your Zsh configuration." Use this command:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![A successful installation of Oh My Zsh](./assets/oh-my-zsh-success.png)

Note that your prompt has now changed to simply be `~`. This is the desired outcome!


## 7. Python

Python is an extremely popular programming language with a simple syntax. It is a natural choice for developers to have in their toolbox. Python must be installed on your machine to execute programs written with it.

To install Python, run these commands in your terminal application:

```bash
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install python3.13
```

Make Python 3.13 the default version used with:

```bash
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.13.2
```

You can test the installation by running `python3 --version`.

## 8. Install PIP

Pip is the package installer for Python. You'll need it to use Python packages found on the [Python Package Index (PyPI)](https://pypi.org/).

Install pip with this command:

```bash
sudo apt install python3-pip
```

## 9. Install PIPENV

#### What is a virtual environment?

A virtual environment is a self-contained directory that you create using a tool like Pipenv, which contains a Python interpreter and all the libraries and dependencies needed for a particular project.

It allows you to isolate your project's dependencies from other projects on your system, preventing conflicts such as different versions of the same library used in different projects and ensuring that your project runs consistently across different environments.

Virtual environments provide a clean and isolated environment where you can install these dependencies without affecting other projects.

By creating a virtual environment for each project, you can:

- Install dependencies locally within the environment.
- Install additional packages required for your project, such as database drivers, middleware, or third-party packages.
- Ensure your project remains compatible with specific versions frameworks and other dependencies.
- Easily manage and update dependencies without worrying about conflicts with other projects.

### Pipenv Install Instructions:

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


## 10. PostgreSQL

PostgreSQL is a popular and robust Relational Database Management System (RDBMS).

PostgreSQL comes with Ubuntu, but we will want to ensure we have a specific version installed.

```bash
psql --version
```

If the output of this command ***starts*** with `psql (PostgreSQL) 16` then you don't need to install Postgres; you ***will*** need to configure it. Skip to the **Configure PostgreSQL** section below.

Otherwise, let's install version 16 of PostgreSQL!

### Install PostgreSQL

First, add the postgresql apt as a source for packages by running this command in your terminal:

```bash
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
```

You'll be asked to confirm this action. Do so.

Next, run the following command in your terminal to update your package lists and install PostgreSQL version 16:

```bash
sudo apt update
sudo apt install postgresql-16
```

You may be asked if you would like to continue. Type `Y` and hit the `Enter` key to continue installing.

Check that the correct version is installed with:

```bash
psql --version
```

The output of this command should ***start*** with `psql (PostgreSQL) 16`. If it does not, reach out to your instructor for troubleshooting steps

### Starting the PostgreSQL service

> 🚨 **Important!!** You'll have to run this command *on each restart* to start up the PostgreSQL service:

```bash
sudo service postgresql start
```

### Configure PostgreSQL

You must assign the default admin user a password to connect to a database. Do so with this command:

```bash
sudo passwd postgres
```

Enter a password when prompted. It is ***EXTREMELY IMPORTANT*** that you do not forget the password. You can make it the same password as your user account password if you prefer. Keep it stored in your password manager. Note that as you type, no characters will appear.

If the new password you have chosen is valid, you will see this returned in the console:

```plaintext
passwd: password updated successfully
```

Upon seeing this, stop the PostgreSQL service with this command:

```bash
sudo service postgresql stop
```

Close all running terminal instances, including any instances of VS Code that are currently open.

Open a new terminal instance. Start the PostgreSQL service again with:

```bash
sudo service postgresql start
```

We now need to create a database role that matches the name of your operating system user. Use this command. Do not replace `$USER` - this will automatically create a user that matches your Ubuntu OS username:

```bash
sudo -u postgres createuser $USER
```

Follow that up by creating a database of the same name. Again, do not replace `$USER`. This will automatically create a user that matches your Ubuntu OS username:

```bash
sudo -u postgres createdb $USER
```

Now run this command to switch to the postgres user:

```bash
sudo su - postgres
```

Finally, enter:

```bash
psql
```

You have now successfully entered the PostgreSQL shell as the postgres user!

### Assigning Roles

We want the user we just made to be able to create databases, so we need to assign it that role with this command in the postgres shell. ***YOU MUST replace `<user>` (including the `<` and the `>`) with your Ubuntu username:***

```sql
ALTER ROLE <user> WITH CREATEDB;
```

Don't forget the semicolon. It must be used at the end of the command.

You will also want to give this user superuser permissions. This will keep you from ever having to use the postgres user again. ***YOU MUST replace `<user>` (including the `<` and the `>`) with your Ubuntu username:***

```sql
ALTER ROLE <user> WITH SUPERUSER;
```

Again, don't forget the semicolon.

Close the terminal session and start a new one.

You should now be able to run this command and start the Postgres shell successfully:

```bash
psql
```

Let's test your ability to create databases. Run the following command in the postgres shell:

```sql
CREATE DATABASE apples;
```

As always, don't leave off the semicolon!

Next, enter the `\l` command to see a list of all databases. If you can see the `apples` database you just created, then success!

Let's go ahead and delete that database with the following command:

```sql
DROP DATABASE apples;
```

Enter `\l` again to confirm the database was dropped.


## 11. Node.js

Use this command to install `nvm`, which we will use to install Node.js. `nvm` stands for [Node Version Manager](https://github.com/nvm-sh/nvm) and can be used to swap between different versions of Node.js quickly. We won't swap between different versions in the course, but it's still a handy tool for managing our Node.js install and can help you manage your Node.js installation post-course. Get `nvm` with this command:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

You may see this prompt part way through the install process:

![Error message reads: (Head detached at FETCH_HEAD). That can't be good!](./assets/nvm-head-detached.png)

If you do, just hit **`q`** - that will exit this screen and return you to the below install process. If you don't get this error, that's great; continue until you see the completed installation of `nvm`:

![The completed installation of nvm.](./assets/nvm-install-complete.png)

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

```jsx
npm config set update-notifier false
```

There will be no output after running this command.


# 12. `~/code` directory 
**This folder will store all of your work for the course.**

- Create the folder: `mkdir ~/code`
- Navigate into the folder: `cd ~/code`
- Open the folder in VS Code: `code .`

### Notes:
- Mac/Linux: `~/` = your home directory (e.g., /Users/yourname/code or /home/yourname/code)
- Windows (WSL): `~/` = Linux home folder (/home/yourname/code). 
- Avoid /mnt/c/Users/... —> slow performance and potential issues.
- Using `~/code` ensures consistent file paths across macOS, Linux, and WSL, avoids cross-filesystem performance problems, and aligns with course content.


# 13. Install Git (UBUNTU)

At its core, GitHub (commonly abbreviated as GH) is a service for hosting Git repositories (which we'll talk about soon) in the cloud, but it also enables developers to collaborate on projects much more effectively. It might help to think of it as a social media platform for you and more than 100 million developers worldwide.

Ensure you have access to the most recent stable version of Git with this command:

```bash
sudo add-apt-repository ppa:git-core/ppa
```

You may be prompted for your Ubuntu password. If you are, enter it. When prompted to continue, press **`Enter`**. If you encounter an error during this process, check out the **Handling errors 💔** sub-section below.

Then enter:

```bash
sudo apt-get update
```

and then finally, use this command to install Git on your machine:

```bash
sudo apt-get install git
```

Enter **`Y`** when prompted to continue.

### Handling errors 💔

After running the `sudo add-apt-repository ppa:git-core/ppa` command above, you may encounter an `HTTPError`. If you do, ensure that your system date and time are correct, then try the same command again. If this does not resolve your issue, reach out to your Installfest point of contact for assistance!

## GitHub Accounts

### Personal GitHub Account

If you have **not** created a **personal** github account at [GitHub](http://github.com/), then do that first! 

Once created, you can proceed...

### GitHub Enterprise (GHE) Account

In addition to using GitHub, you'll use General Assembly's private GitHub Enterprise instance (commonly abbreviated as GHE) throughout the course. If you think of GitHub as a social media platform for developers worldwide, you can think of GitHub Enterprise as a social media platform just for developers at General Assembly.

You can sign up for an account here: **[http://git-invite.generalassemb.ly/]( http://git-invite.generalassemb.ly/)**

You may use the same username for both GH & GHE accounts; however, it's recommended that you distinguish between the two by appending **-ga** to your GH username, for example: **YourGitHubUsername-ga**

### What's the difference between GH and GHE? Why does this matter?

While they are very similar, these are two separate and distinct entities that are fully split and unaware of one another's existence.

You'll make all of your public contributions on GitHub, while your course materials, templates, labs, and more will come from GitHub Enterprise to protect General Assembly intellectual property.

<img src="./assets/installfest-github-pat-config-logo.png" width="400" align="center"/>

## Github Personal Access Token (BOTH ACCOUNTS)
**YOU WILL NEED TO DO THE PERSONAL ACCESS TOKEN FOR ALL GITHUB ACCOUNTS => personal and github enterprise**

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

**You will only see the token on this page ***ONCE***. You ***MUST*** copy it now and paste it in a secure and private place where you can easily access it later when you need it. Once ytou leave this page - you will not see it again!**

- Treat this token as you would a password! The token will be used in place of a password to interact with GitHub on the command line!

Using multiple machines? It is best practice to create a new token for each device requiring command-line access to GitHub. This way, if you need to revoke access to any single device, none of your other devices are impacted.

***Place the token in a secure place! The next time you interact with GitHub on the command line, you will be asked to provide a username and password. Use this token in place of a password.***

**YOU WILL NEED TO DO THE PERSONAL ACCESS TOKEN FOR ALL GITHUB ACCOUNTS**

### Git config

With Git installed, we can now make some configuration changes to make it a more effective tool. Complete all of the following configuration steps.

Use the below command to add a user name to Git, which will be used to identify your commits. Replace `User Name` with a name of your choice. Make sure you leave the quotes surrounding your username. Keep the name somewhat professional, or just use your name - this will be used to identify your commits on GitHub. There will not be any output from this command.

```bash
git config --global user.name "User Name"
```

Next, use the below command to add an email to Git, which will be used to identify your commits. Replace `user@email.com` with the email address associated with your **[`https://github.com`](https://github.com)** account. ***The email you provide MUST match the email address associated with your GitHub account.*** Ensure you leave the quotes surrounding your email. There will not be any output from this command. If you don’t have a **[`https://github.com`](https://github.com)** account yet, create one before you run this.

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

By default, Git will ask for a new commit message when commits are brought into a Git repo. The following command will force the default commit message for all those commits instead of prompting you to add a commit message. While this isn’t a Git command, we’re still tackling it as part of this section since it changes Git's behavior. There will not be any output from this command.

```bash
echo "export GIT_MERGE_AUTOEDIT=no" >> ~/.zshrc
```

Finally, turn off rebasing as the default behavior when pulling from a repo with the below command. There will not be any output from this command.

```bash
git config --global pull.rebase false
```
