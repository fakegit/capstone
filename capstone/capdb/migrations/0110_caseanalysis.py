# Generated by Django 2.2.13 on 2020-08-06 17:32

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0109_auto_20200729_1812'),
    ]

    operations = [
        migrations.CreateModel(
            name='CaseAnalysis',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now=True)),
                ('key', models.CharField(db_index=True, max_length=255)),
                ('value', django.contrib.postgres.fields.jsonb.JSONField()),
                ('case', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='analysis', to='capdb.CaseMetadata')),
            ],
            options={
                'unique_together': {('case', 'key')},
            },
        ),
    ]
