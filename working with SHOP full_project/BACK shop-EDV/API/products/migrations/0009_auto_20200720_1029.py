# Generated by Django 3.0.8 on 2020-07-20 10:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_auto_20200710_1229'),
    ]

    operations = [
        migrations.RenameField(
            model_name='audio',
            old_name='color_stock',
            new_name='colorsStock',
        ),
        migrations.RenameField(
            model_name='book',
            old_name='color_stock',
            new_name='colorsStock',
        ),
        migrations.RenameField(
            model_name='clothes',
            old_name='color_stock',
            new_name='colorsStock',
        ),
        migrations.RenameField(
            model_name='consoles',
            old_name='color_stock',
            new_name='colorsStock',
        ),
        migrations.RenameField(
            model_name='garden',
            old_name='color_stock',
            new_name='colorsStock',
        ),
        migrations.RenameField(
            model_name='tv',
            old_name='color_stock',
            new_name='colorsStock',
        ),
    ]
