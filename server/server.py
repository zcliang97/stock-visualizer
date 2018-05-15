from flask import Flask, render_template, make_response, request
from app import app, views
from app.data import data_access_layer, db_bridge
from app.data.data_model import Ticker
from app.apis import stock_data_rest
import json
import datetime
import requests
import random

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run()