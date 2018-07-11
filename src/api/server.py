from flask import Flask
from flask_restful import Api
from resources.logUpload import LogUpload


app = Flask(__name__)
api = Api(app=app)
api.add_resource(LogUpload, '/upload-log/<string:uuid>')

app.run(port=5000)
