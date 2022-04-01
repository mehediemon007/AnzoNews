import * as types from "./actiontypes";
import axios from "axios";

export const signin = (data) =>({

    type: types.SIGNIN_USER,
    payload:data,

})

export const signup = (data) =>({

    type: types.SIGNUP_USER,
    payload:data,
    
})

export const oldUser = (data) => {

    return function (dispatch){
        // axios.post(`www.akaarit.com/signin`)
        // .then(res =>{

        // })
        dispatch(signin(data));
    }
}

export const newUser = (data) =>{

    return function (dispatch) {

        // axios.post(``)
        dispatch(signup(data));
    }
}