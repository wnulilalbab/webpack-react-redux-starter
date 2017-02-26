import MATH_REDUCER_ACTION from '../actions/constants/mathActionType';

const FULFILLED = "_FULFILLED";

const initialState = {
    result: 1,
    lastValues: [],
    username: "Max"
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case MATH_REDUCER_ACTION.ADD + FULFILLED:
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            state.lastValues
            break;
        case MATH_REDUCER_ACTION.SUB + FULFILLED:
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
            break;
        default:
    }
    return state;
};

export default mathReducer;
