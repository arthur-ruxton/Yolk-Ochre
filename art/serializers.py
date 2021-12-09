from rest_framework import serializers
from .models import Art
from jwt_auth.serializers import UserSerializer, PopulatedUserSerializer
from comment.serializers import CommentSerializer

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ('image', 'caption', 'location', 'id')

class PopulatedArtSerializer(ArtSerializer):
    owner = PopulatedUserSerializer()
    likes = UserSerializer(many=True)
    comments = CommentSerializer(many=True)
    class Meta:
        model = Art
        fields = '__all__'