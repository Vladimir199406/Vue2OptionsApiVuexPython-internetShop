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
from. models import MobilesAndGudgets as MobilesAndGudgetss
from django.contrib.auth import authenticate


class Clothes(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        clothes = Clothess.objects.all()

        serializer = ClothesSerializer(clothes, many=True)
        return Response(serializer.data)


class Book(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        book = Books.objects.all()

        serializer = BookSerializer(book, many=True)
        return Response(serializer.data)

class TV(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        TV = TVs.objects.all()

        serializer = TVSerializer(TV, many=True)
        return Response(serializer.data)

class Audio(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        Audio = Audios.objects.all()

        serializer = AudioSerializer(Audio, many=True)
        return Response(serializer.data)

class Consoles(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        Consoles = Consoless.objects.all()

        serializer = ConsolesSerializer(Consoles, many=True)
        return Response(serializer.data)

class Garden(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        Garden = Gardens.objects.all()

        serializer = GardenSerializer(Garden, many=True)
        return Response(serializer.data)

class MobilesAndGudgets(APIView):
    authentication_classes = ()
    permission_classes = ()
    def get(self, request):
        MobilesAndGudgets = MobilesAndGudgetss.objects.all()

        serializer = MobilesAndGudgetsSerializer(MobilesAndGudgets, many=True)
        return Response(serializer.data)