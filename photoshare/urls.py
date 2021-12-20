from django.contrib import admin
from django.urls import path
from django.urls import include

from django.urls import path, include, re_path # <-- added this new import re_path
from .views import index # <-- also new


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/art/', include('art.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/comment/', include('comment.urls')),
    re_path(r'^.*$', index) # <-- added for deployment
]
