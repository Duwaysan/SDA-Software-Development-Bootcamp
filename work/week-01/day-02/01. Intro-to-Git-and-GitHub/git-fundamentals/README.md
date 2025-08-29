<h1>
  <span class="headline">Intro to Git and GitHub</span>
  <span class="subhead">Git Fundamentals</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to use `git status` to interpret the state of a local repository and `git remote -v` to list available remotes attached.

## Check the local repository status

Command:

```bash
git status
```

### What it does

This command tells us what is happening in a local repository at any given moment. Is the branch up to date? Are there changes we can commit to it? What is the state of those files?

### When and why we use it

Use this command to help understand the current status of our Git repo.

If you're ever having trouble with git commands, `git status` is an excellent way to start troubleshooting!

## View remotes

Command:

```bash
git remote -v
```

### What it does

This command lists all of the remotes that have been configured for the local repository. When you clone a repository, the location you cloned it from is automatically added as the remote called `origin`.

### When and why we use it

When you push/pull code to/from GitHub, you can select which remote you'd like to use. This command helps you identify which remotes are available. For now, you'll typically only use an `origin` remote and won't add more. When you start collaborating with others, this will change.
