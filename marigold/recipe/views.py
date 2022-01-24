from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

def index(request):
  print(request)
  return render(request, 'build/index.html')
  # return HttpResponse('This is the Index view endpoint')

def recipes(request):
  return HttpResponse('This is the Recipe view endpoint')

def settings(request):
  return HttpResponse('This is the Settings view endpoint')

def ingredients(request):
  latest_ingredients_list = Ingredients.objects.order_by('ingredient_name')
  print(latest_ingredients_list)
  response = latest_ingredients_list
  return JsonResponse(response)



















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