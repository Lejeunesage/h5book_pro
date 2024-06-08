from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "last_name", "first_name", "username", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"required": True},
            "first_name": {"required": True},
            "last_name": {"required": True},
        }

    def create(self, validated_data):
        # user = User.objects.create_user(
        #     first_name=validated_data['first_name'],
        #     last_name=validated_data['last_name'],
        #     username=validated_data['username'],
        #     password=validated_data['password'],
        #     email=validated_data['email'],
        # )
        user = User.objects.create_user(**validated_data)
        return user
