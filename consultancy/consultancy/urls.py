from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

<<<<<<< HEAD
schema_view = get_schema_view(
    openapi.Info(
        title="Consultancy API",
        default_version='v1',
        description="Consultancy Management System API",
=======

schema_view = get_schema_view(
    openapi.Info(
        title="Consultancy API",
        default_version="v1",
        description="API documentation for Consultancy Management System",
>>>>>>> cad0fff8bd5ec3f098208153bb3bcb9ef58d7a72
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
<<<<<<< HEAD

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/admin/', include('bookings.urls')),
    path('api/content/', include('content.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='redoc'),
]
=======


urlpatterns = [
    path("admin/", admin.site.urls),

    # Accounts APIs
    path("api/accounts/", include("accounts.urls")),
    path("api/content/", include("content.urls")),
    path("api/bookings/", include("bookings.urls")),

    # Swagger Documentation
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="swagger",
    ),

    # ReDoc Documentation
    path(
        "redoc/",
        schema_view.with_ui("redoc", cache_timeout=0),
        name="redoc",
    ),
]
>>>>>>> cad0fff8bd5ec3f098208153bb3bcb9ef58d7a72
