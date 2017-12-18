# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-12-15 22:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0017_auto_20171215_0105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='casemetadata',
            name='docket_number',
            field=models.CharField(blank=True, max_length=10000),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='first_page',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='casemetadata',
            name='last_page',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]