from django.urls import path
from . import views

urlpatterns = [
    path('bookings/', views.all_bookings, name='all_bookings'),
    path('bookings/<int:pk>/status/', views.update_status, name='update_status'),
    path('bookings/<int:pk>/assign/', views.assign_consultant, name='assign_consultant'),
    path('analytics/', views.analytics, name='analytics'),
]