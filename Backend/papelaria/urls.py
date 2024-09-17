from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from users.urls import router as user_router
from users.authentications import Authentication, Logout

router = DefaultRouter()

router.registry.extend(user_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/token/', Authentication.as_view()),
    path('api/token/logout/', Logout.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path(r'api/', include(router.urls)),
]
