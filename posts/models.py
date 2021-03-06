from django.db import models

from authentication.models import Account

class Post(models.Model):
    author = models.ForeignKey(Account)
    name = models.CharField(max_length=50)
    field = models.CharField(max_length=50)
    location = models.CharField(max_length=50, blank=True)
    content = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __unicode__(self):
        return '{0}'.format(self.content)