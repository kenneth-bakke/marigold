# Generated by Django 4.0.1 on 2022-01-25 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0003_remove_recipe_ingredients'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Ingredients',
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.JSONField(default=dict),
        ),
        migrations.AddField(
            model_name='recipe',
            name='method',
            field=models.CharField(default='', max_length=5000),
        ),
    ]