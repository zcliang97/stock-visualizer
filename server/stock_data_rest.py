"""
    REST API Endpoints for Stock Data from AlphaAdvantage
"""

__author__ = 'Frank Liang'


import json
import datetime
import requests
from flask import Flask, make_response

app = Flask(__name__)

from app import app

def get_auth_key():
    return json.load(open('keys.json'))['maps']['AlphaAdvantage']

@app.route('/api/stock_data/<ticker>', methods=['GET'])
def get_stock_data(ticker):
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + ticker + '&interval=1min&apikey=' + get_auth_key()
    response = requests.get(url, verify=False, timeout=30)

    return make_response(response.content, response.status_code)