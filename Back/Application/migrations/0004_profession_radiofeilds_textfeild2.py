# Generated by Django 5.0.4 on 2024-05-09 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Application', '0003_files'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profession',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='RadioFeilds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('require', models.CharField(max_length=10)),
                ('seats', models.CharField(max_length=20)),
                ('time', models.CharField(max_length=20)),
                ('days', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='TextFeild2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phnum', models.CharField(max_length=20)),
                ('exception', models.CharField(max_length=255)),
            ],
        ),
    ]
