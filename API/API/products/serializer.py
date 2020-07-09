from rest_framework import serializers
from. models import *


class ClothesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clothes
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'color_stock', 'variantsStock',
                  'variantsNumberBlack', 'variantsNumberWhite', 'variantsNumberGrey', 'variantsNumberRed',
                  'variantsNumberBlue', 'variantsNumberYellow', 'variantsNumberGreen', 'variantsNumber')


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'author', 'numbersOfPages',
                  'coverBinding', 'color_stock', 'variantsNumber')


class TVSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'screen', 'color_stock', 'variantsNumber')


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'color_stock', 'variantsNumber')


class ConsolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'color_stock', 'variantsNumber')


class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'color_stock', 'variantsNumber')
