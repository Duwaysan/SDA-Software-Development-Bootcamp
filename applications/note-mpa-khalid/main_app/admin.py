from django.contrib import admin
from .models import Note, Checklist

admin.site.register(Note)
admin.site.register(Checklist)