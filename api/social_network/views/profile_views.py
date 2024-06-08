from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ..models import Profile
from ..serializers import ProfileSerializer

class ProfileViewSet(viewsets.ViewSet):
    queryset = Profile.objects.all()
    serializer = ProfileSerializer

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def index(self, request):
        if request.method == 'GET':
            try:
                profiles = Profile.objects.all()
                serializer = ProfileSerializer(profiles, many=True)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def create(self, request):
        if request.method == 'POST':
            try:
                serializer = ProfileSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save(user=request.user)
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def retrieve(self, request, pk):
        if request.method == 'GET':
            try:
                profile = get_object_or_404(Profile, pk=pk)
                serializer = ProfileSerializer(profile)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['PUT'])
    @permission_classes([IsAuthenticated])
    def update(self, request, pk):
        if request.method == 'PUT':
            try:
                profile = get_object_or_404(Profile, pk=pk)
                if request.user == profile.user:
                    serializer = ProfileSerializer(profile, data=request.data)
                    if serializer.is_valid():
                        serializer.save(updated_by=request.user)
                        return JsonResponse(serializer.data, status=status.HTTP_200_OK)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                return JsonResponse({'error': 'You are not authorized to update this profile.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['DELETE'])
    @permission_classes([IsAuthenticated])
    def destroy(self, request, pk):
        if request.method == 'DELETE':
            try:
                profile = get_object_or_404(Profile, pk=pk)
                if request.user == profile.user:
                    profile.delete()
                    return JsonResponse({'message': 'Profile deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
                return JsonResponse({'error': 'You are not authorized to delete this profile.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
