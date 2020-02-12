import * as actionTypes from '../constants/action-types'

const initialState = {
    isLoading: true,
}

export const uiReducer = (state = initialState, action)=> {
    switch(action.type) {
        case actionTypes.LOADING_STARTED:
            return { isLoading: true }
        case actionTypes.LOADING_STOPPED:
            return { isLoading: false }
        default:
            return state
    }
}