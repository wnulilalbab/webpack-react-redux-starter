import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { routerReducer } from "react-router-redux";
import userReducer from "../reducers/userReducer";
import mathReducer from "../reducers/mathReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const store = createStore(
    combineReducers({
        user : userReducer,
        math : mathReducer,
        sidebar : sidebarReducer,
        routing : routerReducer
    }),
    applyMiddleware(logger(), thunk, promise())
);

export default store;
