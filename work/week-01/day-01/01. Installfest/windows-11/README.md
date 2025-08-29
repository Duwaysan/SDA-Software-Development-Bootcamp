<img width="100%" src="https://i.imgur.com/CYx9Es5.png" />

# Installfest - Windows 11

### A note on copying commands

When possible, ***please copy the commands from this page***. You will use most of the commands here once and never again. Typing them out will only introduce the possibility of you making errors. Certain commands will require you to alter portions of them - this is specifically called out when they appear. There are no bonus points for doing work already done for you.

### Copying text in code blocks

To copy text from code blocks, use your mouse to hover over the code block. A **Copy** button will appear in the upper right corner. Click this, and the text held in the code block will be put on your clipboard, ready to be pasted.

![A codebock shown in GitHub pages. The Copy button is being pointed at by a red arrow.](./assets/code-copy.png)

## 1. Window and Screen Real Estate Management

We **highly** recommend using a window management tool to assist you in organizing windows while developing. Throughout development engineers will typically have a minimum of two different applications or sets of information in different screens they need to be able to work with. Usually a code editor or IDE (integrated development environment) and an internet browser. 

Windows 11 comes installed with `Snap Layouts` automatically. This should be more than enough to help with screen management.. Windows 10 users must install MS Power Tools. You are welcome to as well, otherwise skip this step...

