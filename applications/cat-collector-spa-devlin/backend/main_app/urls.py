from django.urls import path
from .views import Home, CatsIndex, CatDetail, FeedingsIndex, PhotoDetail, ToyIndex, ToyDetail, AddToyToCat, RemoveToyToCat

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('cats/', CatsIndex.as_view(), name='cat-index'),
    path('cats/<int:cat_id>/', CatDetail.as_view(), name='cat-detail'),
    path('cats/<int:cat_id>/feedings/', FeedingsIndex.as_view(), name='feeding-create'),
    path('cats/<int:cat_id>/add-photo/', PhotoDetail.as_view(), name="create-photo"),
    path('toys/', ToyIndex.as_view(), name='toy-index'),
    path('toys/<int:toy_id>/', ToyDetail.as_view(), name='toy-detail'),
    path('cats/<int:cat_id>/associate-toy/<int:toy_id>/', AddToyToCat.as_view(), name='associate-toy'),
    path('cats/<int:cat_id>/remove-toy/<int:toy_id>/', RemoveToyToCat.as_view(), name='remove-toy'),
]