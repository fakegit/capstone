# Generated by Django 2.2.10 on 2020-03-12 17:31

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0094_extractedcitation'),
    ]

    operations = [
         migrations.RunSQL("DROP VIEW IF EXISTS %s;" % view, migrations.RunSQL.noop) for view in (
            'capdb_volumexml_with_history',
            'capdb_volumemetadata_with_history',
            'capdb_reporter_with_history',
            'capdb_pagexml_with_history',
            'capdb_citation_with_history',
            'capdb_casexml_with_history',
            'capdb_casemetadata_with_history'
        )
    ]+[
        migrations.AlterField(
            model_name='historicalvolumemetadata',
            name='pdf_file',
            field=models.CharField(blank=True, help_text='Exported volume PDF', max_length=1000),
        ),
        migrations.AlterField(
            model_name='volumemetadata',
            name='pdf_file',
            field=models.FileField(blank=True, help_text='Exported volume PDF', max_length=1000, storage=django.core.files.storage.FileSystemStorage(), upload_to=''),
        ),
    ]
