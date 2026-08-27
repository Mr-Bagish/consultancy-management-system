from django.urls import path
from .views import BookingCreateView, MyBookingsView, BookingDocumentUploadView


urlpatterns = [
    path("bookings/", BookingCreateView.as_view(), name="booking-create"),
    path('my-bookings/', MyBookingsView.as_view(), name='my-bookings'),
    path(
        'documents/upload/',
        BookingDocumentUploadView.as_view(),
        name='document-upload'
    ),
]