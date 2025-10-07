from django.urls import path
from . import views # Import views to connect routes to view functions

urlpatterns = [
    # Routes will be added here
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),  
    path('notes/', views.note_index, name='note-index'),
    path('notes/<int:note_id>/', views.note_detail, name='note-detail'),
    path('notes/create/', views.NoteCreate.as_view(), name='note-create'),
    path('notes/<int:pk>/update/', views.NoteUpdate.as_view(), name='note-update'),
    path('notes/<int:pk>/delete/', views.NoteDelete.as_view(), name='note-delete'),
]