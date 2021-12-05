from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly # <-- django permissions
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Follows
from .serializers import FollowsSerializer

class FollowsListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
     #POST /follows/
    def post(self, request):
        request.data['owner'] = request.user.id
        follow_to_add = FollowsSerializer(data=request.data)
        if follow_to_add.is_valid():
            follow_to_add.save()
            return Response(follow_to_add.data, status=status.HTTP_201_CREATED) # send back appropriate http response 
        else:
            return Response(follow_to_add.data, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # throw back error 


class FollowsDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # GET ONE
    # respond to get - pass in id as pk (this is essentially show functionality)
    def get_follows(self, pk):
        try:
            follow = Follows.objects.get(id=pk)
            return follow
        except Follows.DoesNotExist:
            raise NotFound(detail="Join not found!")

     # DELETE
    def delete(self, request, pk):
        follow_to_delete = self.get_follows(id=pk)
        if follow_to_delete.owner != request.user:
                raise PermissionDenied(detail="Unauthorized")
        follow_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
