import { VALID_USER, INVALID_USER } from "./constants";
import axios from "axios";
import { message } from "antd";

const baseUrl = "http://localhost:5000"

export const validateUser = (userInput) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${userInput.username}`)

        const fetchedUser = data.data.User
        /*
        fetchedUser = {
            "id": ,
            "username": ,
            "created_at": ,
            "password": 
        }
        */
        if(fetchedUser.password === userInput.password){
            dispatch({type: VALID_USER, username: userInput.username});
        }
        else{
            dispatch({type: INVALID_USER, username: userInput.username});
            message.warning("Invalid username/password combination.");
        }
    }
    catch (e){
        console.log("Error in fetching user", e);
        dispatch({type: INVALID_USER, username: userInput.username});
        message.error("No such user found.");
    }
        
    console.log("in actions.js", userInput.username, userInput.password)
    
}