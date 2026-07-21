from django.contrib import admin
from .models import Service, TeamMember, Career, Project, BlogPost, ContactMessage

# Register your models here.
admin.site.register(Service)
admin.site.register(TeamMember)
admin.site.register(Career)
admin.site.register(Project)
admin.site.register(BlogPost)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
