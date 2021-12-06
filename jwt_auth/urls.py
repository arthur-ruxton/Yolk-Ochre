from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, FollowToggle, FavouriteToggle

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/<int:pk>/', UserDetailView.as_view()),
    path('followToggle/<int:pk>/', FollowToggle.as_view()),
    path('favouriteToggle/<int:pk>/', FavouriteToggle.as_view())
]

