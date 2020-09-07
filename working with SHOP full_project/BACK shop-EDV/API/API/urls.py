from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/', include('products.urls')),
    path('admin/', admin.site.urls),
    path('user/', include('User.urls')),
]
