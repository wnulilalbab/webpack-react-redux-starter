import SIDEBAR_REDUCER_ACTION_TYPE from "../actions/constants/sideBarActionType";

const FULFILLED = "_FULFILLED";

const initialState = {
    activeMenu: "",
    expandMenu: []
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIDEBAR_REDUCER_ACTION_TYPE.SET_ACTIVE:
            state = {
                ...state,
                activeMenu: action.payload
            }
            break;
        case SIDEBAR_REDUCER_ACTION_TYPE.ACCORDION_TOGGLE:
            state = {
                ...state,
                activeMenu: action.payload
            }
            break;
    }
    return state;
}

export default sidebarReducer;
