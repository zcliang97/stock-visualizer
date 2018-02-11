"""
    The data models
"""

__author__ = "Frank Liang"


class Stock(object):
    '''Represents a Stock object'''

    def __init__(self, ticker, prices):
        self.ticker = ticker
        self.prices = prices
