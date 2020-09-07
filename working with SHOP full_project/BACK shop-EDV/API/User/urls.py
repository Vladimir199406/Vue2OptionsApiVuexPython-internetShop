from django.urls import path
from. views import *


urlpatterns = [
    path("users/", UserCreate.as_view()),
    path("login/", LoginView.as_view()),
]