from django.db import models
from django.urls import reverse

    
class Reaction(models.Model):
    REACTION_CHOICES = [
        ("like", "👍"),
        ("love", "❤️"),
        ("dislike", "👎"),
        ("100", "💯"),
        ("wow", "😮"),
        ("sad", "😢"),
        ("star", "⭐"),
        ("fire", "🔥"),
        ("clap", "👏"),
        ("pray", "🙏"),
        ("angry", "😡"),
        ("laugh", "😂"),
        ("heart", "💖"),
        ("check", "✅"),
        ("cross", "❌"),
        ("muscle", "💪"),
        ("rocket", "🚀"),
        ("confused", "😕"),
        ("question", "❓"),
        ("celebrate", "🎉"),
        ("thumbs_up", "👍"),
        ("exclamation", "❗"),
        ("thumbs_down", "👎"),
    ]

    code = models.CharField(
        max_length=16,
        choices=REACTION_CHOICES,
        db_index=True,
        unique=True,
        # no default; you’ll seed rows explicitly
    )
    created_at = models.DateTimeField(auto_now_add=True,null=True, blank=True)

    def __str__(self):
        return self.get_code_display()
    
    def get_absolute_url(self):
        return reverse('Reaction-detail', kwargs={'pk': self.id})
class Note(models.Model):
        title = models.CharField(max_length=100)
        content = models.TextField()
        date = models.DateField('Creation Date')
        reactions = models.ManyToManyField(Reaction)
        
        def __str__(self):
            return f'{self.title} Created on {self.date}'
         # Define a method to get the URL for this particular cat instance

        def get_absolute_url(self):
            # Use the 'reverse' function to dynamically find the URL for viewing this cat's details
            return reverse('note-detail', kwargs={'note_id': self.id})
        
class Pin(models.Model):
    pass

    def __str__(self):
        return f"Photo for cat_id: {self.cat.id} @{self.url}"
    

class Checklist(models.Model):
    text = models.CharField(max_length=255)
    is_done = models.BooleanField(default=False)
    note = models.ForeignKey(Note, on_delete=models.CASCADE)

    def __str__(self):
        if self.is_done:
            return f"{self.text} is done"
        else:
            return f"{self.text} is not done"
        

