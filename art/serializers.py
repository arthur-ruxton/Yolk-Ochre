from rest_framework import serializers
from .models import Art
from jwt_auth.serializers import UserSerializer
from comment.serializers import CommentSerializer
from like.serializers import LikeSerializer

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = '__all__'

class PopulatedArtSerializer(ArtSerializer):
    owner = UserSerializer()
    like = LikeSerializer(many=True)
    comments = CommentSerializer(many=True)
       