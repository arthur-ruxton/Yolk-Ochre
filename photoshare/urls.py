from django.contrib import admin
from django.urls import path
from django.urls import include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('art/', include('art.urls')),
    path('auth/', include('jwt_auth.urls')),
    path('follows/', include('follows.urls')),
    path('like/', include('like.urls'))
]
