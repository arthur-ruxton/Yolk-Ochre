from django.urls import path
from . import views
from .views import CommentListView
from .views import CommentsDetailView

# these are app level routes

urlpatterns = [
    path('<int:pk>/', CommentsDetailView.as_view()), # wildcard: meaning very similar to another route
    path('', CommentListView.as_view()),
]