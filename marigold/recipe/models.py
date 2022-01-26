import datetime

from dataclasses import dataclass
from datetime import date, datetime
from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import JSONField


class Recipe(models.Model):
  recipe_title = models.CharField(max_length=255)
  recipe_subtitle = models.CharField(max_length=255)
  yield_amount = models.IntegerField(default=1)
  yield_type = models.CharField(max_length=128)
  system = models.CharField(max_length=16, default='Metric')
  method = models.CharField(max_length=5000, default='')
  ingredients = models.JSONField(default=dict)

  def __str__(self):
    template = '{0.recipe_title} {0.recipe_subtitle} {0.yield_amount} {0.yield_type} {0.system} {0.ingredients} {0.method}'
    return template.format(self)

class Ingredients(models.Model):
  name = models.CharField(max_length=32)

class Tags(models.Model):
  tag_text = models.CharField(max_length=64)

  def __str__(self):
    template = '{0.tag_text}'
    return template.format(self)

class React(models.Model):
  name = models.CharField(max_length=30)
  detail = models.CharField(max_length=500)