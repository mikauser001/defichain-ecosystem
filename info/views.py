from django.shortcuts import render
import django_tables2 as tables
from django_tables2 import MultiTableMixin, RequestConfig, SingleTableMixin, SingleTableView
from django_filters.views import FilterView
from .models import *
from .tables import ExchangeTable
from .filters import ExchangeFilter

def is_valid_queryparam(param):
    return param != '' and param is not None

# Create your views here.
def exchanges_filter(request):
	exchanges = Exchange.objects.all()
	networks = Network.objects.all()
	title_query = request.GET.get('title_contains')
	query_network = request.GET.get('network')
	#categorys = Category.objects.all()
	#category = request.GET.get('category')
	#category_query = request.GET.get('category')
	#title_contains_query = request.GET.get('title_contains')
	#status = request.GET.get('status')
	#status_options = ['all', 'active', 'beta', 'in progress', '?', 'paused', 'EOL']
	if is_valid_queryparam(title_query):
		exchanges = exchanges.filter(name__icontains=title_query)
		print('TITEL')
	if is_valid_queryparam(query_network) and query_network != 'All':
		exchanges = exchanges.filter(coin__network__name=query_network).distinct()
	#	print('TITEL')
	#if is_valid_queryparam(status) and status != 'all':
	#	projects = projects.filter(status=status)
	#	print('STATUS')
	#if is_valid_queryparam(category) and category != '' and category is not None and category != 'all':
	#	projects = projects.filter(category__name=category)
	#	print('CATEGORY')
	#else:
	#	if title_contains != 
	context = {'exchanges': exchanges, 'networks': networks, 'query_network': query_network, 'title_query': title_query}
	return render(request, "cms/filter_exchanges_all.html", context)


class FilteredPersonListView(SingleTableMixin, FilterView):
    table_class = ExchangeTable
    model = Exchange
    template_name = "template.html"

    filterset_class = ExchangeFilter