# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Django Authorization Testing Lab

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2E5OThhMzRueDluNXp1emk0ZGNwcm15djdoeGlkczV6Y2hxbDJnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xTUmZABI3PGwDe/giphy.gif" width="900">

# Testing Notes App Models

In this lab, you will apply your knowledge of Django Mock Testing on Authorization to validate the functionality of JWT login from your Notes App. Just like the lecture this morning you will focus on:

- Test successful token verification
- Test missing token scenarios
- Test missing token scenarios
- Test user registration process
- Test login functionality
- Test login invalid credentials
  
# Setup and Expectation

- Follow the guide from this morning's lecture
- Ensure your virtual environment is activated.
- Setup the test file to reflect your Notes App models / attributes
- You should have comprehensive authetication testing just like our testing from this morning!

Commands to run the new test folder:
`pipenv shell`
`python manage.py test main_app.tests`
**notice the `.` instead of a `/`**

**OR**
`python manage.py test main_app.tests -v 2`
The `-v 2` flag enables verbose output, which is valuable for debugging and understanding test behavior.

RUN THE SAME TESTS IN FINCH COLLECTOR!!