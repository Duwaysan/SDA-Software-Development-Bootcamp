from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    
    name = models.CharField(max_length=50)
    description= models.CharField(max_length=500)

    def __str__(self):
        return self.name

class Note(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    categories = models.ManyToManyField(Category)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    title = models.CharField(max_length=50)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} was created on {self.created_at}"

    class Meta:
        ordering = ['-created_at'] 

class Photo(models.Model):
    url = models.TextField()
    title = models.CharField(max_length=250)
    created_at = models.DateField(auto_now_add=True) 
    updated_at = models.DateField(auto_now=True)
    note = models.OneToOneField(Note, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"Photo for note_id: {self.note.id} @{self.url}"

