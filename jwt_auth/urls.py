from django.urls import path
from .views import RegisterView, LoginView, UserView, FollowView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', UserView.as_view()),
    path("profile/<str:username>/", FollowView.profile, name="profile"),
    path("followToggle/<str:author>/", FollowView.followToggle, name="followToggle")
]

