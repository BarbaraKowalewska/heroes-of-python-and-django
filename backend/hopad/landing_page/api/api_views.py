from rest_framework.response import Response
from rest_framework.views import APIView

from landing_page.api.serializers import ApplicationSerializer
from landing_page.models import Application


class ApiApplications(APIView):
    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)
