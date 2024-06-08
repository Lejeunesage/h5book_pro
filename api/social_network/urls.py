from django.urls import path
from .views.post_views import PostViewSet
from .views.media_views import MediaViewSet
from .views.group_views import GroupViewSet
from .views.company_views import CompanyViewSet
from .views.comment_views import CommentViewSet
from .views.reaction_views import ReactionViewSet
from .views.profile_views import ProfileViewSet
from .views.status_views import StatusViewSet
from .views.notification_views import NotificationViewSet

urlpatterns = [
    path('posts/', PostViewSet.index, name='post_index'),
    path('posts/create', PostViewSet.create, name='post_create'),
    path('posts/<str:pk>', PostViewSet.retrieve, name='post_retrieve'),
    path('posts/<str:pk>/update', PostViewSet.update, name='post_update'),
    path('posts/<str:pk>/delete', PostViewSet.destroy, name='post_destroy'),

    path('media/', MediaViewSet.index, name='media_index'),
    path('media/create', MediaViewSet.create, name='media_create'),
    path('media/<str:pk>', MediaViewSet.retrieve, name='media_retrieve'),
    path('media/<str:pk>/update', MediaViewSet.update, name='media_update'),
    path('media/<str:pk>/delete', MediaViewSet.destroy, name='media_destroy'),

    path('groups/', GroupViewSet.index, name='group_index'),
    path('groups/create', GroupViewSet.create, name='group_create'),
    path('groups/<str:pk>', GroupViewSet.retrieve, name='group_retrieve'),
    path('groups/<str:pk>/update', GroupViewSet.update, name='group_update'),
    path('groups/<str:pk>/delete', GroupViewSet.destroy, name='group_destroy'),

    path('companies/', CompanyViewSet.index, name='company_index'),
    path('companies/create', CompanyViewSet.create, name='company_create'),
    path('companies/<str:pk>', CompanyViewSet.retrieve, name='company_retrieve'),
    path('companies/<str:pk>/update', CompanyViewSet.update, name='company_update'),
    path('companies/<str:pk>/delete', CompanyViewSet.destroy, name='company_destroy'),

    path('comments/', CommentViewSet.index, name='comment_index'),
    path('comments/create', CommentViewSet.create, name='comment_create'),
    path('comments/<str:pk>', CommentViewSet.retrieve, name='comment_retrieve'),
    path('comments/<str:pk>/update', CommentViewSet.update, name='comment_update'),
    path('comments/<str:pk>/delete', CommentViewSet.destroy, name='comment_destroy'),

    path('reactions/', ReactionViewSet.index, name='reaction_index'),
    path('reactions/create', ReactionViewSet.create, name='reaction_create'),
    path('reactions/<str:pk>', ReactionViewSet.retrieve, name='reaction_retrieve'),
    path('reactions/<str:pk>/update', ReactionViewSet.update, name='reaction_update'),
    path('reactions/<str:pk>/delete', ReactionViewSet.destroy, name='reaction_destroy'),

    path('profiles/', ProfileViewSet.index, name='profile_index'),
    path('profiles/create', ProfileViewSet.create, name='profile_create'),
    path('profiles/<str:pk>', ProfileViewSet.retrieve, name='profile_retrieve'),
    path('profiles/<str:pk>/update', ProfileViewSet.update, name='profile_update'),
    path('profiles/<str:pk>/delete', ProfileViewSet.destroy, name='profile_destroy'),

    path('statuses/', StatusViewSet.index, name='status_index'),
    path('statuses/create', StatusViewSet.create, name='status_create'),
    path('statuses/<str:pk>', StatusViewSet.retrieve, name='status_retrieve'),
    path('statuses/<str:pk>/update', StatusViewSet.update, name='status_update'),
    path('statuses/<str:pk>/delete', StatusViewSet.destroy, name='status_destroy'),

    path('notifications/', NotificationViewSet.index, name='notification_index'),
    path('notifications/create', NotificationViewSet.create, name='notification_create'),
    path('notifications/<str:pk>', NotificationViewSet.retrieve, name='notification_retrieve'),
    path('notifications/<str:pk>/update', NotificationViewSet.update, name='notification_update'),
    path('notifications/<str:pk>/delete', NotificationViewSet.destroy, name='notification_destroy'),
]
