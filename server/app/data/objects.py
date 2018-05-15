"""
    The data models
"""

__author__ = "Frank Liang"


class Ticker(object):
    '''Represents a Ticker object'''

    def __init__(self, ticker, name):
        self.ticker = ticker
        self.name = name
