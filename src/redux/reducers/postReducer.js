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
                image: action.post.image["name"],
                title: action.post.title,
                des:action.post.des
            } 
        default:
            return state;
    }
}

export default postReducer;