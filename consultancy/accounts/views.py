<<<<<<< HEAD
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from .models import Booking
from django.utils import timezone
from datetime import timedelta

=======
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Profile
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import SignupSerializer, LoginSerializer
import json
from drf_yasg.utils import swagger_auto_schema
>>>>>>> cad0fff8bd5ec3f098208153bb3bcb9ef58d7a72

# ── View All Bookings (Admin only) ──
class AllBookingsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        bookings = Booking.objects.all().order_by('-created_at')
        data = []
        for booking in bookings:
            data.append({
                'id': booking.id,
                'client': booking.client.username,
                'service': booking.service.name if booking.service else None,
                'provider_name': booking.provider_name,
                'booking_date': str(booking.booking_date),
                'booking_time': str(booking.booking_time),
                'phone_no': booking.phone_no,
                'status': booking.status,
                'created_at': str(booking.created_at),
            })
        return Response(data)


# ── Update Booking Status (Admin only) ──
class UpdateBookingStatusView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk):
        try:
            booking = Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Response(
                {'error': 'Booking not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        new_status = request.data.get('status')
        valid_statuses = ['new', 'contacted', 'scheduled', 'completed']

        if new_status not in valid_statuses:
            return Response(
                {'error': f'Invalid status! Choose from {valid_statuses}'},
                status=status.HTTP_400_BAD_REQUEST
            )

        booking.status = new_status
        booking.save()

        return Response({
            'message': 'Status updated successfully',
            'booking_id': booking.id,
            'new_status': booking.status
        })


# ── Assign Consultant (Admin only) ──
class AssignConsultantView(APIView):
    permission_classes = [IsAdminUser]

    def patch(self, request, pk):
        try:
            booking = Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Response(
                {'error': 'Booking not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        provider_name = request.data.get('provider_name')

<<<<<<< HEAD
        if not provider_name:
            return Response(
                {'error': 'provider_name is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        booking.provider_name = provider_name
        booking.save()

        return Response({
            'message': 'Consultant assigned successfully',
            'booking_id': booking.id,
            'provider_name': booking.provider_name
        })


# ── Analytics (Admin only) ──
class AnalyticsView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        total = Booking.objects.count()
        new = Booking.objects.filter(status='new').count()
        contacted = Booking.objects.filter(status='contacted').count()
        scheduled = Booking.objects.filter(status='scheduled').count()
        completed = Booking.objects.filter(status='completed').count()

        this_week = Booking.objects.filter(
            created_at__gte=timezone.now() - timedelta(days=7)
        ).count()

        return Response({
            'total_bookings': total,
            'new': new,
            'contacted': contacted,
            'scheduled': scheduled,
            'completed': completed,
            'this_week': this_week,
        })
=======
    return JsonResponse({'error': 'POST request required'}, status=405)


class SignupView(APIView):
    @swagger_auto_schema(request_body=SignupSerializer)
    def post(self, request):
        serializer = SignupSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User created successfully."},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    @swagger_auto_schema(request_body=LoginSerializer)
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(
            username=email,
            password=password,
        )

        if user is None:
            return Response(
                {"error": "Invalid email or password."},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
        )
>>>>>>> cad0fff8bd5ec3f098208153bb3bcb9ef58d7a72
