from django.db import models


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


class Enquiry(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_no = models.CharField(max_length=20, blank=True)
    message = models.TextField()
    is_new = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class ContactUs(models.Model):
    address = models.TextField()
    phone_no = models.CharField(max_length=20)
    email = models.EmailField()
    map_location = models.URLField(blank=True)

    def __str__(self):
        return self.email