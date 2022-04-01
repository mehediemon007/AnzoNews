import { SIGNIN_USER } from "../actiontypes";

const initialState = {
    user:"",
    password:""
}

const signInReducer = (state=initialState, action) =>{

    switch(action.type){
        case SIGNIN_USER:
            return{
                ...state,
                user: action.payload.user,
                password:action.payload.password
            } 
        default:
            return state;
    }
}

export default signInReducer;