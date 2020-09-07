from rest_framework import serializers
from. models import *


class ClothesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clothes
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'colorsStock', 'variantsStock',
                  'variantsNumberBlack', 'variantsNumberWhite', 'variantsNumberGrey', 'variantsNumberRed',
                  'variantsNumberBlue', 'variantsNumberYellow', 'variantsNumberGreen', 'variantsNumber')


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'author', 'numbersOfPages',
                  'coverBinding', 'colorsStock', 'variantsNumber')


class TVSerializer(serializers.ModelSerializer):
    class Meta:
        model = TV
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'screen', 'colorsStock', 'variantsNumber')


class AudioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Audio
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'colorsStock', 'variantsNumber')


class ConsolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consoles
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'colorsStock', 'variantsNumber')


class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = ('image', 'name', 'type', 'price', 'article', 'category', 'colorsStock', 'variantsNumber')


class MobilesAndGudgetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobilesAndGudgets
        fields = ('image', 'name', 'type', 'price', 'article', 'colorsStock', 'variantsNumber', 'category', 'memory', 'screen', 'camera', 'batteryCapacity')

