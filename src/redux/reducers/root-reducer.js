import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    post: postReducer
})

export default rootReducer;