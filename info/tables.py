import django_tables2 as tables
from .models import *

class ExchangeTable(tables.Table):
    name = tables.Column(orderable=True)
    kyc = tables.Column(orderable=True)
    dex = tables.Column(orderable=True)
    maker_fee = tables.Column(orderable=True)
    all_coin_logo = tables.TemplateColumn(
	'{% for coin in record.coin.all %}<img class="token" style="margin-bottom: 2px; margin-left: 0rem; max-height: 32px;" width=""  src="/media/{{coin.logo}}" title="{{coin.name}}"/>	{% endfor %}'
	, orderable=False)

    class Meta:
        model = Exchange
        template_name = "django_tables2/bootstrap.html"
        fields = ("name","all_coin_logo")
	
# Gib die Werte einfach in fields L.16 über, orderable=True ist automatisch gesetzt
# TemplateColumns musst du aber setzen, da diese keine "normalen" Kolumnen darstellen 
