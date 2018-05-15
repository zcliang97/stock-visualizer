"""
REST API endpoints for the App
"""
__author__ = 'Frank Liang'

import logging
from flask import render_template, request
from app import app

app.config.from_object(__name__)
app.config.update(
    dict(SQLALCHEMY_DATABASE_PATH="store/app.db"))


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