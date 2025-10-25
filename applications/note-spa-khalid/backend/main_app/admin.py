from django.contrib import admin
from .models import Note, Photo, Comment, Category

# Register your models here.
admin.site.register(Note)
admin.site.register(Photo)
admin.site.register(Comment)
admin.site.register(Category)