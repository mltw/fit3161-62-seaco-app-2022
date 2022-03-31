import { VALID_USER, INVALID_USER } from "./constants";

const initialStateUser ={
    username: "",
    valid: false,
    sessionToken: "",
}

export const userValidation = (state=initialStateUser, action={}) => {
    console.log("in reducers.js and action is", action)
    switch (action.type){
        case VALID_USER:
            return {...state, valid: true, username: action.username, sessionToken: action.token}
        case INVALID_USER:
            return {...state, valid: false}
        default:
            return state
    }
}