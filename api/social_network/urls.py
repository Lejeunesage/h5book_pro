from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.profile_views import ProfileViewSet
from .views.post_views import PostViewSet
from .views.comment_views import CommentViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
