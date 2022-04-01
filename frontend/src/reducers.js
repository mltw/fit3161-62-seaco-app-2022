import { VALID_USER, INVALID_USER, SEND_SUCCESSFUL, SEND_FAILED } from "./constants";

const initialStateUser ={
    username: "",
    email: "",
    valid: false,
    sessionToken: "",
}

const initialStateEmail ={
    emailSentToUser: false,
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

export const sendEmailValidation = (state=initialStateEmail, action={}) => {
    switch (action.type){
        case SEND_SUCCESSFUL:
            return {...state, emailSentToUser: true}
        case SEND_FAILED:
            return {...state, emailSentToUser: false}
        default:
            return state
    }
}