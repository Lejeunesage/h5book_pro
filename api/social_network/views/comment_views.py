from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from ..models import Comment
from ..serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    @api_view(['GET'])
    def get_comment(request, comment_id):
        try:
            comment = Comment.objects.get(pk=comment_id)
            data = CommentSerializer(comment).data
            return JsonResponse({'data': data})
        except Comment.DoesNotExist:
            return JsonResponse({'errorMessage': 'Commentaire introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la récupération du commentaire : ' + str(e)}, status=500)

    @api_view(['POST'])
    # @permission_classes([permissions.IsAuthenticated])
    def create_comment(request):
        try:
            content = request.data.get('content')
            post_id = request.data.get('post_id')
            comment = Comment(author=request.user, content=content, post_id=post_id)
            comment.save()
            comment_data = CommentSerializer(comment).data
            return JsonResponse({'data': comment_data, 'successMessage': 'Commentaire créé avec succès'})
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la création du commentaire : ' + str(e)}, status=500)

    @api_view(['PUT', 'PATCH'])
    # @permission_classes([permissions.IsAuthenticated])
    def update_comment(request, comment_id):
        try:
            comment = Comment.objects.get(pk=comment_id)
            fields_to_update = request.data
            for key, value in fields_to_update.items():
                if hasattr(comment, key):
                    setattr(comment, key, value)
            comment.save()
            comment_data = CommentSerializer(comment).data
            return JsonResponse({'data': comment_data, 'successMessage': 'Commentaire mis à jour avec succès'})
        except Comment.DoesNotExist:
            return JsonResponse({'errorMessage': 'Commentaire introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la mise à jour du commentaire : ' + str(e)}, status=500)

    @api_view(['DELETE'])
    # @permission_classes([permissions.IsAuthenticated])
    def delete_comment(request, comment_id):
        try:
            comment = Comment.objects.get(pk=comment_id)
            comment.delete()
            return Response({'successMessage': 'Commentaire supprimé avec succès'})
        except Comment.DoesNotExist:
            return Response({'errorMessage': 'Commentaire introuvable'}, status=404)
        except Exception as e:
            return Response({'errorMessage': 'Erreur lors de la suppression du commentaire : ' + str(e)}, status=500)
