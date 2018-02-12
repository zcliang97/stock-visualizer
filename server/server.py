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

app = Flask(__name__,  static_folder="../static/dist",
            template_folder="../static")

def get_auth_key():
    return json.load(open('keys.json'))['maps']['AlphaAdvantage']

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()
