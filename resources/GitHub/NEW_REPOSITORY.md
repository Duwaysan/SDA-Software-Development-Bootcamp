<img width="100%" src="https://i.imgur.com/CYx9Es5.png" />

# Creating a new GitHub Repository

Creating a new repository is NOT overly complicated and is a process you most likely will do multiple times. It can be confusing, so I would like to provide you with two different options to make this happen.<br/><br/>

---
---
**Choose ONE of the two following options to make this happen**

- CHOOSE [**PATH 1**](#path-1---clone-a-repository) IF **HAVE NOT** CREATED A FOLDER WITH CONTENTS YET! (YOU CAN ALSO DELETE THAT FOLDER)<br/><br/>
- CHOOSE [**PATH 2**](#path-2---connect-local-repo-to-cloud-repo) IF YOU **HAVE** CREATED A FOLDER WITH CONTENTS AND WANT TO USE THIS AS A STARTING POINT FOR YOUR NEW REPOSITORY.
---
---

<br/>

# Path 1 - Clone a Repository

This first option / approach requires the engineer to create a new respository in the cloud, acquire the link to the repository, and then run one command to clone the project directly into the folder where you want the project located. It is a bit more straightforward than the second option.

1. Go to [github.com](https://www.github.com)
2. Make sure to navigate to your repositories tab. 
3. From here, click the <span style="color:green">**green**</span> button in the top right corner that says "new".
   
<div align="center">
    <img width="75%" src="https://i.imgur.com/49iJ1Mo.png" /><br/><br/>
</div>

4. Once on the page to create a new repository:
   1. Add new repository name:
      1. This should be descriptive!
      2. "Python_Banking_App" is great!
   2. Do **not** change aything else!
   3. Do **not** add a readme!
   4. Do **not** add a gitignore file!
   5. Do **not** make the repository private!
   6. Click the <span style="color:green">**green**</span> "Create" button

<div align="center">
    <img width="75%" src="https://i.imgur.com/0g2uKJi.png" /><br/><br/>
</div>

5. Your next page will look like this:
<div align="center">
    <img width="75%" src="https://i.imgur.com/OB1IjxU.png" /><br/><br/>
</div>

6. This page ^^^^^^^^^ gives us a few options on how to go about creating a copy of this repository on our personal computers.

7. In this **PATH 1** guide we will be **CLONING** a copy of this repository directly to our local systems.

8. To do this we need to **COPY** the link to this repository. 
   1. There are two options: "HTTPS" or "SSH"
   2. We will use "HTTPS"
   3. Copy the "HTTPS" link.

<div align="center">
    <img width="75%" src="https://i.imgur.com/OvFvNSN.png" /><br/><br/>
</div>

9. We now need to use this link to **CLONE** the repository to our computers. There are two approaches:
   1.  If you did **not** create a folder yet, we can use this command
       1.  `git clone https://github.com/adevlinb/testing.git` 
       2.  (^^paste the link you copied after `git clone`^^)
       3.  This will create a folder and .git file for you inside the folder. Thats the repo!
       4.  EXAMPLE IMAGES:

<div align="center">
    <img width="75%" src="https://i.imgur.com/bL2Q8Gh.png" /><br/><br/>
</div>
<div align="center">
    <img width="75%" src="https://i.imgur.com/BF9bMmZ.png" /><br/><br/>
</div>
<div align="center">
    <img width="75%" src="https://i.imgur.com/ILuReUg.png" /><br/><br/>
</div>



   1.  If you **did create** a folder and want the contents inside that folder:
       1.  `git clone https://github.com/adevlinb/testing.git .` 
       2.  (^^paste the link you copied after `git clone`^^)
       3.  Notice the `.` at the end! It means we are spreading the repo contents inside of the current folder and will create the .git file.

<div align="center">
    <img width="75%" src="https://i.imgur.com/xwhecjl.png" /><br/><br/>
</div>
<div align="center">
    <img width="75%" src="https://i.imgur.com/cSUBwNQ.png" /><br/><br/>
</div>
<br/>

---
# Path 2 - Connect Local Repo to Cloud Repo

This path should be used if you alredy created a folder and files for your project and want to work with those items / push the information to the new repository.

1. Go to [github.com](https://www.github.com)
2. Make sure to navigate to your repositories tab. 
3. From here, click the <span style="color:green">**green**</span> button in the top right corner that says "new".
   
<div align="center">
    <img width="75%" src="https://i.imgur.com/49iJ1Mo.png" /><br/><br/>
</div>

4. Once on the page to create a new repository:
   1. Add new repository name:
      1. This should be descriptive!
      2. "Python_Banking_App" is great!
   2. Do **not** change aything else!
   3. Do **not** add a readme!
   4. Do **not** add a gitignore file!
   5. Do **not** make the repository private!
   6. Click the <span style="color:green">**green**</span> "Create" button

<div align="center">
    <img width="75%" src="https://i.imgur.com/0g2uKJi.png" /><br/><br/>
</div>

5. Your next page will look like this:
<div align="center">
    <img width="75%" src="https://i.imgur.com/OB1IjxU.png" /><br/><br/>
</div>

6. This page ^^^^^^^^^ gives us a few options on how to go about creating a copy of this repository on our personal computers.

7. Path 2 requires us to take a different approach. We will use the set of command line instructions being given to us, but we will do not need all of them! I have covered the commands you will not be using and I will provide the proper commands below.

<div align="center">
    <img width="75%" src="https://i.imgur.com/Tc72kxC.png" /><br/><br/>
</div>

1. You will run the commands from the very top level of the folder you want to turn into your repository. For example:
   1. This first image is showing how I created a new project folder and a folder named `python_banking`. Inside the `python_banking` folder I added some css, js, and htmlto show what to do if your project folder already has content and your new repository in the cloud is empty!

<div align="center">
    <img width="75%" src="https://i.imgur.com/ih7sq3z.png" /><br/><br/>
</div>

2. NOW we can run the commands from inside that folder to connect our local repository to the new one in the cloud:
   1. `git init`
   2. `git add -A`
   3. `git commit -m "initial commit"`
   4. `git remote add origin (paste link here!!!)`
   5. `git push -u origin main`

<div align="center">
    <img width="75%" src="https://i.imgur.com/XeRO1qo.png" /><br/><br/>
</div>