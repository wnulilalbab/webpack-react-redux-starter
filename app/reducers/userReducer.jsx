import USER_REDUCER_ACTION from '../actions/constants/userActionType';

const FULFILLED = "_FULFILLED";

const initialState = {
    name : "Max",
    age : 20
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REDUCER_ACTION.CHANGE_NAME + FULFILLED:
            state = {
                ...state,
                name : action.payload
            }
            break;
        case USER_REDUCER_ACTION.CHANGE_AGE + FULFILLED:
            state = {
                ...state,
                age : action.payload
            }
            break;
        default:
    }
    return state;
};

export default userReducer;
