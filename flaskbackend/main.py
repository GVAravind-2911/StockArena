import requests
from bs4 import BeautifulSoup


BASE_URL = "https://www.google.com/finance"
INDEX = "NASDAQ"
SYMBOL = "NFLX"
LANGUAGE = "en"
TARGET_URL = f"{BASE_URL}/quote/{SYMBOL}:{INDEX}?hl={LANGUAGE}"

# make an HTTP request
page = requests.get(TARGET_URL)


# use an HTML parser to grab the content from "page"
soup = BeautifulSoup(page.content, "html.parser")


# get the items that describe the stock
items = soup.find_all("div", {"class": "YMlKec fxKbKc"})


# create a dictionary to store the stock description
stock_description = {}
print(items)


# iterate over the items and append them to the dictionary
# for item in items:
#     item_description = item.find("div", {"class": "mfs7Fc"}).text
#     item_value = item.find("div", {"class": "P6K39c"}).text
#     stock_description[item_description] = item_value


print(stock_description)