from flask import Flask, render_template, make_response, request
from app import app
from app.data import data_access_layer, db_bridge
from app.data.data_model import Stock
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