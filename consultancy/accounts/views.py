from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'error': 'Username and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(username=username, password=password)

        if user:
            if user.is_staff:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'message': 'Admin login successful',
                    'username': user.username,
                    'access': str(refresh.access_token),
                    'refresh': str(refresh),
                })
            return Response(
                {'error': 'You are not an admin'},
                status=status.HTTP_403_FORBIDDEN
            )

        return Response(
            {'error': 'Wrong username or password'},
            status=status.HTTP_401_UNAUTHORIZED
        )