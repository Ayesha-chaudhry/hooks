import {ADD_VALUE, SUBTRACT_VALUE} from "../actions";

export const FirstReducer = (state, action) => {
    console.log(state, action.type)
    switch(action.type){
        case ADD_VALUE:
            let newState ={...state}
            newState.value = newState.value + action.payload
            return newState
            break
        case SUBTRACT_VALUE:
            let subState = {...state}
            subState.value--
            return subState
            break
        default:
            return state
    }
}