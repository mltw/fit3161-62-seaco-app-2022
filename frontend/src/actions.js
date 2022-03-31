import { VALID_USER, INVALID_USER } from "./constants";
import axios from "axios";
import { message } from "antd";
import { v4 as uuidv4 } from 'uuid'

const baseUrl = "http://localhost:5000"

export const validateUser = (userInput) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${userInput.username}`)
        
        /*
        fetchedUser = {
            "id": ,
            "username": ,
            "created_at": ,
            "password": ,
            "session_token": 
        }
        */
        const fetchedUser = data.data.User
        
        // if userInput's password length>0, it's a new login and not a page refresh, thus create a new sessionToken.
        // otherwise, its a page refresh, get the token saved in local storage
        const sessionToken = userInput.password.length>0 ? uuidv4().toString() : localStorage.getItem("token")

        if (!fetchedUser){
            throw Error
        }
        else if(fetchedUser.password === userInput.password || fetchedUser.session_token === localStorage.getItem("token")){
            dispatch({
                type: VALID_USER, 
                username: userInput.username,
                token: sessionToken
            });

            // update db and local storage to store the current session token
            localStorage.setItem("token", sessionToken)
            localStorage.setItem("username", userInput.username)
            await axios.put(`${baseUrl}/users/${userInput.username}/session-token`, {session_token: sessionToken})
        }
        else{
            dispatch({type: INVALID_USER, username: userInput.username});
            message.warning("Invalid username/password combination.");
        }
    }
    catch (e){
        console.log("Error in fetching user", e);
        dispatch({type: INVALID_USER, username: userInput.username});
        if (userInput.password.length > 0)
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

                const sessionToken = uuidv4().toString()
                dispatch({
                    type: VALID_USER, 
                    username: userInput.username,
                    token: sessionToken
                });

                // update db and local storage to store the current session token
                await axios.put(`${baseUrl}/users/${userInput.username}/session-token`, {session_token: sessionToken})
                localStorage.setItem("token", sessionToken)
                localStorage.setItem("username", userInput.username)
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

export const signOutUser = () => async (dispatch) => {
    try {
        // update local storage to remove current session's data
        localStorage.setItem("username", "");
        localStorage.setItem("token", "")

        dispatch({type: INVALID_USER});
    }
    catch (e){
        console.log("Error in signing out", e)
    }
}