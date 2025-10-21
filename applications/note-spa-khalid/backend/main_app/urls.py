from django.urls import path
from .views import Home, NotesIndex,NoteDetail

urlpatterns = [
  path('', Home.as_view(), name='home'),
  path('notes/', NotesIndex.as_view(), name='note-index'),
  path('notes/<int:note_id>/', NoteDetail.as_view(), name='note-detail'),
]
