import { combineReducers } from "redux";
import userReducer from "./userReducer";
import signUpReducer from "./signUpReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    user: userReducer,
    signUp: signUpReducer,
    post: postReducer
})

export default rootReducer;