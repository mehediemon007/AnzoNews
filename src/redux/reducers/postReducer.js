import { ADD_POST  } from "../actiontypes";

const initialState = {
    image:"",
    title:"",
    des:"",
    name:"",
    date:""
}

const postReducer = (state=initialState, action) =>{

    switch(action.type){
        case ADD_POST:
            return{
                ...state,
            } 
        default:
            return state;
    }
}

export default postReducer;