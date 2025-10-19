from rest_framework.views import APIView
from rest_framework.response import Response

# Define the home view
class Home(APIView):
  def get(self, request):
    content = {'message': 'Welcome to the notes-app api home route!'}
    return Response(content)
  
class Notes(APIView):
  def get (self, request):
    print("NOTES API ENDPOINT!!")
    content =[
        {"name": 'Lolo', "breed": 'tabby', "description": 'Kinda rude.', "age": 3},
        {"name": 'Sachi', "breed": 'tortoiseshell', "description": 'Looks like a turtle.', "age": 0},
        {"name": 'Fancy', "breed": 'bombay', "description": 'Happy fluff ball.', "age": 4},
        {"name": 'Bonk', "breed": 'selkirk rex', "description": 'Meows loudly.', "age": 6},
    ]
   
    return Response(content)