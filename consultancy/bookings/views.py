from django.http import JsonResponse

def all_bookings(request):
    return JsonResponse({'message': 'Week 2 - coming soon'})

def update_status(request, pk):
    return JsonResponse({'message': 'Week 2 - coming soon'})

def assign_consultant(request, pk):
    return JsonResponse({'message': 'Week 3 - coming soon'})

def analytics(request):
    return JsonResponse({'message': 'Week 3 - coming soon'})

from rest_framework.generics import CreateAPIView
from .models import Booking
from .serializers import BookingSerializer


class BookingCreateView(CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer