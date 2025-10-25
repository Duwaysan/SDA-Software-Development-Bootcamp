from django.urls import path
from .views import Home, NotesIndex,NoteDetail, PhotoDetail, CommentsIndex, CategoryIndex, CategoryDetail, CreateUserView,LoginView, AddCategoryToNote, RemoveCategoryFromNote, VerifyUserView

urlpatterns = [
  path('', Home.as_view(), name='home'),
  path('notes/', NotesIndex.as_view(), name='note-index'),
  path('notes/<int:note_id>/', NoteDetail.as_view(), name='note-detail'),
  path('notes/<int:note_id>/add-photo/', PhotoDetail.as_view(), name='add-photo'),
  path('notes/<int:note_id>/comments/', CommentsIndex.as_view(), name='feeding-create'),
  path('categories/', CategoryIndex.as_view(), name='category-index'),
  path('categories/<int:category_id>/', CategoryDetail.as_view(), name='category-detail'), 
  path('users/signup/', CreateUserView.as_view(), name='signup'),
  path('users/login/', LoginView.as_view(), name='login'),
  path('notes/<int:note_id>/associate-category/<int:category_id>/', AddCategoryToNote.as_view(), name='associate-category'),
  path('notes/<int:note_id>/remove-category/<int:category_id>/', RemoveCategoryFromNote.as_view(), name='remove-category'),
  path('users/token/refresh/', VerifyUserView.as_view(), name='token_refresh'),

]
