<img width="100%" src="https://i.imgur.com/CYx9Es5.png" width="900" />

<div align="center">
<img src="https://i.imgur.com/ce7PitU.png" style="max-width: 400px;">
<br/><br/> 

# Github Resource Page
</div>

- Please use this page as a starting point to build resources for all things CLI.
- Feel free to add your own links and resources over time to this page and associated folders.
- Don't forget to check the current folder for other cheatsheets and related resources.

## Resource Explanation
**GitHub** is a web-based platform for version control and collaboration that allows developers to store, manage, and track changes in their code. It is built on Git, a distributed version control system, and provides tools for collaborative software development.

**<small>IMPORTANT: "Nested" repos are never permitted. A nested repository refers to a Git repository inside another Git repository, meaning there is a .git directory inside a subdirectory of another Git-tracked project. This setup is generally not recommended because Git does not track nested repositories by default, leading to potential issues with version control.</small>**


## Contents

<!-- no toc -->
- [What is version control](#what-is-version-control)
- [Git vs. GitHub](#git-vs-github)
- [Common Terms](#common-terms)
- [External Resources](#external-resources)
- [Git Enterprise Signup](#git-enterprise-account-signup)
- [Git Configuration](#git-configuration)
- [Forking A Repository](#forking)
- [Cloning A Repository](#cloning)
- [Committing Your Work](#committing)
- [Undoing a Commit](#undoing-a-commit)
- [Setting a Remote Connection](#setting-remote-connection)
- [Pulling Updates](#pulling-updates)
- [Merge Conflicts](#merge-conflicts)

## What is version control

A Version Control System (VCS) records changes to files over time so that you can recall specific versions later.

It also makes working in teams easier, because it enables developers to submit changes to be merged into the codebase.

More specifically, a VCS allows you to:

- Revert files back to a previous state
- Review changes made over time
- Collaborate on a set of files with others
- Create separate "branches" of the codebase to develop new features on without impacting the "main"/"master", or production, branch.

In SEI, we'll be using the world's most popular version control system - [git](https://git-scm.com/).

Git was created by [Linus Torvolds](https://en.wikipedia.org/wiki/Linus_Torvalds) in 2005 to help with the development of his main project at the time - developing Linux.

## Git vs. GitHub

GitHub is not the same as git. **GitHub** is a social network built around git. It has completely changed the way we, as programmers, share and work on code. GitHub is now the largest online storage space of collaborative works, and it works with git in order to keep track of versions, issues, and requests for changes.

GitHub also plays the important role of a cloud-based backup system - a safe place for all your work!  Your code, and the time you spent writing it, is valuable, therefore, you don't want to risk losing it to hardware failure, etc. So we "connect" our local git repo to a "remote" repo on GitHub where we can then "push" code to, and "pull" code from - on demand.

In summary:

- Git provides us with local repositories on our computers
- GitHub provides us with remote repositories stored in the cloud

## Common Terms
<table>
  <thead>
    <tr>
      <th><strong>Term</strong></th>
      <th><strong>Definition</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Repository (Repo)</strong></td>
      <td>A storage location for a project, containing files, folders, and version history.</td>
    </tr>
    <tr>
      <td><strong>Commit</strong></td>
      <td>A snapshot of changes made to the codebase, stored in Git history.</td>
    </tr>
    <tr>
      <td><strong>Branch</strong></td>
      <td>A separate version of the repository used for development without affecting the main code.</td>
    </tr>
    <tr>
      <td><strong>Main (or Master) Branch</strong></td>
      <td>The primary branch where the final version of the project is maintained.</td>
    </tr>
    <tr>
      <td><strong>Fork</strong></td>
      <td>A personal copy of someone else's repository on your GitHub account.</td>
    </tr>
    <tr>
      <td><strong>Clone</strong></td>
      <td>A local copy of a remote repository, allowing offline development.</td>
    </tr>
    <tr>
      <td><strong>Pull Request (PR)</strong></td>
      <td>A request to merge changes from one branch (or fork) into another.</td>
    </tr>
    <tr>
      <td><strong>Merge</strong></td>
      <td>Combining changes from different branches into one branch.</td>
    </tr>
    <tr>
      <td><strong>Rebase</strong></td>
      <td>Moving or combining commits to create a cleaner Git history.</td>
    </tr>
    <tr>
      <td><strong>Push</strong></td>
      <td>Uploading local changes to the remote repository.</td>
    </tr>
    <tr>
      <td><strong>Pull</strong></td>
      <td>Fetching and merging changes from the remote repository into the local repository.</td>
    </tr>
    <tr>
      <td><strong>Fetch</strong></td>
      <td>Retrieving the latest changes from a remote repository without merging them.</td>
    </tr>
    <tr>
      <td><strong>GitHub Actions</strong></td>
      <td>A CI/CD automation tool for building, testing, and deploying code.</td>
    </tr>
    <tr>
      <td><strong>Issue</strong></td>
      <td>A way to track bugs, feature requests, and other project tasks.</td>
    </tr>
    <tr>
      <td><strong>Discussion</strong></td>
      <td>A forum-like feature for project-related conversations.</td>
    </tr>
    <tr>
      <td><strong>Wiki</strong></td>
      <td>A documentation section for repositories, used for guides and references.</td>
    </tr>
    <tr>
      <td><strong>Gist</strong></td>
      <td>A lightweight way to share code snippets and notes publicly or privately.</td>
    </tr>
    <tr>
      <td><strong>GitHub Copilot</strong></td>
      <td>An AI-powered coding assistant that suggests code in real-time.</td>
    </tr>
    <tr>
      <td><strong>GitHub Pages</strong></td>
      <td>A free hosting service for static websites from a repository.</td>
    </tr>
    <tr>
      <td><strong>Actions Workflow</strong></td>
      <td>A sequence of automated steps (e.g., testing, deployment) in GitHub Actions.</td>
    </tr>
    <tr>
      <td><strong>Secrets</strong></td>
      <td>Securely stored environment variables used in workflows and actions.</td>
    </tr>
    <tr>
      <td><strong>Webhook</strong></td>
      <td>A way to trigger automated actions when events occur in a repository.</td>
    </tr>
    <tr>
      <td><strong>.gitignore</strong></td>
      <td>A file that tells Git which files/folders to ignore in version control.</td>
    </tr>
    <tr>
      <td><strong>README.md</strong></td>
      <td>A markdown file typically used to describe a project and its usage.</td>
    </tr>
    <tr>
      <td><strong>License</strong></td>
      <td>Specifies the usage rights and restrictions of a repository's code.</td>
    </tr>
    <tr>
      <td><strong>Watch</strong></td>
      <td>A way to receive notifications about updates in a repository.</td>
    </tr>
    <tr>
      <td><strong>Collaborator</strong></td>
      <td>A person with direct access to a repository for contributions.</td>
    </tr>
    <tr>
      <td><strong>Contributor</strong></td>
      <td>Anyone who has contributed code, issues, or discussions to a project.</td>
    </tr>
    <tr>
      <td><strong>Organization</strong></td>
      <td>A group account for managing multiple repositories and collaborators.</td>
    </tr>
    <tr>
      <td><strong>Team</strong></td>
      <td>A group of users in an organization with shared access permissions.</td>
    </tr>
    <tr>
      <td><strong>Milestone</strong></td>
      <td>A grouping of issues and pull requests toward a specific goal.</td>
    </tr>
    <tr>
      <td><strong>Label</strong></td>
      <td>A tag used to categorize issues and pull requests.</td>
    </tr>
    <tr>
      <td><strong>Release</strong></td>
      <td>A packaged version of the software that includes tagged commits and changelogs.</td>
    </tr>
    <tr>
      <td><strong>Tag</strong></td>
      <td>A named reference to a specific commit, often used for versioning releases.</td>
    </tr>
    <tr>
      <td><strong>SSH Key</strong></td>
      <td>A secure authentication method for accessing GitHub repositories.</td>
    </tr>
    <tr>
      <td><strong>GitHub CLI</strong></td>
      <td>A command-line tool for interacting with GitHub from the terminal.</td>
    </tr>
  </tbody>
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


## Git Enterprise Account Signup

1. If you have not signed up yet, here's the link to do so: [https://git-invite.generalassemb.ly](http://git-invite.generalassemb.ly)
2. In another tab, browse to the GA class repo:  TBD

## Git Configuration
When working with a computer that has not been setup to work with github, we will need to implement a few configurations.

#### Setup your standard branch:
---
   
<small> Repositories now have a standard branch called “Main” that is created when a git repository is initialized. This is a change from the previous standard branch called “Master”. Our computers still initialize new local repositories as “Master”. To be in sync with GitHub, we need to configure our local machines to init as Main instead of Master. Running this line of code will permanently set the config to Main instead of Master... </small>

Run this once:

```git config --global init.defaultBranch main```

#### Setup your username and email:
---
<small>
The username and email configuration will determine which account the repositories and commits will be related to. The account information will come directly from the GitHub account with which you want the repository to be connected. This can be done on a global level / setting, or specific to individual local repositories.
</small>
   
#### Repository Specific:

- ```git config user.name "Project-Specific Name"```
- ```git config user.email "project-email@example.com"```


#### Globally:
- ```git config --global user.name "name"```<br/>
- ```git config --global user.email "email address"```


#### Check GitHub Configs:
---
<small>
The following commands are many of several ways to access github config info:
</small><br/><br/>

- ```code ~/.gitconfig```
- ```git config --global --list```
- ```git config --global -l```
- ```cat ~/.gitconfig```


## Forking

Forking in GitHub is the process of creating a personal copy of someone else's repository in your own GitHub account. This allows you to freely experiment with changes without affecting the original project.

You will have read-only access to the GA class repo.  However, you most certainly will want to be able to make changes (e.g., add notes, save code exercises, etc).  These changes will be saved to your own personal copy of GA's Student repo - known as a **fork**. To get this fork do the following:

1. Make sure that you're logged in to your github account. 
2. In the top-right corner of the page, click the `Fork` button.
You now have a copy of the repo in **your** Enterprise GitHub account!


## Cloning

Cloning in GitHub is the process of creating a local copy of a repository from GitHub onto your computer. This allows you to work on the project offline, make changes, and push updates back to the remote repository when ready.

1. Navigate to the web page of the repository you would like to create a local copy of. Once there click the green `<> Code` button.
2. In the pop-up window you will see these options: ` HTTPS SSH GitHub CLI`. Select `HTTPS` and copy the URL to your clipboard for the repository.
3. Open Terminal and navigate to the location where you would like to clone the repository to. Keep in mind it will create a new folder and repository within that new folder in the current location. **Make sure the current location is not already a repository.**
4. In Terminal, type `git clone` and follow it by pasting in the copied URL from the clipboard. The command should now look something like this:

```
git clone 'url link here'
```

5. Run the command.
6. You now have a local copy of the repository!


## Setting Remote Connection

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which remotes exist for a given local repo using this command:

```
git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **remote** that points to GA's class repo that you forked:

```
git remote add upstream 'url link here'
```

Note that by convention, the remote that points to the *original* GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo) and `upstream` (GA's class repo).



## Committing
As we go through the development process we will want to save our work and ultimately push our work to the remote repository. This process is called 'committing' your work and happens in three steps. 
1. Adding the files you want to be committed. 
2. Staging the files to be committed and adding a detailed message as to what is in the commit.
3. Pushing the staged commit to the remote repository.

These are the commands:

```
git add -A
git commit -m "Add amazing work..."
git push origin main
```

## Undoing a Commit
In Git, HEAD represents the latest commit on the current branch. The number after HEAD~ indicates how many commits before the current commit you want to reference.

Examples:
<table>
    <tr>
        <td>HEAD~1</td>
        <td>Refers to the commit one step before the latest commit (the immediate previous commit).</td>
    </tr>
    <tr>
        <td>HEAD~2</td>
        <td>Refers to the commit two steps before the latest commit.</td>
    </tr>
    <tr>
        <td>HEAD~3</td>
        <td>Refers to the commit three steps before, and so on.
Each number moves one commit further back in history.</td>
    </tr>
</table>


#### 1. Undo the last commit but keep changes (soft reset):
A soft reset is when the files have been staged and are ready to be pushed, but have NOT been pushed yet.
```
git reset --soft HEAD~1
```
Moves HEAD back by 1 commit.
Keeps the file changes staged.
Useful if you want to redo the commit with a new message.


#### 2. Undo the last commit and discard changes completely (hard reset)
Deletes all changes made in the last commit.
Warning: This action is irreversible unless you have a backup.
```
git reset --hard HEAD~1
or
git reset --hard HEAD~2
```
<small>^^the number represents how many commits you want to go back^^</small>

## Pulling Updates
Each day (maybe a few times a day), instructional materials may be pushed to the class repo by your instructors. You will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter code", etc.

1. If you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need to <a href="#committing">commit</a> those changes.

2. Make sure you have <a href="#setting-remote-connection">set the remote / upstream connection.</a>
   
3. With steps 1 and 2 complete, you can now **fetch** the updates from the **upstream** and merge them into your **local** repo (on your computer) with this one step:

```
$ git pull upstream main
```

## Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will *annotate* your code to show you how your local code differs from the code being merged from the remote. An example of such annotation is below.

```
<<<<<<< HEAD
// Local code is here
=======
// Changes you are pulling are here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit` normally.

During group project merge conflicts will likely occur giving you an opportunity to learn more about them then.

