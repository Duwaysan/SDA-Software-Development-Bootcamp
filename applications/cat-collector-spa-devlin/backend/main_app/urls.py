from django.urls import path
from .views import Home, CatsIndex, CatDetail, FeedingsIndex, PhotoDetail

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('cats/', CatsIndex.as_view(), name='cat-index'),
    path('cats/<int:cat_id>/', CatDetail.as_view(), name='cat-detail'),
    path('cats/<int:cat_id>/feedings/', FeedingsIndex.as_view(), name='feeding-create'),
    path('cats/<int:cat_id>/add-photo/', PhotoDetail.as_view(), name="create-photo"),
]