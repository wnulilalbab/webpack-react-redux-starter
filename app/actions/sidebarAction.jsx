import SIDEBAR_REDUCER_ACTION_TYPE from "./constants/sideBarActionType";

export function accordionToggle(menuKey){
    return {
        type : SIDEBAR_REDUCER_ACTION_TYPE.ACCORDION_TOGGLE,
        payload : menuKey
    }
};
