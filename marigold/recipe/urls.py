from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name='index'),
  path('recipes/', views.recipes, name='recipes'),
  path('ingredients', views.ingredients, name='ingredients'),
  path('settings/', views.settings, name='settings')
]