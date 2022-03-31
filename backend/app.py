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
    session_token = db.Column(db.String(200), nullable=True)

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
        "session_token": user.session_token,
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

# create user
@app.route('/users', methods=['POST'])
def create_user():
    # an example of how request.json looks like:
    # {'userInput': 
    #   {'username': 'marcus', 
    #    'password': 'password', 
    #    'passwordConfirm': 'password'
    #   }
    # }
    userInput = request.json['userInput']

    username = userInput['username']
    password = userInput['password']
    user = User(username, password)

    db.session.add(user)
    db.session.commit()

    return format_user(user)

# update an event
@app.route('/users/<username>/session-token', methods=['PUT'])
def update_token(username):
    try:
        user = User.query.filter_by(username=username)
        session_token_req = request.json['session_token']
        user.update(dict(session_token = session_token_req,))
        db.session.commit()

        formatted_user = format_user(user.one())
        return {'User': formatted_user}
    except:
        return "Error in updating session token"


if __name__ == '__main__':
    app.run()