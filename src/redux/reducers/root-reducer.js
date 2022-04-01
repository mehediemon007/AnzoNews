import { combineReducers } from "redux";
import signInReducer from "./signInReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer
})

export default rootReducer;