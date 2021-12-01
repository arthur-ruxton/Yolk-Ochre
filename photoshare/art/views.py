from django.http.response import HttpResponse
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status # to send status code

from .models import Art
from .serializers import ArtSerializer

class ArtListView(APIView):
    # responder to GET /arts/
    def get(self, request):
        arts = Art.objects.all()
        serialized_arts = ArtSerializer(arts, many=True) # serialize for sending over the wire
        return Response(serialized_arts.data, status=status.HTTP_200_OK)

def home(request):
    return HttpResponse('<h1>hello world</h1>')