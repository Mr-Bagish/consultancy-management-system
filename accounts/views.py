from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from .models import Profile
import json


@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already taken'}, status=400)

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        Profile.objects.create(user=user, is_admin=False)
        return JsonResponse({'message': 'Registered successfully'})

    return JsonResponse({'error': 'POST request required'}, status=405)


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return JsonResponse({
                'message': 'Login successful',
                'username': user.username
            })
        return JsonResponse({'error': 'Wrong username or password'}, status=401)

    return JsonResponse({'error': 'POST request required'}, status=405)


@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'Logged out successfully'})


@csrf_exempt
def admin_login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        user = authenticate(request, username=username, password=password)
        if user:
            try:
                profile = Profile.objects.get(user=user)
                if profile.is_admin:
                    login(request, user)
                    return JsonResponse({
                        'message': 'Admin login successful',
                        'username': user.username
                    })
                else:
                    return JsonResponse(
                        {'error': 'You are not an admin'},
                        status=403
                    )
            except Profile.DoesNotExist:
                return JsonResponse(
                    {'error': 'Profile not found'},
                    status=404
                )

        return JsonResponse(
            {'error': 'Wrong username or password'},
            status=401
        )

    return JsonResponse({'error': 'POST request required'}, status=405)