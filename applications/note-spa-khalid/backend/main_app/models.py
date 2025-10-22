from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    person_name = models.CharField(max_length=50)
    comment = models.TextField()

class Photo(models.Model):
    title = models.CharField(max_length=50)
    url = models.TextField()

class Event(models.Model):
    
    name = models.CharField(max_length=50)
    description= models.CharField(max_length=100)
    event_time =  models.DateTimeField()
