# Generated by Django 5.0.4 on 2024-05-22 08:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Application', '0006_formfeilds_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactFeilds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Cname', models.CharField(max_length=100)),
                ('Cphno', models.CharField(max_length=100)),
                ('Cemail', models.CharField(max_length=100)),
                ('Cservice', models.CharField(max_length=100)),
            ],
        ),
    ]
