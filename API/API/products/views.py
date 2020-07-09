from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from. models import Clothes as Clothess
from. models import Book as Books
from. models import TV as TVs
from. models import Audio as Audios
from. models import Garden as Gardens
from. models import Consoles as Consoless


class Clothes(APIView):
    def get(self, request):
        clothes = Clothess.objects.all()

        serializer = ClothesSerializer(clothes, many=True)
        return Response({"Clothes": serializer.data})


class Book(APIView):
    def get(self, request):
        book = Books.objects.all()

        serializer = BookSerializer(book, many=True)
        return Response({"Book": serializer.data})

class TV(APIView):
    def get(self, request):
        TV = TVs.objects.all()

        serializer = TVSerializer(TV, many=True)
        return Response({"TV": serializer.data})

class Audio(APIView):
    def get(self, request):
        book = Audios.objects.all()

        serializer = AudioSerializer(Audio, many=True)
        return Response({"Audio": serializer.data})


class Consoles(APIView):
    def get(self, request):
        Consoles = Consoless.objects.all()

        serializer = ConsolesSerializer(Consoles, many=True)
        return Response({"Consoles": serializer.data})

class Garden(APIView):
    def get(self, request):
        Garden = Gardens.objects.all()

        serializer = GardenSerializer(Garden, many=True)
        return Response({"Garden": serializer.data})