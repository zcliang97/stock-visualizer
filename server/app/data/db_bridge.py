"""
    Functions for DB initialization
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from app import app
from app.data.data_model import BASE
from app.data.data_access_layer import init_db


def get_db_engine(db_uri):
    """
    Creates and returns a db engine
    """
    db_engine = create_engine(db_uri, echo=False)
    return db_engine


def initialize_db():
    """
    Initializes the database
    """
    db_path = app.config['SQLALCHEMY_DATABASE_PATH']
    db_uri = "sqlite:///" + db_path
    db_engine = get_db_engine(db_uri)
    init_db(db_engine, db_path, BASE)


def get_db_session():
    """
    Returns a DB session
    """
    db_path = app.config['SQLALCHEMY_DATABASE_PATH']
    db_uri = "sqlite:///" + db_path
    db_engine = get_db_engine(db_uri)
    db_session = scoped_session(
        sessionmaker(autocommit=False, autoflush=False, bind=db_engine))
    return db_session()
