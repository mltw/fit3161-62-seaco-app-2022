import './App.css';
import Signin from './components/Signin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import { connect } from 'react-redux';
import { validateUser, registerAndValidateUser, registerUserTemp, signOutUser, fetchCodeAndSendEmail } from './actions';
import SignupVerified from './components/SignupVerified';
import SignupTemp from './components/SignupTemp';
import SuccessMsg from './components/SuccessMsg';

// what state to listen to and send it out as props
const mapStateToProps = (state) => {
    return{
      valid: state.userValidation.valid,
      username: state.userValidation.username,
      email: state.userValidation.email,
      sessionToken: state.userValidation.sessionToken,
      emailSentToUser: state.sendEmailValidation.emailSentToUser,
    }
  }

// what props to listen to that are actions, that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return{
      validateUser: (userInput) => dispatch(validateUser(userInput)),
      registerAndValidateUser: (userInput) => dispatch(registerAndValidateUser(userInput)),
      registerUserTemp: (userInput) => dispatch(registerUserTemp(userInput)),
      signOutUser: () => dispatch(signOutUser()),
      fetchCodeAndSendEmail: (email) => dispatch(fetchCodeAndSendEmail(email)),
    }
  }


function App(props) {
    const {
        valid,
        validateUser
    } = props


    console.log(!valid, localStorage.getItem("token") , (localStorage.getItem("token") !== "" || localStorage.getItem("token") !== null))
    if (localStorage.getItem("token") !== null && !valid && localStorage.getItem("token") !== "" ){
        validateUser({email: localStorage.getItem("email"), password:""})
        // below the return can return a loading page
        return <></>
    }
    else {

    console.log("App renders and valid, is", props.valid, )
    return (
            <Router>
                <Routes>
                    <Route exact path="/" element={ valid ? <Navigate to={"/home"} /> : <Signin />} />
                    <Route path="/home" element={ !valid ? <Navigate to={"/"} /> : <Main />} />
                    <Route path="/signup" element={ valid ? <Navigate to={"/home"} /> : <SignupTemp />} />
                    <Route path="/signup/verified/*" element={ valid ? <Navigate to={"/home"} /> : <SignupVerified />} />
                    <Route path="approve/*" element={<SuccessMsg />} />
                </Routes>
            </Router>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
