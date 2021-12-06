from rest_framework import serializers
#from django.contrib.auth import get_user_model <-- using custom user model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
#User = get_user_model()
from .models import User # <-- using custom user model 

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation',)

class BaseUserSerializer(UserSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PopulatedUserSerializer(BaseUserSerializer):
    followers = BaseUserSerializer(read_only=True, many=True)
    following = BaseUserSerializer(read_only=True, many=True)
    favourites = BaseUserSerializer(read_only=True, many=True)
    favouritedBy = BaseUserSerializer(read_only=True, many=True)