from django.db import models
from django.contrib.auth.models import User


class Service(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Destination(models.Model):
    country_names = models.CharField(max_length=200)
    flag_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return self.country_names


class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    photo_url = models.URLField(blank=True)
    facebook_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    whatsapp_number = models.CharField(max_length=20, blank=True)
    display_order = models.IntegerField(default=0)

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
        return f"Booking by {self.client.username} - {self.status}"


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
        return f"Application by {self.client.username} - {self.status}"


class Enquiry(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_no = models.CharField(max_length=20, blank=True)
    message = models.TextField()
    is_new = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"


class ContactUs(models.Model):
    address = models.TextField()
    phone_no = models.CharField(max_length=20)
    email = models.EmailField()
    map_location = models.URLField(blank=True)

    def __str__(self):
        return self.email