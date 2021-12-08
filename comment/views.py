from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status # to send status code
from rest_framework.permissions import IsAuthenticatedOrReadOnly # <-- django permissions

from .models import Comment

from .serializers import CommentSerializer
from .serializers import PopulatedCommentSerializer

class CommentsDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    # DELETE request currently not working
    def delete(self, request, pk):
        try:
            comment = Comment.objects.get(id=pk)
            comment.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        return Response(status=status.HTTP_204_NO_CONTENT) 

    # EDIT ONE
    def put(self, request, pk):
        comment = Comment.objects.get(id=pk) # django ORM method to grab one by its id
        updated_comment = CommentSerializer(comment, data=request.data)
        if updated_comment.is_valid():
            updated_comment.save()
            return Response(updated_comment.data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_comment.data,status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # GET ONE
    # respond to get - pass in id as pk (this is essentially show functionality)
    # def get(self, request, pk):
    #    comment = Comment.objects.get(id=pk)
    #    serialized_comment = CommentSerializer(comment)
    #    return Response(serialized_comment.data,status=status.HTTP_200_OK)

class CommentListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    #POST /comments/
    def post(self, request):
        comment = CommentSerializer(data = request.data)
        if comment.is_valid():
            comment.save() # <-- Django ORM method to save
            return Response(comment.data, status=status.HTTP_201_CREATED) # send back appropriate http response 
        else:
            return Response(comment.data, status=status.HTTP_422_UNPROCESSABLE_ENTITY) # throw back error 

    #GET /comments/
    def get(self, request):
        comments = Comment.objects.all()
        serialized_comments = PopulatedCommentSerializer(comments, many=True) # serialize for sending over the wire
        return Response(serialized_comments.data, status=status.HTTP_200_OK)