# serializers.py
from rest_framework import serializers
from .models import FormFeilds,FileFeilds,ContactFeilds

class FFSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormFeilds
        fields = '__all__'

class FIFSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileFeilds
        fields = ['id','pdf']

class CFSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFeilds
        fields = '__all__'