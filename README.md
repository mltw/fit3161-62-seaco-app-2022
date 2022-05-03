# FIT3162 Web app for SEACO


`git clone` this repo to your desired destination on your device, then follow these steps to initialise and setup the environment. 

<hr>

> 1. ⚙️ Setting up backend (setting up db config and installing packages):  

First, go to **backend/app.py** line 9 (app.config[...]) and update with your information:  
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://**USERNAME_IN_PGADMIN**:**PASSWORD**@localhost/**YOUR_DB_NAME**'.

Then, in a terminal run 
```
cd backend
pip install pipenv 
```
After running the above 2 commands, find and copy the specified location in the terminal output (eg  C:\Users\User\.virtualenvs\backend-PDWVyg3C). Then, you need to change the interpreter in your code editor. Eg for VS Code, run  **Ctrl+Shift+P**, choose **"Python: Select Interpreter"**, and **paste the copied location**. After that, run:  
(you may need to change your python_version in pipfile first)
```
pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors Flask-Mail Flask-Migrate
```

Once you're done, open a new terminal, and run:
```
cd backend
python
from app import db
db.create_all() # this creates the User db for us 
exit() # or Ctrl+Z 
```
<hr>


> 2. 💻 Setting up frontend (installing packages):

In a new terminal,  
```
cd frontend
npm install --legacy-peer-deps
```
<hr>

> 3. 🌐 Launching the development server:

In backend directory, `flask run`

In frontend directory, `npm start`

<hr>
The web app should launch in your browser now! 😄
