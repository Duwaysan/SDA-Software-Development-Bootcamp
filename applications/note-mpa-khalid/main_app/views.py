from django.shortcuts import render, redirect
from .models import Note, Checklist
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .forms import ChecklistForm


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
    checklist_form = ChecklistForm()
    return render(request, 'notes/detail.html', {'note': note,
                                                  'checklist_form': checklist_form})
def add_checklist(request, note_id):
    # create a ModelForm instance using the data in request.POST
    form = ChecklistForm(request.POST)
    # validate the form
    if form.is_valid():
        # don't save the form to the db until it
        # has the note_id assigned
        new_checklist = form.save(commit=False)
        new_checklist.note_id = note_id
        new_checklist.save()
    return redirect('note-detail', note_id=note_id)

def update_completion(request, checklist_id):
    # create a ModelForm instance using the data in request.POST
    checklist = Checklist.objects.get(id=checklist_id)
    print("checklist status", checklist.is_done, "checklist note id: ", checklist.note.id)
    checklist.is_done = not checklist.is_done
    checklist.save()
    note_id = checklist.note.id
    return redirect('note-detail', note_id=note_id)

def update_checklist(request, checklist_id):
    checklist = Checklist.objects.get(id=checklist_id)
    form = ChecklistForm(request.POST, instance=checklist)
    if form.is_valid():
        form.save()
    note_id = checklist.note.id
    return redirect('note-detail', note_id=note_id)

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

class ChecklistDelete(DeleteView):
    model = Checklist  
    template_name = 'main_app/checklist_confirm_delete.html'
    success_url = reverse_lazy('note-index')  # Temporary, will override get_success_url

    # def get_success_url(self):
    #     note_id = self.object.parent.pk
        # return reverse_lazy('note-detail', kwargs={'note_id': note_id})