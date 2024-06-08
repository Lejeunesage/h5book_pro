from django.db import models
from core.utils import generate_uuid
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    text = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    group = models.ForeignKey('Group', on_delete=models.CASCADE, related_name='posts', blank=True, null=True)
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='posts', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_posts')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_posts')


class Media(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='media', null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='media')
    company = models.ForeignKey('Company', on_delete=models.CASCADE, related_name='media', null=True, blank=True)
    image = models.ImageField(upload_to='media/images', null=True, blank=True)
    video = models.FileField(upload_to='media/videos', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'Media'

class Group(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    members = models.ManyToManyField(User, related_name='group_members')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_groups')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_groups')

class Company(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='company_images', blank=True, null=True)
    members = models.ManyToManyField(User, related_name='companies_members')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_companies')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_companies')

class Comment(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='comments')
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='replies')
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_comments')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_comments')

class Reaction(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    icon_type = models.CharField(max_length=50)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reactions')
    post = models.ForeignKey('Post', on_delete=models.CASCADE, related_name='reactions', null=True, blank=True)
    comment = models.ForeignKey('Comment', on_delete=models.CASCADE, related_name='reactions', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_reactions')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_reactions')

class Profile(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    profile_picture = models.ImageField(upload_to='profile_pictures', null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    skills = models.TextField(null=True, blank=True)
    projects = models.TextField(null=True, blank=True)
    experience = models.TextField(null=True, blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_profiles')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_profiles')

class Status(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    text = models.TextField()
    images = models.ImageField(upload_to='status_images', null=True, blank=True)
    videos = models.FileField(upload_to='status_videos', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='statuses')
    expiration_time = models.DateTimeField()
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_statuses')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_statuses')

class Notification(models.Model):
    uuid = models.CharField(max_length=50, primary_key=True, default=generate_uuid, editable=False)
    notification_type = models.CharField(max_length=50)
    action_author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='authored_notifications')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_notifications')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_notifications')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_notifications')