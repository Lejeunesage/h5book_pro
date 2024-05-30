from django.urls import path
from .views.registration import register_user
from .views.login import login_user

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
]
