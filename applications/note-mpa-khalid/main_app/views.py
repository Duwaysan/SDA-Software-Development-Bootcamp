from django.shortcuts import render, redirect
from .models import Note, Checklist, Reaction, ActivityLog
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView
from django.urls import reverse_lazy, reverse
from .forms import ChecklistForm
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin


# Create your views here.
def home (req):
    return render(req, 'home.html')

def about (req):
    return render(req, 'about.html')

@login_required
def note_index(request):
    notes = Note.objects.filter(user=request.user)  
    return render(request, 'notes/index.html', {'notes': notes})

@login_required
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

@login_required
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

@login_required
def update_completion(request, checklist_id):
    # create a ModelForm instance using the data in request.POST
    checklist = Checklist.objects.get(id=checklist_id)
    print("checklist status", checklist.is_done, "checklist note id: ", checklist.note.id)
    checklist.is_done = not checklist.is_done
    checklist.save()
    note_id = checklist.note.id
    return redirect('note-detail', note_id=note_id)

@login_required
def update_checklist(request, checklist_id):
    checklist = Checklist.objects.get(id=checklist_id)
    form = ChecklistForm(request.POST, instance=checklist)
    if form.is_valid():
        form.save()
    note_id = checklist.note.id
    return redirect('note-detail', note_id=note_id)

@login_required
def associate_reaction(request, note_id, reaction_id):
    # Note that you can pass a reaction's id instead of the whole object
    Note.objects.get(id=note_id).reactions.add(reaction_id)
    ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("reaction_added")
    return redirect('note-detail', note_id=note_id)

@login_required
def remove_reaction(request, note_id, reaction_id):
    note = Note.objects.filter(id=note_id).first()
    reaction = Reaction.objects.filter(id=reaction_id).first()

    if note and reaction:
        note.reactions.remove(reaction)
        ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("reaction_removed")

    return redirect('note-detail', note_id=note_id)

class NoteCreate(LoginRequiredMixin, CreateView):
    model = Note
    fields = ['title','content','date']
    # success_url = '/notes/'
    # def get_success_url(self):
    def form_valid(self, form):
        
        form.instance.user = self.request.user
        resp = super().form_valid(form)           # saves note → self.object
        log, _ = ActivityLog.objects.get_or_create(note=self.object)
        log.add_event("note_created")
        return resp

    def get_success_url(self):
        return reverse('note-detail', kwargs={'note_id': self.object.id})




class NoteUpdate(LoginRequiredMixin, UpdateView):
    model = Note
    fields = ['title', 'content']
    success_url = '/notes/'

class NoteDelete(LoginRequiredMixin, DeleteView):
    model = Note
    success_url = '/notes/'

class ChecklistDelete(LoginRequiredMixin, DeleteView):
    model = Checklist  
    template_name = 'main_app/checklist_confirm_delete.html'

    def get_success_url(self):
        # self.object is still available here (not deleted yet)
        note_id = self.object.note_id
        ActivityLog.objects.get_or_create(note_id=note_id)[0].add_event("checklist_deleted")
        return reverse_lazy('note-detail', kwargs={'note_id': note_id})
    
class ReactionCreate(LoginRequiredMixin, CreateView):
    model = Reaction
    fields = '__all__'
    success_url = reverse_lazy('reaction-index')

class ReactionList(LoginRequiredMixin, ListView):
    model = Reaction

class ReactionDetail(LoginRequiredMixin, DetailView):
    model = Reaction

class ReactionDelete(LoginRequiredMixin, DeleteView):
    model = Reaction
    success_url = '/reactions/'

class Home(LoginView):
    template_name = 'home.html'

    

def signup(request):
    error_message = ''
    if request.method == 'POST':
        # This is how to create a 'user' form object
        # that includes the data from the browser
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # This will add the user to the database
            user = form.save()
            # This is how we log a user in
            login(request, user)
            return redirect('note-index')
        else:
            error_message = 'Invalid sign up - try again'
    # A bad POST or a GET request, so render signup.html with an empty form
    form = UserCreationForm()
    context = {'form': form, 'error_message': error_message}
    return render(request, 'signup.html', context)
    # Same as: 
    # return render(
    #     request, 
    #     'signup.html',
    #     {'form': form, 'error_message': error_message}
    # )