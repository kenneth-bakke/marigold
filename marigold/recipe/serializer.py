from operator import methodcaller
from rest_framework import serializers
from recipe.models import Recipe

# class ReactSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = React
#         fields = ['name', 'detail']

class RecipeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Recipe
    fields = ('__all__')

    # def get_queryset(self):
    #   return Recipe.objects.all()