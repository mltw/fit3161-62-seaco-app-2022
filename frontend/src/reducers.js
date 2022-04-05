import { 
    VALID_USER, INVALID_USER, 
    SEND_SUCCESSFUL, SEND_FAILED,
    RETRIEVE_EMAIL_SUCCESSFUL, RETRIEVE_EMAIL_FAILED,     
} 
from "./constants";

const initialStateUser ={
    username: "",
    email: "",
    valid: false,
    sessionToken: "",
}

const initialStateEmail ={
    emailSentToUser: false,
    userSignUpEmail: "",
}

export const userValidation = (state=initialStateUser, action={}) => {
    console.log("in reducers.js and action is", action)
    switch (action.type){
        case VALID_USER:
            return {...state, valid: true, 
                    username: action.username, 
                    email: action.email, 
                    sessionToken: action.token}
        case INVALID_USER:
            return {...state, valid: false}
        default:
            return state
    }
}

export const userRegistration = (state=initialStateEmail, action={}) => {
    switch (action.type){
        case SEND_SUCCESSFUL:
            return {...state, emailSentToUser: true, userSignUpEmail: action.email}
        case SEND_FAILED:
            return {...state, emailSentToUser: false}
        case RETRIEVE_EMAIL_SUCCESSFUL:
            return {...state, userSignUpEmail: action.email}
        case RETRIEVE_EMAIL_FAILED:
            return {...state, userSignUpEmail: ""}
        default:
            return state
    }
}