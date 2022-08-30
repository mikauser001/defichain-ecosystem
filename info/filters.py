from django_filters import FilterSet, CharFilter

from .models import *


class ExchangeFilter(FilterSet):
    class Meta:
        model = Exchange
        fields = {"name": ["contains"]}