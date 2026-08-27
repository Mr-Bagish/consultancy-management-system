from django.urls import path

from .views import (
    BookingCreateView,
    MyBookingsView,
    BookingDocumentUploadView,
    AllBookingsView,
    UpdateBookingStatusView,
    AssignConsultantView,
    AnalyticsView,
)
 

urlpatterns = [
    # User booking endpoints
    path(
        "bookings/create",
        BookingCreateView.as_view(),
        name="booking-create",
    ),
    path(
        "my-bookings/",
        MyBookingsView.as_view(),
        name="my-bookings",
    ),
    path(
        "documents/upload/",
        BookingDocumentUploadView.as_view(),
        name="document-upload",
    ),

    # Admin booking endpoints
    path(
        "bookings/",
        AllBookingsView.as_view(),
        name="all_bookings",
    ),
    path(
        "bookings/<int:pk>/status/",
        UpdateBookingStatusView.as_view(),
        name="update_status",
    ),
    path(
        "bookings/<int:pk>/assign/",
        AssignConsultantView.as_view(),
        name="assign_consultant",
    ),
    path(
        "analytics/",
        AnalyticsView.as_view(),
        name="analytics",
    ),
]