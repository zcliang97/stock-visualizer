"""
    REST API Endpoints for Stock Data from AlphaAdvantage
"""

__author__ = 'Frank Liang'


import json
import datetime
import requests
from flask import Flask, make_response, request
from app import app
from app.data import data_access_layer, db_bridge
from app.data.data_model import Stock


def get_auth_key():
    return json.load(open('keys.json'))['maps']['AlphaAdvantage']


@app.route('/api/stock_data/<ticker>', methods=['GET'])
def get_stock_data(ticker):
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + \
        ticker + '&interval=1min&apikey=' + get_auth_key()
    response = requests.get(url, verify=False, timeout=30)

    return make_response(response.content, response.status_code)


@app.route('/api/stock_data', methods=['GET'])
def get_stocks():
    '''Get the list of stocks'''
    try:
        all_stock = data_access_layer._get_all(db_bridge.get_db_session(),
                                               Stock)
        return make_response(
            json.dumps(
                all_stock, default=lambda user_object: user_object.to_dict()),
            200)

    except Exception as ex:
        return make_response(str(ex), 500)


@app.route('/api/post_stock_data', methods=['POST'])
def post_single_user():
    account, is_new = data_access_layer._get_or_create(
        db_bridge.get_db_session(),
        Stock,
        user_name=request.json[0],
        public_access_key=request.json[1],
        secret_access_key=request.json[2])

    response = make_response(
        json.dumps({
            'accounts': {
                'user_name': account.user_name,
                'is_new': is_new
            },
            'status': 'SUCCESS'
        }), 202)
    response.mimetype = 'application/json'
    response.location = '/api/post_stock_data/'
    return response