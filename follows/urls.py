from django.urls import path
from .views import FollowsListView, FollowsDetailView

urlpatterns = [
    path('', FollowsListView.as_view()),
    path('<int:pk>/', FollowsDetailView.as_view()), # wildcard: meaning very similar to another route
]