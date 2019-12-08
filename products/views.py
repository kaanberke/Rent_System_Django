from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Product, Category, Genre
from .serializers import ProductSerializer, CategorySerializer, GenreSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class GenreView(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

def list(request):
  images = Product.objects.all()
  return render(request, "list.html", {'images': images})

def list_books(request):
  images = Product.objects.filter(category__exact="1")
  return render(request, "list.html", {'images': images})

def list_films(request):
  images = Product.objects.filter(category__exact="2")
  return render(request, "list.html", {'images': images})

def test(request):
    return render(request, "test.html")