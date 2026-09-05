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
        
        # Email Dispatch from innovatexsoft@gmail.com
        subject = f"[Innovatex Soft Website] New Inquiry from {instance.name}: {instance.subject}"
        body = f"""New Contact Form Message Received:

==================================================
CLIENT DETAILS:
==================================================
Full Name: {instance.name}
Email Address: {instance.email}
Subject: {instance.subject}

==================================================
MESSAGE BODY:
==================================================
{instance.message}

==================================================
Reply directly to the client at: {instance.email}
--------------------------------------------------
Automated Dispatch via Innovatex Soft Engine (innovatexsoft@gmail.com)
"""
        try:
            send_mail(
                subject=subject,
                message=body,
                from_email='innovatexsoft@gmail.com',
                recipient_list=['info@innovatexsoft.com', 'innovatexsoft@gmail.com'],
                fail_silently=True,
            )
        except Exception as e:
            print("Failed to dispatch email:", e)
