import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "../redux/reducers/root-reducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk,logger)));

export default store;

