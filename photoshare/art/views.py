from django.http.response import HttpResponse
from django.shortcuts import render

def home(request):
    return HttpResponse('<h1>hello world</h1>')