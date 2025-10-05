from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(req):

    print("Hey you hit the home route!!!")
    return HttpResponse("Hello, welcome to the Cat Collector Home Page!")

def about(req):
    print("Hey you hit the about route!!!")
    # print(render(req, 'about.html'))
    return render(req, 'about.html') 
