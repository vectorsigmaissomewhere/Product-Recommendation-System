from django.contrib import admin
from django.urls import path
from recommend.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', ProductsAPI.as_view()),
    path('productdetail/<id>/', ProductDetailAPI.as_view()),
]
