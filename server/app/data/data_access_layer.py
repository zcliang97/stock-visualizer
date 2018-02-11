"""
    Manages Database related operations
"""

__author__ = "Frank Liang"

import os
from sqlalchemy import exc


def init_db(engine, db_uri, model):
    """
    Creates the database if not found
    Returns otherwise
    """
    if os.path.isfile(db_uri):
        print ('DB file found at %s' % db_uri, 'INFO')
        return
    model.metadata.create_all(engine)


def _get(db_session, model, **kwargs):
    """
    Returns a record in the database for the specified model or None
    Also returns a boolean to indicate if the record is new (False) or existing (True)
    """
    try:
        record = db_session.query(model).filter_by(**kwargs).first()

        if record:
            return record
        else:
            return None
    except Exception as ex:
        print (str(ex), 'ERROR')
        raise ex


def _get_all(db_session, model):
    """
    Returns all of the records in the database for a specific table
    """
    try:
        records = db_session.query(model).all()
        if records:
            return records
        else:
            return None
    except Exception as ex:
        print (str(ex), 'ERROR')
        raise ex


def _get_or_create(db_session, model, **kwargs):
    """
    Creates a record in the database for the specified model,
    If the same record exists, returns the record
    Also returns a boolean to indicate if the record is new or existing
    """
    try:
        record = db_session.query(model).filter_by(**kwargs).first()

        if record:
            return record, False
        else:
            record = model(**kwargs)
            db_session.add(record)
            db_session.commit()
            return record, True
    except exc.IntegrityError as ex:
        print (str(ex), 'WARNING')
        raise ex
    except Exception as ex:
        print (str(ex), 'ERROR')
        raise ex
