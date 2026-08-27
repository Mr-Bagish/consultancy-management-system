from rest_framework import serializers
from .models import Booking, BookingDocument


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = [
            "id",
            "service",
            "provider_name",
            "booking_date",
            "booking_time",
            "phone_no",
            "status",
            "created_at",
        ]
        read_only_fields = [
            "id",
            "status",
            "created_at",
        ]

class BookingDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingDocument
        fields = ['id', 'booking', 'file', 'uploaded_at']
        read_only_fields = ['id', 'uploaded_at']