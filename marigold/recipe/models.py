from django.db import models

# Create your models here.
class Recipe(models.Model):
  recipe_title = models.CharField(max_length=255)
  recipe_