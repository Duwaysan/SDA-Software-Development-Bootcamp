# Configuring Git Credential Management in WSL 2

## 1. Goal

This guide documents the process of setting up Git inside Windows Subsystem for Linux (WSL 2) to use the native **Windows Credential Manager**. This will make it easier to push to github without having to enter your username and password everytime.

## 2. Prerequisites

Before you begin, make sure you have the following:

* **WSL 2 Installed**: You should have a working WSL 2 environment with Ubuntu.
* **Git for Windows**: The latest version of [Git for Windows](https://git-scm.com/download/win) must be installed on your host Windows machine.
* **A Personal Access Token (PAT)**: You need a PAT from your GitHub with a `repo` scope
    * [You can create one here](https://github.com/settings/tokens/new) if you haven't already.
    * Copy the token and save it somewhere secure temporarily. You will only need it once.

## 3. Setup 

### Step 1: Remove the incorrect Github credentials from Windows Credentials Manager

1. Open the Start Menu and search for "Credential Manager". Once open it should like so:
<img width="600" height="206" alt="shot1" src="https://github.com/user-attachments/assets/789be1a8-11a3-407e-b4b0-1c8738394e62" />

2. Click on "Windows Credentials" as selected above

3. Look for an entry named git:https://github.com in the list (you may have one for each account):
<img width="660" height="64" alt="shot2" src="https://github.com/user-attachments/assets/54de13d4-7626-4cf3-ae74-04a9ce17a7a1" />

4. Click on it to expand it, and then click "Remove".
<img width="660" height="198" alt="shot3" src="https://github.com/user-attachments/assets/d276a165-f85d-4bdb-a98b-d59b6795c59f" />

5. Confirm you want to delete the key
<img width="729" height="380" alt="shot4" src="https://github.com/user-attachments/assets/69a78286-d589-4d61-94fc-15d16ffeb04e" />

### Step 2: Configure WSL Git to Use the Windows Credential Manager

All commands in this step are to be run **inside your WSL terminal**.

1.  Open your WSL/Ubuntu terminal.
2.  Run the following command to tell your WSL Git installation where to find the Windows credential helper:

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
```

#### **Explanation of the Command:**

* `git config --global`: Sets a Git configuration for your user account inside WSL.
* `credential.helper`: Specifies the program Git should use to store and retrieve credentials.
* `"/mnt/c/Program\ Files/..."`: This is the crucial part. It provides the full path to the Git Credential Manager.

### Step 3: The One-Time Authentication

With the helper configured, you now need to perform one action that requires authentication. This will trigger the credential manager to prompt you for your details, which it will then save for all future sessions.

1.  Inside your WSL terminal, navigate to a repository or clone a new private one.
2.  Perform an action like `git pull` or `git push`.

    ```bash
    git push
    ```

3.  The Git Credential Manager will now activate and prompt you for your credentials one at a time. It might look like this if it's on your terminal:
<img width="577" height="72" alt="shot5" src="https://github.com/user-attachments/assets/55f71c6b-0e5b-496f-8b19-8198f06b3525" />


4.  ❗❗ Enter your credentials as follows:
    * **Username**: Enter your GitHub username.
    * **Password**: **PASTE YOUR PERSONAL ACCESS TOKEN HERE.** Do **not** use your regular GitHub account password.

### Step 4: Verification

Once the command succeeds, your PAT is now securely stored in the Windows Credential Manager.

* **Test It**: Run another Git command that requires authentication (e.g., `git pull` again). It should now complete immediately without asking for a username or password.
* **Confirm in Windows**: You can optionally open the **Credential Manager** on your Windows host, go to **Windows Credentials**, and you will now see an entry listed for `git:https://github.com`. This confirms the credential was successfully stored.

Your setup is now complete. Pushing to GitHub will no longer require you to authenticate.