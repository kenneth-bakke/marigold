from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

import json

def index(request):
  print(request)
  return render(request, 'build/index.html')
  # return HttpResponse('This is the Index view endpoint')

def recipes(request):
  if request.method == 'GET':
    recipes_list = Recipe.objects.order_by('recipe_title')
    response = list(recipes_list)
    print(response)
    return HttpResponse(response)
  if request.method == 'POST':
    print(request);

  # Get the ingredients array from the body and save that in the ingredients JSONField() on Recipe model
  #   # ingredients_list = request.body.ingredients
  #   Recipe.objects.create(ingredients=)
  # Make sure to do a Recipe.objects.save/create for the other fields too

def settings(request):
  return HttpResponse('This is the Settings view endpoint')

def ingredients(request):
  latest_ingredients_list = Ingredients.objects.order_by('ingredient_name')
  response = list(latest_ingredients_list)
  print(response)
  return HttpResponse(response)



















# class ReactView(APIView):

#   serializer_class = ReactSerializer

#   def get(self, request):
#     detail = [ {"name": detail.name, "detail": detail.detail}
#     for detail in React.Objects.all() ]
#     return Response(detail)

#   def post(self, requrest):
#     serializer = ReactSerializer(data=request.data)
#     if serializer.is_valid(raise_exception=True):
#       serializer.save()
#       return Response(serializer.data)