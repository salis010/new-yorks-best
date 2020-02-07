import * as actionTypes from '../constants/action-types'

const initialState = []
        
const setBooks = (state, action) => { 
    return action.payload
}

export const bookReducer =  (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.BOOKS_SET:
            return setBooks(state, action)
        default:
            return state
    }
}

