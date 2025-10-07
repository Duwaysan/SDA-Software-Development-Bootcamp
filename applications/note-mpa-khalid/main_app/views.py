from django.shortcuts import render
from .models import Note
from django.views.generic import ListView, CreateView, UpdateView, DeleteView



# class Notes:
#     def __init__(self, Title, Content, Date):
#         self.title = Title
#         self.content = Content
#         self.date = Date
# # Create a list of Notes instances
# notes = [
#     Notes("First Note", "This is the content of the first note.", "2023-10-01"),
#     Notes("Second Note", "This is the content of the second note.", "2023-10-02"),
#     Notes("Third Note", "This is the content of the third note.", "2023-10-03"),        
# ]

# Create your views here.
def home (req):
    return render(req, 'home.html')

def about (req):
    return render(req, 'about.html')

def note_index(request):
    notes = Note.objects.all()  
    return render(request, 'notes/index.html', {'notes': notes})

def note_detail(request, note_id):
    note = Note.objects.get(id=note_id)
    return render(request, 'notes/detail.html', {'note': note})

class NoteCreate(CreateView):
    model = Note
    fields = '__all__'
    success_url = '/notes/'

class NoteUpdate(UpdateView):
    model = Note
    # Let's disallow the renaming of a cat by excluding the name field!
    fields = ['title', 'content']
    success_url = '/notes/'

class NoteDelete(DeleteView):
    model = Note
    success_url = '/notes/'