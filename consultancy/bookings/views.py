from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.utils import timezone
from datetime import timedelta

from .models import Booking, BookingDocument
from .serializers import BookingSerializer, BookingDocumentSerializer


class BookingCreateView(CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(client=self.request.user)


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
        booking_id = self.request.data.get("booking")

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


class AllBookingsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        try:
            bookings = Booking.objects.all().order_by("-created_at")

            data = []

            for booking in bookings:
                data.append({
                    "id": booking.id,
                    "client": booking.client.username,
                    "service": booking.service.name if booking.service else None,
                    "provider_name": booking.provider_name,
                    "booking_date": str(booking.booking_date),
                    "status": booking.status,
                    "created_at": str(booking.created_at),
                })

            return Response(data)

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )


class UpdateBookingStatusView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk):
        try:
            booking = Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Response(
                {"error": "Booking not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        new_status = request.data.get("status")

        valid_statuses = [
            "new",
            "contacted",
            "scheduled",
            "completed"
        ]

        if not new_status:
            return Response(
                {"error": "status field is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if new_status not in valid_statuses:
            return Response(
                {"error": f"Invalid status! Choose from {valid_statuses}"},
                status=status.HTTP_400_BAD_REQUEST
            )

        booking.status = new_status
        booking.save()

        return Response({
            "message": "Status updated successfully",
            "booking_id": booking.id,
            "new_status": booking.status
        })


class AssignConsultantView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk):
        try:
            booking = Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Response(
                {"error": "Booking not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        provider_name = request.data.get("provider_name")

        if not provider_name:
            return Response(
                {"error": "provider_name is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        booking.provider_name = provider_name
        booking.save()

        return Response({
            "message": "Consultant assigned successfully",
            "booking_id": booking.id,
            "provider_name": booking.provider_name
        })


class AnalyticsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        try:
            total = Booking.objects.count()
            new = Booking.objects.filter(status="new").count()
            contacted = Booking.objects.filter(status="contacted").count()
            scheduled = Booking.objects.filter(status="scheduled").count()
            completed = Booking.objects.filter(status="completed").count()

            this_week = Booking.objects.filter(
                created_at__gte=timezone.now() - timedelta(days=7)
            ).count()

            return Response({
                "total_bookings": total,
                "new": new,
                "contacted": contacted,
                "scheduled": scheduled,
                "completed": completed,
                "this_week": this_week,
            })

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )