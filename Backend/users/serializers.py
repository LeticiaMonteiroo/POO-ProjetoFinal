from rest_framework.serializers import HyperlinkedModelSerializer, Serializer, ModelSerializer
from rest_framework import serializers

from .models import User


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'name', 'password', 'email']
        extra_kwargs = {'password': {'write_only': True, 'required': False}}

class AuthenticationGetTokenParamsSerializer(Serializer):
    token = serializers.ReadOnlyField()