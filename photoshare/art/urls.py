from django.urls import path
from . import views
from .views import ArtListView
# from .views import CatsDetailView

urlpatterns = [
    path('home/', views.home),
    path('', ArtListView.as_view()),
]