# Generated by Django 2.2.9 on 2020-02-10 17:43

import django.core.files.storage
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0090_auto_20200127_2030'),
    ]

    operations = [
        migrations.AddField(
            model_name='historicalvolumemetadata',
            name='pdf_file',
            field=models.CharField(blank=True, help_text='Exported volume PDF', null=True, max_length=100),
        ),
        migrations.AddField(
            model_name='volumemetadata',
            name='pdf_file',
            field=models.FileField(blank=True, help_text='Exported volume PDF', null=True, storage=django.core.files.storage.FileSystemStorage(), upload_to=''),
        ),
        migrations.AlterField(
            model_name='tarfile',
            name='volume',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, related_name='tar_file', to='capdb.VolumeMetadata'),
        ),
    ]
