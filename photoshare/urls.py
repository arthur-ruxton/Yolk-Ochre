from django.contrib import admin
from django.urls import path
from django.urls import include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/art/', include('art.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/follows/', include('follows.urls')),
    path('api/like/', include('like.urls'))
]
