from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.exceptions import NotFound

from .models import Booking, BookingDocument
from .serializers import BookingSerializer, BookingDocumentSerializer


class BookingCreateView(CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class MyBookingsView(ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(
            client=self.request.user
        )


class BookingDocumentUploadView(CreateAPIView):
    serializer_class = BookingDocumentSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        booking_id = self.request.data.get('booking')

        try:
            booking = Booking.objects.get(
                id=booking_id,
                client=self.request.user
            )
        except Booking.DoesNotExist:
            raise NotFound(
                "Booking not found or does not belong to you."
            )

        serializer.save(booking=booking)