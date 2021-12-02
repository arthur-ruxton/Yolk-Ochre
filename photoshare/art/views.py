from django.http.response import HttpResponse
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status # to send status code

from .models import Art
from .serializers import ArtSerializer

class ArtDetailView(APIView): 
     # DELETE request currently not working
    def delete(self, request, pk):
        try:
            art = Art.objects.get(id=pk)
            art.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        return Response(status=status.HTTP_204_NO_CONTENT) 

    # EDIT ONE
    def put(self, request, pk):
        art = Art.objects.get(id=pk) # django ORM method to grab one by its id
        updated_art = ArtSerializer(art, data=request.data)
        if updated_art.is_valid():
            updated_art.save()
            return Response(updated_art.data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_art.data,status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # GET ONE
    # respond to get - pass in id as pk (this is essentially show functionality)
    def get(self, request, pk):
        art = Art.objects.get(id=pk)
        serialized_art = ArtSerializer(art)
        # serialized_art = PopulatedArtSerializer(art)
        return Response(serialized_art.data,status=status.HTTP_200_OK)


class ArtListView(APIView):
     #POST /art/
    def post(self, request):
        art = ArtSerializer(data = request.data)
        if art.is_valid():
            # art.save() # <-- django orm method to save
            # art.save(owner = [request.user]) # <---- assigning ownership after POST
            art.save(owner = request.user) # <---- one to many version
            return Response(art.data, status=status.HTTP_201_CREATED) # send back appropriate http response 
        else:
            return Response(art.data, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # throw back error 

    # respond to GET /art/
    def get(self, request):
        art = Art.objects.all()
        serialized_art = ArtSerializer(art, many=True) # serialize for sending over the wire
        return Response(serialized_art.data, status=status.HTTP_200_OK)

def home(request):
    return HttpResponse('<h1>hello world</h1>')