# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Python Testing - Mocking Data

## Lesson Objectives

- Understand what mocking is and why it is useful for isolating parts of your code during testing.
- Set up and use mock objects in a test class to simulate external services (such as authentication or database access).
- Write unit tests that rely on mocked behavior instead of real database operations.
- Compare testing with real data setups versus mocked data, and identify when to use each approach.

## Testing Environment

Our first testing file involved using the `tests.py` that was generated for us upon using Django to generate our project / application. The file was included in `main_app`. 

Once completing our first file, we took another step and upgraded to a full `tests/` folder to hold all of our testing files and take another step to grow and stay organized along the way.

We are going to do this one more time, yay!

## `/tests/mock`

Our next testing approach is going to involve using what is called `mock testing`. As a standard we will create a `/mock` folder to hold all testing that specifically uses this approach and we'll explain what `mock` means in a minute...

Inside `main_app/tests` create a `mock/` folder and then create a `test_auth.py`

Completed: `main_app/tests/mock/test_auth.py`. 

- This organization helps maintain a clear separation between different types of tests and makes it easier for other developers to locate and understand our testing strategy.

```plaintext
main_app/
├── tests/
│   ├── __init__.py
│   ├── test_models.py
│   ├── test_authentication.py
│   ├── mock/
│   │   ├── __init__.py
│   │   ├── test_auth.py
```

## Virtual Environment and Commands to Test:
In order for the environment to work... 

We need our virtual environment shell up and running.. 

Commands:
`pipenv shell`
`python manage.py test main_app.tests`
**notice the `.` instead of a `/`**

**OR**
`python manage.py test main_app.tests -v 2`
The `-v 2` flag enables verbose output, which is valuable for debugging and understanding test behavior.

**ON TO THE REAL STUFF...**

## What is "Mock"?
In programming, a **mock** is a fake or simulated object that mimics the behavior of real objects in a controlled way. It is primarily used in testing to isolate specific parts of a program and simulate external systems, like databases or APIs, without actually interacting with them.

## What is Mocking?
**Mocking** is the act of creating mock objects or functions during testing to simulate real components. It helps to control the behavior of dependencies in your code so that you can focus on testing specific functionality without being concerned about external factors or complex systems.

### Why Use Mocking in Tests?
- **Isolate tests**: By using mocks, you can isolate the functionality you want to test, without worrying about how other parts of the system behave.
- **Control behavior**: Mocks allow you to simulate different scenarios, such as successful responses or errors, to see how your code reacts.
- **Faster tests**: Mocking external systems like databases or web services helps avoid time-consuming real-world interactions during tests.


## IMPORTS
Before writing our tests, we need to ensure our testing environment is properly configured. 

What we'll need:
```python
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from unittest.mock import patch, MagicMock
```

What they provide:
- `reverse`: For generating URLs for our API endpoints
- `status`: For HTTP status codes
- `APITestCase`: Django REST framework's test case class
- `User`: Django's built-in user model
- `patch` and `MagicMock`

### `Patch` and `MagicMock`

`Patch` is a function used to temporarily replace a real object or method with a mock during testing. It helps isolate the unit under test by replacing external dependencies with mock objects. It is typically used as a decorator or context manager and automatically restores the original object after the test.

`MagicMock` is a special type of mock object that comes with built-in support for common magic methods (e.g., __getitem__, __setitem__, __call__). It can simulate complex behaviors of objects or functions during tests. It is a subclass of Mock with extra functionality for special methods that allows setting return values, side effects, and attributes dynamically.

## Let's Test!
Today we will implement another version of JWT testing, but this time using mock data.
We will do so in the following areas:

- Token Verification: Ensuring our system correctly validates authentication tokens
- User Registration: Testing the user creation process
- Login Authentication: Verifying credential validation
- Error Handling: Testing system responses to invalid inputs
- Security Measures: Ensuring proper protection against unauthorized access

This comprehensive approach helps ensure our authentication system remains secure and reliable while being maintainable and testable. (nothing new!)

