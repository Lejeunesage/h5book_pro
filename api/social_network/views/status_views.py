from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ..models import Status
from ..serializers import StatusSerializer

class StatusViewSet(viewsets.ViewSet):
    queryset = Status.objects.all()
    serializer = StatusSerializer

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def index(self, request):
        if request.method == 'GET':
            try:
                statuses = Status.objects.all()
                serializer = StatusSerializer(statuses, many=True)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def create(self, request):
        if request.method == 'POST':
            try:
                serializer = StatusSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save(author=request.user)
                    return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def retrieve(self, request, pk):
        if request.method == 'GET':
            try:
                status_instance = get_object_or_404(Status, pk=pk)
                serializer = StatusSerializer(status_instance)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['PUT'])
    @permission_classes([IsAuthenticated])
    def update(self, request, pk):
        if request.method == 'PUT':
            try:
                status_instance = get_object_or_404(Status, pk=pk)
                if request.user == status_instance.author:
                    serializer = StatusSerializer(status_instance, data=request.data)
                    if serializer.is_valid():
                        serializer.save(updated_by=request.user)
                        return JsonResponse(serializer.data, status=status.HTTP_200_OK)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                return JsonResponse({'error': 'You are not authorized to update this status.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @api_view(['DELETE'])
    @permission_classes([IsAuthenticated])
    def destroy(self, request, pk):
        if request.method == 'DELETE':
            try:
                status_instance = get_object_or_404(Status, pk=pk)
                if request.user == status_instance.author:
                    status_instance.delete()
                    return JsonResponse({'message': 'Status deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
                return JsonResponse({'error': 'You are not authorized to delete this status.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
