from flask import Flask
from flask_restful import Api
from resources.logUpload import LogUpload
from flask_cors import CORS


app = Flask(__name__)
CORS(app=app)
api = Api(app=app)
api.add_resource(LogUpload, '/upload-log/<string:uuid>')

app.run(port=5000)
