<h1>
  <span class="headline">Intro to Git and GitHub</span>
  <span class="subhead">Git Concepts</span>
</h1>

**Learning objective:** By the end of this lesson, students will be able to explain the purpose of a Git repository, describe the function of Git branches, and identify the role of remotes in facilitating collaboration.

## What is version control?

Version control keeps track of changes made to files over time. It also makes working in teams easier because it enables people to work on the same project without overriding each other's changes.

## Why use version control?

As developers, version control lets us:

- Review changes made over time and see who did what.
- Work with others.
- Experiment without impacting the main codebase. If the new idea works, it can be added to the main project.
- Return to an older version, particularly useful if a bug has been introduced into the code.
- Work offline, then sync later when reconnected.

## Git-flavored version control

We'll use [Git](https://git-scm.com/) - the world's most popular version control system. [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) created Git in 2005 to help develop his main project at the time - Linux.

Git is designed to track code changes. Using Git enables developers to collaborate, manage code history, test ideas, and more. Git can work alone or with social platforms that layer in additional features. Git has a few core concepts, which follow:

### Git repository

A Git repository (aka Git repo, or just repo) is essentially a copy of a project. What makes the repo special is that it holds key details for every line of code in a project regarding:

- Who touched which part of the code.
- What they changed.
- When it happened.

This information helps developers use Git to collaborate, track changes through time, or even revert to previous versions when necessary.

Git repositories can be stored locally on a developer's machine or hosted on remote servers like GitHub.

### Git branch

Branches are used to test new things or build new features, and they help developers working on the same project avoid accidentally messing up each other's code. For now, we'll work primarily in the `main` branch.

In this course, we will use the `main` branch as our central source of truth and the default branch name. This is also the default branch name on GitHub.

### Remotes

A remote is a reference to a repository hosted on an external server, allowing synchronization and collaboration between a local Git repository and its counterpart located elsewhere.

In this course, remotes typically take the form of a URL pointing to a repository on GitHub, but other code-sharing platforms like GitLab and BitBucket exist. When collaborating, these external repositories provide a centralized location for sharing, updating, and accessing a codebase among multiple team members. We'll discuss remotes in more detail when we cover GitHub itself.
