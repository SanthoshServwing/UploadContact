# models.py
from django.db import models

class FormFeilds(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    userdetail = models.CharField(max_length=100)
    profession = models.CharField(max_length=100)
    require = models.CharField(max_length=100)
    seats = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    day = models.CharField(max_length=100)
    phnum = models.CharField(max_length=100)
    expectation = models.CharField(max_length=100)
    date = models.DateField(null=True)

    def __str__(self):
        return self.name

class FileFeilds(models.Model):
    pdf = models.FileField(upload_to='store/pdfs/')

    def __str__(self):
        return self.pdf

class ContactFeilds(models.Model):
    Cname = models.CharField(max_length=100)
    Cphno = models.CharField(max_length=100)
    Cemail = models.CharField(max_length=100)
    Cservice = models.CharField(max_length=100)
    Cprofession = models.CharField(max_length=100 ,null=True)
    Cday = models.CharField(max_length=100,null=True)
    Cdate = models.DateField(null=True)

    def __str__(self):
        return self.Cname