from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, DateTime, Integer, Float

Base = declarative_base()

class LoggedValue(Base):
    __tablename__ = 'logged_values'

    tagId = Column('tag_id',Integer, primary_key=True, ForeignKey('tags.id'), nullable=False)
    datetime = Column('datetime',DateTime, primary_key=True, nullable=False)
    value = Column('value',Float)

    def __init__(self, tagId, datetime, value):
        self.tagId = tagId
        self.datetime = datetime
        self.value = value