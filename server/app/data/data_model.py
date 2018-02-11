"""
    The data model for the app
"""

__author__ = "Frank Liang"

from sqlalchemy import Column, Text, Integer
from sqlalchemy.ext.declarative import declarative_base

BASE = declarative_base()


class Stock(BASE):
    '''Represents an user object'''

    __tablename__ = 'user_accounts'
    id = Column(Integer, primary_key=True)
    user_name = Column(Text)
    public_access_key = Column(Text)
    secret_access_key = Column(Text)

    def __repr__(self):
        return "<Account(user_name='%s', public_access_key='%s', secret_access_key='%s')>" % (
            self.user_name, self.public_access_key, self.secret_access_key)

    def to_dict(self):
        '''return a dictionary representation of the data'''
        return dict(
            user_name=self.user_name,
            public_access_key=self.public_access_key,
            secret_access_key=self.secret_access_key)
