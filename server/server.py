import random
from flask import Flask, render_template
import json
import datetime
import requests
from flask import Flask, make_response
from app import app
from flask import make_response, request
from app import app
from app.data import data_access_layer, db_bridge
from app.data.data_model import Stock
from app.apis import stock_data_rest

app = Flask(__name__,  static_folder="../static/dist",
            template_folder="../static")


def get_auth_key():
    print "123"
    print json.loads(open('keys.json'))
    return json.load(open('keys.json'))['maps']['AlphaAdvantage']


@app.route("/")
def index():
    return render_template("index.html")

@app.route('/api/test2', methods=['GET'])
def test2():
    return "test2"


@app.route('/api/stock_data/<ticker>', methods=['GET'])
def get_stock_data(ticker):
    print "1234"
    url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + \
        ticker + '&interval=1min&apikey=' + get_auth_key()
    response = requests.get(url, verify=False, timeout=30)
    print "123"

    return make_response(response.content, response.status_code)

if __name__ == "__main__":
    app.run()
