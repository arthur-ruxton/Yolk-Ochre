from django.http.response import HttpResponseRedirect
from django.shortcuts import redirect, render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied

from django.conf import settings
from django.urls import reverse
import jwt
from .serializers import PopulatedUserSerializer
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
    def get_user(self, pk): # <---- pass an id
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def get(self, request, pk): # <---- pass an id
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        print('user', serialized_user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

class FollowView(APIView):
    def profile(request, username):
        userProfile = User.objects.get(username=username)

        data = {
            "author": userProfile,
        }
        return render(request, "author/profile.html", data)

    def followToggle(request, author):
        authorObj = User.objects.get(username=author)
        currentUserObj = User.objects.get(username=request.user.username)
        following = authorObj.following.all()

        if author != currentUserObj.username:
            if currentUserObj in following:
                authorObj.following.remove(currentUserObj.id)
            else:
                authorObj.following.add(currentUserObj.id)

        return redirect(reverse(FollowView.profile, args=[authorObj.username]))