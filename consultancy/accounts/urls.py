from django.urls import path
from .views import SignupView, LoginView, ProfileView, AdminLoginView

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("admin-login/", AdminLoginView.as_view(), name="admin_login"),
]