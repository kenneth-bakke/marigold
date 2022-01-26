from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from recipe.serializer import RecipeSerializer
from recipe.models import Recipe, Ingredients
import json

# Send up built React app
def index(request):
  print(request)
  return render(request, 'build/index.html')

@csrf_exempt
def recipes(request):

  # Grab all recipes from db and send back to client as JSON
  if request.method == 'GET':
    recipe_list = Recipe.objects.all()
    serializer = RecipeSerializer(recipe_list, many=True)
    return JsonResponse(serializer.data, safe=False)

  # Convert JSON to Recipe model and save to db
  if request.method == 'POST':
    body = json.loads(request.body.decode('utf-8'))
    recipe = Recipe(
      recipe_title=body['recipe_title'],
      yield_amount=body['yield_amount'],
      yield_type=body['yield_type'],
      system=body['system'],
      ingredients=body['ingredients'],
      method=body['method'],
    )

    recipe.save()
    return HttpResponse(recipe)

# Eventually store ingredients and reference from recipe by... name? id?
def ingredients(request):
  latest_ingredients_list = Ingredients.objects.order_by('ingredient_name')
  response = list(latest_ingredients_list)
  print(response)
  return HttpResponse(response)



# Placeholder
def settings(request):
  return HttpResponse('This is the Settings view endpoint')
















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