from django.db import models
from django.contrib.auth.models import User
from content.models import Service


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
    provider_name = models.CharField(max_length=200, blank=True)
    booking_date = models.DateField()
    booking_time = models.TimeField(null=True, blank=True)
    phone_no = models.CharField(max_length=20, blank=True)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='new'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client.username} - {self.status}"


class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    client = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='applications'
    )
    service = models.ForeignKey(
        Service,
        on_delete=models.SET_NULL,
        null=True
    )
    destination = models.CharField(max_length=200, blank=True)
    application_date = models.DateField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )
    action = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.client.username} - {self.status}"