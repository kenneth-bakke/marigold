# Generated by Django 4.0.1 on 2022-01-23 05:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0002_alter_ingredients_id_alter_recipe_id_alter_tags_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='ingredients',
        ),
    ]
