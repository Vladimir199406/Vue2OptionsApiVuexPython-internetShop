from django.db import models
from django.contrib.postgres.fields import ArrayField


class Clothes(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="clothes")
    price = models.FloatField()
    article = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10,)
    variantsStock = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumberBlack = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumberWhite = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumberGrey = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumberRed = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumberBlue = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumberYellow = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumberGreen = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumber = ArrayField(models.CharField(max_length=50), size=10, )

    def __str__(self):
        return self.name


class Book(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="book")
    price = models.FloatField()
    article = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    author = models.CharField(max_length=200)
    numbersOfPages = models.IntegerField()
    coverBinding = models.CharField(max_length=20)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumber = ArrayField(models.CharField(max_length=50), size=10,)

    def __str__(self):
        return self.name


class TV(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="TV")
    price = models.FloatField()
    category = models.CharField(max_length=50)
    article = models.CharField(max_length=100)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10,)
    variantsNumber = ArrayField(models.CharField(max_length=50), size=10,)
    screen = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Audio(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="book")
    price = models.FloatField()
    article = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumber = ArrayField(models.CharField(max_length=50), size=10,)

    def __str__(self):
        return self.name


class Consoles(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="TV")
    price = models.FloatField()
    category = models.CharField(max_length=50)
    article = models.CharField(max_length=100)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumber = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Garden(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="TV")
    price = models.FloatField()
    category = models.CharField(max_length=50)
    article = models.CharField(max_length=100)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumber = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class MobilesAndGudgets(models.Model):
    image = ArrayField(models.CharField(max_length=100), size=4, )
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, default="mobilesAndGudgets")
    price = models.FloatField()
    article = models.CharField(max_length=100)
    colorsStock = ArrayField(models.CharField(max_length=50), size=10, )
    variantsNumber = ArrayField(models.CharField(max_length=100), size=7, )
    category = models.CharField(max_length=50)
    memory = models.CharField(max_length=50)
    screen = models.CharField(max_length=200)
    camera = models.CharField(max_length=100)
    batteryCapacity = models.CharField(max_length=200)

    def __str__(self):
        return self.name
