from django.urls import path
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
]