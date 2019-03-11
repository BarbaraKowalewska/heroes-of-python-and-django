from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.api.serializers import AccountSerializerWithPosts
from accounts.models import Account


class ApiAccountView(APIView):
    def get(self, request, *args, **kwargs):
        account = Account.objects.get(pk=self.kwargs['account_id'])
        serializer = AccountSerializerWithPosts(account)
        return Response(serializer.data)
