from rest_framework.views import APIView 
from rest_framework.response import Response # <------ alternative to import HTTPResponse
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly # <-- django permissions
from rest_framework.exceptions import PermissionDenied # <------ exceptions 
from django.conf import settings
import jwt # <---------------------------------- import json webtoken
from .serializers import PopulatedUserSerializer
from .models import User # <-------------------- custom user model -> else use -> #from django.contrib.auth import get_user_model 

from django.shortcuts import render
from django.urls import reverse

class RegisterView(APIView):
    # POST REGISTER INFO
    def post(self, request):
        serializer = PopulatedUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):
    # GET USER INFO
    def get_user(self, username): # <---- I changed email to username for login
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})
    # POST LOGIN REQUEST
    def post(self, request):

        username = request.data.get('username')
        password = request.data.get('password')

        user = self.get_user(username)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})


class UserDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    # GET USER INFO
    def get_user(self, pk): # <---- I changed email to username for login
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def get(self, request, pk): # <---- I changed email to username for login
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        print('user', serialized_user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    # EDIT USER INFO
    def put(self, request, pk):
        user = User.objects.get(id=pk) # django ORM method to grab one by its id
        updated_user = PopulatedUserSerializer(user, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_user.data,status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class FollowToggle(APIView): # <-- rename followToggle
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def put(self, request, pk): # <------------- pass this function user-to-follows id
        userToFollow = User.objects.get(id=pk)
        currentUser = User.objects.get(id=request.user.id)
        following = currentUser.following.all()

        if userToFollow != currentUser:
            if userToFollow in following:
                currentUser.following.remove(userToFollow)
            else:
                currentUser.following.add(userToFollow)
    
        currentUser.save()
        serialized_user = PopulatedUserSerializer(currentUser)
        return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)


class FavouriteToggle(APIView): # <-- rename followToggle
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def put(self, request, pk): # <------------- pass this function user-to-follows id
        userToFavourite = User.objects.get(id=pk)
        currentUser = User.objects.get(id=request.user.id)
        favourites = currentUser.favourites.all()

        if userToFavourite != currentUser:
            if userToFavourite in favourites:
                currentUser.favourites.remove(userToFavourite)
            else:
                currentUser.favourites.add(userToFavourite)
    
        currentUser.save()
        serialized_user = PopulatedUserSerializer(currentUser)
        return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)





