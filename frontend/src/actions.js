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

export const registerAndValidateUser = (userInput) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${userInput.username}`)

        if (!data.data.User){
            throw Error
        }
        else{
            // if found a user with the same username, don't allow registration of this user
            message.error("The username is taken, please try another username.")
            dispatch({type: INVALID_USER, username: userInput.username});
        }   
    }
    catch (e) {
        // no such user with username, we can safely register this user
        try{
            if (userInput.password === userInput.passwordConfirm){
                await axios.post(`${baseUrl}/users`, {userInput})

                dispatch({type: VALID_USER, username: userInput.username});
            }
            else{
                dispatch({type: INVALID_USER, username: userInput.username});
                message.error("Passwords do not match.")
            }
        }
        catch (e){
            console.log("Error in creating user", e)
            message.error(e)
        }
    }
}