from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail, Message
from datetime import date, datetime
from flask_cors import CORS
from sqlalchemy.sql import text
from flask_migrate import Migrate
from random import randint

# setup the Flask app
app = Flask(__name__) 

# configure Flask mail credentials
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'seaco2022ma16@gmail.com'
app.config['MAIL_PASSWORD'] = 'Seaco2022!'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# configure connection to database
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/seaco'

# set up tools for the app
mail = Mail(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)


class User(db.Model):
    '''
    A class for the User model/table in the database.

    Attributes:
        1. id: The ID/primary key of the user, auto-generated.
        2. email: The user's email.
        3. password: The user's hashed password.
        4. salt: The salt used for hashing the password.
        5. created_at: Datetime of creation of the user, auto-generated.
        6. session_token: A token to check sign-in session/status, so that refreshing the page will still maintain logged-in status. 
            Each sign-in will generate a new random session token both in the database as well as the browser's local storage.
    
    Methods:
        1. __init__: Initialise the User object.
        2. __repr__: Represent the User object as a string.
    '''
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False)
    username = db.Column(db.String(100), nullable=False) 
    password = db.Column(db.String(100), nullable=False)
    salt = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    session_token = db.Column(db.String(200), nullable=True)

    def __init__(self, username, password, salt, email) -> None:
        self.username = username
        self.password = password
        self.salt = salt
        self.email = email

    def __repr__(self) -> str:
        return f"User: {self.username}"


class UserTemp(db.Model):
    '''
    A class for a temporary User. A UserTemp is created when a user requests for registration in the sign up page.

    Attributes:
        1. id: The ID/primary key of the temporary user, auto-generated.
        2. email: The temporary user's email.
        3. email_id: The ID to represent the temp. user's email. This will be appended in the URL isntead of the 
            actual email, which thus prevents other people from accessing the actual email.
        4. code: A 6-digit verification code to complete the registration.
    
    Methods:
        1. __init__: Initialise the UserTemp object.
        2. __repr__: Represent the UserTemp object as a string.
    '''
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    email_id = db.Column(db.String)
    code = db.Column(db.Integer)

    def __init__(self, email, email_id, code) -> None:
        self.email = email
        self.email_id = email_id
        self.code = code

    def __repr__(self) -> str:
        return f"Email: {self.email}"


def format_user(user):
    '''
    A method to format a User object in JSON format.
    '''
    return {
        "id": user.id,
        "email": user.email,
        "username": user.username,
        "password": user.password,
        "salt": user.salt,
        "created_at": user.created_at,
        "session_token": user.session_token,
    }

def format_temp_user(temp_user):
    '''
    A method to format a UserTemp object in JSON format.
    '''
    return {
        "email": temp_user.email,
        "email_id": temp_user.email_id,
        "code": temp_user.code,
    }


@app.route('/')
def hello():
    return 'Flask app launched!'


@app.route('/users/signup', methods=['POST'])
def create_temp_user():
    '''
    Create a UserTemp when user requests for registration. This method will also send an email to the admin
    regarding the registration. 
    
    An example of how request.json looks like:
    {'userInput': 
        {
            'username': 'user', 
            'password': 'password', 
            'passwordConfirm': 'password'
        },
     'emailId' : 'xxxxx'
    }
    '''
    userInput = request.json['userInput']
    email = userInput['email']
    email_id = request.json['emailId'] # get the random generated id from front-end
    code = randint(100000, 999999) # generate a random 6 digit verification code 
    
    # create the UserTemp and add into database 
    temp_user = UserTemp(email, email_id, code)
    db.session.add(temp_user)
    db.session.commit()

    # send an email to the admin of the web app
    msg = Message(
        'SEACO Web app registration', 
        sender ='seaco2022ma16@gmail.com', 
        recipients = ['seaco2022ma16@gmail.com'])
    msg.html=f"A staff with email: {email} has signed up for an account. <br></br> \
                <button><a href=`http://localhost:3000/approve/?id={email_id}`>Click this button to approve.</a></button>"
    mail.send(msg)

    return {"UserTemp": format_temp_user(temp_user)}


@app.route('/users/<email>', methods=['GET'])
def get_user(email):
    '''
    Get the User using email.
    '''
    try:
        user = User.query.filter_by(email=email).first_or_404("No such user {}".format(email))
        formatted_user = format_user(user)
        
        return {'User': formatted_user}
    except:
        return "User not found"


@app.route('/users/signup/<email>', methods=['GET'])
def get_temp_user_by_email(email):
    '''
    Get the UserTemp using email.
    '''
    try:
        temp_user = UserTemp.query.filter_by(email=email).first_or_404("No such user with email: {}".format(email))
        
        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "No such user with this email"


@app.route('/users/signup/<email_id>/id', methods=['GET'])
def get_temp_user_by_email_id(email_id):
    '''
    Get the UserTemp using email ID.
    '''
    try:
        temp_user = UserTemp.query.filter_by(email_id=email_id).first_or_404("No such user with email id: {}".format(email_id))
        
        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "No such user with this email ID"


# create user
@app.route('/users', methods=['POST'])
def create_user():
    '''
    Create a User. 

    an example of how request.json looks like:
    {'userInput': 
        {
            'username': 'user', 
            'password': 'password', 
            'passwordConfirm': 'password'
        }
    }
    '''
    userInput = request.json['userInput']
    salt = request.json['salt']

    username = userInput['username']
    email = userInput['email']
    password = userInput['password']
    user = User(username, password, salt, email)

    db.session.add(user)
    db.session.commit()

    return format_user(user)


@app.route('/users/<email>/session-token', methods=['PUT'])
def update_token(email):
    '''
    Update User's session_token. This method is called when the user signs in after a previous signed out session,
    or when the user refreshes the page.
    '''
    try:
        user = User.query.filter_by(email=email)
        session_token_req = request.json['session_token']
        user.update(dict(session_token = session_token_req,))
        db.session.commit()

        formatted_user = format_user(user.one())

        return {'User': formatted_user}
    except:
        return "Error in updating session token"


@app.route('/users/signup/<email_id>/send', methods=['GET'])
def fetch_code_and_send_email(email_id):
    '''
    Fetch the 6-digit verification code of UserTemp from the database, and send an email to the applicant to complete
    the registration process.
    '''
    try:
        temp_user = UserTemp.query.filter_by(email_id=email_id).first_or_404("No such user {}".format(email_id))
        code = temp_user.code
 
        msg = Message(
            'Complete your SEACO Web App Registration', 
            sender ='seaco2022ma16@gmail.com', 
            recipients = [temp_user.email])
        msg.html=f"Your registration is approved.<br></br> \
                    Your verification code is <b>{code}</b>. Please \
                    <button><a href=`http://localhost:3000/signup/verified/?id={email_id}`>click here</a></button> to complete your registration."
        mail.send(msg)

        return {"UserTemp": format_temp_user(temp_user)}
    except:
        return "Error in fetching code and sending email"


@app.route('/users/signup/<email_id>', methods=['DELETE'])
def delete_temp_user(email_id):
    '''
    Delete a UserTemp from the database using the email id.
    NOTE: This method is not used for now.
    '''
    tempUser = UserTemp.query.filter_by(email_id=email_id).one()
    db.session.delete(tempUser)
    db.session.commit()

    return f'Temp user {tempUser.email} deleted'


if __name__ == '__main__':
    app.run(debug = True)