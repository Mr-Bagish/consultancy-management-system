from django.contrib import admin
from .models import Service, Destination, TeamMember, Enquiry, ContactUs

admin.site.register(Service)
admin.site.register(Destination)
admin.site.register(TeamMember)
admin.site.register(Enquiry)
admin.site.register(ContactUs)