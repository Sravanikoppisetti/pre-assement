from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from .views import EmployeeViewSet
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'employee', EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
