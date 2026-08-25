from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .models import Service
from .serializers import ServiceSerializer


class ServiceListView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer