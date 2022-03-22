# FIT3162 Web app for SEACO


`git clone` this repo to your desired destination on your device, then follow these steps to initialise and setup the environment. 

<hr>

> 1. Setting up backend (setting up db config and installing packages):  

First, go to **backend/app.py** line 9 (app.config[...]) and update with your information:  
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://**USERNAME_IN_PGADMIN**:**PASSWORD**@localhost/**YOUR_DB_NAME**'.

Then, in a terminal run 
```
cd backend
pip install pipenv 
```
After running the above 2 commands, find and copy the specified location in the terminal output (eg  C:\Users\User\.virtualenvs\backend-PDWVyg3C). Then, you need to change the interpreter in your code editor. Eg for VS Code, run  **Ctrl+Shift+P**, choose **"Python: Select Interpreter"**, and **paste the copied location**. After that, run:
```
pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors
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

> 2. Adding a temp user in pgadmin:

Launch PGAdmin, locate to your db and you'll see a "user" table. Add a dummy user,

eg **id**: 1, **username**: user, **password**: password, **created_at**: 2022-03-21 07:29:38.60022. (Remember to save the data in pgadmin)

Use this username and password to login the web app for now.


<hr>

> 3. Setting up frontend (installing packages):

In a new terminal,  
```
cd frontend
npm install react react-redux redux-thunk react-router-dom
npm install axios date-fns
npm install antd 
npm install @ant-design/icons
npm install styled-components
```
<hr>

> 4. Launching the development server:

In backend directory, `flask run`

In frontend directory, `npm start`

<hr>
The web app should launch in your browser now! 😄