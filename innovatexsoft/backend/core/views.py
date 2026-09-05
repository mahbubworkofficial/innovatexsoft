from rest_framework import viewsets
from django.core.mail import send_mail
from django.conf import settings
from .models import Service, TeamMember, Career, Project, BlogPost, ContactMessage
from .serializers import ServiceSerializer, TeamMemberSerializer, CareerSerializer, ProjectSerializer, BlogPostSerializer, ContactMessageSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class CareerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Career.objects.all()
    serializer_class = CareerSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogPostSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer
    http_method_names = ['post']

    def perform_create(self, serializer):
        instance = serializer.save()
        
        # Email Dispatch to info@innovatexsoft.com
        subject = f"[Innovatex Soft] Contact Message: {instance.subject}"
        body = f"""New contact form message received from Innovatex Soft website:

Name: {instance.name}
Email: {instance.email}
Subject: {instance.subject}

Message:
{instance.message}

---
Sent via Innovatex Soft Web System
"""
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', 'info@innovatexsoft.com'),
                recipient_list=['info@innovatexsoft.com'],
                fail_silently=True,
            )
        except Exception as e:
            print("Failed to dispatch email:", e)
