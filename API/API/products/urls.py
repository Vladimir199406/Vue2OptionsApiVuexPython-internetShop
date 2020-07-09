from django.urls import path
from. views import *


app_name = "Product"
urlpatterns = [
    path('clothes', Clothes.as_view()),
    path('book', Book.as_view()),
    path('tv', TV.as_view()),
    path('consoles', Consoles.as_view()),
    path('garden', Garden.as_view()),
]