# Generated by Django 3.0.7 on 2020-07-20 19:50

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0012_mobilesandgudgets'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mobilesandgudgets',
            name='variantsNumber',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), size=4),
        ),
    ]
