from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactFeilds
from .serializers import CFSerializer
from django.core.mail import send_mail


@api_view(['GET', 'POST'])
def contact_form(request):
    if request.method == 'GET':
        persons = ContactFeilds.objects.all()
        serializer = CFSerializer(persons, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CFSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # # Send an email to site admin
            # user_mail = request.data['temail']
            # subject = "New Registration"
            # message = f"Hello\n\n,You have received a new form submission with the following details:\n Name: {serializer.data['tname']},\n\nEmail: {serializer.data['temail']},\n\npassword:{serializer.data['tpassword']},\n\nMobileNumber:{serializer.data['tphnum']},\n\nDate:{serializer.data['tdate']},\n\nProfession:{serializer.data['tprofession']},\n\nRequire:{serializer.data['trequire']},\n\nSeats:{serializer.data['tseats']},\n\nDays:{serializer.data['tday']},\n\nExpectation:{serializer.data['texpectation']}"
            # admin_email = 'santhoshkumars2020.1csklnas@gmail.com'
            # send_mail(subject, message, admin_email, [admin_email])

            # # Send an email to the user
            # user_subject = "ThanYou For Registering"
            # user_message = f"Hi {serializer.data['tname']},\n\nThankyou for Registering.We will review your submission and get back to you as soon as possible.\n\nIf you have any further questions or concerns, feel free to contact us. \n\nBestRegards,\n\n[Serving]"
            # user_mail_id = user_mail
            # send_mail(user_subject, user_message, user_mail_id, [user_mail_id])

            

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)