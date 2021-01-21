from rest_framework import serializers
from django.contrib.auth.models import User
# Create your views here.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, valid_data):
        user = User.objects.create_user(**valid_data)
        return user
     