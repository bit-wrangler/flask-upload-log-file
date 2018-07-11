from flask_restful import Resource, reqparse
import werkzeug

class LogUpload(Resource):
    def post(self, uuid):
        parser = reqparse.RequestParser()
        parser.add_argument('files',type=werkzeug.datastructures.FileStorage, location='files', action='append')
        data = parser.parse_args()

        return ":)"