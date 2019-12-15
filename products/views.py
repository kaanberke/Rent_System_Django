from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.parsers import FileUploadParser, JSONParser, MultiPartParser
from rest_framework.response import Response

from .models import Product, Category, Genre
from .serializers import ProductSerializer, CategorySerializer, GenreSerializer, ImageUploadSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(methods=['POST'],
            url_path='image',
            detail=True,
            serializer_class=ImageUploadSerializer)
    def image_upload(self, request, pk):
        try:
            product = Product.objects.get(id=pk)
        except Product.DoesNotExist:
            return Response({'Error': 'Product Not Found'})
        product.image = request.FILES.get('image')
        product.save()
        return Response(ProductSerializer(product, context={'request': request}).data)

class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class GenreView(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


def home_page(request):
    return render(request, 'index.html')

def cart(request):
    return render(request, 'cart.html')

def addProduct(request):
    return render(request, 'addProduct.html')
#
# def list(request):
#   images = Product.objects.all()
#   return render(request, "list.html", {'images': images})
#
# def list_books(request):
#   images = Product.objects.filter(category__exact="1")
#   return render(request, "list.html", {'images': images})
#
# def list_films(request):
#   images = Product.objects.filter(category__exact="2")
#   return render(request, "list.html", {'images': images})
#
# def test(request):
#     return render(request, "test.html")
