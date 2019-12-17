from django.contrib import admin
from .models import Product, Category, Genre, RentedProducts

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Genre)
admin.site.register(RentedProducts)
