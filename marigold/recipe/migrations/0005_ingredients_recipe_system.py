# Generated by Django 4.0.1 on 2022-01-26 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipe', '0004_delete_ingredients_recipe_ingredients_recipe_method'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredients',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
            ],
        ),
        migrations.AddField(
            model_name='recipe',
            name='system',
            field=models.CharField(default='Metric', max_length=16),
        ),
    ]
