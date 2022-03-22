import './App.css';
import Signin from './components/Signin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import { connect } from 'react-redux';
import { validateUser} from './actions';
import Signup from './components/Signup';

// what state to listen to and send it out as props
const mapStateToProps = (state) => {
    return{
      valid: state.validateUser.valid,
    }
  }

// what props to listen to that are actions, that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return{
      validateUser: (userInput) => dispatch(validateUser(userInput)),
    }
  }


function App(props) {
    const {valid} = props
    console.log("App renders and valid is", props.valid)
    return (
        // <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={ valid ? <Navigate to={"/home"} /> : <Signin />} />
                    <Route path="/home" element={ !valid ? <Navigate to={"/"} /> : <Main />} />
                    <Route path="/signup" element={ <Signup />} />
                </Routes>
            </Router>
        // {/* </div> */}
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
