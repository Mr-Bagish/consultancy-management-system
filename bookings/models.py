from django.db import models
from django.contrib.auth.models import User

class Service(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name


class Booking(models.Model):

    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('scheduled', 'Scheduled'),
        ('completed', 'Completed'),
    ]

    client = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='bookings'
    )
    service = models.ForeignKey(
        Service,
        on_delete=models.SET_NULL,
        null=True
    )
    client_name = models.CharField(max_length=200)
    client_email = models.EmailField()
    client_phone = models.CharField(max_length=20, blank=True)
    message = models.TextField(blank=True)
    booking_date = models.DateField()
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='new'
    )
    assigned_to = models.CharField(
        max_length=200,
        blank=True,
        default=''
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client_name} - {self.status}"