[Microsoft Power Tools](https://learn.microsoft.com/en-us/windows/powertoys/) has a utility tool called [Fancy Zones](https://learn.microsoft.com/en-us/windows/powertoys/fancyzones) that acts as a tool to organize your multiple windows to help you be more productive throughout dev elopment. 

You can follow the installation instructions here:

[MS Power Toys Install](https://learn.microsoft.com/en-us/windows/powertoys/install)

## 2. Configure Windows Terminal

Windows 11 comes with a built-in Terminal application for us to use.

To launch the Terminal application, press the **`Windows Key`** to launch Windows Search and type **`Terminal`**, then select the **Run as administrator** option on the right. You will be prompted to allow elevated permissions - do so.

![Terminal found using a search in the Start menu. The Run as administrator option is highlighted.](./assets/start-terminal-admin.png)

When the Windows Terminal is launched, ***pin it to your taskbar*** by right-clicking the icon in the taskbar and selecting the **Pin to taskbar** option. This is how we will eventually launch Ubuntu.

![PowerShell running with administrative access in the Windows Terminal. Note the shield in the title bar indicating that PowerShell is running with elevated permissions!](./assets/powershell-admin.png)

Note the shield in the title bar indicating that PowerShell is running with elevated permissions!

## 3. Install WSL 2

WSL 2 requires Windows 10 version 2004 or later (build 19041+). If your machine does not meet this version, you will not be able to install WSL 2.

Never heard of WSL before? You're not alone; here's what Microsoft has to say about it:

> The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup.

That's fun, but what does that mean in practice? As a Windows user, you can run the same command line apps and use the same commands as your macOS and Ubuntu neighbors in the cohort.

## What you need to begin *(you must read this, do not skip this, this is important)*

- ***You must be running Windows 11 (build 22000 or greater). We recommend the latest 23H2 (22631).***

  To find your Windows version and build number, use **`Windows Logo Key` + `R`** on your keyboard, type **`winver`**, and select **OK**. You'll see a dialog window like the one below. Note the Version: 23H2.

  ![A dialog box demonstrating a Windows 11 PC eligible for use in SEI.](./assets/winver-dialog.png)
- Familiarity with your system's BIOS may be required. This is extremely important as you may need to adjust BIOS settings to complete the WSL install, particularly if your machine uses an AMD processor. You cannot screen share within the BIOS environment, and your BIOS environment will be unique to the device you use. Therefore, it is on you to enter this environment and find the settings you will need to change. ***If you change the wrong BIOS setting, your computer may not start correctly until you reset BIOS to defaults. Be cautious, but don’t panic — this is reversible.***
- A user account with administrative privilege to your local installation of Windows 11.
- A Microsoft Account with access to the Microsoft Store application. All requirements are free, but some are only available from the Microsoft Store.
- At least 20GB of free hard drive space.
- At least 8GB of RAM. 16GB of RAM or more is preferable and will improve your learning experience (particularly when screen sharing in Zoom).
- A modern processor capable of running virtual environments - specifically processors with Intel Virtualization Technology (Intel VT) or AMD Virtualization (AMD-V) technology.
- A fundamental understanding of Windows and Linux system administration and debugging.

## Install WSL

Use this command to install Ubuntu in WSL2. You may be asked to allow apps to have administrative access throughout this process; do so when asked.

```powershell
wsl --install -d Ubuntu
```

To run a command, paste (or type) it into your terminal, confirm it matches what you intended, and press the **`Enter`** key.

Below, you can see the expected output shown in PowerShell after running the install command.

![The expected output shown in PowerShell after running the above command.](./assets/powershell-wsl-install.png)

## 4. Restart your computer

Save any work you want to keep, including this page, and restart your computer to continue!

Upon restarting, the Ubuntu Installer will launch automatically (as shown below) and then finalize the installation, which may take a while. If you get an error message or run into another issue, check out the **Handling errors 💔** subsection below.

![The Ubuntu Installer auto-running after a system restart.](./assets/ubuntu-install.png)

The Ubuntu Installer auto-running after a system restart.

### Handling errors 💔

#### Virtual Machine error

You may see this message after your machine restarts:

```plaintext
Please enable the Virtual Machine Platform Windows feature and 
ensure virtualization is enabled in the BIOS.
```

Or this message:

```plaintext
The virtual machine could not be started because a required feature is not installed.
```

If either of these errors occurs, run the command below in PowerShell with Administrator permissions (reference the above instructions to launch PowerShell as the Administrator):

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

and restart your machine.

***If the error persists after restarting, you likely need to enter your BIOS and enable Intel Virtualization Technology (Intel VT) or AMD Virtualization (AMD-V) technology to continue. This error is most common with AMD processors.***

#### The Ubuntu application does not start upon login

Launch the Ubuntu application by searching for **Ubuntu** in the Start menu.

#### I do not have any of the above errors

Reach out to your Installfest point of contact for further guidance.

## 5. Creating a User Account

You will then be prompted to create a username and password. The username should not have any spaces in it. The username doesn't need to match your Windows username, but it can if you would like. *The password will not be visible as you type it. This is common in many command-line applications.* It is ***vital*** that you do not forget this password, as you will use it throughout the course to interact with WSL.

![Ubuntu successfully launching with a completed setup for the first time!](./assets/ubuntu-first-time-launch.png)

🎊 You're now running WSL 2! Congrats! Close Ubuntu for now — in the next step we’ll relaunch it inside Windows Terminal. Don't close this guide though; you're not entirely done yet.

## 6. Launch the Terminal

Launch the Terminal application.

The terminal will initially launch with only a Windows PowerShell tab. Let's configure it to launch into your Ubuntu installation by default. Select the dropdown arrow in the title bar, then select **Settings** to open the Terminal settings.

![Accessing the Settings tab in Terminal.](./assets/windows-terminal-settings-access.png)

The **Settings** tab should open with the **Startup** section already selected. The first order of business is changing the **Default profile** setting in this section to **Ubuntu**. While we're here, change the **Default terminal application** to **Windows Terminal**. After making these modifications, click the **Save** button.

![In the Settings tab in Terminal, the Startup section has been selected and the Default profile has been changed to Ubuntu.](./assets/windows-terminal-startup-settings.png)

Close the Terminal app one more time.

## Launching Ubuntu

Drum roll! Launch the Terminal application, and if everything has been successful so far, you should see a window very similar to the one below.

![Successfully launching into Ubuntu by default using the terminal.](./assets/windows-terminal-ubuntu-first-launch.png)

A couple of items to note:

- The terminal should launch directly into the Ubuntu environment.
- The command line prompt should read `Your_Ubuntu_Username@Your_Device_Name:~$`. As shown above, the Ubuntu Username is `student`, and the device name is `Win11`. Yours will be different. The `~` represents that we are in the *current user's home directory*.


# CONTINUE WITH UBUNTU INSTRUCTIONS!
This file is just for ensuring you have WSL / Ubuntu installed - the rest of the installation is in the Ubuntu folder / readme file...

--> [UBUNTU](../ubuntu/README.md)