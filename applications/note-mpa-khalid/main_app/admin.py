from django.contrib import admin
from .models import Note, Checklist, Reaction

admin.site.register(Note)
admin.site.register(Checklist)
admin.site.register(Reaction)