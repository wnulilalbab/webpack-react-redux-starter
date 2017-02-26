import USER_REDUCER_ACTION from './constants/userActionType'

export function setName(name){
    return {
        type : USER_REDUCER_ACTION.CHANGE_NAME,
        payload : new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            });
        })
    }
};

export function setAge(age){
    return {
        type : USER_REDUCER_ACTION.CHANGE_AGE,
        payload : age
    }
};
