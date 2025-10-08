from django.db import models
from django.urls import reverse

    
class Note(models.Model):
        title = models.CharField(max_length=100)
        content = models.TextField()
        date = models.DateField('Creation Date')
        
        def __str__(self):
            return f'{self.title} Created on {self.date}'
         # Define a method to get the URL for this particular cat instance

        def get_absolute_url(self):
            # Use the 'reverse' function to dynamically find the URL for viewing this cat's details
            return reverse('note-detail', kwargs={'note_id': self.id})
        

class Checklist(models.Model):
    text = models.CharField(max_length=255)
    is_done = models.BooleanField(default=False)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)

    def __str__(self):
        if self.is_done:
            return f"{self.text} is done"
        else:
            return f"{self.text} is not done"