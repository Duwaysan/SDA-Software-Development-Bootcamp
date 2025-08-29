# Deploying Your Portfolio

To deploy your website, we will use a deployment service that is built into github that allows us to deploy a basic frontend website for free. 

### 💡 What is gh-pages?

- gh-pages stands for GitHub Pages.

- It’s a free hosting service from GitHub that lets you publish websites directly from a GitHub repository.

- Your site is served from a special branch called gh-pages, or from the /docs folder on the default branch.

- Version-Controlled Deployment 📦
  - Your site comes straight from your Git repo, which means your code and your live site are always in sync.

- Custom Domains 🌐
  - You can use a GitHub URL (like username.github.io/repo) or point your own domain to it.

- Great for Front-End Projects 🖥️
Works perfectly for static websites built with HTML, CSS, JavaScript, or static site generators (React, Vue, Jekyll, etc.).

### ⚙️ How it works (simplified)

1. You push your code to a branch called gh-pages (or configure GitHub Pages in repo settings).

2. GitHub automatically builds and hosts your site.

3. Access it at: `https://username.github.io/repository-name`


## Let's Deploy!

Because we started building our portfolios in their own folders, outside of the class repository, we will be able to more quickly deploy our portfolios. If you had done your work in the class reopsitory, we could deploy the content, but it would **not** have automatically displayed the portfolio. It would have taken a ton of work just to deploy on small set of files. 

SO - we need to accomplish the following in order to get deployed to gh-pages...

1. We need a repository for the portfolio on github.
2. We need to establish the local `/code/portfolio` directory as a github repository.
3. Connect the local repo to the remote repo.
4. Create the gh-pages branch
5. Push the content we want to deploy.

To do this we will use TWO Guides in this order...

### 1 - [Create New GitHub Repository](../../../../resources/GitHub/NEW_REPOSITORY.md)
### 2 - [Deploy to GH-PAGES](../../../../resources/Deployment/GitHub-Pages.md)


🚀🚀🚀 Congratulations! You're officially on the web! 🚀🚀🚀
