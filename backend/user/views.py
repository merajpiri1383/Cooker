from user.serializers import UserAuthSerializer
from rest_framework.views import APIView
from django.contrib.auth import get_user_model, authenticate, login
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from user import otp
class UserAuthAPIView(APIView):
    def post(self, request):
        mobile = request.data.get("mobile")
        if mobile:
            try:
                user = get_user_model().objects.get(mobile=mobile)
            except:
                user = get_user_model().objects.create(mobile=mobile)
                Token.objects.create(user=user)
            otp.send_otp(user=user)
            return Response(
                {"data": f"code is send to '{mobile}' "}, status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"error": "mobile field is required"},
                status=status.HTTP_400_BAD_REQUEST,
            )
class UserVerifyAPIView(APIView):
    def post(self, request, mobile):
        res = otp.get_result(mobile=mobile, otp=request.data.get("otp"))
        print(res.status_code)
        if res.status_code == 200:
            try:
                user = get_user_model().objects.get(mobile=mobile)
                user.is_active = True
                user.save()
                return Response(data={"token": str(user.auth_token)})
            except:
                return Response(
                    data={"error": "user with this mobile not found . "},
                    status=status.HTTP_404_NOT_FOUND
                )
        return Response(
            data={"error": "some thing went wrong"},
            status=status.HTTP_400_BAD_REQUEST
        )
