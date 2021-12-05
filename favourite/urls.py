from django.urls import path
from .views import FavouritesListView, FavouritesDetailView

urlpatterns = [
    path('', FavouritesListView.as_view()),
    path('<int:pk>/', FavouritesDetailView.as_view()), # wildcard: meaning very similar to another route
]