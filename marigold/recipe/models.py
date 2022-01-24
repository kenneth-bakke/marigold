import datetime

from dataclasses import dataclass
from datetime import date, datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Ingredients(models.Model):
  ingredient_name = models.CharField(max_length=255)
  quantity = models.DecimalField(max_digits=7, decimal_places=3)
  uom = models.CharField(max_length=32)

  def __str__(self):
    template = '{0.ingredient_name} {0.quantity} {0.uom}'
    return template.format(self)

class Recipe(models.Model):
  recipe_title = models.CharField(max_length=255)
  recipe_subtitle = models.CharField(max_length=255)
  yield_amount = models.IntegerField(default=1)
  yield_type = models.CharField(max_length=128)
  # pub_date = models.DateTimeField('date published')
  # ingredients = models.ManyToManyField(Ingredients)

  def __str__(self):
    template = '{0.recipe_title} {0.recipe_subtitle} {0.yield_amount} {0.yield_type}'# {self.pub_date}'
    return template.format(self)
  # def was_published_recently(self):
  #   return self.pub_date >= timezone.now() - datetime.timedelta(days=1)

class Tags(models.Model):
  tag_text = models.CharField(max_length=64)

  def __str__(self):
    template = '{0.tag_text}'
    return template.format(self)

class React(models.Model):
  name = models.CharField(max_length=30)
  detail = models.CharField(max_length=500)