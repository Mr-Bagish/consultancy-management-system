from django.urls import path
<<<<<<< HEAD
from .views import (
    AllBookingsView,
    UpdateBookingStatusView,
    AssignConsultantView,
    AnalyticsView
)

urlpatterns = [
    path('bookings/', AllBookingsView.as_view(), name='all_bookings'),
    path('bookings/<int:pk>/status/', UpdateBookingStatusView.as_view(), name='update_status'),
    path('bookings/<int:pk>/assign/', AssignConsultantView.as_view(), name='assign_consultant'),
    path('analytics/', AnalyticsView.as_view(), name='analytics'),
=======
from . import views
from .views import BookingCreateView

urlpatterns = [
    path('bookings/', views.all_bookings, name='all_bookings'),
    path('bookings/<int:pk>/status/', views.update_status, name='update_status'),
    path('bookings/<int:pk>/assign/', views.assign_consultant, name='assign_consultant'),
    path('analytics/', views.analytics, name='analytics'),
    path("bookings/", BookingCreateView.as_view(), name="booking-create"),
]

from django.urls import path
from .views import BookingCreateView


urlpatterns = [
    path("bookings/", BookingCreateView.as_view(), name="booking-create"),
>>>>>>> cad0fff8bd5ec3f098208153bb3bcb9ef58d7a72
]