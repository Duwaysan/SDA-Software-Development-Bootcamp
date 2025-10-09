from django.shortcuts import render, redirect
from .models import Note, Checklist, Reaction, ActivityLog
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from django.urls import reverse_lazy, reverse
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
    reactions_note_doesnt_have = Reaction.objects.exclude(id__in = note.reactions.all().values_list('id',flat = True))
    # activity_logs = ActivityLog.objects.filter(note_id=note_id).order_by('-timestamp')
    checklist_form = ChecklistForm()

    entries = []
    if hasattr(note, "activity_log") and note.activity_log:
        entries = list(reversed(note.activity_log.entries))  
        entries = sorted(entries, key=lambda e: e["ts"], reverse=True)
    return render(request, 'notes/detail.html', {
                                                'note': note,
                                                'checklist_form': checklist_form,
                                                'reactions': reactions_note_doesnt_have,
                                                'activity_logs': entries,  # 👈 use this in template
                                            })
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
        ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("checklist_created")
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

def associate_reaction(request, note_id, reaction_id):
    # Note that you can pass a reaction's id instead of the whole object
    Note.objects.get(id=note_id).reactions.add(reaction_id)
    ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("reaction_added")
    return redirect('note-detail', note_id=note_id)

def remove_reaction(request, note_id, reaction_id):
    note = Note.objects.filter(id=note_id).first()
    reaction = Reaction.objects.filter(id=reaction_id).first()

    if note and reaction:
        note.reactions.remove(reaction)
        ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("reaction_removed")

    return redirect('note-detail', note_id=note_id)

class NoteCreate(CreateView):
    model = Note
    fields = ['title','content','date']
    # success_url = '/notes/'
    # def get_success_url(self):
    def form_valid(self, form):
        resp = super().form_valid(form)           # saves note → self.object
        log, _ = ActivityLog.objects.get_or_create(note=self.object)
        log.add_event("note_created")
        return resp

    def get_success_url(self):
        return reverse('note-detail', kwargs={'note_id': self.object.id})




class NoteUpdate(UpdateView):
    model = Note
    fields = ['title', 'content']
    success_url = '/notes/'

class NoteDelete(DeleteView):
    model = Note
    success_url = '/notes/'

class ChecklistDelete(DeleteView):
    model = Checklist  
    template_name = 'main_app/checklist_confirm_delete.html'

    def get_success_url(self):
        # self.object is still available here (not deleted yet)
        note_id = self.object.note_id
        ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("checklist_deleted")
        return reverse_lazy('note-detail', kwargs={'note_id': note_id})
    
class ReactionCreate(CreateView):
    model = Reaction
    fields = '__all__'
    success_url = reverse_lazy('reaction-index')

class ReactionList(ListView):
    model = Reaction

class ReactionDetail(DetailView):
    model = Reaction

class ReactionDelete(DeleteView):
    model = Reaction
    success_url = '/reactions/'

    


    

    # def get_success_url(self):
    #     note_id = self.object.parent.pk
        # return reverse_lazy('note-detail', kwargs={'note_id': note_id})