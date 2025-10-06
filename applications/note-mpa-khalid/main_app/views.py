from django.shortcuts import render
from django.http import HttpResponse

class Notes:
    def __init__(self, Title, Content, Date):
        self.Title = Title
        self.Content = Content
        self.Date = Date
# Create a list of Notes instances
notes = [
    Notes("First Note", "This is the content of the first note.", "2023-10-01"),
    Notes("Second Note", "This is the content of the second note.", "2023-10-02"),
    Notes("Third Note", "This is the content of the third note.", "2023-10-03"),        
]

# Create your views here.
def home (req):
    return render(req, 'home.html')

def about (req):
    return render(req, 'about.html')
def note_index (req):
    return render(req, 'notes/index.html', {'notes': notes})


