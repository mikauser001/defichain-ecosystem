import json, requests 

url = requests.get("https://api.kucoin.com/api/v1/currencies/DFI")
text = url.text
data = json.loads(text)
url_bittrex =  requests.get("https://api.bittrex.com/v3/currencies/DFI")
text_bittrex = url_bittrex.text
data_bittrex = json.loads(text_bittrex)

url_dfx =  requests.get("https://api.dfx.swiss/v1/statistic/status")
text_dfx = url_dfx.text
data_dfx = json.loads(text_dfx)
print (data_dfx['buy'])
print (data_dfx['sell'])


def kucoin_deposit():
	return (data['data']['isDepositEnabled'])

def kucoin_withdraw():
    print(data['data']['isWithdrawEnabled'])