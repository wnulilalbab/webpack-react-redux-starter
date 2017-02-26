import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import userReducer from "../reducers/userReducer";
import mathReducer from "../reducers/mathReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { routerReducer } from "react-router-redux";

const store = createStore(
    combineReducers({
        user : userReducer,
        math : mathReducer,
        routing : routerReducer
    }),
    applyMiddleware(logger(), thunk, promise())
);

export default store;
