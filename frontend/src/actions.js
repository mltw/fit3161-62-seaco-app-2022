import { VALID_USER, INVALID_USER, SEND_FAILED, SEND_SUCCESSFUL } from "./constants";
import axios from "axios";
import { message } from "antd";
import { v4 as uuidv4 } from 'uuid'

const baseUrl = "http://localhost:5000"

// used when the user signs in, and each time the app loads (to see if he's signed in)
export const validateUser = (userInput) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${userInput.email}`)
        
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
                username: fetchedUser.username,
                email: userInput.email,
                token: sessionToken
            });

            // update db and local storage to store the current session token
            localStorage.setItem("token", sessionToken)
            localStorage.setItem("email", userInput.email)
            await axios.put(`${baseUrl}/users/${userInput.email}/session-token`, {session_token: sessionToken})
        }
        else{
            dispatch({type: INVALID_USER, username: userInput.username, email: userInput.email});
            message.warning("Invalid username/password combination.");
        }
    }
    catch (e){
        console.log("Error in fetching user", e);
        dispatch({type: INVALID_USER, username: userInput.username, email: userInput.email});
        if (userInput.password.length > 0)
            message.error("No such user found.");
    }
        
    console.log("in actions.js", userInput.username, userInput.password)
    
}

// used when the user signs up with the code
export const registerAndValidateUser = (userInput) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${userInput.email}`)
        const dataCode = await axios.get(`${baseUrl}/users/signup/${userInput.email}`)

        // if (!data.data.User){
        //     throw Error
        // }

        // in UserTemp table, if there's no such email, it means it hasn't been registered
        if (!dataCode.data.UserTemp){
            console.log("sheesh", dataCode)
            dispatch({type: INVALID_USER, email: userInput.email});
            message.error("This email is not registered.")
        }
        // in User table, if there IS such email, it means this email is already used
        else if (data.data.User){
            dispatch({type: INVALID_USER, email: userInput.email});
            message.error("This email is already in use.")
        }
        else{
            try{
                const fetchedTempUser = dataCode.data.UserTemp

                if (userInput.password === userInput.passwordConfirm &&
                    fetchedTempUser.code.toString() === userInput.code.toString()
                ){
                    await axios.post(`${baseUrl}/users`, {userInput})
    
                    const sessionToken = uuidv4().toString()
                    dispatch({
                        type: VALID_USER, 
                        username: userInput.username,
                        email: userInput.email,
                        token: sessionToken
                    });
    
                    // update db and local storage to store the current session token
                    await axios.put(`${baseUrl}/users/${userInput.email}/session-token`, {session_token: sessionToken})
                    localStorage.setItem("token", sessionToken)
                    localStorage.setItem("email", userInput.email)
                }
                else{
                    dispatch({type: INVALID_USER, username: userInput.username, email: userInput.email});
                    
                    if (userInput.password !== userInput.passwordConfirm)
                        message.error("Passwords do not match.")
                    else
                        message.error("Invalid verification code.")
                }
            }
            catch (e){
                console.log("Error in creating user", e)
                message.error(e)
            }
        }   
    }
    catch (e) {
        console.log("Error in registering and validating user", e)
    }
}

// used when the user newly signs up for an account (ie he only keyed in the email address)
export const registerUserTemp = (userInput) => async (dispatch)  => {
    try {
        const data = await axios.get(`${baseUrl}/users/signup/${userInput.email}`)

        if (!data.data.UserTemp){
            throw Error
        }
        else{
            // if found a record with the same email, don't allow registration of this user
            message.error("The email is registered, please sign in instead.")
            dispatch({type: INVALID_USER, email: userInput.email});
        }   
    }
    catch (e) {
        // no such user with the email, we can safely register this user
        try{
            await axios.post(`${baseUrl}/users/signup`, {userInput})
            message.success("Code requested successfully.")
        }
        catch (e){
            console.log("Error in creating temp user", e)
            message.error(e)
        }
    }
}

// used when the user signs out
export const signOutUser = () => async (dispatch) => {
    try {
        // update local storage to remove current session's data
        localStorage.setItem("email", "");
        localStorage.setItem("token", "")

        dispatch({type: INVALID_USER});
    }
    catch (e){
        console.log("Error in signing out", e)
    }
}

// used when the page to approve an applicant's registration is loaded
export const fetchCodeAndSendEmail = (email) => async (dispatch) => {
    try {
        const data = await axios.get(`${baseUrl}/users/signup/${email}/send`, email)
        console.log("Email sent")
        if (data)
            dispatch({type: SEND_SUCCESSFUL})
    }
    catch (e){
        console.log("Error in fetching code and sending email", e)
        dispatch({type: SEND_FAILED})
        message.error("Error in sending email")
    }
}