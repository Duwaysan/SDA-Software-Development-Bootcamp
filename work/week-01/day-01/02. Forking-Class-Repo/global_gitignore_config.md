### Configuring a Global Git Ignore File (SKIP THIS => included in class repo)

***Note: This step is vital to getting a job after the course. If you do not complete these steps exactly, it will look extremely bad to a future employer when they look over your GitHub repos.***

Proper code, utilities, and the use of Git ignore files prevent us from uploading private secrets to the internet.

A global Git ignore file (**`.gitignore_global`**) will prevent us from uploading private secrets to the internet across all of your projects so that you don't have to worry about making the appropriate entries in every project's Git ignore file.

Use this command to create a **`.gitignore_global`** file in the user directory:

```bash
touch ~/.gitignore_global
```

There will not be any output from this command.

Next, configure Git to use this file:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

Open the new **`.gitignore_global`** file in VS Code:

```bash
code ~/.gitignore_global
```

![Creating and opening ~/.gitignore_global in VS Code](./assets/vsc-first-launch.png)

This may be your first time launching VS Code to work with an actual file. If so, congrats! You'll arrive at a page that should look a lot like this:

![The new .gitignore_global file open in VS Code.](./assets/vsc-gig-launch.png)

Here, you see the new **`.gitignore_global`** file open in VS Code. Note the **WSL** icon in the lower-left corner.

### Here is a [.gitignore_global file for you to use](./global-git-ignore.txt)

Open the above page and copy the contents of the code block from the page with the copy button. Note that you must be logged in to your GHE account to access this page!

Return to VS Code, then click inside the editor (the main portion of the VS Code window).

Paste the contents of the file you copied into the editor in VS Code. Doing this should result in your VS Code window looking similar to this:

![The end of the new .gitignore_global file.](./assets/vsc-gig-content.png)

Congrats, you just edited your first file in VS Code! This is a great time to turn on **Auto Save**! The **Auto Save** setting is in the **File** menu - select it, then re-open the **File** menu to ensure that there is a checkmark next to the **Auto Save** option, as shown below.

![Auto Save checked in the File menu, indicating that Auto Save is enabled.](./assets/vsc-auto-save-enabled.png)

This should save the file, but let's be sure by manually saving it by using **Save** in the **File** Menu or pressing **`⌃ Ctrl + S`**.

You can close VS Code for now.