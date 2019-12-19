from django.contrib import admin
from .models import Product, Category, Genre, RentedProducts, Tickets

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Genre)
admin.site.register(RentedProducts)
admin.site.register(Tickets)
