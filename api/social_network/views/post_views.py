from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from ..models import Post
from ..serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @api_view(['GET'])
    def get_post(request, post_id):
        try:
            post = Post.objects.get(pk=post_id)
            data = PostSerializer(post).data
            return JsonResponse({'data': data})
        except Post.DoesNotExist:
            return JsonResponse({'errorMessage': 'Post introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la récupération du post : ' + str(e)}, status=500)

    @api_view(['POST'])
    # @permission_classes([permissions.IsAuthenticated])
    def create_post(request):
        try:
            content = request.data.get('content')
            post = Post(author=request.user, content=content)
            post.save()
            post_data = PostSerializer(post).data
            return JsonResponse({'data': post_data, 'successMessage': 'Post créé avec succès'})
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la création du post : ' + str(e)}, status=500)

    @api_view(['PUT', 'PATCH'])
    # @permission_classes([permissions.IsAuthenticated])
    def update_post(request, post_id):
        try:
            post = Post.objects.get(pk=post_id)
            fields_to_update = request.data
            for key, value in fields_to_update.items():
                if hasattr(post, key):
                    setattr(post, key, value)
            post.save()
            post_data = PostSerializer(post).data
            return JsonResponse({'data': post_data, 'successMessage': 'Post mis à jour avec succès'})
        except Post.DoesNotExist:
            return JsonResponse({'errorMessage': 'Post introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la mise à jour du post : ' + str(e)}, status=500)

    @api_view(['DELETE'])
    # @permission_classes([permissions.IsAuthenticated])
    def delete_post(request, post_id):
        try:
            post = Post.objects.get(pk=post_id)
            post.delete()
            return Response({'successMessage': 'Post supprimé avec succès'})
        except Post.DoesNotExist:
            return Response({'errorMessage': 'Post introuvable'}, status=404)
        except Exception as e:
            return Response({'errorMessage': 'Erreur lors de la suppression du post : ' + str(e)}, status=500)
