# Generated by Django 2.2.11 on 2020-03-25 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0097_auto_20200323_1732'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicalvolumemetadata',
            name='last_es_index',
        ),
        migrations.RemoveField(
            model_name='historicalvolumemetadata',
            name='xml_publication_year',
        ),
        migrations.RemoveField(
            model_name='volumemetadata',
            name='last_es_index',
        ),
        migrations.RemoveField(
            model_name='volumemetadata',
            name='xml_publication_year',
        ),
        migrations.AddField(
            model_name='historicalvolumemetadata',
            name='redacted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='volumemetadata',
            name='redacted',
            field=models.BooleanField(default=False),
        ),
        # populated new redacted field
        migrations.RunSQL(
            sql="UPDATE capdb_volumemetadata SET redacted=true WHERE xml_metadata->'processing' ? 'redacted_date'",
            reverse_sql=migrations.RunSQL.noop,
        ),
    ]
