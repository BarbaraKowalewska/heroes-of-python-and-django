from django.http import JsonResponse
from rest_framework.views import APIView

from .serializers import CategorySerializer
from ..models import Category


class ApiCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)
