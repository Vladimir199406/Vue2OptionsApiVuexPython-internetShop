# Generated by Django 3.0.8 on 2020-07-10 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20200710_1229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='clothes',
            name='price',
            field=models.FloatField(),
        ),
    ]