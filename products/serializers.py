from rest_framework import serializers
from .models import Product, Genre, Category, RentedProducts, Tickets


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    genre = serializers.SlugRelatedField(queryset=Genre.objects.all(), many=True, slug_field='name')
    category = serializers.SlugRelatedField(queryset=Category.objects.all(), slug_field='name')
    image = serializers.ImageField(read_only=True)

    class Meta:
        model = Product
        fields = ('id',
                  'url',
                  'name',
                  'summary',
                  'creator',
                  'category',
                  'genre',
                  'ISBN',
                  'price',
                  'image')

    def to_representation(self, instance):
        result = super(ProductSerializer, self).to_representation(instance)
        result['genre'] = instance.genre.values_list('name', flat=True)
        result['category'] = instance.category.name
        return result


class ImageUploadSerializer(serializers.Serializer):
    image = serializers.ImageField()

    class Meta:
        fields = '__all__'


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'


class RentedProductsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RentedProducts
        fields = '__all__'


class TicketsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'
