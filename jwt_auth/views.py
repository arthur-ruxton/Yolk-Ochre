from django.http.response import HttpResponseRedirect
from django.shortcuts import redirect, render
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
#from django.contrib.auth import get_user_model # <-- using custom user model 
from django.conf import settings
from django.urls import reverse
import jwt
from .serializers import PopulatedUserSerializer
#User = get_user_model()
from .models import User # <-- using custom user model 

class RegisterView(APIView):

    def post(self, request):
        serializer = PopulatedUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, username): # <---- I changed email to username for login
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        username = request.data.get('username')
        password = request.data.get('password')

        user = self.get_user(username)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})


class UserView(APIView):
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

      # EDIT ONE
    def put(self, request, pk):
        user = User.objects.get(id=pk) # django ORM method to grab one by its id
        updated_user = PopulatedUserSerializer(user, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data,status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_user.data,status=status.HTTP_422_UNPROCESSABLE_ENTITY)