`/mock/test_auth.py`
```python
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from unittest.mock import patch, MagicMock

class AuthTestCase(APITestCase):
    def setUp(self):
        self.mock_user = MagicMock(spec=User)
        self.mock_user.configure_mock(**{
            'id': 1,
            'username': 'testuser',
            'email': 'test@test.com',
            'is_authenticated': True,
            'is_active': True,
            'is_anonymous': False,
            '__str__': lambda self: 'testuser'
        })

        self.verification_url = reverse('token_refresh')
        self.mock_access_token = "mock_access_token_12345"
        self.mock_refresh_token = "mock_refresh_token_67890"
        
    # Token verification tests
    def test_user_verification_success(self):
        # Test successful token verification
        pass
        
    def test_user_verification_no_token(self):
        # Test missing token scenarios
        pass

    def test_user_verification_invalid_token(self):
        # Test missing token scenarios
        pass
        
    # Registration tests
    def test_user_registration(self):
        # Test user registration process
        pass
        
    # Login tests
    def test_user_login(self):
        # Test login functionality
        pass

    def test_user_login_invalid_credentials(self, mock_authenticate):
        # Test login invalid credentials
        pass
```


- This `setUp` method initializes our test environment before each test case. 
- We create a mock `User` object with predefined attributes and behaviors using `MagicMock`. 
- This ensures each test starts with a clean, consistent state. 
- The mock user has properties like `id`, `username`, and `email`, which are essential for testing authentication flows. We also set up verification URLs and mock tokens that will be used across different test cases.

### Test User Verification Success
The success verification test ensures that authenticated users can successfully validate their tokens:

```python
@patch('django.contrib.auth.models.User.objects')
@patch('rest_framework_simplejwt.tokens.RefreshToken.for_user')
@patch('rest_framework_simplejwt.authentication.JWTAuthentication.get_validated_token')
@patch('rest_framework_simplejwt.authentication.JWTAuthentication.get_user')
def test_user_verification_success(self, mock_get_user, mock_get_validated_token,
                                   mock_token_for_user, mock_user_objects):
    """Test user verification with a mocked valid access token."""

    mock_get_validated_token.return_value = MagicMock()
    mock_get_user.return_value = self.mock_user
    mock_user_objects.get.return_value = self.mock_user

    mock_token = MagicMock()
    mock_token.access_token = self.mock_access_token
    mock_token.__str__.return_value = self.mock_refresh_token
    mock_token_for_user.return_value = mock_token

    self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.mock_access_token}')
    response = self.client.get(self.verification_url)

    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertIn('access', response.data)
    self.assertIn('refresh', response.data)
    self.assertIn('user', response.data)
    self.assertEqual(response.data['user']['username'], 'testuser')
```

- This test method uses multiple patch decorators to mock various components of the authentication system. 
- We mock the user objects, token generation, and JWT authentication to simulate a successful token validation scenario. 
- The test verifies that when a valid token is provided
- The system responds with the expected user data and new tokens.

**PATCH DECORATOR** 
Each of these @patch decorators is used to mock a specific method or object, so that during testing, we can control their behavior, ensuring they return predefined values instead of interacting with real components (like the database or external services). This isolates the unit test and ensures the test focuses on the functionality being tested, not the dependencies.

### @patch('django.contrib.auth.models.User.objects')
- Mocks the User.objects manager, which interacts with the database to retrieve User objects.
- This prevents actual database queries from being made during testing. Instead, it allows you to specify how User.objects behaves in the test.

### @patch('rest_framework_simplejwt.tokens.RefreshToken.for_user')
- Mocks the for_user method of RefreshToken, which generates a refresh token for a user.
- This prevents the method from generating a real JWT token and lets you control the response to return a mock token instead.

### @patch('rest_framework_simplejwt.authentication.JWTAuthentication.get_validated_token')
- Mocks the get_validated_token method of JWTAuthentication, which typically validates and decodes the JWT token sent with the request.
- Here, you're controlling the validation process by ensuring that a mock token is returned instead of performing real token validation.

### @patch('rest_framework_simplejwt.authentication.JWTAuthentication.get_user')
- Mocks the get_user method of JWTAuthentication, which retrieves the user associated with a JWT token.
- This ensures that instead of fetching a real user from the database, a mock user is returned (in this case, self.mock_user).


## Test User Verification No Token

When building authentication systems, it's crucial to handle cases where users attempt to access protected resources without providing any authentication token. Here's how we test this scenario:

```python
def test_user_verification_no_token(self):
    """Test user verification without authentication."""
    response = self.client.get(self.verification_url)
    self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
```

In this test, we simulate a scenario where a client attempts to access the token refresh endpoint without providing any authentication credentials. This is a common security concern that needs to be properly handled. The test makes a request without setting any authorization headers, which should trigger the authentication middleware to reject the request. We verify that the system responds with a 401 Unauthorized status code, indicating that authentication is required to access the resource.

