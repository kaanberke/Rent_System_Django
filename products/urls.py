from django.urls import path, include
from . import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('products', views.ProductView)
router.register('categories', views.CategoryView)
router.register('genres', views.GenreView)

urlpatterns = [
    path('', include(router.urls)),
    path('test', views.test, name="test"),
    path('list', views.list, name="list"),
    path('list/book', views.list_books, name="list_books"),
    path('list/film', views.list_films, name="list_films"),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)