from django.contrib import admin
from .models import Note, Checklist, Reaction, ActivityLog
from django.contrib.auth.models import User
admin.site.register(Note)
admin.site.register(Checklist)
admin.site.register(Reaction)
admin.site.register(ActivityLog)
