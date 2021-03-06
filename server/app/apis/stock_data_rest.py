"""
    REST API Endpoints for Stock Data from AlphaAdvantage
"""

__author__ = 'Frank Liang'
from flask import Flask, make_response, request
from app import app
from app.data import data_access_layer, db_bridge
from app.data.data_model import Stock
import json
import datetime
import requests

def get_auth_key():
    return json.load(open('data.json'))['keys']['AlphaAdvantage']

def format_stock_data(inData):
    data = {}
    for key in sorted(inData.iterkeys()):
        data[key]= float('%.3f' % float(inData[key]['1. open']))
    return data

@app.route('/api/stock_data/<ticker>', methods=['GET'])
def get_stock_data(ticker):
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + \
        ticker + '&interval=1min&apikey=' + get_auth_key()
    response = requests.get(url, verify=False, timeout=30)

    return make_response(
        json.dumps({
            'ticker': ticker,
            'meta_data': json.loads(response.content)['Meta Data'],
            'data': format_stock_data(json.loads(response.content)['Time Series (1min)'])
        }), 200)

@app.route('/api/ticker', methods=['POST'])
def post_ticker():
    ticker, is_new = data_access_layer._get_or_create(
        db_bridge.get_db_session(),
        Ticker,
        ticker=request.json[0],
        name=request.json[1])

    response = make_response(
        json.dumps({
            'ticker': {
                'symbol': ticker.ticker,
                'is_new': is_new
            },
            'status': 'SUCCESS'
        }), 202)
    response.mimetype = 'application/json'
    response.location = '/api/post_stock_data/'
    return response


@app.route('/api/tickers', methods=['GET'])
def get_tickers():
    '''Get the list of tickers'''
    try:
        tickers = data_access_layer._get_all(db_bridge.get_db_session(),
                                               Ticker)
        return make_response(
            json.dumps(
                tickers, default=lambda ticker_object: ticker_object.to_dict()),
            200)

    except Exception as ex:
        return make_response(str(ex), 500)