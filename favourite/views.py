from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly # <-- django permissions
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Favourite
from .serializers import FavouriteSerializer

class FavouritesListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
     #POST /favourites/
    def post(self, request):
        request.data['owner'] = request.user.id
        favourite_to_add = FavouriteSerializer(data=request.data)
        if favourite_to_add.is_valid():
            favourite_to_add.save()
            return Response(favourite_to_add.data, status=status.HTTP_201_CREATED) # send back appropriate http response 
        else:
            return Response(favourite_to_add.data, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # throw back error 


class FavouritesDetailView(APIView): 
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # GET ONE
    # respond to get - pass in id as pk (this is essentially show functionality)
    def get_favourites(self, pk):
        try:
            favourite = Favourite.objects.get(id=pk)
            return favourite
        except Favourite.DoesNotExist:
            raise NotFound(detail="Join not found!")

     # DELETE
    def delete(self, request, pk):
        favourite_to_delete = self.get_favourites(id=pk)
        if favourite_to_delete.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
        favourite_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
