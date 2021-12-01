from django.urls import path
from . import views
from .views import ArtListView
from .views import ArtDetailView

urlpatterns = [
    path('home/', views.home),
    path('<int:pk>/', ArtDetailView.as_view()), # wildcard: meaning very similar to another route
    path('', ArtListView.as_view()),
]