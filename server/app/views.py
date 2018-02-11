"""
REST API endpoints for the App
"""
__author__ = 'Frank Liang'

import logging
from flask import render_template, request

from server import app
from server.data import db_bridge
from server.apis import stock_data_rest.py

app.config.from_object(__name__)
app.config.update(
    dict(SQLALCHEMY_DATABASE_PATH=qpylib.get_store_path("app.db")))


@app.before_first_request
def initialize():
    """
    Initialize database
    """

    db_bridge.initialize_db()
    # db_cache_access_layer.load_cache()
    # cache_access_layer.load_mock_cache()


@app.teardown_appcontext
def clear_db_session(self):
    """
    Clear the DB session
    """
    pass
    # DB_SESSION.remove()


@app.route('/index')
def index():
    """
    Returns the index template
    """
    return render_template(
        'index.html', app_mode='app_mode'
