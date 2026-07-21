from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, TeamMemberViewSet, CareerViewSet, ProjectViewSet, BlogPostViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'team', TeamMemberViewSet)
router.register(r'careers', CareerViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'blog', BlogPostViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
