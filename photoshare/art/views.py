from django.http.response import HttpResponse
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status # to send status code

from .models import Art

def home(request):
    return HttpResponse('<h1>hello world</h1>')