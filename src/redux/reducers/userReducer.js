import { SIGNIN_USER, EDIT_USER } from "../actiontypes";

const initialState = {
    user:{
        image:"",
        userName: "",
        phone:"",
        mail:"",
        gender:"",
        education:"",
        industry:""
    },
    userAuth:{
        user:"",
        password:""
    }
}

const userReducer = (state=initialState, action) =>{

    switch(action.type){
        case SIGNIN_USER:
            return{
                ...state,
                userAuth:{
                    user: action.payload.user,
                    password: action.payload.password
                }
            }
        case EDIT_USER:
            return{
                ...state,
                userAuth:{
                    ...state.userAuth,
                    password: action.user.password ? action.user.password : state.userAuth.password
                },
                user:{
                    ...state.user,
                    ...action.user,
                    image: action.user.image["name"],
                }
            } 
        default:
            return state;
    }
}

export default userReducer;