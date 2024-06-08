from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ..models import Post, Media
from ..serializers import PostSerializer, MediaSerializer
from rest_framework.parsers import MultiPartParser, FormParser

class PostViewSet(viewsets.ViewSet):
    ueryset = Post.objects.all()
    serializer = PostSerializer
    parser_classes = [MultiPartParser, FormParser]

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def index(self, request):
        if request.method == 'GET':
            try:
                posts = Post.objects.all()
                serializer = PostSerializer(posts, many=True)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
               return JsonResponse({'errorMessage': 'Méthode non autorisée'}, status=400)

    @api_view(['POST'])
    @permission_classes([IsAuthenticated])
    def create(self, request):
        if request.method == 'POST':
            try:
                post_data = {
                    'text': request.data.get('text'),
                    'author': request.user.id,
                    'group': request.data.get('group'),
                    'company': request.data.get('company')
                }
                post_serializer = PostSerializer(data=post_data)
                if post_serializer.is_valid():
                    post = post_serializer.save(created_by=request.user, updated_by=request.user)
                    
                    media_files = request.FILES.getlist('media')
                    for media_file in media_files:
                        media_data = {
                            'post': post.id,
                            'user': request.user.id,
                            'company': request.data.get('company')
                        }
                        media_type = 'image' if media_file.content_type.startswith('image') else 'video'
                        media_data[media_type] = media_file
                        media_serializer = MediaSerializer(data=media_data)
                        if media_serializer.is_valid():
                            media_serializer.save()
                        else:
                            return JsonResponse(media_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                    
                    return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED)
                return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
               return JsonResponse({'errorMessage': 'Méthode non autorisée'}, status=400)
            
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def retrieve(self, request, pk):
        if request.method == 'GET':
            try:
                post = get_object_or_404(Post, pk=pk)
                serializer = PostSerializer(post)
                return JsonResponse(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
               return JsonResponse({'errorMessage': 'Méthode non autorisée'}, status=400)

    @api_view(['PUT'])
    @permission_classes([IsAuthenticated])
    def update(self, request, pk):
        if request.method == 'PUT':
            try:
                post = get_object_or_404(Post, pk=pk)
                if request.user == post.author:
                    serializer = PostSerializer(post, data=request.data)
                    if serializer.is_valid():
                        serializer.save(updated_by=request.user)
                        return JsonResponse(serializer.data, status=status.HTTP_200_OK)
                    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                return JsonResponse({'error': 'You are not authorized to update this post.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
               return JsonResponse({'errorMessage': 'Méthode non autorisée'}, status=400)

    @api_view(['DELETE'])
    @permission_classes([IsAuthenticated])
    def destroy(self, request, pk):
        if request.method == 'DELETE':
            try:
                post = get_object_or_404(Post, pk=pk)
                if request.user == post.author:
                    post.delete()
                    return JsonResponse({'message': 'Post deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
                return JsonResponse({'error': 'You are not authorized to delete this post.'}, status=status.HTTP_403_FORBIDDEN)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
               return JsonResponse({'errorMessage': 'Méthode non autorisée'}, status=400)