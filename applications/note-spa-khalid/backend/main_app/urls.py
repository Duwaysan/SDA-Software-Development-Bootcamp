from django.urls import path
from .views import Home, Notes

urlpatterns = [
  path('', Home.as_view(), name='home'),
  path('notes/', Notes.as_view(), name='note-index'),

]
