import MATH_REDUCER_ACTION from './constants/mathActionType'

export function addNumber(number){
    return {
        type : MATH_REDUCER_ACTION.ADD,
        payload : number
    }
};

export function subtractNumber(number){
    return {
        type : MATH_REDUCER_ACTION.SUB,
        payload : number
    }
};
