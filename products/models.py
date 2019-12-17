from django.db import models
import os

import datetime


def get_upload_path(instance, filename):
    path = os.path.join(str(instance.category), filename)
    return path


class Category(models.Model):
    name = models.CharField(max_length=75)

    def __str__(self):
        return self.name


class Genre(models.Model):
    name = models.CharField(max_length=75)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=75)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    genre = models.ManyToManyField(Genre)
    creator = models.CharField(max_length=75, default=None, null=True)
    ISBN = models.CharField(max_length=75, null=True)
    price = models.FloatField(null=True)
    image = models.ImageField(
        upload_to=get_upload_path
    )

    def __str__(self):
        return f'{self.name} ({self.category})'


class RentedProducts(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    userFullName = models.CharField(max_length=75)
    email = models.CharField(max_length=75)
    address = models.TextField(max_length=200)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.product.name
