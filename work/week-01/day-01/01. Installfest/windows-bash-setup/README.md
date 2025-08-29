# windows-setup

## Windows Native (This is an optional path for those with advanced windows skills as you will have to rely on your own intuition for installs)

### Installing VS Code

VSCode is going to be our text editor of choice for this course.

You can download it **[HERE](https://code.visualstudio.com/download)**.

Once downloaded, go ahead and run the installer. Once the installer completes, open VSCode.


### Installing GitBash

Gitbash allows your PC to run code as if it is in a UNIX enviorment, allowing you to interface with your code from your terminal.


Install the x64 bit version from the link below.

When offered to select your default code editor, make sure to select VS Code.

```sh
https://git-scm.com/download/win
```

Follow the instructions below after opening the file.

## Select Components

Select All Check boxes except Additional Icons/On The Desktop.

![image](https://user-images.githubusercontent.com/100214696/214721011-2e0db980-c92c-4e16-9012-e63d799cab04.png)

## Choosing The Default Editor Used By Git

Select use Studio Code as Git's default editor.

![image](https://user-images.githubusercontent.com/100214696/214721453-c1f34ad3-36e8-49d9-a149-4cedc4705c07.png)

## Adjusting The Name Of The Inital Branch In New Repositories

Select override and confirm the name in the textfield is main.

![image](https://user-images.githubusercontent.com/100214696/214721687-f9530c6d-ba47-4b64-aa58-ced3a9886954.png)

## Adjusting Path Enviornment

Select Git from the command line and also third party software.

![image](https://user-images.githubusercontent.com/100214696/214721798-58b3ff96-e70c-44ac-8d1b-9bf79b883763.png)

## Choosing the SSH executable

Select use bundled OpenSSH.

![image](https://user-images.githubusercontent.com/100214696/214722019-2047ed2a-adc3-4f71-8b7a-a70237ab6808.png)

## Choosing HTTPS transport backend

Select use the OpenSSL library.

![image](https://user-images.githubusercontent.com/100214696/230503485-3c09500e-573e-4230-91a1-4d3168408152.png)

## Configuring the line ending conversations.

Select checkout windows-style, commit Unit-style line endings

![image](https://user-images.githubusercontent.com/100214696/214722445-bffe5110-7a9b-4842-9fc2-938664528a9a.png)

## Configuring the terminal emulator to use with Git Bash.

Select Use Windows default console window.

![image](https://user-images.githubusercontent.com/100214696/214950182-49927e0a-e607-42ea-9839-8ded82ede436.png)

## Choose the default behavior of git pull

Select Default.

![image](https://user-images.githubusercontent.com/100214696/214723099-9d22a4a9-2505-44ca-ba39-8ba8b544e585.png)

## Choose Credential Helper

Select Git Credential Manager.

![image](https://user-images.githubusercontent.com/100214696/214725095-cff2e9be-70e7-402a-bce0-13b725e9249a.png)

## Configuring Extra Options

Select Enable file system caching.

## Configuring Experimental Support 

Select none.

Click Install.

### Installing Node.JS

Install the 64x .msi version from the link below.

```sh
https://nodejs.org/en/download/
```

## Custom Setup 

After opening and getting passed the inital setup screen you'll be met with this section.

![image](https://user-images.githubusercontent.com/100214696/214727722-f9a4ec8f-bad4-446d-9f78-60bb03a52e3e.png)

Click next.

## Tools For Native Modules

![image](https://user-images.githubusercontent.com/100214696/214730833-ed9f94d9-c864-46f5-9a5d-b0039991f133.png)

Select check the box.

Press next click install.

## Terminal Prompts

You will be met with your native terminal as seen below.

![image](https://user-images.githubusercontent.com/100214696/214728607-cf710f3f-1595-4476-ae73-7f4c4b7bc646.png)

Press any key as prompted.

After a brief wait it will ask for powershell to make changes, allow.

It will spend some time loading and downloading dependancies, you'll be met with something that looks like the photo below. This denotes that the process is complete and you can close the window.

![image](https://user-images.githubusercontent.com/100214696/214728848-87953129-8216-4822-baa3-66cc829a7eb2.png)

### Confirming Node Installation

Open Git Bash from your windows search tool

![image](https://user-images.githubusercontent.com/100214696/214949524-101be97d-2873-401a-96b0-fe2fbe9d461e.png)

Inside of the terminal simply type in node and you should get the current version

![image](https://user-images.githubusercontent.com/100214696/214953280-03cc149c-f084-414a-855d-2051e19bc1f8.png)

Press CTRL + C to exit the node shell

Lastly, to ensure all packages were correctly installed type 
```sh
npm --v
```
