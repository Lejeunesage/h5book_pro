from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from ..models import Profile
from ..serializers import ProfileSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    @api_view(['GET'])
    def get_profile(request, user_id):
        try:
            profile = Profile.objects.get(user_id=user_id)
            data = ProfileSerializer(profile).data
            return JsonResponse({'data': data})
        except Profile.DoesNotExist:
            return JsonResponse({'errorMessage': 'Profil introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la récupération du profil : ' + str(e)}, status=500)

    @api_view(['PUT', 'PATCH'])
    # @permission_classes([permissions.IsAuthenticated])
    def update_profile(request, user_id):
        try:
            profile = Profile.objects.get(user_id=user_id)
            fields_to_update = request.data
            for key, value in fields_to_update.items():
                if hasattr(profile, key):
                    setattr(profile, key, value)
            profile.save()
            profile_data = ProfileSerializer(profile).data
            return JsonResponse({'data': profile_data, 'successMessage': 'Profil mis à jour avec succès'})
        except Profile.DoesNotExist:
            return JsonResponse({'errorMessage': 'Profil introuvable'}, status=404)
        except Exception as e:
            return JsonResponse({'errorMessage': 'Erreur lors de la mise à jour du profil : ' + str(e)}, status=500)

    @api_view(['DELETE'])
    # @permission_classes([permissions.IsAuthenticated])
    def delete_profile(request, user_id):
        try:
            profile = Profile.objects.get(user_id=user_id)
            profile.delete()
            return Response({'successMessage': 'Profil supprimé avec succès'})
        except Profile.DoesNotExist:
            return Response({'errorMessage': 'Profil introuvable'}, status=404)
        except Exception as e:
            return Response({'errorMessage': 'Erreur lors de la suppression du profil : ' + str(e)}, status=500)
