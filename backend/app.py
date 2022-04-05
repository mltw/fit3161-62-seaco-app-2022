from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from datetime import date, datetime
from flask_cors import CORS
from sqlalchemy.sql import text
from flask_migrate import Migrate
from random import randint

app = Flask(__name__) # setup the flask app

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'seaco2022ma16@gmail.com'
app.config['MAIL_PASSWORD'] = 'Seaco2022!'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
# the after :// de 'postgres' is ur username in psql, then pw, then /db name
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/seaco'

mail = Mail(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

# the User model/table 
class User(db.Model):
    # create a column using db.Column()
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    username = db.Column(db.String(100), nullable=False) #db.String(max char allowed)
    password = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    session_token = db.Column(db.String(200), nullable=True)

    # string representation of itself
    def __repr__(self) -> str:
        # in python, f string allows u to inject python variables into it
        return f"User: {self.username}"

    def __init__(self, username, password, email) -> None:
        self.username = username
        self.password = password
        self.email = email

class UserTemp(db.Model):
    # create a column using db.Column()
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    email_id = db.Column(db.String)
    code = db.Column(db.Integer)

    def __repr__(self) -> str:
        return f"Email: {self.email}"

    def __init__(self, email, email_id, code) -> None:
        self.email = email
        self.email_id = email_id
        self.code = code

def format_user(user):
    return {
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "password": user.password,
        "created_at": user.created_at,
        "session_token": user.session_token,
    }

def format_temp_user(temp_user):
    return {
        "email": temp_user.email,
        "email_id": temp_user.email_id,
        "code": temp_user.code,
    }

@app.route('/') # this row is called a decorator
def hello():
    # return 'testing'
    email = "bla@gmail.com"
    msg = Message(
        'SEACO Web app registration', 
        sender ='seaco2022ma16@gmail.com', 
        recipients = ['seaco2022ma16@gmail.com'])
    msg.html=f"A staff with email: {email} has signed up for an account. <br></br> \
                <button><a href='http://localhost:3000/approve/?id=bla@gmail.com'>Click this button to approve.</a></button>"
    mail.send(msg)
    return "Message sent!"

# create temporary user for sign up in UserTemp db
@app.route('/users/signup', methods=['POST'])
def create_temp_user():
    # an example of how request.json looks like:
    # {'userInput': 
    #   {'username': 'marcus', 
    #    'password': 'password', 
    #    'passwordConfirm': 'password'
    #   },
    #  'emailId' : 'xxxxx'
    # }
    userInput = request.json['userInput']
    email = userInput['email']
    email_id = request.json['emailId'] # get the random generated id from front-end
    code = randint(100000, 999999) # generate a random 6 digit verification code 
    temp_user = UserTemp(email, email_id, code)

    db.session.add(temp_user)
    db.session.commit()

    msg = Message(
        'SEACO Web app registration', 
        sender ='marcus.limtauwhang961@gmail.com', 
        recipients = ['seaco2022ma16@gmail.com'])
    msg.html=f"A staff with email: {email} has signed up for an account. <br></br> \
                <button><a href=`http://localhost:3000/approve/?id={email_id}`>Click this button to approve.</a></button>"
    mail.send(msg)

    return {"UserTemp": format_temp_user(temp_user)}

# get temporary user
@app.route('/users/signup/<email>', methods=['GET'])
def get_temp_user_by_email(email):
    try:
        temp_user = UserTemp.query.filter_by(email=email).first_or_404("No such user with email: {}".format(email))
        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "No such user with this email"

# get temporary user by email_id
@app.route('/users/signup/<email_id>/id', methods=['GET'])
def get_temp_user_by_email_id(email_id):
    try:
        temp_user = UserTemp.query.filter_by(email_id=email_id).first_or_404("No such user with email id: {}".format(email_id))
        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "No such user with this email ID"

# get single user
@app.route('/users/<email>', methods=['GET'])
def get_user(email):
    try:
        user = User.query.filter_by(email=email).first_or_404("No such user {}".format(email))
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
    email = userInput['email']
    user = User(username, password, email)

    db.session.add(user)
    db.session.commit()

    return format_user(user)

# update an event
@app.route('/users/<email>/session-token', methods=['PUT'])
def update_token(email):
    try:
        user = User.query.filter_by(email=email)
        session_token_req = request.json['session_token']
        user.update(dict(session_token = session_token_req,))
        db.session.commit()

        formatted_user = format_user(user.one())
        return {'User': formatted_user}
    except:
        return "Error in updating session token"

# fetch code and send email to the applicant
@app.route('/users/signup/<email_id>/send', methods=['GET'])
def fetch_code_and_send_email(email_id):
    try:
        temp_user = UserTemp.query.filter_by(email_id=email_id).first_or_404("No such user {}".format(email_id))
        code = temp_user.code
 
        # temp_user = UserTemp(email, email_id, code)

        msg = Message(
            'Complete your SEACO Web App Registration', 
            sender ='seaco2022ma16@gmail.com', 
            recipients = ['mlim0032@student.monash.edu'])
        msg.html=f"Your registration is approved.<br></br> \
                    Your verification code is <b>{code}</b>. Please \
                    <button><a href=`http://localhost:3000/signup/verified/?id={email_id}`>click here</a></button> to complete your registration."
        mail.send(msg)
        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "Error in fetching code and sending emai"

# delete an event (not used for now)
@app.route('/users/signup/<email_id>', methods=['DELETE'])
def delete_temp_user(email_id):
    tempUser = UserTemp.query.filter_by(email_id=email_id).one()
    db.session.delete(tempUser)
    db.session.commit()

    return f'Temp user {tempUser.email} deleted'

if __name__ == '__main__':
    app.run(debug = True)