### Test User Verification Invalid Token

Testing invalid token scenarios helps ensure the system's security integrity:

```python
def test_user_verification_invalid_token(self):
    """Test user verification with invalid token."""
    self.client.credentials(HTTP_AUTHORIZATION='Bearer invalid_token')
    response = self.client.get(self.verification_url)
    self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
```

This test simulates attempts to access protected resources using invalid tokens. We explicitly set an invalid Bearer token in the request headers and verify that the system properly rejects it. This test is crucial for ensuring the system can distinguish between valid and invalid tokens and responds appropriately.

### Test User Registration

The registration test verifies that new users can successfully create accounts:

```python
@patch('main_app.views.User.objects.create_user')
@patch('rest_framework_simplejwt.tokens.RefreshToken.for_user')
@patch('main_app.views.User.objects.get')
def test_user_registration(self, mock_user_get, mock_token_for_user, mock_create_user):
    """Test user registration with mocked user creation."""
    url = reverse('register')
    data = {
        'username': 'newuser',
        'email': 'newuser@test.com',
        'password': 'newpassword123'
    }

    new_mock_user = MagicMock(spec=User)
    new_mock_user.configure_mock(**{
        'id': 2,
        'username': data['username'],
        'email': data['email'],
        'is_authenticated': True,
        'is_active': True,
        'is_anonymous': False,
        '__str__': lambda self: data['username']
    })

    mock_create_user.return_value = new_mock_user
    mock_user_get.return_value = new_mock_user

    mock_token = MagicMock()
    mock_token.access_token = self.mock_access_token
    mock_token.__str__.return_value = self.mock_refresh_token
    mock_token_for_user.return_value = mock_token

    response = self.client.post(url, data)

    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertIn('access', response.data)
    self.assertIn('refresh', response.data)
    self.assertIn('user', response.data)
    self.assertEqual(response.data['user']['username'], 'newuser') 
```

This test mocks the user creation process and verifies that the registration endpoint correctly handles new user registration requests. It checks that the system creates a new user with the provided credentials and returns appropriate authentication tokens.

### Test User Login Success

Testing successful login scenarios ensures users can authenticate properly:

```python
@patch('main_app.views.authenticate')
@patch('rest_framework_simplejwt.tokens.RefreshToken.for_user')
def test_user_login(self, mock_token_for_user, mock_authenticate):
    """Test user login with mocked authentication."""
    url = reverse('login')
    data = {
        'username': 'testuser',
        'password': 'securepassword123'
    }

    mock_authenticate.return_value = self.mock_user

    mock_token = MagicMock()
    mock_token.access_token = self.mock_access_token
    mock_token.__str__.return_value = self.mock_refresh_token
    mock_token_for_user.return_value = mock_token

    response = self.client.post(url, data)

    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertIn('access', response.data)
    self.assertIn('refresh', response.data)
    self.assertIn('user', response.data)
    self.assertEqual(response.data['user']['username'], 'testuser')
```

This test verifies that users can successfully log in with valid credentials. It mocks the authentication process and ensures the system generates and returns the appropriate tokens upon successful authentication.

### Test User Login Invalid Credentials

Testing failed login attempts is crucial for security:

```python
@patch('main_app.views.authenticate')
def test_user_login_invalid_credentials(self, mock_authenticate):
    """Test user login with mocked failed authentication."""
    url = reverse('login')
    data = {
        'username': 'testuser',
        'password': 'wrongpassword'
    }

    mock_authenticate.return_value = None

    response = self.client.post(url, data)

    self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
    self.assertIn('error', response.data)
    self.assertEqual(response.data['error'], 'Invalid credentials')
```

# RECAP

Mocking is another approach to the same overall concept and end goal of testing within an application. Attacking `testing` in application from multiple different angles is key to creating a stable and consistent environment where failure is expected in development, but **`not an option`** in the real world. Engineers work hard and fast to try and break their systems before they make it to the real with the goal of having extremely well built projects for large user basis that constantly put their hard work to the *`test`*.

Keep in mind:
### Best Practices Testing

1. Isolated Tests: Each test should focus on a single aspect of authentication
2. Consistent Mocking: Use consistent mock objects across related tests
3. Security-First: Always include tests for security edge cases
4. Comprehensive Coverage: Test both success and failure scenarios
