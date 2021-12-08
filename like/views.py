from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Like
from art.models import Art

from .serializers import LikeSerializer

# Create your views here.

class LikeListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

     #POST /Like/
    def post(self, request):
        request.data['owner'] = request.user.id
        like_to_add = LikeSerializer(data=request.data)
        if like_to_add.is_valid():
            like_to_add.save()
            return Response(like_to_add.data, status=status.HTTP_201_CREATED) # send back appropriate http response 
        else:
            return Response(like_to_add.data, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # throw back error 


class LikeDetailView(APIView): 
    permission_classes = (IsAuthenticatedOrReadOnly,)

    # GET ONE
    # respond to get - pass in id as pk (this is essentially show functionality)
    def get_like(self, pk):
        try:
            like = Like.objects.get(id=pk)
            return like
        except Like.DoesNotExist:
            raise NotFound(detail="Join not found!")

     # DELETE
    def delete(self, request, pk):
        like_to_delete = self.get_like(id=pk)
        if like_to_delete.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
        like_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 


#class LikeToggle(APIView): # <-- rename followToggle
#    permission_classes = (IsAuthenticatedOrReadOnly,)
#
#    def put(self, request, pk): # <------------- pass this function user-to-follows id
#        artToLike = Art.objects.get(id=pk)
#        currentUser = request.user.id
#        likes = artToLike.like.all()
#        
#        if currentUser in likes:
#            artToLike.likes.remove(currentUser)
#        else:
#            artToLike.likes.add(currentUser)
#
#        currentUser.save()
#        serialized_art = ArtSerializer(currentUser)
#        return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)