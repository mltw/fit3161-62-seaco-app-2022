from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from datetime import date, datetime
from flask_cors import CORS
from sqlalchemy.sql import text

app = Flask(__name__) # setup the flask app
# the after :// de 'postgres' is ur username in psql, then pw, then /db name
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/seaco'
db = SQLAlchemy(app)
CORS(app)

# the User model/table 
class User(db.Model):
    # create a column using db.Column()
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False) #db.String(max char allowed)
    password = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    # string representation of itself
    def __repr__(self) -> str:
        # in python, f string allows u to inject python variables into it
        return f"User: {self.username}"

    def __init__(self, username, password) -> None:
        self.username = username
        self.password = password

def format_user(user):
    return {
        "id": user.id,
        "username": user.username,
        "password": user.password,
        "created_at": user.created_at,
    }

@app.route('/') # this row is called a decorator
def hello():
    return 'testing'

# get single user
@app.route('/users/<username>', methods=['GET'])
def get_user(username):
    try:
        user = User.query.filter_by(username=username).first_or_404("No such user {}".format(username))
        formatted_user = format_user(user)
        return {'User': formatted_user}
    except:
        return "User not found"

if __name__ == '__main__':
    app.run()