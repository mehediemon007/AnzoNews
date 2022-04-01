import { SIGNUP_USER  } from "../actiontypes";

const initialState = {
    mail:"",
    phone:"",
    password:""
}

const signUpReducer = (state=initialState, action) =>{

    switch(action.type){
        case SIGNUP_USER:
            return{
                ...state,
                mail: action.payload.mail,
                password:action.payload.password,
                phone:action.payload.phone
            } 
        default:
            return state;
    }
}

export default signUpReducer;