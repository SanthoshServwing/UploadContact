# Generated by Django 5.0.4 on 2024-05-09 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Application', '0002_textfeild1'),
    ]

    operations = [
        migrations.CreateModel(
            name='Files',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pdf', models.FileField(upload_to='store/pdfs/')),
            ],
        ),
    ]
